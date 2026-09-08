import styles from "./CommitmentSection.module.css";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
};

export default function CommitmentSection({ eyebrow, title, body }: Props) {
  return (
    <section className={styles.section} aria-labelledby="commitment-title">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/sustainability/crystal-outline.svg"
        alt=""
        aria-hidden="true"
        className={styles.crystalLeft}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/sustainability/crystal-outline.svg"
        alt=""
        aria-hidden="true"
        className={styles.crystalRight}
      />

      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id="commitment-title" className={styles.title}>
        {title}
      </h2>
      <p className={styles.body}>{body}</p>
    </section>
  );
}
