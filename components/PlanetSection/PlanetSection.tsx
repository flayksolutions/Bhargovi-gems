import Image from "next/image";
import styles from "./PlanetSection.module.css";

type Props = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

export default function PlanetSection({ title, body, image, alt }: Props) {
  return (
    <section className={styles.section} aria-labelledby="planet-title">
      <div className={styles.plate}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="100vw"
          className={styles.image}
        />
      </div>

      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <h2 id="planet-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.body}>{body}</p>
      </div>
    </section>
  );
}
