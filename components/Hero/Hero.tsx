"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

type Props = {
  titleLines: string[];
  body: string;
  cta: { label: string; href: string };
  image: string;
  alt: string;
  /* Optional: when present the plate plays this instead of the still,
     which stays on as the poster frame. */
  video?: string;
  /* Optional: swapped in for `video`/`image` below the 960px breakpoint. */
  mobileVideo?: string;
  mobileImage?: string;
};

export default function Hero({
  titleLines,
  body,
  cta,
  image,
  alt,
  video,
  mobileVideo,
  mobileImage,
}: Props) {
  const hasMobileVariant = Boolean(mobileVideo);

  const sectionRef = useRef<HTMLElement>(null);
  const desktopRef = useRef<HTMLVideoElement>(null);
  const mobileRef = useRef<HTMLVideoElement>(null);
  /* Which <video> gets a `src`. Null on the server and first render, so
     neither file is requested until the viewport is known - hiding one
     with CSS alone would still download it. */
  const [variant, setVariant] = useState<"desktop" | "mobile" | null>(null);

  useEffect(() => {
    if (!hasMobileVariant) {
      setVariant("desktop");
      return;
    }

    /* Must match the breakpoint in Hero.module.css. */
    const query = window.matchMedia("(max-width: 960px)");
    const pick = () => setVariant(query.matches ? "mobile" : "desktop");

    pick();
    query.addEventListener("change", pick);
    return () => query.removeEventListener("change", pick);
  }, [hasMobileVariant]);

  /* Playback is driven from here rather than `autoPlay`. The hero is
     sticky, so it never leaves the viewport on its own: once the next
     sibling reaches the top it is fully covered, and decoding it would
     only cost frames while scrolling. */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !variant) return;

    const active = (variant === "mobile" ? mobileRef : desktopRef).current;
    const inactive = (variant === "mobile" ? desktopRef : mobileRef).current;

    /* After a breakpoint change, removing `src` isn't enough: load()
       is what aborts the old download and brings the poster back. */
    if (inactive?.networkState) inactive.load();
    if (!active) return;

    let queued = false;
    let rafId = 0;

    const update = () => {
      queued = false;
      const next = section.nextElementSibling;
      const covered = !!next && next.getBoundingClientRect().top <= 0;

      if (covered) {
        if (!active.paused) active.pause();
      } else if (active.paused) {
        /* Rejects if autoplay is blocked or a pause() interrupts it;
           the poster or current frame stays up either way. */
        active.play().catch(() => {});
      }
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [variant]);

  return (
    <section
      ref={sectionRef}
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      <div className={styles.plate}>
        {video ? (
          /* Silent by design: muted + no controls, so it counts as
             decoration and browsers will allow it to autoplay. */
          <video
            ref={desktopRef}
            className={[styles.image, hasMobileVariant ? styles.desktopImage : ""].join(" ")}
            src={variant === "desktop" ? video : undefined}
            poster={image}
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
          />
        ) : (
          <Image
            src={image}
            alt={alt}
            fill
            sizes="100vw"
            priority
            quality={90}
            className={[styles.image, hasMobileVariant ? styles.desktopImage : ""].join(" ")}
          />
        )}
        {hasMobileVariant && (
          <video
            ref={mobileRef}
            className={[styles.image, styles.mobileImage].join(" ")}
            src={variant === "mobile" ? mobileVideo : undefined}
            poster={mobileImage ?? image}
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
          />
        )}
        <span className={styles.scrim} />
      </div>

      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          {titleLines.map((line, i) => (
            <span key={line} className={styles.line}>
              <span
                className={styles.lineInner}
                style={{ animationDelay: 180 + i * 130 + "ms" }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className={styles.foot}>
          <p className={styles.body}>{body}</p>
          {/* <Link href={cta.href} className={styles.cta}>
            {cta.label}
          </Link> */}
        </div>
      </div>
    </section>
  );
}
