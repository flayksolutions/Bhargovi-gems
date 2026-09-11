import styles from "./ContactHero.module.css";

type Props = {
  eyebrow: string;
  title: string;
};

export default function ContactHero({ eyebrow, title }: Props) {
  return (
    <section className={styles.hero} aria-labelledby="contact-hero-title">
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.headline}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 id="contact-hero-title" className={styles.title}>
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
