"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./TestimonialsSection.module.css";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

type Props = {
  eyebrow: string;
  title: string;
  testimonials: Testimonial[];
  image: string;
  imageAlt: string;
};

/* Points right; mirrored with a transform for the "prev" button. */
function ArrowIcon() {
  return (
    <svg
      width="16"
      height="11"
      viewBox="0 0 16.3 11.3"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0.65 5.65H15.65M10.25 10.65L15.65 5.65L10.25 0.650003"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TestimonialsSection({
  eyebrow,
  title,
  testimonials,
  image,
  imageAlt,
}: Props) {
  const [active, setActive] = useState(0);
  const count = testimonials.length;
  const isFirst = active === 0;
  const isLast = active === count - 1;

  const goTo = (next: number) =>
    setActive(Math.min(count - 1, Math.max(0, next)));

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <header className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id="testimonials-title" className={styles.title}>
          {title}
        </h2>
      </header>

      <div className={styles.inner}>
        <div className={styles.panel}>
          <div className={styles.diamonds} aria-hidden="true">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 720px) 0px, (max-width: 1200px) 34vw, 387px"
              className={styles.diamondsImage}
            />
          </div>

          <div className={styles.content}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/quote-mark.svg"
              alt=""
              aria-hidden="true"
              className={styles.quoteMark}
            />

            <div className={styles.body}>
              <div className={styles.sliderViewport}>
                <div
                  className={styles.sliderTrack}
                  style={{ transform: `translateX(-${active * 100}%)` }}
                >
                  {testimonials.map((t, i) => (
                    <div
                      className={styles.slide}
                      key={t.id}
                      aria-hidden={i !== active}
                    >
                      <p className={styles.quote}>{t.quote}</p>

                      <div className={styles.meta}>
                        <span className={styles.rule} aria-hidden="true" />
                        <p className={styles.name}>{t.name}</p>
                        <p className={styles.role}>{t.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fixed in place — only the quote/meta above slides. */}
              <div
                className={styles.controls}
                role="group"
                aria-label="Testimonial navigation"
              >
                <p className={styles.counter}>
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(count).padStart(2, "0")}
                </p>

                <div className={styles.navGroup}>
                  <button
                    type="button"
                    className={`${styles.navBtn} ${
                      isFirst ? "" : styles.navBtnEnabled
                    }`}
                    onClick={() => goTo(active - 1)}
                    disabled={isFirst}
                    aria-label="Previous testimonial"
                  >
                    <span className={styles.navIconPrev}>
                      <ArrowIcon />
                    </span>
                  </button>
                  <button
                    type="button"
                    className={`${styles.navBtn} ${
                      isLast ? "" : styles.navBtnEnabled
                    }`}
                    onClick={() => goTo(active + 1)}
                    disabled={isLast}
                    aria-label="Next testimonial"
                  >
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
