"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./SiteHeader.module.css";

export type NavLink = { label: string; href: string };

type Props = {
  brand: string;
  nav: NavLink[];
  cta: { label: string; href: string };
};

export default function SiteHeader({ brand, nav, cta }: Props) {
  const [hidden, setHidden] = useState(false);
  const [floating, setFloating] = useState(false);
  const lastY = useRef(0);

  /* Hide on the way down, bring it straight back on the way up. */
  useEffect(() => {
    lastY.current = window.scrollY;
    let queued = false;
    let rafId = 0;

    const update = () => {
      queued = false;
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y < 12) {
        setHidden(false);
        setFloating(false);
      } else {
        setFloating(true);
        // Ignore sub-pixel jitter so it doesn't flicker mid-scroll.
        if (Math.abs(delta) > 6) setHidden(delta > 0);
      }

      lastY.current = y;
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const className = [
    styles.header,
    floating ? styles.floating : "",
    hidden ? styles.hidden : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={className}>
      <Link href="/" className={styles.brand} aria-label={brand}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/monogram.svg"
          alt=""
          className={styles.monogram}
          width={40}
          height={40}
        />
        <span className={styles.wordmark}>{brand}</span>
      </Link>

      <nav className={styles.nav} aria-label="Primary">
        <ul className={styles.navList}>
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href={cta.href} className={styles.cta}>
        {cta.label}
      </Link>
    </header>
  );
}
