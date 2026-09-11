"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* Lock body scroll while the drawer is open. */
  useEffect(() => {
    if (!menuOpen) return;
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = overflow;
    };
  }, [menuOpen]);

  /* Close on Escape. */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

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
    let directionY = window.scrollY;
    let scrollingDown = false;
    // Ignore sub-pixel jitter from Lenis's eased/inertial scroll so the
    // header doesn't flicker direction on every rAF tick.
    const directionThreshold = 6;

    const update = () => {
      queued = false;
      setScrolled(target.getBoundingClientRect().top <= 0);

      const currentY = window.scrollY;
      const delta = currentY - directionY;
      if (Math.abs(delta) > directionThreshold) {
        scrollingDown = delta > 0;
        directionY = currentY;
      }
      setHidden(scrollingDown && currentY > revealThreshold);
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
              <Link
                href={item.href}
                className={[styles.navLink, isActive(item.href) ? styles.active : ""]
                  .filter(Boolean)
                  .join(" ")}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.actions}>
        <Link href={cta.href} className={styles.cta}>
          {cta.label}
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>
      </div>

      <nav
        id="mobile-nav-drawer"
        className={[styles.drawer, menuOpen ? styles.drawerOpen : ""]
          .filter(Boolean)
          .join(" ")}
        aria-label="Mobile"
        inert={!menuOpen}
      >
        <Link
          href="/"
          className={styles.drawerBrand}
          aria-label={brand}
          onClick={() => setMenuOpen(false)}
        >
          <BrandLogo className={styles.drawerLogo} />
        </Link>

        <ul className={styles.drawerList}>
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={styles.drawerLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={cta.href}
          className={styles.drawerCta}
          onClick={() => setMenuOpen(false)}
        >
          {cta.label}
        </Link>
      </nav>
    </header>
  );
}
