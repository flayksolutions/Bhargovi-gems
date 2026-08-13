import styles from "./CommitmentSection.module.css";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
};

export default function CommitmentSection({ eyebrow, title, body }: Props) {
  return (
    <section className={styles.section} aria-labelledby="commitment-title">
      <span className={styles.crystal} aria-hidden="true" />
      <span className={styles.crystal2} aria-hidden="true" />

      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id="commitment-title" className={styles.title}>
        {title}
      </h2>
      <p className={styles.body}>{body}</p>
    </section>
  );
}
