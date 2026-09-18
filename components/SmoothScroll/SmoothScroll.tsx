"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Always land at the top of a new page — never restore the previous
  // page's (or the browser back/forward cache's) scroll position.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // A hash in the URL (e.g. a cross-page CTA linking to
    // "/diamond-information#shapes") means Next's own hash-scroll is
    // about to bring a specific section into view. Forcing scroll to 0
    // here races that: whichever runs last wins, so the landing spot
    // becomes timing-dependent instead of always correct.
    if (window.location.hash) return;

    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
      // Lenis is a page-lifetime singleton (this effect only runs once,
      // not per route), so without this, momentum left over from
      // scrolling the previous page keeps animating into the next one —
      // fighting the new page's own scroll-to-top/scroll-to-hash and
      // landing wherever that stale target happens to fall.
      stopInertiaOnNavigate: true,
    });

    // Exposed so components can scroll through Lenis instead of fighting it.
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
