"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import type { ContactModalCopy } from "@/lib/content";
import styles from "./ThankYouModal.module.css";

type LenisLike = { stop: () => void; start: () => void };

type Props = ContactModalCopy & {
  open: boolean;
  onClose: () => void;
};

/* Keys that would scroll the page behind the modal. */
const SCROLL_KEYS = new Set([
  "ArrowUp",
  "ArrowDown",
  "PageUp",
  "PageDown",
  "Home",
  "End",
  " ",
]);

export default function ThankYouModal({
  open,
  onClose,
  eyebrow,
  title,
  body,
  closeLabel,
}: Props) {
  const titleId = useId();
  const bodyId = useId();
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;

    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    lenis?.stop();
    closeRef.current?.focus();

    const overlay = overlayRef.current;
    const blockScroll = (e: Event) => {
      // Let the overlay scroll itself when the panel is taller than the viewport.
      if (overlay && overlay.scrollHeight > overlay.clientHeight) return;
      e.preventDefault();
    };
    overlay?.addEventListener("wheel", blockScroll, { passive: false });
    overlay?.addEventListener("touchmove", blockScroll, { passive: false });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onCloseRef.current();
      } else if (e.key === "Tab") {
        // The close button is the only focusable element: keep focus on it.
        e.preventDefault();
        closeRef.current?.focus();
      } else if (
        SCROLL_KEYS.has(e.key) &&
        // Space on the close button must still activate it.
        !(e.key === " " && e.target === closeRef.current)
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      overlay?.removeEventListener("wheel", blockScroll);
      overlay?.removeEventListener("touchmove", blockScroll);
      lenis?.start();
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.shadow}>
        <div
          className={styles.panel}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={bodyId}
        >
          <div className={styles.sheet}>
            <svg
              className={styles.mark}
              viewBox="0 0 72 64"
              aria-hidden="true"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <path
                className={styles.markOutline}
                pathLength={1}
                d="M20 6H52L68 24L36 58L4 24Z"
              />
              <path
                className={styles.markFacets}
                pathLength={1}
                d="M4 24H68M28 24L36 6L44 24M28 24L36 58L44 24"
              />
              <path
                className={styles.markCheck}
                pathLength={1}
                d="M25 30L33 38L48 20"
              />
            </svg>

            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
            <span className={styles.rule} aria-hidden="true" />
            <p id={bodyId} className={styles.body}>
              {body}
            </p>

            <button
              ref={closeRef}
              type="button"
              className={styles.close}
              onClick={onClose}
            >
              {closeLabel}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
