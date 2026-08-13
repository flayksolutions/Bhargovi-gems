import Image from "next/image";
import styles from "./IntegritySection.module.css";

type ImageItem = { src: string; alt: string };

type Props = {
  title: string;
  body: string;
  points: string[];
  images: ImageItem[];
};

export default function IntegritySection({ title, body, points, images }: Props) {
  const [back, front] = images;

  return (
    <section className={styles.section} aria-labelledby="integrity-title">
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

      <div className={styles.stage}>
        {back && (
          <div className={styles.frameBack}>
            <Image
              src={back.src}
              alt={back.alt}
              fill
              sizes="(max-width: 900px) 60vw, 26vw"
              className={styles.image}
            />
          </div>
        )}
        {front && (
          <div className={styles.frameFront}>
            <Image
              src={front.src}
              alt={front.alt}
              fill
              sizes="(max-width: 900px) 70vw, 30vw"
              className={styles.image}
            />
          </div>
        )}
      </div>
    </section>
  );
}
