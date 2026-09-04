import styles from "./CertificationVerificationSection.module.css";
import type { LabAccreditation } from "@/lib/content";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  labs: LabAccreditation[];
};

export default function CertificationVerificationSection({ id, eyebrow, title, body, labs }: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby="certification-title">
      <span className={styles.glow} aria-hidden="true" />

      <header className={styles.head}>
        <p className={styles.eyebrow}>
          <span className={styles.rule} aria-hidden="true" />
          {eyebrow}
          <span className={styles.rule} aria-hidden="true" />
        </p>
        <h2 id="certification-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.body}>{body}</p>
      </header>

      <ul className={styles.grid}>
        {labs.map((lab) => (
          <li key={lab.id} className={styles.card}>
            <div className={styles.mark}>
              {lab.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={lab.logo} alt="" aria-hidden="true" className={styles.markImage} />
              ) : (
                <span className={styles.badgeText}>{lab.badgeText}</span>
              )}
            </div>
            <div className={styles.text}>
              <p className={styles.code}>{lab.code}</p>
              <p className={styles.name}>{lab.name}</p>
              <p className={styles.blurb}>{lab.blurb}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
