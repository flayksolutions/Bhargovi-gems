import styles from "./LabGrownVsMinedSection.module.css";

type Card = {
  id: string;
  tag: string;
  emphasis: boolean;
  title: string;
  subtitle: string;
  bullets: string[];
};

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  cards: Card[];
  disclaimer: string;
};

export default function LabGrownVsMinedSection({ id, eyebrow, title, body, cards, disclaimer }: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby="lab-vs-mined-title">
      <header className={styles.head}>
        <p className={styles.eyebrow}>
          <span className={styles.rule} aria-hidden="true" />
          {eyebrow}
          <span className={styles.rule} aria-hidden="true" />
        </p>
        <h2 id="lab-vs-mined-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.body}>{body}</p>
      </header>

      <div className={styles.cards}>
        {cards.map((card) => (
          <article
            key={card.id}
            className={[styles.card, card.emphasis ? styles.cardEmphasis : ""].filter(Boolean).join(" ")}
          >
            <span className={styles.tag}>{card.tag}</span>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.subtitle}>{card.subtitle}</p>
            <span className={styles.divider} aria-hidden="true" />
            <ul className={styles.bullets}>
              {card.bullets.map((bullet) => (
                <li key={bullet}>
                  <span className={styles.glyph} aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className={styles.disclaimer}>{disclaimer}</p>
    </section>
  );
}
