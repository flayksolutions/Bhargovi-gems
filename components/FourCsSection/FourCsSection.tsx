"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./FourCsSection.module.css";
import type { FourCCard, FourCNote } from "@/lib/content";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

type Props = {
  id: string;
  eyebrow: string;
  titleLines: string[];
  body: string;
  cards: FourCCard[];
};

function Note({ note }: { note: FourCNote }) {
  return (
    <p className={styles.note}>
      <span className={styles.noteDot} aria-hidden="true" />
      {note.lead && <>{note.lead} </>}
      <span className={styles.noteAccent}>{note.accent}</span>
      {note.trail && <> {note.trail}</>}
    </p>
  );
}

function CardGraphic({ card }: { card: FourCCard }) {
  if (card.kind === "scale") {
    return (
      <div className={styles.graphic}>
        {card.diagram && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={card.diagram} alt="" aria-hidden="true" className={styles.diagram} />
        )}

        <div className={styles.scaleTrack} style={{ ["--fill" as string]: card.fill ?? 0 }}>
          <span className={styles.scaleFill} aria-hidden="true" />
        </div>

        <ul className={styles.ticks}>
          {card.ticks?.map((tick) => (
            <li key={tick}>{tick}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (card.kind === "gems") {
    return (
      <div className={styles.graphic}>
        <ul className={styles.gemRow}>
          {card.items?.map((item, i) => (
            <li key={item.id} className={styles.gem} style={{ ["--i" as string]: i }}>
              <span className={styles.gemDisc}>
                {card.photo && (
                  <Image
                    src={card.photo}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="64px"
                    className={styles.gemPhoto}
                  />
                )}
                <span
                  className={styles.gemTint}
                  aria-hidden="true"
                  style={{ ["--tint" as string]: item.tint }}
                />
              </span>
              <span className={styles.itemLabel}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (card.kind === "loupes") {
    return (
      <div className={styles.graphic}>
        <ul className={styles.loupeRow}>
          {card.items?.map((item, i) => (
            <li key={item.id} className={styles.loupe} style={{ ["--i" as string]: i }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.icon} alt="" aria-hidden="true" className={styles.loupeIcon} />
              <span className={styles.itemLabel}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.graphic}>
      <ul className={styles.caratRow}>
        {card.items?.map((item, i) => (
          <li
            key={item.id}
            className={styles.carat}
            style={{ ["--s" as string]: item.size, ["--i" as string]: i }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.icon} alt="" aria-hidden="true" className={styles.caratIcon} />
            <span className={styles.itemLabel}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FourCsSection({ id, eyebrow, titleLines, body, cards }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(sectionRef, `.${styles.card}`);

  return (
    <section id={id} className={styles.section} aria-labelledby="four-cs-title" ref={sectionRef}>
      <div className={styles.inner}>
        <header className={styles.head}>
          <div className={styles.headLeft}>
            <p className={styles.eyebrow}>
              <span className={styles.rule} aria-hidden="true" />
              {eyebrow}
            </p>
            <h2 id="four-cs-title" className={styles.title}>
              <span>{titleLines[0]}</span>
              <span className={styles.titleAccent}>{titleLines[1]}</span>
            </h2>
          </div>
          <p className={styles.body}>{body}</p>
        </header>

        <ol className={styles.grid}>
          {cards.map((card, i) => (
            <li key={card.id} className={styles.card} style={{ ["--i" as string]: i }}>
              <h3 className={styles.cardHead}>
                <span className={styles.cardNumber}>{card.number}</span>
                <span className={styles.cardName}>{card.name}</span>
              </h3>
              <p className={styles.caption}>{card.caption}</p>

              <CardGraphic card={card} />

              <Note note={card.note} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
