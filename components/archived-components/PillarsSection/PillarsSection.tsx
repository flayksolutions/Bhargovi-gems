import Image from "next/image";
import styles from "./PillarsSection.module.css";
import type { LegacyPillarCard as PillarCard } from "@/lib/content";

type Props = {
  background: string;
  cards: PillarCard[];
};

export default function PillarsSection({ background, cards }: Props) {
  return (
    <section className={styles.section} aria-label="Sustainability pillars">
      <div className={styles.plate} aria-hidden="true">
        <Image
          src={background}
          alt=""
          fill
          sizes="100vw"
          className={styles.plateImage}
        />
      </div>

      <div className={styles.panel}>
        {cards.map((card) => (
          <article key={card.id} className={styles.card}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={card.icon} alt="" className={styles.icon} width={40} height={40} />
            <h3 className={styles.cardTitle}>{card.name}</h3>
            <p className={styles.cardBody}>{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
