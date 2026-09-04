"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ShapesCutsSection.module.css";
import type { ShapeChip } from "@/lib/content";

type Props = {
  id: string;
  eyebrow: string;
  titleLines: string[];
  body: string;
  stageRings: { outer: string; inner: string };
  chips: ShapeChip[];
  catalogueLink: { label: string; href: string };
};

export default function ShapesCutsSection({
  id,
  eyebrow,
  titleLines,
  body,
  stageRings,
  chips,
  catalogueLink,
}: Props) {
  const defaultChip = chips.find((c) => c.featured) ?? chips[0];
  const [selectedId, setSelectedId] = useState(defaultChip.id);
  const selected = chips.find((c) => c.id === selectedId) ?? defaultChip;

  return (
    <section id={id} className={styles.section} aria-labelledby="shapes-title">
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
        </header>
        <p className={styles.body}>{body}</p>

        <div className={styles.stage}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={stageRings.outer} alt="" aria-hidden="true" className={styles.ringOuter} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={stageRings.inner} alt="" aria-hidden="true" className={styles.ringInner} />

          {selected.photo ? (
            <div className={styles.photoWrap}>
              <Image
                key={selected.id}
                src={selected.photo}
                alt={selected.photoAlt ?? selected.name}
                fill
                sizes="300px"
                className={styles.photo}
              />
            </div>
          ) : (
            <span
              aria-hidden="true"
              className={styles.photoFallback}
              style={{ ["--icon-src" as string]: `url(${selected.icon})` }}
            />
          )}

          {selected.tag && <span className={styles.tag}>{selected.tag}</span>}
          <div className={styles.stageText}>
            <p className={styles.stageName}>{selected.name}</p>
            {selected.caption && <p className={styles.stageCaption}>{selected.caption}</p>}
          </div>
        </div>

        <div className={styles.chips}>
          <ul className={styles.chipGrid}>
            {chips.map((chip) => {
              const active = chip.id === selectedId;
              return (
                <li key={chip.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(chip.id)}
                    className={[styles.chip, active ? styles.chipActive : ""].filter(Boolean).join(" ")}
                    aria-pressed={active}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={chip.icon} alt="" aria-hidden="true" className={styles.chipIcon} />
                    <p className={styles.chipName}>{chip.name}</p>
                    <p className={styles.chipFacets}>{chip.facets}</p>
                  </button>
                </li>
              );
            })}
          </ul>

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
      </div>
    </section>
  );
}
