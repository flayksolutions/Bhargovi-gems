import Image from "next/image";
import CrystalField from "@/components/CrystalField/CrystalField";
import styles from "./IntegritySection.module.css";

type ImageItem = { src: string; alt: string };

type Props = {
  title: string;
  body: string;
  points: string[];
  images: ImageItem[];
};

export default function IntegritySection({ title, body, points, images }: Props) {
  const [left, right] = images;

  return (
    <section className={styles.section} aria-labelledby="integrity-title">
      <CrystalField />

      <div className={styles.inner}>
        {left && (
          <div className={styles.stage}>
            <Image
              src={left.src}
              alt={left.alt}
              fill
              sizes="(max-width: 960px) 100vw, 33vw"
              className={styles.image}
            />
          </div>
        )}

        <div className={styles.content}>
          <h2 id="integrity-title" className={styles.title}>
            {title}
          </h2>

          <div className={styles.foot}>
            <p className={styles.body}>{body}</p>
            <ul className={styles.points}>
              {points.map((point) => (
                <li key={point} className={styles.point}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {right && (
          <div className={`${styles.stage} ${styles.stageMobileHidden}`}>
            <Image
              src={right.src}
              alt={right.alt}
              fill
              sizes="(max-width: 960px) 100vw, 33vw"
              className={styles.image}
            />
          </div>
        )}
      </div>
    </section>
  );
}
