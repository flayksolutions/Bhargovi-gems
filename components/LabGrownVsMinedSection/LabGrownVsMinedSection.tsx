"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./LabGrownVsMinedSection.module.css";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";
import type { ComparisonRow } from "@/lib/content";

type Column = {
  id: string;
  tag: string;
  emphasis: boolean;
  title: string;
  subtitle: string;
};

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  background: string;
  backgroundAlt: string;
  columns: Column[];
  rows: ComparisonRow[];
  disclaimer: string;
};

export default function LabGrownVsMinedSection({
  id,
  eyebrow,
  title,
  body,
  background,
  backgroundAlt,
  columns,
  rows,
  disclaimer,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef, undefined, "0px 0px -40% 0px");

  return (
    <section id={id} className={styles.section} aria-labelledby="lab-vs-mined-title" ref={sectionRef}>
      <div className={styles.plate}>
        <Image
          src={background}
          alt={backgroundAlt}
          aria-hidden={backgroundAlt ? undefined : true}
          fill
          sizes="100vw"
          className={styles.image}
        />
        <span className={styles.scrim} aria-hidden="true" />
      </div>

      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>
            <span className={styles.rule} aria-hidden="true" />
            {eyebrow}
            <span className={styles.rule} aria-hidden="true" />
          </p>
          <h2 id="lab-vs-mined-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.body}>{body}</p>
        </header>

        <div className={styles.table}>
          {columns.map((column, colIndex) => (
            <div
              key={column.id}
              className={[styles.column, column.emphasis ? styles.columnEmphasis : ""]
                .filter(Boolean)
                .join(" ")}
            >
              <div className={styles.columnHead}>
                <span className={styles.tag}>{column.tag}</span>
                <h3 className={styles.columnTitle}>{column.title}</h3>
                <p className={styles.subtitle}>{column.subtitle}</p>
              </div>

              <dl className={styles.rows}>
                {rows.map((row, rowIndex) => (
                  <div
                    key={row.id}
                    className={styles.row}
                    style={{ ["--i" as string]: rowIndex }}
                  >
                    <dt className={styles.rowLabel}>{row.label}</dt>
                    <dd className={styles.rowValue}>
                      {column.emphasis ? (
                        <Image
                          src="/brand/secondary-logo.svg"
                          alt=""
                          aria-hidden="true"
                          width={16}
                          height={16}
                          className={styles.glyphMark}
                        />
                      ) : (
                        <span className={styles.glyph} aria-hidden="true" />
                      )}
                      {row.values[colIndex]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className={styles.disclaimer}>{disclaimer}</p>
      </div>
    </section>
  );
}
