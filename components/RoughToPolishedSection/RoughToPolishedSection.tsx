import styles from "./RoughToPolishedSection.module.css";
import type { RoughStage } from "@/lib/content";

const ICON_SRC: Record<RoughStage["icon"], string> = {
  hex: "/images/diamond-info/node-hex.svg",
  outline: "/images/diamond-info/node-outline.svg",
  filled: "/images/diamond-info/node-filled.svg",
};

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  startLabel: string;
  endLabel: string;
  stages: RoughStage[];
};

export default function RoughToPolishedSection({
  id,
  eyebrow,
  title,
  body,
  startLabel,
  endLabel,
  stages,
}: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby="rough-to-polished-title">
      <header className={styles.head}>
        <p className={styles.eyebrow}>
          <span className={styles.rule} aria-hidden="true" />
          {eyebrow}
          <span className={styles.rule} aria-hidden="true" />
        </p>
        <h2 id="rough-to-polished-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.body}>{body}</p>
      </header>

      <div className={styles.wave}>
        <span className={styles.startLabel}>{startLabel}</span>
        <span className={styles.endLabel}>{endLabel}</span>
        <ol className={styles.line}>
          {stages.map((stage, i) => (
            <li
              key={stage.id}
              className={[styles.node, i % 2 === 0 ? styles.above : styles.below].join(" ")}
            >
              <div className={styles.content}>
                <p className={styles.number}>{stage.number}</p>
                <p className={styles.name}>{stage.name}</p>
                <p className={styles.description}>{stage.description}</p>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ICON_SRC[stage.icon]} alt="" aria-hidden="true" className={styles.badge} />
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.mobileWrap}>
        <div className={styles.mobileLine} aria-hidden="true" />
        <ol className={styles.mobileList}>
          {stages.map((stage) => (
            <li key={stage.id} className={styles.mobileItem}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ICON_SRC[stage.icon]} alt="" aria-hidden="true" className={styles.mobileBadge} />
              <div>
                <p className={styles.number}>{stage.number}</p>
                <p className={styles.name}>{stage.name}</p>
                <p className={styles.description}>{stage.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
