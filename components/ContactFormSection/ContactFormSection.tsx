"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import type {
  ContactFieldName,
  ContactFormField,
  ContactFormMessages,
  ContactModalCopy,
  ContactOffice,
  ContactReachOut,
} from "@/lib/content";
import styles from "./ContactFormSection.module.css";
import {
  EMPTY_CONTACT_VALUES,
  caretIndexForDigits,
  countDigits,
  formatPhone,
  normalizeContact,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/lib/contactValidation";
import ThankYouModal from "./ThankYouModal";

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
  messages: ContactFormMessages;
  modal: ContactModalCopy;
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
  messages,
  modal,
  image,
  alt,
  officesTitle,
  offices,
  reachOutTitle,
  reachOut,
}: Props) {
  const mountedAt = useRef(0);
  const submitRef = useRef<HTMLButtonElement>(null);
  const [values, setValues] = useState<ContactValues>(EMPTY_CONTACT_VALUES);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<ContactFieldName, boolean>>
  >({});
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [modalOpen, setModalOpen] = useState(false);

  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    mountedAt.current = performance.now();
  }, []);

  // Grow the message box with its content (and shrink back after a reset).
  useEffect(() => {
    const el = messageRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight + (el.offsetHeight - el.clientHeight)}px`;
  }, [values.message]);

  const update = (name: ContactFieldName, value: string) => {
    const next = { ...values, [name]: value };
    setValues(next);
    if (status === "error") setStatus("idle");
    if (touched[name]) {
      const e = validateContact(next, messages.errors)[name];
      setErrors((prev) => {
        const merged = { ...prev };
        if (e) merged[name] = e;
        else delete merged[name];
        return merged;
      });
    }
  };

  const handleBlur = (name: ContactFieldName) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const e = validateContact(values, messages.errors)[name];
    setErrors((prev) => {
      const merged = { ...prev };
      if (e) merged[name] = e;
      else delete merged[name];
      return merged;
    });
  };

  /* Strip non-digits as the user types and keep the caret next to the same
     digit, so editing in the middle of the number still works. */
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const el = e.target;
    const caret = el.selectionStart ?? el.value.length;
    const digitsBeforeCaret = countDigits(el.value.slice(0, caret));
    const formatted = formatPhone(el.value);
    update("phone", formatted);
    const pos = caretIndexForDigits(formatted, digitsBeforeCaret);
    requestAnimationFrame(() => el.setSelectionRange(pos, pos));
  };

  const focusField = (id: string) => document.getElementById(id)?.focus();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const found = validateContact(values, messages.errors);
    setErrors(found);
    setTouched({
      fullName: true,
      companyName: true,
      email: true,
      phone: true,
      message: true,
    });
    const firstInvalid = fields.find((f) => found[f.name]);
    if (firstInvalid) {
      focusField(firstInvalid.id);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...normalizeContact(values),
          referralCode: honeypot,
          elapsedMs: Math.round(performance.now() - mountedAt.current),
        }),
      });

      if (res.status === 400) {
        const data = (await res.json().catch(() => null)) as {
          errors?: ContactErrors;
        } | null;
        if (data?.errors) {
          setErrors(data.errors);
          setStatus("idle");
          const invalid = fields.find((f) => data.errors?.[f.name]);
          if (invalid) focusField(invalid.id);
          return;
        }
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setStatus("idle");
      setModalOpen(true);
    } catch (err) {
      console.error("[contact] submit failed:", err);
      setStatus("error");
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setValues(EMPTY_CONTACT_VALUES);
    setErrors({});
    setTouched({});
    setHoneypot("");
    setStatus("idle");
    mountedAt.current = performance.now();
    requestAnimationFrame(() => submitRef.current?.focus());
  };

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

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.grid}>
              {fields.map((field, i) => {
                const error = errors[field.name];
                const errorId = `${field.id}-error`;
                const common = {
                  id: field.id,
                  name: field.name,
                  placeholder: field.placeholder,
                  value: values[field.name],
                  "aria-invalid": error ? true : undefined,
                  "aria-describedby": error ? errorId : undefined,
                  "aria-required": field.optional ? undefined : true,
                  autoComplete: field.autoComplete,
                  onBlur: () => handleBlur(field.name),
                };

                return (
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
                      {field.optional && (
                        <span className={styles.optionalTag}>
                          {messages.optionalTag}
                        </span>
                      )}
                    </div>

                    {field.type === "textarea" ? (
                      <textarea
                        {...common}
                        ref={messageRef}
                        rows={1}
                        className={styles.textarea}
                        onChange={(e) => update(field.name, e.target.value)}
                      />
                    ) : field.name === "phone" ? (
                      <div
                        className={`${styles.phoneRow}${
                          error ? ` ${styles.phoneRowInvalid}` : ""
                        }`}
                      >
                        <span className={styles.phonePrefix} aria-hidden="true">
                          +91
                        </span>
                        <input
                          {...common}
                          type="tel"
                          inputMode="numeric"
                          className={styles.phoneInput}
                          onChange={handlePhoneChange}
                        />
                      </div>
                    ) : (
                      <input
                        {...common}
                        type={field.type}
                        className={styles.input}
                        onChange={(e) => update(field.name, e.target.value)}
                      />
                    )}

                    {error && (
                      <p id={errorId} className={styles.error}>
                        {error}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Honeypot: invisible to people, tempting to bots. */}
            <div className={styles.honeypot} aria-hidden="true">
              <label>
                Referral code
                <input
                  type="text"
                  name="referral_code"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </label>
            </div>

            {status === "error" && (
              <p className={styles.formError} role="alert">
                {messages.submitError}{" "}
                <a href={`mailto:${messages.fallbackEmail}`}>
                  {messages.fallbackEmail}
                </a>
                .
              </p>
            )}

            <div className={styles.submitRow} style={{ ["--i" as string]: fields.length }}>
              <button
                ref={submitRef}
                type="submit"
                className={styles.submit}
                disabled={status === "sending"}
              >
                {status === "sending" ? messages.sending : submit.label}
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
      <ThankYouModal open={modalOpen} onClose={handleModalClose} {...modal} />
    </section>
  );
}
