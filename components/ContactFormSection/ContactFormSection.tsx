import Image from "next/image";
import type { ContactFormField } from "@/lib/content";
import styles from "./ContactFormSection.module.css";

type Props = {
  eyebrow: string;
  title: string;
  fields: ContactFormField[];
  submit: { label: string };
  note: string;
  image: string;
  alt: string;
};

export default function ContactFormSection({
  eyebrow,
  title,
  fields,
  submit,
  note,
  image,
  alt,
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="contact-form-title">
      <div className={styles.plate}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 960px) 100vw, 42vw"
          quality={90}
          className={styles.plateImage}
        />
      </div>

      <div className={styles.card}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="contact-form-title" className={styles.title}>
            {title}
          </h2>
        </div>

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
    </section>
  );
}
