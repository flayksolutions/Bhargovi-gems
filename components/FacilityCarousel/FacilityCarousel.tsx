"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./FacilityCarousel.module.css";

export type Slide = {
  id: string;
  /* Leave `image` null and the slot renders as a solid plate. */
  image: string | null;
  alt: string;
  caption?: string;
};

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  slides: Slide[];
  interval?: number;
};

/* Past this much horizontal travel, a drag counts as a slide change. */
const DRAG_THRESHOLD = 70;

export default function FacilityCarousel({
  eyebrow,
  title,
  body,
  slides,
  interval = 4500,
}: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const count = slides.length;

  const go = useCallback(
    (next: number) => setActive(((next % count) + count) % count),
    [count]
  );

  /* Autoplay — pauses on hover/focus/drag, on a hidden tab, and is
     skipped entirely for reduced motion. */
  const holdRef = useRef(false);
  holdRef.current = paused || dragging;

  useEffect(() => {
    if (count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      if (holdRef.current || document.hidden) return;
      setActive((i) => (i + 1) % count);
    }, interval);

    return () => window.clearInterval(id);
  }, [count, interval]);

  /* ------------------------------ drag ------------------------------ */

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragX(e.clientX - startX.current);
  };

  const endDrag = () => {
    if (!dragging) return;
    if (Math.abs(dragX) > DRAG_THRESHOLD) go(active + (dragX < 0 ? 1 : -1));
    setDragging(false);
    setDragX(0);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(active + 1);
    if (e.key === "ArrowLeft") go(active - 1);
  };

  return (
    <section className={styles.section} aria-labelledby="facility-title">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/accents/diamond-scatter.png"
        alt=""
        aria-hidden="true"
        className={styles.accent}
      />

      <header className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id="facility-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.body}>{body}</p>
      </header>

      <div
        className={`${styles.stage} ${dragging ? styles.stageDragging : ""}`}
        role="region"
        aria-roledescription="carousel"
        aria-label={title}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          className={styles.track}
          style={{
            transform: "translateX(" + dragX * 0.6 + "px)",
            transition: dragging ? "none" : undefined,
          }}
        >
          {slides.map((slide, i) => {
            /* Shortest signed distance, so the ring wraps cleanly. */
            let offset = i - active;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const isActive = offset === 0;
            const visible = Math.abs(offset) <= 1;

            return (
              <figure
                key={slide.id}
                className={`${styles.slide} ${
                  isActive ? styles.slideActive : ""
                }`}
                style={{
                  /* Side plates sit centred on the viewport edge, so
                     exactly half of each one shows. */
                  transform:
                    "translate(-50%, -50%) translateX(" +
                    offset * 50 +
                    "vw) scale(" +
                    (isActive ? 1 : 0.78) +
                    ")",
                  opacity: visible ? (isActive ? 1 : 0.55) : 0,
                  zIndex: isActive ? 10 : 9,
                  pointerEvents: visible ? "auto" : "none",
                }}
                aria-hidden={!isActive}
              >
                {slide.image ? (
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 960px) 88vw, 54vw"
                    draggable={false}
                    className={styles.image}
                  />
                ) : (
                  <span className={styles.placeholder}>
                    {slide.caption ?? slide.alt}
                  </span>
                )}
              </figure>
            );
          })}
        </div>
      </div>

      <div className={styles.dots} role="tablist" aria-label="Choose a slide">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={"Slide " + (i + 1)}
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  );
}
