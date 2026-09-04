"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BrandLogo from "../BrandLogo/BrandLogo";
import styles from "./SiteHeader.module.css";

export type NavLink = { label: string; href: string };

type Props = {
  brand: string;
  nav: NavLink[];
  cta: { label: string; href: string };
};

export default function SiteHeader({ brand, nav, cta }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  /* Switch on the instant the second section (the first child of
     .scroll-stack) reaches the top of the viewport. Also track scroll
     direction: hide the header on scroll-down past one header-height of
     scroll (so it doesn't flicker away right at the top), reveal it again
     on any scroll-up. */
  useEffect(() => {
    const target = document.querySelector(".scroll-stack");
    if (!target) return;

    const header = document.querySelector("header");
    const revealThreshold =
      header?.getBoundingClientRect().height ?? 92;

    let queued = false;
    let rafId = 0;
    let lastY = window.scrollY;

    const update = () => {
      queued = false;
      setScrolled(target.getBoundingClientRect().top <= 0);

      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY;
      setHidden(scrollingDown && currentY > revealThreshold);
      lastY = currentY;
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
    scrolled ? styles.scrolled : "",
    hidden ? styles.hidden : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={className}>
      <div className={styles.backdrop} aria-hidden="true" />

      <Link href="/" className={styles.brand} aria-label={brand}>
        <BrandLogo className={styles.logo} />
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
