"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./SustainabilityEnvironmentSection.module.css";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

type Props = {
  title: string;
  body: string;
  image: string;
  mobileImage?: string;
  alt: string;
};

/* Ease-in, not ease-in-out or ease-out: the mask only needs to grow to
   ~449% of the box to fully cover it (see the mask-size comment below),
   but the CSS drives it to 470% for corner-coverage safety across
   aspect ratios — so the reveal is visually "done" before --p hits 1.
   With any curve that flattens near t=1 (ease-out, ease-in-out) that
   safety margin turns into a long stretch of dead pinned scroll after
   the image is already fully visible. Ease-in keeps the curve steep
   right up to t=1, so the reveal completes just as the pin releases. */
const easeInCubic = (t: number) => t * t * t;

export default function SustainabilityEnvironmentSection({
  title,
  body,
  image,
  mobileImage,
  alt,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  /* ----------------------------------------------------------------
     Scroll progress (0 → 1) across the pinned range, written straight
     to a CSS custom property on the section. No React state, so no
     re-render per frame — the browser just re-evaluates the calc()s.
     Mirrors AboutSection's scroll-progress effect.
  ---------------------------------------------------------------- */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "1");
      return;
    }

    let rafId = 0;
    let queued = false;

    const update = () => {
      queued = false;
      const rect = el.getBoundingClientRect();
      const pinnedRange = rect.height - window.innerHeight;
      if (pinnedRange <= 0) {
        el.style.setProperty("--p", "1");
        return;
      }
      /* On mobile, --p reaches 1 (mask fully open, text fully
         revealed — see the 0.94 threshold in the CSS) a touch before
         the pin actually releases, so there's a brief dead scroll
         with nothing changing on screen instead of the reveal
         finishing right as the section unpins. */
      const isMobile = window.innerWidth <= 640;
      const total = isMobile ? pinnedRange * 0.95 : pinnedRange;
      const raw = Math.min(Math.max(-rect.top / total, 0), 1);
      el.style.setProperty("--p", easeInCubic(raw).toFixed(4));
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
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="environment-title">
      <div className={styles.viewport}>
        <div className={styles.plate} aria-hidden="true">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="100vw"
            className={[styles.image, mobileImage ? styles.desktopImage : ""].join(" ")}
          />
          {mobileImage && (
            <Image
              src={mobileImage}
              alt={alt}
              fill
              sizes="100vw"
              className={[styles.image, styles.mobileImage].join(" ")}
            />
          )}
        </div>

        <div className={styles.content}>
          <h2 id="environment-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.body}>{body}</p>
        </div>
      </div>
    </section>
  );
}
