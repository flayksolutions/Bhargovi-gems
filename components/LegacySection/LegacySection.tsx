import Image from "next/image";
import CrystalField from "../CrystalField/CrystalField";
import styles from "./LegacySection.module.css";
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

export default function LegacySection({
  eyebrow,
  title,
  body,
  images,
  specTable,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="legacy-title">
      <CrystalField card />

      <div className={styles.inner}>
        <div className={styles.collage}>
          {images.map((image) => (
            <div
              key={image.id}
              className={styles.collageTile}
              style={{
                left: `${image.left}%`,
                top: `${image.top}%`,
                width: `${image.width}%`,
                height: `${image.height}%`,
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
          ))}
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
                      <td key={specTable.columns[i + 1]} className={styles.td}>
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
