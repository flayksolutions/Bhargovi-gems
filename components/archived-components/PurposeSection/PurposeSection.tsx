import Image from "next/image";
import styles from "./PurposeSection.module.css";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

export default function PurposeSection({
  eyebrow,
  title,
  body,
  image,
  alt,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="purpose-title">
      <div className={styles.frame}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 900px) 100vw, 72vw"
          className={styles.image}
        />
      </div>

      <div className={styles.cardOuter}>
        <article className={styles.card}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="purpose-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.body}>{body}</p>
        </article>
      </div>
    </section>
  );
}
