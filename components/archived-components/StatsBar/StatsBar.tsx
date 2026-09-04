"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatsBar.module.css";

export type Stat = { value: number; suffix: string; label: string };

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

function useCountUp(target: number, run: boolean, duration = 2000) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }

    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setN(Math.round(easeOutExpo(t) * target));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [run, target, duration]);

  return n;
}

function StatItem({ stat, run }: { stat: Stat; run: boolean }) {
  const n = useCountUp(stat.value, run);
  return (
    <li className={styles.item}>
      <span className={styles.rule} aria-hidden="true" />
      <p className={styles.value}>
        {n}
        <span className={styles.suffix}>{stat.suffix}</span>
      </p>
      <p className={styles.label}>{stat.label}</p>
    </li>
  );
}

export default function StatsBar({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);

  /* Counters start the first time the bar is properly on screen. */
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setRun(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section} aria-label="By the numbers">
      <ul className={styles.grid}>
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} run={run} />
        ))}
      </ul>
    </section>
  );
}
