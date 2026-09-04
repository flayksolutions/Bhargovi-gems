import Image from "next/image";
import Link from "next/link";
import BrandLogo from "../BrandLogo/BrandLogo";
import styles from "./SiteFooter.module.css";

export type FooterItem = { label: string; href?: string };
export type FooterColumn = { title: string; items: FooterItem[] };

type Props = {
  brand: string;
  tagline: string;
  image: string;
  columns: FooterColumn[];
  legal: string;
  credit: { prefix: string; label: string; href: string };
};

export default function SiteFooter({
  brand,
  tagline,
  image,
  columns,
  legal,
  credit,
}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.plate} aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className={styles.plateImage}
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand} aria-label={brand}>
              <BrandLogo className={styles.logo} />
            </Link>
            <p className={styles.tagline}>{tagline}</p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} className={styles.column}>
              <h2 className={styles.columnTitle}>{column.title}</h2>
              <ul className={styles.columnList}>
                {column.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link href={item.href} className={styles.columnLink}>
                        {item.label}
                      </Link>
                    ) : (
                      <span className={styles.columnText}>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.bar}>
          <p className={styles.legal}>
            &copy; {year} {brand}. {legal}
          </p>
          <p className={styles.credit}>
            {credit.prefix}{" "}
            <a
              href={credit.href}
              target="_blank"
              rel="noreferrer"
              className={styles.creditLink}
            >
              {credit.label}
              <span aria-hidden="true" className={styles.arrow}>
                &#8599;
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
