import Link from "next/link";
import styles from "./QualityStandardsSection.module.css";
import type { SpecRow } from "@/lib/content";

type Props = {
  id: string;
  eyebrow: string;
  titleLines: string[];
  body: string;
  columns: string[];
  rows: SpecRow[];
  note: string;
  cta: { label: string; href: string };
};

export default function QualityStandardsSection({
  id,
  eyebrow,
  titleLines,
  body,
  columns,
  rows,
  note,
  cta,
}: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby="quality-standards-title">
      <span className={styles.glow} aria-hidden="true" />

      <header className={styles.head}>
        <div>
          <p className={styles.eyebrow}>
            <span className={styles.rule} aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 id="quality-standards-title" className={styles.title}>
            <span>{titleLines[0]}</span>
            <span className={styles.titleAccent}>{titleLines[1]}</span>
          </h2>
        </div>
        <p className={styles.body}>{body}</p>
      </header>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col} scope="col">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className={styles.category}>{row.category}</td>
                <td>{row.clarity}</td>
                <td>{row.colour}</td>
                <td>{row.size}</td>
                <td>
                  <span className={[styles.pill, row.certified ? styles.pillCertified : ""].filter(Boolean).join(" ")}>
                    {row.certified && <span className={styles.pillDot} aria-hidden="true" />}
                    {row.certification}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.note}>
        <p>{note}</p>
        <Link href={cta.href} className={styles.cta}>
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
