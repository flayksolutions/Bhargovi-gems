"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./VisionSection.module.css";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

type Props = {
  eyebrow: string;
  title: { lead: string; accent: string };
  body: string;
  image: string;
  alt: string;
};

export default function VisionSection({
  eyebrow,
  title,
  body,
  image,
  alt,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="vision-title"
    >
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id="vision-title" className={styles.title}>
          {title.lead} <span className={styles.titleAccent}>{title.accent}</span>
        </h2>
        <p className={styles.body}>{body}</p>
      </div>

      <figure className={styles.figure}>
        <div className={styles.reveal}>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 960px) 100vw, 92vw"
            className={styles.image}
          />
        </div>
      </figure>
    </section>
  );
}
