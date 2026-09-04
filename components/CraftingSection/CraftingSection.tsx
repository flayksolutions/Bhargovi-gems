import Image from "next/image";
import styles from "./CraftingSection.module.css";

type Props = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

export default function CraftingSection({ title, body, image, alt }: Props) {
  return (
    <section className={styles.section} aria-labelledby="crafting-title">
      <div className={styles.plate}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 860px) 100vw, 78vw"
          className={styles.plateImage}
        />
      </div>

      <div className={styles.content}>
        <h2 id="crafting-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.body}>{body}</p>
      </div>
    </section>
  );
}
