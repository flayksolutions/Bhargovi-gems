import Image from "next/image";
import Link from "next/link";
import styles from "./DiamondInfoHero.module.css";

type Crumb = { label: string; href?: string };

type Props = {
  breadcrumb: Crumb[];
  titleLines: string[];
  body: string;
  image: string;
  alt: string;
};

export default function DiamondInfoHero({
  breadcrumb,
  titleLines,
  body,
  image,
  alt,
}: Props) {
  return (
    <section className={styles.hero} aria-labelledby="diamond-info-hero-title">
      <div className={styles.plate}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="100vw"
          priority
          className={styles.image}
        />
        <span className={styles.scrim} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol className={styles.breadcrumbList}>
            {breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className={styles.crumbItem}>
                {crumb.href ? (
                  <Link href={crumb.href} className={styles.crumbLink}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={styles.crumbCurrent} aria-current="page">
                    {crumb.label}
                  </span>
                )}
                {i < breadcrumb.length - 1 && (
                  <span className={styles.crumbSep} aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 id="diamond-info-hero-title" className={styles.title}>
          {titleLines.map((line, i) => (
            <span key={line} className={styles.titleLineMask}>
              <span
                className={styles.titleLine}
                style={{ ["--i" as string]: i }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p className={styles.body}>{body}</p>
      </div>
    </section>
  );
}
