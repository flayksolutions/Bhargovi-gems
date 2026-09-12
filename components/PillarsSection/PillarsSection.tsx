"use client";

import { useLayoutEffect, useRef, useState } from "react";
import styles from "./PillarsSection.module.css";
import type { PillarCard } from "@/lib/content";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

type Props = {
  background: string;
  mobileBackground?: string;
  cards: PillarCard[];
};

type WindowRect = { width: number; height: number; top: number; left: number };

/* Each swatch shows a "window" into the same photo used by `.plate`.
   For the window image to be the exact size of the background photo
   and line up with it, it needs pixel offsets relative to the
   section — and since the row is a responsive, centered grid, that
   offset can't be expressed as a fixed CSS value. We measure it
   instead: `swatch` stays `position: relative; overflow: hidden` (so
   it's the image's real containing block and the clip is genuine),
   and the image itself is sized to the section's own box and shifted
   by the swatch's measured offset from that box. */
function usePeepholeWindows(count: number) {
  const sectionRef = useRef<HTMLElement>(null);
  const swatchRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [windows, setWindows] = useState<WindowRect[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const measure = () => {
      const sectionRect = section.getBoundingClientRect();
      setWindows(
        swatchRefs.current.map((swatch) => {
          if (!swatch) return { width: 0, height: 0, top: 0, left: 0 };
          const swatchRect = swatch.getBoundingClientRect();
          return {
            width: sectionRect.width,
            height: sectionRect.height,
            top: sectionRect.top - swatchRect.top,
            left: sectionRect.left - swatchRect.left,
          };
        }),
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(section);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [count]);

  return { sectionRef, swatchRefs, windows };
}

export default function PillarsSection({ background, mobileBackground, cards }: Props) {
  const { sectionRef, swatchRefs, windows } = usePeepholeWindows(cards.length);
  useRevealOnScroll(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-label="Sustainability pillars"
    >
      <div
        className={styles.plate}
        aria-hidden="true"
        style={{
          ["--bg" as string]: `url(${background})`,
          ...(mobileBackground ? { ["--bg-mobile" as string]: `url(${mobileBackground})` } : {}),
        }}
      />

      <div className={styles.row}>
        {cards.map((card, i) => {
          const win = windows[i];
          return (
            <article
              key={card.id}
              className={styles.card}
              style={{ ["--i" as string]: i }}
            >
              <div
                className={styles.swatch}
                ref={(el) => {
                  swatchRefs.current[i] = el;
                }}
              >
                {win && win.width > 0 && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={background}
                    alt={card.name}
                    className={styles.swatchImage}
                    style={{
                      width: win.width,
                      height: win.height,
                      top: win.top,
                      left: win.left,
                    }}
                  />
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.hoverImage}
                  alt=""
                  aria-hidden="true"
                  className={styles.swatchHoverImage}
                />
              </div>
              <h3 className={styles.cardTitle}>{card.name}</h3>
              {/* <p className={styles.cardBody}>{card.body}</p> */}
            </article>
          );
        })}
      </div>
    </section>
  );
}
