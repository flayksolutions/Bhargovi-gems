"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./DiamondInfoFaqSection.module.css";
import type { FAQItem } from "@/lib/content";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

type Props = {
  id: string;
  eyebrow: string;
  titleLines: string[];
  body: string;
  panelLabel: string;
  background: string;
  items: FAQItem[];
};

export default function DiamondInfoFaqSection({
  id,
  eyebrow,
  titleLines,
  body,
  panelLabel,
  background,
  items,
}: Props) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id={id} className={styles.section} aria-labelledby="faq-title" ref={sectionRef}>
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.plate} aria-hidden="true">
        <Image src={background} alt="" fill sizes="(max-width: 960px) 60vw, 40vw" className={styles.plateImage} />
      </div>

      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="faq-title" className={styles.title}>
            <span>{titleLines[0]}</span>
            <span className={styles.titleAccent}>{titleLines[1]}</span>
          </h2>
          <p className={styles.body}>{body}</p>
        </header>

        <div className={styles.accordion}>
          {/* <div className={styles.panelHeader}>
            <p>{panelLabel}</p> */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img src="/brand/monogram.svg" alt="" aria-hidden="true" className={styles.monogram} />
          </div> */}

          <ul className={styles.list}>
            {items.map((item, i) => {
              const open = openId === item.id;
              return (
                <li
                  key={item.id}
                  className={[styles.item, open ? styles.itemOpen : ""].filter(Boolean).join(" ")}
                  style={{ ["--i" as string]: i }}
                >
                  <button
                    type="button"
                    className={styles.question}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => setOpenId(open ? null : item.id)}
                  >
                    <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={styles.questionText}>{item.question}</span>
                    <span className={styles.toggle} aria-hidden="true">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${item.id}`}
                    className={styles.answerWrap}
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
