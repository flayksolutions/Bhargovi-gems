import Image from "next/image";
import styles from "./CraftingSection.module.css";

type Props = {
  title: string;
  body: string;
  watermark: string[];
  image: string;
  alt: string;
};

export default function CraftingSection({
  title,
  body,
  watermark,
  image,
  alt,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="crafting-title">
      <span className={styles.glow} aria-hidden="true" />

      <p className={styles.watermark} aria-hidden="true">
        {watermark.map((word) => (
          <span key={word}>{word}</span>
        ))}
      </p>

      <div className={styles.inner}>
        <h2 id="crafting-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.body}>{body}</p>

        <div className={styles.mediaWrap}>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 900px) 100vw, 79vw"
            className={styles.media}
          />
        </div>
      </div>
    </section>
  );
}
