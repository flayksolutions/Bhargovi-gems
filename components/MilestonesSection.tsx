import styles from "./MilestonesSection.module.css";
import type { Milestone } from "@/lib/content";

type Props = {
  eyebrow: string;
  title: string;
  milestones: Milestone[];
};

export default function MilestonesSection({ eyebrow, title, milestones }: Props) {
  return (
    <section className={styles.section} aria-labelledby="milestones-title">
      <header className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id="milestones-title" className={styles.title}>
          {title}
        </h2>
      </header>

      <div className={styles.wave}>
        <ol className={styles.line}>
          {milestones.map((milestone, i) => (
            <li
              key={milestone.id}
              className={[
                styles.node,
                i % 2 === 0 ? styles.above : styles.below,
              ].join(" ")}
            >
              <div className={styles.content}>
                <p className={styles.label}>{milestone.label}</p>
                <p className={styles.year}>{milestone.year}</p>
                <p className={styles.body}>{milestone.body}</p>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/milestone-badge.svg"
                alt=""
                aria-hidden="true"
                className={styles.badge}
              />
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.mobileWrap}>
        <div className={styles.mobileLine} aria-hidden="true" />
        <ol className={styles.mobileList}>
          {milestones.map((milestone) => (
            <li key={milestone.id} className={styles.mobileItem}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/milestone-badge.svg"
                alt=""
                aria-hidden="true"
                className={styles.mobileBadge}
              />
              <div>
                <p className={styles.label}>{milestone.label}</p>
                <p className={styles.year}>{milestone.year}</p>
                <p className={styles.body}>{milestone.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
