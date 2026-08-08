import styles from "./CertificationsSection.module.css";

export type Certification = {
  id: string;
  code: string;
  name: string;
  blurb: string;
  logo: string;
  alt: string;
};

type Props = {
  eyebrow: string;
  title: string;
  items: Certification[];
};

export default function CertificationsSection({
  eyebrow,
  title,
  items,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="certifications-title">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="certifications-title" className={styles.title}>
            {title}
          </h2>
        </header>

        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item.id} className={styles.cell}>
              <article className={styles.card}>
                <div className={styles.mark}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.logo}
                    alt={item.alt}
                    width={120}
                    height={120}
                    className={styles.markImage}
                  />
                </div>

                <div className={styles.text}>
                  <p className={styles.code}>{item.code}</p>
                  <h3 className={styles.name}>{item.name}</h3>
                  <p className={styles.blurb}>{item.blurb}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
