"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ContactFormField, ContactOffice, ContactReachOut } from "@/lib/content";
import styles from "./ContactFormSection.module.css";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

/* Material Icons "call" and "mail" glyphs, inlined as SVG paths so the
   contact block doesn't pull in the whole Material Symbols font for
   two icons. https://fonts.google.com/icons */
const REACH_OUT_ICON_PATHS: Record<string, string> = {
  call: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
  mail: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
  linkedin:
    "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  instagram:
    "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
};

/* Material Symbols "location_on" glyph, inlined for the same reason as
   the reach-out icons above. */
const MAP_PIN_PATH =
  "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z";

type Props = {
  eyebrow: string;
  fields: ContactFormField[];
  submit: { label: string };
  note: string;
  image: string;
  alt: string;
  officesTitle: string;
  offices: ContactOffice[];
  reachOutTitle: string;
  reachOut: ContactReachOut[];
};

export default function ContactFormSection({
  eyebrow,
  fields,
  submit,
  note,
  image,
  alt,
  officesTitle,
  offices,
  reachOutTitle,
  reachOut,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealOnScroll(
    sectionRef,
    `.${styles.plate}, .${styles.card}, .${styles.offices}, .${styles.reachOut}`,
    "0px 0px -20% 0px"
  );

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Contact">
      <div className={styles.plate}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 960px) 100vw, 56vw"
          quality={90}
          className={styles.plateImage}
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>{eyebrow}</p>

          <form className={styles.form}>
            <div className={styles.grid}>
              {fields.map((field, i) => (
                <div
                  key={field.id}
                  className={
                    field.type === "textarea"
                      ? `${styles.field} ${styles.fieldWide}`
                      : styles.field
                  }
                  style={{ ["--i" as string]: i }}
                >
                  <div className={styles.fieldLabel}>
                    <span className={styles.fieldNumber}>{field.number}</span>
                    <label htmlFor={field.id} className={styles.fieldLabelText}>
                      {field.label}
                    </label>
                  </div>

                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.name}
                      rows={1}
                      placeholder={field.placeholder}
                      className={styles.textarea}
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={styles.input}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className={styles.submitRow} style={{ ["--i" as string]: fields.length }}>
              <button type="submit" className={styles.submit}>
                {submit.label}
              </button>
              <p className={styles.note}>{note}</p>
            </div>
          </form>
        </div>

        <div className={styles.offices}>
          <h2 id="contact-offices-title" className={styles.officesTitle}>
            {officesTitle}
          </h2>

          <ul className={styles.officeList}>
            {offices.map((office, i) => (
              <li key={office.id} className={styles.office} style={{ ["--i" as string]: i }}>
                <h3 className={styles.officeName}>{office.name}</h3>
                <p className={styles.officeLabel}>{office.label}</p>
                <p className={styles.officeAddress}>{office.address}</p>
                <Link
                  href={office.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.officeMapLink}
                >
                  <svg
                    className={styles.officeMapIcon}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={MAP_PIN_PATH} fill="currentColor" />
                  </svg>
                  View on Google Maps
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.reachOut}>
          <h2 id="contact-reach-out-title" className={styles.reachOutTitle}>
            {reachOutTitle}
          </h2>

          <ul className={styles.reachOutList}>
            {reachOut.map((item, i) => (
              <li key={item.id} className={styles.reachOutItem} style={{ ["--i" as string]: i }}>
                <h3 className={styles.reachOutName}>{item.name}</h3>
                <Link
                  href={item.href}
                  className={styles.reachOutValue}
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <svg
                    className={styles.reachOutIcon}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={REACH_OUT_ICON_PATHS[item.icon]} fill="currentColor" />
                  </svg>
                  {item.value}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
