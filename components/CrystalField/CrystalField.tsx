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
};

export default function CrystalField({ opacity }: Props) {
  return (
    <div
      className={styles.field}
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
