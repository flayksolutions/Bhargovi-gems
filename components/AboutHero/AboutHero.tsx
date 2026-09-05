import Image from "next/image";
import styles from "./AboutHero.module.css";

type Props = {
  titleLines: string[];
  body: string;
  image: string;
  alt: string;
};

export default function AboutHero({ titleLines, body, image, alt }: Props) {
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
        <span className={styles.scrim} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <h1 id="about-hero-title" className={styles.title}>
          {titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className={styles.body}>{body}</p>
      </div>
    </section>
  );
}
