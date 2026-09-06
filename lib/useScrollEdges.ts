"use client";

import { useEffect, type RefObject } from "react";

/**
 * Watches a horizontally scrollable element and stamps a `data-fade`
 * attribute on a shell element so CSS can show an edge gradient on
 * whichever side still has hidden content.
 *
 *   data-fade="none"  — content fits, nothing hidden
 *   data-fade="start" — scrolled to the right end, content hidden left
 *   data-fade="end"   — at the left edge, content hidden right
 *   data-fade="both"  — somewhere in the middle
 *
 * The attribute is written straight to the DOM (no React state), so the
 * scroll listener never re-renders the component. Reads are rAF-throttled
 * and re-run on resize and on any content/size change (ResizeObserver on
 * the scroller and on its content box, plus a MutationObserver for items
 * added or removed).
 */
export function useScrollEdges(
  scrollerRef: RefObject<HTMLElement | null>,
  shellRef: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    const scroller = scrollerRef.current;
    const shell = shellRef.current;
    if (!scroller || !shell) return;

    let frame = 0;

    const apply = () => {
      frame = 0;
      const max = scroller.scrollWidth - scroller.clientWidth;
      // Sub-pixel layout and fractional scroll positions mean the ends
      // rarely land on exact integers — 1px of slack avoids a gradient
      // that never quite fades out at either end.
      if (max <= 1) {
        shell.setAttribute("data-fade", "none");
        return;
      }
      const left = scroller.scrollLeft;
      const atStart = left <= 1;
      const atEnd = left >= max - 1;
      shell.setAttribute(
        "data-fade",
        atStart && atEnd ? "none" : atStart ? "end" : atEnd ? "start" : "both"
      );
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };

    apply();

    scroller.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(scroller);
    for (const child of Array.from(scroller.children)) {
      resizeObserver.observe(child);
    }

    const mutationObserver = new MutationObserver(schedule);
    mutationObserver.observe(scroller, { childList: true, subtree: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [scrollerRef, shellRef]);
}
