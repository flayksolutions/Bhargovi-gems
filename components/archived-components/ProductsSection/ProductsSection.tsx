import Image from "next/image";
import Link from "next/link";
import styles from "./ProductsSection.module.css";

export type ProductCard = {
  id: string;
  name: string;
  spec: string;
  image: string;
  alt: string;
};

type Props = {
  eyebrow: string;
  titleLines: string[];
  cta: { label: string; href: string };
  cards: ProductCard[];
};

export default function ProductsSection({
  eyebrow,
  titleLines,
  cta,
  cards,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="products-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 id="products-title" className={styles.title}>
              {titleLines.map((line) => (
                <span key={line} className={styles.titleLine}>
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <Link href={cta.href} className={styles.cta}>
            {cta.label}
          </Link>
        </div>

        <ul className={styles.grid}>
          {cards.map((card) => (
            <li key={card.id} className={styles.cell}>
              <article className={styles.card}>
                <div className={styles.thumb}>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={204}
                    height={205}
                    className={styles.stone}
                  />
                </div>
                <h3 className={styles.cardTitle}>{card.name}</h3>
                <p className={styles.cardSpec}>{card.spec}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
