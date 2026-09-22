import type { ContactFieldName, ContactFormMessages } from "./content";

export type ContactValues = Record<ContactFieldName, string>;
export type ContactErrors = Partial<Record<ContactFieldName, string>>;

export const EMPTY_CONTACT_VALUES: ContactValues = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  message: "",
};

/** Indian mobile/landline numbers are always 10 digits after the +91 code. */
const PHONE_DIGITS = 10;

const EMAIL_LABEL = "[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?";
const EMAIL_RE = new RegExp(
  `^[A-Za-z0-9._%+-]+@(?:${EMAIL_LABEL}\\.)+[A-Za-z]{2,}$`
);

export function countDigits(value: string): number {
  return value.replace(/\D/g, "").length;
}

/**
 * Formats loosely-typed input into the 10-digit Indian local-number shape,
 * e.g. "9876543210" -> "987 654 3210". The +91 country code is fixed in the
 * UI and prepended separately, so it's stripped here if pasted in. Returns
 * "" when there are no digits.
 */
export function formatPhone(raw: string): string {
  let digits = raw.replace(/\D/g, "");
  if (digits.length > PHONE_DIGITS && digits.startsWith("91")) {
    digits = digits.slice(2);
  } else if (digits.length > PHONE_DIGITS && digits.startsWith("0")) {
    digits = digits.slice(1);
  }
  // One extra digit is kept so validation can reject it instead of silently truncating.
  digits = digits.slice(0, PHONE_DIGITS + 1);
  if (!digits) return "";

  const groups: string[] = [digits.slice(0, 3)];
  if (digits.length > 3) groups.push(digits.slice(3, 6));
  if (digits.length > 6) groups.push(digits.slice(6));
  return groups.join(" ");
}

/**
 * Index in `formatted` just after the Nth digit — used to put the caret back
 * where the user was after the value is reformatted.
 */
export function caretIndexForDigits(
  formatted: string,
  digitCount: number
): number {
  if (digitCount <= 0) return formatted.startsWith("+") ? 1 : 0;
  let seen = 0;
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) {
      seen++;
      if (seen === digitCount) return i + 1;
    }
  }
  return formatted.length;
}

function isValidEmail(email: string): boolean {
  if (email.length > 254) return false;
  if (!EMAIL_RE.test(email)) return false;
  const local = email.slice(0, email.lastIndexOf("@"));
  if (local.length > 64) return false;
  if (local.startsWith(".") || local.endsWith(".")) return false;
  if (email.includes("..")) return false;
  return true;
}

/**
 * Coerces untrusted input (parsed JSON or form state) into trimmed strings,
 * with the phone number formatted. Non-string values become "".
 */
export function normalizeContact(input: Record<string, unknown>): ContactValues {
  const str = (key: ContactFieldName) => {
    const v = input[key];
    return typeof v === "string" ? v.trim() : "";
  };
  return {
    fullName: str("fullName"),
    companyName: str("companyName"),
    email: str("email"),
    phone: formatPhone(str("phone")),
    message: str("message"),
  };
}

/** Prefixes a validated local number with the fixed +91 country code. */
export function withCountryCode(phone: string): string {
  return phone ? `+91 ${phone}` : "";
}

/** Returns an error string per invalid field. Empty object means valid. */
export function validateContact(
  values: ContactValues,
  messages: ContactFormMessages["errors"]
): ContactErrors {
  const msg = messages;
  const v = {
    fullName: values.fullName.trim(),
    companyName: values.companyName.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    message: values.message.trim(),
  };
  const errors: ContactErrors = {};

  if (!v.fullName) errors.fullName = msg.fullName.required;
  else if (v.fullName.length < 2 || v.fullName.length > 100)
    errors.fullName = msg.fullName.invalid;

  if (!v.companyName) errors.companyName = msg.companyName.required;
  else if (v.companyName.length < 2 || v.companyName.length > 120)
    errors.companyName = msg.companyName.invalid;

  if (!v.email) errors.email = msg.email.required;
  else if (!isValidEmail(v.email)) errors.email = msg.email.invalid;

  const phoneDigits = countDigits(v.phone);
  if (phoneDigits === 0) errors.phone = msg.phone.required;
  else if (phoneDigits !== PHONE_DIGITS) errors.phone = msg.phone.invalid;

  if (v.message.length > 2000) errors.message = msg.message.invalid;

  return errors;
}
