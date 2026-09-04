import styles from "./PinnedHeroSpacer.module.css";

/* Reserves the flow space a `position: fixed` pinned hero no longer
   occupies, and sets how far you scroll before the next section fully
   covers it. Pair with a hero section using the fixed + negative
   z-index pin technique (see Hero.module.css). `data-hero-spacer` is
   the opt-out this component owns for the global pointer-events
   pass-through in app/globals.css — it has no content to click, so it
   stays out of that pass-through instead of intercepting clicks meant
   for the pinned hero underneath it. */
export default function PinnedHeroSpacer() {
  return <div className={styles.spacer} data-hero-spacer aria-hidden="true" />;
}
