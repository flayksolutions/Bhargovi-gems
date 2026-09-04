import Image from "next/image";
import styles from "./LegacySection.module.css";

export type LegacyImage = {
  id: string;
  src: string;
  alt: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  images: LegacyImage[];
  features: string[];
};

export default function LegacySection({
  eyebrow,
  title,
  body,
  images,
  features,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="legacy-title">
      <div className={styles.inner}>
        <div className={styles.collage}>
          {images.map((image) => (
            <div
              key={image.id}
              className={styles.collageTile}
              style={{
                left: `${image.left}%`,
                top: `${image.top}%`,
                width: `${image.width}%`,
                height: `${image.height}%`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 900px) 92vw, 44vw"
                className={styles.collageImage}
              />
            </div>
          ))}
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="legacy-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.body}>{body}</p>

          <ul className={styles.features}>
            {features.map((feature) => (
              <li key={feature} className={styles.feature}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
