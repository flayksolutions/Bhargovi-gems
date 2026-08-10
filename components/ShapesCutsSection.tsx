import Image from "next/image";
import Link from "next/link";
import styles from "./ShapesCutsSection.module.css";
import type { ShapeChip } from "@/lib/content";

type Props = {
  id: string;
  eyebrow: string;
  titleLines: string[];
  body: string;
  featured: { name: string; tag: string; caption: string; image: string; alt: string };
  chips: ShapeChip[];
  catalogueLink: { label: string; href: string };
};

export default function ShapesCutsSection({
  id,
  eyebrow,
  titleLines,
  body,
  featured,
  chips,
  catalogueLink,
}: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby="shapes-title">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>
            <span className={styles.rule} aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 id="shapes-title" className={styles.title}>
            <span>{titleLines[0]}</span>
            <span className={styles.titleAccent}>{titleLines[1]}</span>
          </h2>
        </header>
        <p className={styles.body}>{body}</p>

        <div className={styles.stage}>
          <Image
            src={featured.image}
            alt={featured.alt}
            fill
            sizes="(max-width: 900px) 100vw, 600px"
            className={styles.stageImage}
          />
          <span className={styles.stageScrim} aria-hidden="true" />
          <span className={styles.tag}>{featured.tag}</span>
          <div className={styles.stageText}>
            <p className={styles.stageName}>{featured.name}</p>
            <p className={styles.stageCaption}>{featured.caption}</p>
          </div>
        </div>

        <div className={styles.chips}>
          <ul className={styles.chipGrid}>
            {chips.map((chip) => (
              <li key={chip.id}>
                <div className={[styles.chip, chip.featured ? styles.chipFeatured : ""].filter(Boolean).join(" ")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={chip.icon} alt="" aria-hidden="true" className={styles.chipIcon} />
                  <p className={styles.chipName}>{chip.name}</p>
                  <p className={styles.chipFacets}>{chip.facets}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link href={catalogueLink.href} className={styles.catalogueLink}>
            {catalogueLink.label}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
              <path
                d="M9.5 1L15 6M15 6L9.5 11M15 6H1"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
