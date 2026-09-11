"use client";

import { useRef } from "react";
import Image from "next/image";
import CrystalField from "@/components/CrystalField/CrystalField";
import styles from "./IntegritySection.module.css";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

type ImageItem = { src: string; alt: string };

type Props = {
  title: string;
  body: string;
  points: string[];
  images: ImageItem[];
};

export default function IntegritySection({ title, body, points, images }: Props) {
  const [left, right] = images;
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="integrity-title">
      <CrystalField />

      <div className={styles.inner}>
        {left && (
          <figure className={styles.stage}>
            <div className={styles.reveal}>
              <Image
                src={left.src}
                alt={left.alt}
                fill
                sizes="(max-width: 960px) 100vw, 33vw"
                className={styles.image}
                loading="eager"
              />
            </div>
          </figure>
        )}

        <div className={styles.content}>
          <h2 id="integrity-title" className={styles.title}>
            {title}
          </h2>

          <div className={styles.foot}>
            <p className={styles.body}>{body}</p>
            <ul className={styles.points}>
              {points.map((point, i) => (
                <li key={point} className={styles.point} style={{ ["--i" as string]: i }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {right && (
          <figure className={`${styles.stage} ${styles.stageMobileHidden} ${styles.stageTrail}`}>
            <div className={styles.reveal}>
              <Image
                src={right.src}
                alt={right.alt}
                fill
                sizes="(max-width: 960px) 100vw, 33vw"
                className={styles.image}
                loading="eager"
              />
            </div>
          </figure>
        )}
      </div>
    </section>
  );
}
