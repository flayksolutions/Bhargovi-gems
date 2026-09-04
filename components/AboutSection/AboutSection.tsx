"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./AboutSection.module.css";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  /* Optional: when present the plate plays this instead of the still,
     which stays on as the poster frame. */
  video?: string;
};

/* Ease-in-out, not ease-out: an ease-out curve is ~90% done by the
   halfway point, which leaves half the pin doing visually nothing. */
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function AboutSection({
  eyebrow,
  title,
  body,
  image,
  alt,
  video,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  /* A remote plate goes through a plain <img>: next/image would demand
     a `remotePatterns` entry in next.config.mjs. Local paths still get
     the optimiser. */
  const isRemote = /^https?:\/\//.test(image);

  /* ----------------------------------------------------------------
     Scroll progress (0 → 1) across the pinned range, written straight
     to a CSS custom property on the section. No React state, so no
     re-render per frame — the browser just re-evaluates the calc()s.
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
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        el.style.setProperty("--p", "1");
        return;
      }
      const raw = Math.min(Math.max(-rect.top / total, 0), 1);
      el.style.setProperty("--p", easeInOutCubic(raw).toFixed(4));
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
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="about-title"
    >
      <div className={styles.viewport}>
        <div className={styles.backdrop}>
          {video ? (
            /* Silent by design: muted + no controls, so it counts as
               decoration and browsers will allow the autoplay. */
            <video
              className={styles.image}
              src={video}
              poster={image}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              tabIndex={-1}
            />
          ) : isRemote ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={image} alt={alt} className={styles.image} />
          ) : (
            <Image
              src={image}
              alt={alt}
              fill
              sizes="100vw"
              quality={90}
              priority
              className={styles.image}
            />
          )}
        </div>

        <div className={styles.cardWrap}>
          <article className={styles.card}>
            <Image
              src="/images/about-cushion.png"
              alt=""
              width={440}
              height={410}
              aria-hidden="true"
              className={`${styles.gem} ${styles.gemCushion}`}
            />
            <Image
              src="/images/about-emerald.png"
              alt=""
              width={430}
              height={520}
              aria-hidden="true"
              className={`${styles.gem} ${styles.gemEmerald}`}
            />
            <div className={styles.cardInner}>
              <p className={styles.eyebrow}>
                <span>{eyebrow}</span>
              </p>
              <h2 id="about-title" className={styles.title}>
                {title}
              </h2>
              <p className={styles.body}>{body}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
