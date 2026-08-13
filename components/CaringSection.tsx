import Image from "next/image";
import styles from "./CaringSection.module.css";
import type { CaringBand } from "@/lib/content";

type Props = {
  bands: CaringBand[];
};

export default function CaringSection({ bands }: Props) {
  return (
    <>
      {bands.map((band) => (
        <section
          key={band.id}
          className={[
            styles.band,
            band.theme === "dark" ? styles.dark : styles.light,
            band.imageSide === "right" ? styles.imageRight : styles.imageLeft,
          ].join(" ")}
          aria-labelledby={`caring-${band.id}-title`}
        >
          <div className={styles.media}>
            <Image
              src={band.image}
              alt={band.alt}
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
              className={styles.image}
            />
          </div>

          <div className={styles.text}>
            <h2 id={`caring-${band.id}-title`} className={styles.title}>
              {band.title}
            </h2>
            <p className={styles.body}>{band.body}</p>
          </div>
        </section>
      ))}
    </>
  );
}
