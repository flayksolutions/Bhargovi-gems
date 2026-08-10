"use client";

import { useEffect, useRef } from "react";
import styles from "./MilestonesSection.module.css";
import type { Milestone } from "@/lib/content";

type Props = {
  eyebrow: string;
  title: string;
  milestones: Milestone[];
};

export default function MilestonesSection({ eyebrow, title, milestones }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mobileTrack = mobileTrackRef.current;
    if (!section || !mobileTrack) return;

    const items = Array.from(
      section.querySelectorAll<HTMLElement>("[data-milestone-index]")
    );
    const thresholds = items.map((el) => {
      const i = Number(el.dataset.milestoneIndex);
      return milestones.length > 1 ? i / (milestones.length - 1) : 0;
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.style.setProperty("--p", "1");
      items.forEach((el) => el.classList.add(styles.revealed));
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 880px)");

    let rafId = 0;
    let queued = false;

    const update = () => {
      queued = false;
      let p: number;

      if (mobileQuery.matches) {
        const rect = mobileTrack.getBoundingClientRect();
        const total = rect.height + window.innerHeight;
        p = Math.min(Math.max((window.innerHeight - rect.top) / total, 0), 1);
      } else {
        const rect = section.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        p = total <= 0 ? 1 : Math.min(Math.max(-rect.top / total, 0), 1);
      }

      section.style.setProperty("--p", p.toFixed(4));

      items.forEach((el, i) => {
        el.classList.toggle(styles.revealed, p >= thresholds[i]);
      });
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [milestones.length]);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="milestones-title">
      <div className={styles.pin}>
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
                data-milestone-index={i}
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

                <span className={styles.badge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/milestone-badge-box.svg"
                    alt=""
                    aria-hidden="true"
                    className={styles.badgeBox}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/milestone-badge-icon.svg"
                    alt=""
                    aria-hidden="true"
                    className={styles.badgeIcon}
                  />
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.mobileWrap} ref={mobileTrackRef}>
          <div className={styles.mobileLine} aria-hidden="true" />
          <ol className={styles.mobileList}>
            {milestones.map((milestone, i) => (
              <li
                key={milestone.id}
                data-milestone-index={i}
                className={styles.mobileItem}
              >
                <span className={[styles.badge, styles.mobileBadge].join(" ")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/milestone-badge-box.svg"
                    alt=""
                    aria-hidden="true"
                    className={styles.badgeBox}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/milestone-badge-icon.svg"
                    alt=""
                    aria-hidden="true"
                    className={styles.badgeIcon}
                  />
                </span>
                <div className={styles.mobileContent}>
                  <p className={styles.label}>{milestone.label}</p>
                  <p className={styles.year}>{milestone.year}</p>
                  <p className={styles.body}>{milestone.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
