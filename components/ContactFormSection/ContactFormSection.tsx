import Image from "next/image";
import Link from "next/link";
import type { ContactFormField, ContactOffice, ContactReachOut } from "@/lib/content";
import styles from "./ContactFormSection.module.css";

/* Material Icons "call" and "mail" glyphs, inlined as SVG paths so the
   contact block doesn't pull in the whole Material Symbols font for
   two icons. https://fonts.google.com/icons */
const REACH_OUT_ICON_PATHS: Record<string, string> = {
  call: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
  mail: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
};

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
  return (
    <section className={styles.section} aria-label="Contact">
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
              {fields.map((field) => (
                <div
                  key={field.id}
                  className={
                    field.type === "textarea"
                      ? `${styles.field} ${styles.fieldWide}`
                      : styles.field
                  }
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

            <div className={styles.submitRow}>
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
            {offices.map((office) => (
              <li key={office.id} className={styles.office}>
                <h3 className={styles.officeName}>{office.name}</h3>
                <p className={styles.officeLabel}>{office.label}</p>
                <p className={styles.officeAddress}>{office.address}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.reachOut}>
          <h2 id="contact-reach-out-title" className={styles.reachOutTitle}>
            {reachOutTitle}
          </h2>

          <ul className={styles.reachOutList}>
            {reachOut.map((item) => (
              <li key={item.id} className={styles.reachOutItem}>
                <h3 className={styles.reachOutName}>{item.name}</h3>
                <Link href={item.href} className={styles.reachOutValue}>
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
