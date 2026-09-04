import Image from "next/image";
import Link from "next/link";
import styles from "./AboutHero.module.css";

type Crumb = { label: string; href?: string };

type Props = {
  breadcrumb: Crumb[];
  title: string;
  body: string;
  image: string;
  alt: string;
};

export default function AboutHero({ breadcrumb, title, body, image, alt }: Props) {
  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <div className={styles.plate}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="100vw"
          priority
          className={styles.image}
        />
        <span className={styles.scrim} />
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

        <h1 id="about-hero-title" className={styles.title}>
          {title}
        </h1>
        <p className={styles.body}>{body}</p>
      </div>
    </section>
  );
}
