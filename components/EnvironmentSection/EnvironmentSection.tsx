import Image from "next/image";
import styles from "./EnvironmentSection.module.css";

type Props = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

export default function EnvironmentSection({ title, body, image, alt }: Props) {
  return (
    <section className={styles.section} aria-labelledby="environment-title">
      <div className={styles.plate} aria-hidden="true">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="100vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2 id="environment-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.body}>{body}</p>
      </div>
    </section>
  );
}
