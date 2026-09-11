"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./SustainabilityCommitmentSection.module.css";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
};

export default function SustainabilityCommitmentSection({ eyebrow, title, body }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="commitment-title">
      <Image
        src="/images/sustainability/commitment-glow.svg"
        alt=""
        aria-hidden="true"
        width={219}
        height={219}
        className={styles.glow}
      />

      <div className={styles.heading}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id="commitment-title" className={styles.title}>
          {title}
        </h2>
      </div>

      <p className={styles.body}>{body}</p>
    </section>
  );
}
