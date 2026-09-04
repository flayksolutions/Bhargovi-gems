import Link from "next/link";
import styles from "./ContactHero.module.css";

type Props = {
  eyebrow: string;
  titleLines: string[];
  phone: { label: string; href: string };
  email: { label: string; href: string };
};

export default function ContactHero({
  eyebrow,
  titleLines,
  phone,
  email,
}: Props) {
  return (
    <section className={styles.hero} aria-labelledby="contact-hero-title">
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 id="contact-hero-title" className={styles.title}>
          {titleLines.map((line) => (
            <span key={line} className={styles.line}>
              {line}
            </span>
          ))}
        </h1>

        <div className={styles.contactRow}>
          <Link href={phone.href} className={styles.contactLink}>
            {phone.label}
          </Link>
          <span className={styles.dot} aria-hidden="true" />
          <Link href={email.href} className={styles.contactLink}>
            {email.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
