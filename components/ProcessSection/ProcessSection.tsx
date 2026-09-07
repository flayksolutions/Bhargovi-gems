"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProcessStep } from "@/lib/content";
import styles from "./ProcessSection.module.css";

type Props = {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
};

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function ProcessSection({ eyebrow, title, steps }: Props) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  /* ----------------------------------------------------------------
     Which step is "current" = whichever media block owns the middle
     band of the viewport. A symmetric rootMargin collapses the
     viewport to a thin line at 50% height, so exactly one block can
     intersect it at a time — no ambiguity, no scroll math, and it
     stays correct if the sticky panel or image sizes change.
  ---------------------------------------------------------------- */
  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!nodes.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(
            (entry.target as HTMLElement).dataset.index ?? "0"
          );
          setActive(index);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [steps.length]);

  /* Clicking a name walks the page to that image (Lenis-aware). */
  const goTo = useCallback((index: number) => {
    const node = itemRefs.current[index];
    if (!node) return;
    const top =
      node.getBoundingClientRect().top +
      window.scrollY -
      (window.innerHeight - node.offsetHeight) / 2;

    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number, o?: object) => void } }).__lenis;
    if (lenis) lenis.scrollTo(top, { duration: 1.2 });
    else window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <section className={styles.section} aria-labelledby="process-title">
      {/* Sticky rail so the accent stays pinned to the top of the
          viewport for the section, then scrolls away with the content
          once the section's bottom reaches the bottom of the screen. */}
      <div className={styles.accentRail} aria-hidden="true">
        <div className={styles.accentSticky}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/accents/tweezers-stone.png"
            alt=""
            className={styles.accent}
          />
        </div>
      </div>

      <div className={styles.inner}>
        {/* ---------------- Left: the scrolling image column --------------- */}
        <div className={styles.media} aria-hidden="true">
          {steps.map((step, i) => (
            <div
              key={step.id}
              data-index={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={styles.mediaItem}
            >
              <figure
                className={`${styles.frame} ${
                  i === active ? styles.frameActive : ""
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 960px) 100vw, 46vw"
                  priority={i === 0}
                  className={styles.image}
                />
                <span className={styles.frameGlow} />
              </figure>
            </div>
          ))}
        </div>

        {/* ---------------- Right: the sticky panel ------------------------ */}
        <div className={styles.panel}>
          <div className={styles.panelInner}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 id="process-title" className={styles.title}>
              {title}
            </h2>

            <ol className={styles.list}>
              {steps.map((step, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={step.id}
                    className={`${styles.item} ${
                      isActive ? styles.itemActive : ""
                    }`}
                  >
                    <button
                      type="button"
                      className={styles.itemButton}
                      onClick={() => goTo(i)}
                      aria-current={isActive ? "step" : undefined}
                    >
                      <span className={styles.num}>{pad(i)}</span>
                      <span className={styles.name}>{step.name}</span>
                    </button>

                    <div
                      className={`${styles.reveal} ${
                        isActive ? styles.revealOpen : ""
                      }`}
                    >
                      <div className={styles.revealClip}>
                        <p className={styles.body}>{step.description}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* ---------------- Mobile: everything in one flow ----------------- */}
        <div className={styles.mobile}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.title}>{title}</h2>

          <ol className={styles.mobileList}>
            {steps.map((step, i) => (
              <li key={step.id} className={styles.mobileItem}>
                <figure className={`${styles.frame} ${styles.frameActive}`}>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="100vw"
                    className={styles.image}
                  />
                  <span className={styles.frameGlow} />
                </figure>
                <div className={styles.mobileText}>
                  <span className={styles.num}>{pad(i)}</span>
                  <h3 className={styles.name}>{step.name}</h3>
                  <p className={styles.body}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
