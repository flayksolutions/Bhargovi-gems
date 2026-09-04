import Image from "next/image";
import styles from "./VisionSection.module.css";

type Props = {
  eyebrow: string;
  title: { lead: string; accent: string; trail: string };
  body: string;
  image: string;
  alt: string;
};

export default function VisionSection({
  eyebrow,
  title,
  body,
  image,
  alt,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="vision-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="vision-title" className={styles.title}>
            {title.lead}
            <span className={styles.titleAccent}>{title.accent}</span>
            {title.trail}
          </h2>
          <p className={styles.body}>{body}</p>
        </div>

        <figure className={styles.figure}>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 960px) 100vw, 50vw"
            className={styles.image}
          />
        </figure>
      </div>
    </section>
  );
}
