"use client";

import { useEffect, type RefObject } from "react";

/**
 * Makes a horizontally-scrolling element usable with a mouse: an already-
 * horizontal wheel gesture (shift+wheel, or a trackpad's horizontal swipe)
 * and a click-drag both pan it sideways. A plain vertical wheel is left
 * alone so the page keeps scrolling normally while the cursor happens to
 * be over the dock — hijacking that felt jarring.
 *
 * Wheel input is redirected to `scrollLeft` only while the element still
 * has room to scroll in that direction — once an edge is reached, the
 * event is left alone so the page keeps scrolling vertically instead of
 * getting stuck against the dock. The element should also carry
 * `data-lenis-prevent-horizontal` so Lenis (which otherwise treats any
 * wheel event with a nonzero deltaY as a vertical-scroll intent, even one
 * that's mostly horizontal) steps aside for a shift+wheel/trackpad swipe
 * without also losing its smooth vertical scroll for plain wheel input
 * over the dock.
 *
 * Drag-to-scroll listens on `window` rather than capturing the pointer,
 * and only starts panning once the mouse has actually moved past a small
 * threshold — that way a plain click still reaches the button underneath
 * instead of being swallowed as a zero-distance drag.
 */
export function usePointerHorizontalScroll(scrollerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Only a gesture that's already horizontal (shift+wheel, or a
      // trackpad swipe) should pan the dock — a plain vertical wheel
      // must keep scrolling the page.
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 1) return;
      const delta = e.deltaX;
      const atStart = el.scrollLeft <= 0 && delta < 0;
      const atEnd = el.scrollLeft >= max - 1 && delta > 0;
      if (atStart || atEnd) return;
      el.scrollLeft += delta;
      e.preventDefault();
    };

    const DRAG_THRESHOLD = 4;
    let pointerId: number | null = null;
    let startX = 0;
    let startScrollLeft = 0;
    let dragging = false;

    const onPointerMove = (e: PointerEvent) => {
      if (pointerId === null || e.pointerId !== pointerId) return;
      const dx = e.clientX - startX;
      if (!dragging) {
        if (Math.abs(dx) < DRAG_THRESHOLD) return;
        dragging = true;
        el.style.cursor = "grabbing";
      }
      el.scrollLeft = startScrollLeft - dx;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (pointerId === null || e.pointerId !== pointerId) return;
      if (dragging) {
        // Swallow the click that follows a drag so it doesn't select a shape.
        const suppressClick = (ev: MouseEvent) => {
          ev.preventDefault();
          ev.stopPropagation();
        };
        el.addEventListener("click", suppressClick, { capture: true, once: true });
      }
      pointerId = null;
      dragging = false;
      el.style.cursor = "";
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      pointerId = e.pointerId;
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerdown", onPointerDown);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [scrollerRef]);
}
