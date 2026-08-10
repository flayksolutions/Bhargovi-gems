import Image from "next/image";
import styles from "./AnatomyGlossarySection.module.css";
import type { GlossaryTerm } from "@/lib/content";

type Props = {
  id: string;
  eyebrow: string;
  titleLines: string[];
  body: string;
  diagram: { image: string; alt: string };
  caption: string;
  glossaryHeading: string;
  terms: GlossaryTerm[];
};

export default function AnatomyGlossarySection({
  id,
  eyebrow,
  titleLines,
  body,
  diagram,
  caption,
  glossaryHeading,
  terms,
}: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby="anatomy-title">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>
            <span className={styles.rule} aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 id="anatomy-title" className={styles.title}>
            <span>{titleLines[0]}</span>
            <span className={styles.titleAccent}>{titleLines[1]}</span>
          </h2>
          <p className={styles.body}>{body}</p>

          <div className={styles.diagram}>
            <Image
              src={diagram.image}
              alt={diagram.alt}
              fill
              sizes="(max-width: 900px) 100vw, 520px"
              className={styles.diagramImage}
            />
            <span className={[styles.dimLabel, styles.labelTable].join(" ")}>
              <span className={styles.bracketH} aria-hidden="true" />
              Table
            </span>
            <span className={[styles.dimLabel, styles.labelCrown].join(" ")}>Crown</span>
            <span className={[styles.dimLabel, styles.labelGirdle].join(" ")}>Girdle</span>
            <span className={[styles.dimLabel, styles.labelPavilion].join(" ")}>Pavilion</span>
            <span className={[styles.dimLabel, styles.labelCulet].join(" ")}>Culet</span>
            <span className={[styles.dimLabel, styles.labelDiameter].join(" ")}>
              <span className={styles.bracketH} aria-hidden="true" />
              Diameter
            </span>
            <span className={[styles.dimLabel, styles.labelDepth].join(" ")}>
              <span className={styles.bracketV} aria-hidden="true" />
              Depth
            </span>
          </div>
          <p className={styles.caption}>{caption}</p>
        </div>

        <div className={styles.right}>
          <p className={styles.glossaryHeading}>{glossaryHeading}</p>
          <dl className={styles.terms}>
            {terms.map((t) => (
              <div key={t.id} className={styles.term}>
                <dt>{t.term}</dt>
                <dd>{t.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
