import styles from "./FourCsSection.module.css";
import type { FourCRow } from "@/lib/content";

type Props = {
  id: string;
  eyebrow: string;
  titleLines: string[];
  body: string;
  rows: FourCRow[];
};

export default function FourCsSection({ id, eyebrow, titleLines, body, rows }: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby="four-cs-title">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>
            <span className={styles.rule} aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 id="four-cs-title" className={styles.title}>
            <span>{titleLines[0]}</span>
            <span className={styles.titleAccent}>{titleLines[1]}</span>
          </h2>
          <p className={styles.body}>{body}</p>
        </header>

        <ol className={styles.rows}>
          {rows.map((row) => (
            <li key={row.id} className={styles.row}>
              <span className={styles.number}>{row.number}</span>
              <h3 className={styles.name}>{row.name}</h3>
              <p className={styles.description}>{row.description}</p>

              <div className={styles.scale}>
                <div className={styles.segments}>
                  {row.segments.map((segment, i) => (
                    <div key={segment.label} className={styles.segmentCol}>
                      <span
                        className={[
                          styles.bar,
                          segment.strong ? styles.barStrong : "",
                          segment.dim ? styles.barDim : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        style={{ ["--i" as string]: i }}
                      />
                      <span
                        className={[styles.segmentLabel, segment.dim ? styles.segmentLabelDim : ""]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {segment.label}
                      </span>
                    </div>
                  ))}
                </div>
                <span
                  className={styles.range}
                  style={{ ["--span" as string]: row.rangeSpan, ["--count" as string]: row.segments.length }}
                />
                <p className={styles.callout}>{row.callout}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
