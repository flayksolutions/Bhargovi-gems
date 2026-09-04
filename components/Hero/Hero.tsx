import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

type Props = {
  titleLines: string[];
  body: string;
  cta: { label: string; href: string };
  image: string;
  alt: string;
  /* Optional: when present the plate plays this instead of the still,
     which stays on as the poster frame. */
  video?: string;
};

export default function Hero({
  titleLines,
  body,
  cta,
  image,
  alt,
  video,
}: Props) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.plate}>
        {video ? (
          /* Silent by design: muted + no controls, so it counts as
             decoration and browsers will allow the autoplay. */
          <video
            className={styles.image}
            src={video}
            poster={image}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
          />
        ) : (
          <Image
            src={image}
            alt={alt}
            fill
            sizes="100vw"
            priority
            quality={90}
            className={styles.image}
          />
        )}
        <span className={styles.scrim} />
      </div>

      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          {titleLines.map((line, i) => (
            <span key={line} className={styles.line}>
              <span
                className={styles.lineInner}
                style={{ animationDelay: 180 + i * 130 + "ms" }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className={styles.foot}>
          <p className={styles.body}>{body}</p>
          {/* <Link href={cta.href} className={styles.cta}>
            {cta.label}
          </Link> */}
        </div>
      </div>
    </section>
  );
}
