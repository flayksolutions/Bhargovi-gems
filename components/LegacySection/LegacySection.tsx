"use client";

import { useRef } from "react";
import Image from "next/image";
import CrystalField from "../CrystalField/CrystalField";
import styles from "./LegacySection.module.css";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";
import type { SpecTableRow } from "@/lib/content";

export type LegacyImage = {
  id: string;
  src: string;
  alt: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

type Props = {
  eyebrow: string;
  title: { lead: string; accent: string };
  body: string;
  images: LegacyImage[];
  specTable: {
    columns: string[];
    rows: SpecTableRow[];
  };
};

/**
 * The three collage tiles are pre-cut interlocking PNGs with diagonal
 * alpha edges, so a reveal transform must pivot each tile from the
 * corner nearest the collage's center (the corner that touches a seam)
 * and leave the outer corner free to move — otherwise the diagonal cuts
 * visibly gap mid-transition. Rotation direction alternates by quadrant
 * so the motion reads as a symmetric "opening" rather than jitter.
 */
function collageTileMotion(image: LegacyImage) {
  const centerX = image.left + image.width / 2;
  const centerY = image.top + image.height / 2;

  const originX = centerX < 50 ? "100%" : centerX > 50 ? "0%" : "50%";
  const originY = centerY < 50 ? "100%" : centerY > 50 ? "0%" : "50%";

  const dx = centerX - 50;
  const dy = centerY - 50;
  const sameQuadrantSign = dx >= 0 === dy >= 0;
  const tiltDeg = sameQuadrantSign ? 3 : -3;

  return { transformOrigin: `${originX} ${originY}`, tiltDeg };
}

export default function LegacySection({
  eyebrow,
  title,
  body,
  images,
  specTable,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="legacy-title"
    >
      <CrystalField card />

      <div className={styles.inner}>
        <div className={styles.collage}>
          {images.map((image, i) => {
            const { transformOrigin, tiltDeg } = collageTileMotion(image);
            return (
              <div
                key={image.id}
                className={styles.collageTile}
                style={{
                  left: `${image.left}%`,
                  top: `${image.top}%`,
                  width: `${image.width}%`,
                  height: `${image.height}%`,
                  transformOrigin,
                  ["--tilt" as string]: `${tiltDeg}deg`,
                  ["--reveal-delay" as string]: `${100 + i * 60}ms`,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 900px) 92vw, 40vw"
                  className={styles.collageImage}
                />
              </div>
            );
          })}
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="legacy-title" className={styles.title}>
            {title.lead}
            <span className={styles.titleAccent}>{title.accent}</span>
          </h2>
          <p className={styles.body}>{body}</p>

          <div className={styles.specTable}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {specTable.columns.map((column) => (
                    <th key={column} scope="col" className={styles.th}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specTable.rows.map((row) => (
                  <tr key={row.id}>
                    <th scope="row" className={styles.category}>
                      {row.category}
                    </th>
                    {row.values.map((value, i) => (
                      <td
                        key={specTable.columns[i + 1]}
                        className={styles.td}
                        data-label={specTable.columns[i + 1]}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
