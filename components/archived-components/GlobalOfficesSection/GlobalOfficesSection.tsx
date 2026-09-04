import Image from "next/image";
import styles from "./GlobalOfficesSection.module.css";

export type Office = {
  id: string;
  name: string;
  address: string;
  icon: string;
};

type Props = {
  eyebrow: string;
  title: string;
  offices: Office[];
  cta: { label: string; href: string };
  mapImage: string;
  mapImageAlt: string;
};

export default function GlobalOfficesSection({
  eyebrow,
  title,
  offices,
  cta,
  mapImage,
  mapImageAlt,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="offices-title">
      <div className={styles.mapFrame}>
        <Image
          src={mapImage}
          alt={mapImageAlt}
          fill
          sizes="(max-width: 900px) 100vw, 53vw"
          className={styles.mapImage}
          priority={false}
        />
        <span className={styles.glow} aria-hidden="true" />
        <span className={styles.mapFade} aria-hidden="true" />
      </div>

      <div className={styles.inner}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="offices-title" className={styles.title}>
            {title}
          </h2>

          <ul className={styles.list}>
            {offices.map((office) => (
              <li key={office.id} className={styles.item}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={office.icon}
                  alt=""
                  aria-hidden="true"
                  className={styles.icon}
                />
                <div className={styles.itemText}>
                  <p className={styles.officeName}>{office.name}</p>
                  <p className={styles.address}>{office.address}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href={cta.href} className={styles.cta}>
            {cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
