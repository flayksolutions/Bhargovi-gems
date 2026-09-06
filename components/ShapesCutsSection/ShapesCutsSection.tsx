"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ShapesCutsSection.module.css";
import { useScrollEdges } from "@/lib/useScrollEdges";
import type { ShapeItem } from "@/lib/content";

type Props = {
  id: string;
  eyebrow: string;
  titleLines: string[];
  body: string;
  shapes: ShapeItem[];
  catalogueLink: { label: string; href: string };
};

export default function ShapesCutsSection({
  id,
  eyebrow,
  titleLines,
  body,
  shapes,
  catalogueLink,
}: Props) {
  const defaultShape = shapes.find((s) => s.featured) ?? shapes[0];
  const [selectedId, setSelectedId] = useState(defaultShape.id);
  const selected = shapes.find((s) => s.id === selectedId) ?? defaultShape;

  const dockRef = useRef<HTMLDivElement>(null);
  const dockRowRef = useRef<HTMLUListElement>(null);

  // Fades the dock's leading/trailing edge while shapes overflow the row.
  useScrollEdges(dockRowRef, dockRef);

  return (
    <section id={id} className={styles.section} aria-labelledby="shapes-title">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/diamond-info/crystal-outline.svg"
        alt=""
        aria-hidden="true"
        className={`${styles.crystal} ${styles.crystalLeft}`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/diamond-info/crystal-outline.svg"
        alt=""
        aria-hidden="true"
        className={`${styles.crystal} ${styles.crystalRight}`}
      />

      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>
            <span className={styles.rule} aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 id="shapes-title" className={styles.title}>
            <span>{titleLines[0]}</span>
            <span className={styles.titleAccent}>{titleLines[1]}</span>
          </h2>
          <p className={styles.body}>{body}</p>
        </header>

        <div className={styles.stageBlock}>
          <p className={styles.tagSlot}>
            {selected.tag && <span className={styles.tag}>{selected.tag}</span>}
          </p>

          <div className={styles.stage}>
            <span className={styles.ringOuter} aria-hidden="true" />
            <span className={styles.ringInner} aria-hidden="true" />
            <div className={styles.stagePhotoWrap}>
              <Image
                key={selected.id}
                src={selected.photo}
                alt={selected.alt}
                fill
                sizes="(max-width: 640px) 60vw, 260px"
                className={styles.stagePhoto}
              />
            </div>
          </div>

          <h3 className={styles.stageName}>{selected.name}</h3>
          <p className={styles.stageCaption}>{selected.caption}</p>

          <dl className={styles.stats}>
            {selected.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.dock} ref={dockRef} data-fade="none">
          <span className={styles.dockBar} aria-hidden="true" />
          <span className={`${styles.dockFade} ${styles.dockFadeStart}`} aria-hidden="true" />
          <span className={`${styles.dockFade} ${styles.dockFadeEnd}`} aria-hidden="true" />
          <ul className={styles.dockRow} aria-label="Diamond shapes" ref={dockRowRef}>
            {shapes.map((shape) => {
              const active = shape.id === selectedId;
              return (
                <li key={shape.id} className={styles.dockItem}>
                  <button
                    type="button"
                    aria-pressed={active}
                    className={[styles.dockButton, active ? styles.dockButtonActive : ""]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => setSelectedId(shape.id)}
                  >
                    <span className={styles.dockIcon}>
                      <Image
                        src={shape.photo}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="88px"
                        className={styles.dockImage}
                      />
                    </span>
                    <span className={styles.dockLabel}>{shape.name}</span>
                    <span className={styles.dockDot} aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <Link href={catalogueLink.href} className={styles.catalogueLink}>
          {catalogueLink.label}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            <path
              d="M9.5 1L15 6M15 6L9.5 11M15 6H1"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
