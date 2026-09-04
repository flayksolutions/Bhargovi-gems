import Link from "next/link";
import styles from "./OfficesSection.module.css";

export type Office = {
  id: string;
  name: string;
  address: string;
  icon: string;
};

type Props = {
  eyebrow: string;
  title: string;
  map: string;
  mapAlt: string;
  offices: Office[];
  cta: { label: string; href: string };
};

export default function OfficesSection({
  eyebrow,
  title,
  map,
  mapAlt,
  offices,
  cta,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="offices-title">
      <div className={styles.mapWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={map} alt={mapAlt} className={styles.map} />
      </div>

      <div className={styles.inner}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="offices-title" className={styles.title}>
            {title}
          </h2>

          <ul className={styles.list}>
            {offices.map((office) => (
              <li key={office.id} className={styles.office}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={office.icon}
                  alt=""
                  aria-hidden="true"
                  className={styles.pin}
                  width={40}
                  height={40}
                />
                <h3 className={styles.officeName}>{office.name}</h3>
                <p className={styles.officeAddress}>{office.address}</p>
              </li>
            ))}
          </ul>

          {/* <Link href={cta.href} className={styles.cta}>
            {cta.label}
          </Link> */}
        </div>
      </div>
    </section>
  );
}
