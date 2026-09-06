import styles from "./CrystalField.module.css";

/* Two oversized faceted-gem outlines bleeding off the top corners of a
   section — the same watermark treatment (and the same asset) as the
   shapes & cuts section on the diamond information page.

   Purely decorative: the wrapper is aria-hidden and clips its own
   overflow so the crystals never widen the page. */

type Props = {
  /* Lets a section raise or lower the watermark against its own
     background; 0.16 is the value used on diamond information. */
  opacity?: number;
  /* Sizes the crystals off the section's own box (%) instead of the
     viewport (vw), so they scale with tall sections instead of
     clamping to a sliver pinned under the top edge. Off by default to
     leave the diamond-information corner-accent look untouched. */
  full?: boolean;
  /* Same size, tilt and left/right placement as the homepage About
     section's growing card, for sections that want the two "About Us"
     treatments to read as the same motif. */
  card?: boolean;
};

export default function CrystalField({ opacity, full, card }: Props) {
  return (
    <div
      className={[
        styles.field,
        full ? styles.fieldFull : "",
        card ? styles.fieldCard : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
      style={
        opacity === undefined
          ? undefined
          : ({ "--crystal-opacity": opacity } as React.CSSProperties)
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/diamond-info/crystal-outline.svg"
        alt=""
        className={`${styles.crystal} ${styles.crystalLeft}`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/diamond-info/crystal-outline.svg"
        alt=""
        className={`${styles.crystal} ${styles.crystalRight}`}
      />
    </div>
  );
}
