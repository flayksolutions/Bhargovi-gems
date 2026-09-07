import Image from "next/image";
import type { ContactFormField, ContactOffice } from "@/lib/content";
import styles from "./ContactFormSection.module.css";

type Props = {
  eyebrow: string;
  fields: ContactFormField[];
  submit: { label: string };
  note: string;
  image: string;
  alt: string;
  officesTitle: string;
  offices: ContactOffice[];
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
      </div>
    </section>
  );
}
