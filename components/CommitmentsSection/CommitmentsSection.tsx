"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./CommitmentsSection.module.css";

export type Commitment = {
  id: string;
  title: string;
  /* Leave null for an empty plate. Drop in a path later: an .mp4
     plays muted and looping, anything else renders as an image. */
  media: string | null;
  alt: string;
  captionAbove?: boolean;
};

type Props = {
  background: string;
  blocks: Commitment[];
};

export default function CommitmentsSection({ background, blocks }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<Record<string, boolean>>({});

  /* Each block reveals once, the first time it is a third on screen. */
  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return;

    const nodes = Array.from(
      root.querySelectorAll<HTMLElement>("[data-commitment]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = (entry.target as HTMLElement).dataset.commitment;
          if (id) setShown((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
          observer.unobserve(entry.target);
        });
      },
      /* Fires once the block is properly in view, not the moment its
         top edge clears the fold - the reveal was finishing before it
         reached reading position. */
      { threshold: 0.2, rootMargin: "0px 0px -14% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [blocks.length]);

  return (
    <section className={styles.section} aria-label="Our commitments">
      <div className={styles.backdrop} aria-hidden="true">
        <Image
          src={background}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className={styles.backdropImage}
        />
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/sustainability/crystal-outline.svg"
        alt=""
        aria-hidden="true"
        className={styles.crystalLeft}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/sustainability/crystal-outline.svg"
        alt=""
        aria-hidden="true"
        className={styles.crystalRight}
      />

      <div className={styles.inner} ref={rootRef}>
        {blocks.map((block) => {
          const isVideo = !!block.media && block.media.endsWith(".mp4");

          return (
            <article
              key={block.id}
              data-commitment={block.id}
              className={[
                styles.block,
                block.captionAbove ? styles.captionFirst : "",
                shown[block.id] ? styles.isIn : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className={styles.plate}>
                <div
                  className={[
                    styles.reveal,
                    block.captionAbove ? styles.revealDown : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {block.media ? (
                    isVideo ? (
                      <video
                        className={styles.media}
                        src={block.media}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-hidden="true"
                        tabIndex={-1}
                      />
                    ) : (
                      <Image
                        src={block.media}
                        alt={block.alt}
                        fill
                        sizes="(max-width: 960px) 92vw, 46vw"
                        quality={90}
                        className={styles.media}
                      />
                    )
                  ) : null}
                </div>
              </div>

              <h2 className={styles.title}>{block.title}</h2>
            </article>
          );
        })}
      </div>
    </section>
  );
}
