import Image from "next/image";
import styles from "./FounderNoteSection.module.css";

type Props = {
  eyebrow: string;
  title: { lead: string; accent: string; trail: string };
  quote: string;
  name: string;
  role: string;
  image: string;
  alt: string;
};

export default function FounderNoteSection({
  eyebrow,
  title,
  quote,
  name,
  role,
  image,
  alt,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="founder-note-title">
      <div className={styles.inner}>
        <figure className={styles.figure}>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 960px) 92vw, 34vw"
            className={styles.image}
          />
        </figure>

        <blockquote className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="founder-note-title" className={styles.title}>
            {title.lead}
            <span className={styles.titleAccent}>{title.accent}</span>
            {title.trail}
          </h2>

          <p className={styles.quote}>{quote}</p>

          <span className={styles.rule} aria-hidden="true" />

          <footer className={styles.attribution}>
            <p className={styles.name}>{name}</p>
            <p className={styles.role}>{role}</p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
