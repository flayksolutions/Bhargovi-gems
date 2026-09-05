import Image from "next/image";
import styles from "./FacilitiesSection.module.css";
import type { Facility } from "@/lib/content";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  facilities: Facility[];
};

/* Row groupings and nominal card box sizes, from Figma. `grow` is the
   card's nominal width, used as the flex-grow weight so row
   proportions match the design; `w`/`h` set the card's own aspect
   ratio (the slanted shape is cut via clip-path in the CSS, not baked
   into the image). */
const ROWS = [2, 3, 2, 2];
const DIMS: Record<Facility["size"], { grow: number; w: number; h: number }> = {
  large: { grow: 753, w: 753, h: 320 },
  medium: { grow: 525, w: 525, h: 320 },
  small: { grow: 425.33, w: 425.33, h: 260 },
  wide: { grow: 639, w: 639, h: 260 },
};

export default function FacilitiesSection({
  eyebrow,
  title,
  body,
  facilities,
}: Props) {
  const rows: Facility[][] = [];
  let cursor = 0;
  for (const count of ROWS) {
    rows.push(facilities.slice(cursor, cursor + count));
    cursor += count;
  }

  return (
    <section className={styles.section} aria-labelledby="facilities-title">
      <header className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id="facilities-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.body}>{body}</p>
      </header>

      <div className={styles.grid}>
        {rows.slice(0, 2).map((row, i) => (
          <div key={i} className={styles.row}>
            {row.map((facility, j) => {
              const { grow, w, h } = DIMS[facility.size];
              /* Every inter-card edge within a row gets a matching
                 diagonal cut on both sides of the gap, so the cut
                 reads as one continuous slant flowing through the
                 gap — only the outer edges of the row (first card's
                 left, last card's right) stay square. */
              const cutRight = j < row.length - 1;
              const cutLeft = j > 0;
              const cutClass =
                cutRight && cutLeft
                  ? styles.cutBoth
                  : cutRight
                    ? styles.cutRight
                    : cutLeft
                      ? styles.cutLeft
                      : "";
              return (
                <div
                  key={facility.id}
                  className={styles.card}
                  style={{ flexGrow: grow, aspectRatio: `${w} / ${h}` }}
                >
                  <div className={[styles.cardClip, cutClass].join(" ")}>
                    <Image
                      src={facility.image}
                      alt={facility.alt}
                      fill
                      sizes="(max-width: 880px) 100vw, 50vw"
                      className={styles.cardImage}
                    />
                    <div className={styles.scrim} aria-hidden="true" />
                    <span className={styles.pill}>{facility.location}</span>
                    <p className={styles.cardTitle}>{facility.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
