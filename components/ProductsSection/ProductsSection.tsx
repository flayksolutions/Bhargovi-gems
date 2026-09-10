"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./ProductsSection.module.css";
import logo from "@/public/brand/bhargovi/brand-logo.png";

type Shape = {
  src: string;
  name: string;
};

type Props = {
  eyebrow: string;
  title: string;
  tagline: string;
  background: string;
  shapes: Shape[];
};

// Base columns per breakpoint, matching the CSS `--shapes-per-row`
// defaults in ProductsSection.module.css (7 desktop, 3 at <=960px).
function basePerRow(width: number) {
  return width <= 960 ? 3 : 7;
}

export default function ProductsSection({
  eyebrow,
  title,
  tagline,
  background,
  shapes,
}: Props) {
  // flex-wrap fills each row to a fixed width and dumps the remainder
  // into the last row, so a hardcoded --shapes-per-row leaves an
  // unevenly short final row whenever the count doesn't divide evenly.
  // Recomputing it from the actual shape count spreads rows evenly.
  const [perRow, setPerRow] = useState<number | undefined>(undefined);

  useEffect(() => {
    function update() {
      const base = basePerRow(window.innerWidth);
      const rows = Math.ceil(shapes.length / base);
      setPerRow(rows > 0 ? Math.ceil(shapes.length / rows) : base);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [shapes.length]);

  const shapesRowStyle = perRow
    ? ({ "--shapes-per-row": perRow } as CSSProperties)
    : undefined;

  return (
    <section className={styles.section} aria-labelledby="products-title">
      <div className={styles.backdrop} aria-hidden="true">
        <Image
          src={background}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className={styles.backdropImage}
        />
      </div>

      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id="products-title" className={styles.title}>
          {title}
        </h2>

        <ul className={styles.shapesRow} style={shapesRowStyle}>
          {shapes.map((shape, index) => (
            <li key={`${shape.src}-${index}`} className={styles.shapeCard}>
              <div className={styles.shapeImageWrap}>
                <Image
                  src={shape.src}
                  alt={shape.name}
                  width={160}
                  height={160}
                  sizes="(max-width: 640px) 28vw, (max-width: 960px) 15vw, 11vw"
                  className={styles.shapeImage}
                />
              </div>
              <span className={styles.shapeName}>{shape.name}</span>
            </li>
          ))}
        </ul>
        <div>
        {/* <Image
                  src={logo}
                  alt={"logo"}
                  width={160}
                  height={160}
                  sizes="(max-width: 120px) 28vw, (max-width: 960px) 15vw, 11vw"
                  // className={styles.shapeImage}
                /> */}
        <p className={styles.tagline}>{tagline}</p>
        </div>
      </div>
    </section>
  );
}
