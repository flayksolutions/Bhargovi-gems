import Image from "next/image";
import styles from "./WhyChooseUsSection.module.css";
import type { WhyChooseUsItem } from "@/lib/content";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  items: WhyChooseUsItem[];
};

export default function WhyChooseUsSection({
  eyebrow,
  title,
  body,
  image,
  alt,
  items,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="why-choose-us-title">
      {/* Full-bleed cut-out: anchored to the section's own left edge, so
          it always runs off the left side of the viewport. */}
      <div className={styles.bleed}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 46vw, (max-width: 960px) 32vw, 23vw"
          className={styles.bleedImage}
        />
      </div>

      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="why-choose-us-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.lede}>{body}</p>
        </header>

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.id} className={styles.item}>
              <span className={styles.iconFrame}>
                <Image
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  width={89}
                  height={88}
                  className={styles.icon}
                />
              </span>
              <div className={styles.itemCopy}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemBody}>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
