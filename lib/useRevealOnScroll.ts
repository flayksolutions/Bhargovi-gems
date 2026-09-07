"use client";

import { useEffect, type RefObject } from "react";

/**
 * Marks an element — or each match of `selector` within it — with
 * `data-revealed="true"` the first time it scrolls into view, then
 * stops observing it. The reveal fires once and never resets, even
 * if the user scrolls back up past it.
 *
 * Under `prefers-reduced-motion: reduce`, every target is marked
 * revealed immediately and no observer is created.
 */
export function useRevealOnScroll<T extends HTMLElement>(
  ref: RefObject<T | null>,
  selector?: string,
  rootMargin = "0px 0px -10% 0px"
) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = selector
      ? Array.from(root.querySelectorAll<HTMLElement>(selector))
      : [root];

    if (targets.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (const target of targets) {
        target.setAttribute("data-revealed", "true");
      }
      return;
    }

    for (const target of targets) {
      target.setAttribute("data-revealed", "false");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin, threshold: 0 }
    );

    for (const target of targets) observer.observe(target);

    return () => observer.disconnect();
  }, [ref, selector, rootMargin]);
}
