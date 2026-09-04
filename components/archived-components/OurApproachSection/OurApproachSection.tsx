import Image from "next/image";
import styles from "./OurApproachSection.module.css";
import type { ApproachStory } from "@/lib/content";

type Props = {
  eyebrow: string;
  titleLines: string[];
  body: string;
  bleedImage: string;
  bleedImageAlt: string;
  stories: ApproachStory[];
};

export default function OurApproachSection({
  eyebrow,
  titleLines,
  body,
  bleedImage,
  bleedImageAlt,
  stories,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="approach-title">
      <div className={styles.inner}>
        <div className={styles.sticky}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="approach-title" className={styles.title}>
            {titleLines.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h2>
          <p className={styles.body}>{body}</p>

          <div className={styles.bleed}>
            <Image
              src={bleedImage}
              alt={bleedImageAlt}
              fill
              sizes="40vw"
              className={styles.bleedImage}
            />
          </div>
        </div>

        <div className={styles.stories}>
          {stories.map((story, i) => (
            <article
              key={story.id}
              className={[
                styles.story,
                i === stories.length - 1 ? styles.storyLast : "",
              ].join(" ")}
            >
              <div className={styles.storyImage}>
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes="(max-width: 960px) 92vw, 44vw"
                  className={styles.storyImageInner}
                />
              </div>
              <h3 className={styles.storyTitle}>{story.title}</h3>
              <p className={styles.storyBody}>{story.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
