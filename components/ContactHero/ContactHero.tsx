import styles from "./ContactHero.module.css";

type Props = {
  eyebrow: string;
  title: string;
};

export default function ContactHero({ eyebrow, title }: Props) {
  return (
    <section className={styles.hero} aria-labelledby="contact-hero-title">
      <span className={`${styles.glow} ${styles.glowRight}`} aria-hidden="true" />
      <span className={`${styles.glow} ${styles.glowLeft}`} aria-hidden="true" />

      <div className={styles.crystals} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/contact/diamond-facet.svg"
          alt=""
          className={`${styles.crystal} ${styles.crystal1}`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/contact/diamond-facet.svg"
          alt=""
          className={`${styles.crystal} ${styles.crystal2}`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/contact/diamond-facet.svg"
          alt=""
          className={`${styles.crystal} ${styles.crystal3}`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/contact/diamond-facet.svg"
          alt=""
          className={`${styles.crystal} ${styles.crystal4}`}
        />
      </div>

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
