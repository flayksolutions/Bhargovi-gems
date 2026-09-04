"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./IntegritySection.module.css";

type ImageItem = { src: string; alt: string };

type Props = {
  title: string;
  body: string;
  points: string[];
  images: ImageItem[];
};

export default function IntegritySection({ title, body, points, images }: Props) {
  const [main, sliver] = images;

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const sync = () => {
      section.style.setProperty("--stage-h", `${stage.offsetHeight}px`);
    };

    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="integrity-title">
      {sliver && (
        <div className={styles.sliver} aria-hidden="true">
          <Image
            src={sliver.src}
            alt=""
            fill
            sizes="20vw"
            className={styles.image}
          />
        </div>
      )}

      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 id="integrity-title" className={styles.title}>
            {title}
          </h2>

          <div className={styles.foot}>
            <p className={styles.body}>{body}</p>

            <ul className={styles.points}>
              {points.map((point) => (
                <li key={point} className={styles.point}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {main && (
          <div ref={stageRef} className={styles.stage}>
            <Image
              src={main.src}
              alt={main.alt}
              fill
              sizes="(max-width: 900px) 90vw, 36vw"
              className={styles.image}
            />
          </div>
        )}
      </div>
    </section>
  );
}
