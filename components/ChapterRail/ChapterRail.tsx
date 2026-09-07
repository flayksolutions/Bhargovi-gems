"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ChapterRail.module.css";
import { useScrollEdges } from "@/lib/useScrollEdges";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";
import type { Chapter } from "@/lib/content";

type Props = {
  chapters: Chapter[];
};

declare global {
  interface Window {
    __lenis?: { scrollTo: (target: string | number | HTMLElement, opts?: Record<string, unknown>) => void };
  }
}

export default function ChapterRail({ chapters }: Props) {
  const [activeId, setActiveId] = useState(chapters[0]?.id);
  const railRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  // Fades the rail's leading/trailing edge while chapters overflow it.
  useScrollEdges(listRef, railRef);

  useRevealOnScroll(railRef);
  useRevealOnScroll(railRef, `.${styles.item}`);

  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [chapters]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: -96 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={styles.rail} aria-label="Page chapters" ref={railRef} data-fade="none">
      <ol className={styles.list} ref={listRef}>
        {chapters.map((chapter, i) => (
          <li
            key={chapter.id}
            className={styles.item}
            style={{ ["--i" as string]: i }}
          >
            <a
              href={`#${chapter.id}`}
              className={[styles.link, chapter.id === activeId ? styles.active : ""]
                .filter(Boolean)
                .join(" ")}
              onClick={(e) => handleClick(e, chapter.id)}
              aria-current={chapter.id === activeId ? "true" : undefined}
            >
              <span className={styles.number}>{chapter.number}</span>
              <span className={styles.label}>{chapter.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
