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

const MAX_PHONE_DIGITS = 15;
const MIN_PHONE_DIGITS = 7;

const EMAIL_LABEL = "[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?";
const EMAIL_RE = new RegExp(
  `^[A-Za-z0-9._%+-]+@(?:${EMAIL_LABEL}\\.)+[A-Za-z]{2,}$`
);

export function countDigits(value: string): number {
  return value.replace(/\D/g, "").length;
}

/** Length of the country calling code at the start of `digits` (1-3). */
function countryCodeLength(digits: string): number {
  const a = digits[0];
  const b = digits[1];
  if (a === "1" || a === "7") return 1;
  if (b === undefined) return 2;
  switch (a) {
    case "2":
      return b === "0" || b === "7" ? 2 : 3;
    case "3":
      return "578".includes(b) ? 3 : 2;
    case "4":
      return b === "2" ? 3 : 2;
    case "5":
      return b === "0" || b === "9" ? 3 : 2;
    case "6":
      return "789".includes(b) ? 3 : 2;
    case "8":
      return ["850", "852", "853", "855", "856", "880", "886"].includes(
        digits.slice(0, 3)
      )
        ? 3
        : 2;
    case "9":
      return "679".includes(b) ? 3 : 2;
    default:
      return 2;
  }
}

/**
 * Formats loosely-typed input into the placeholder shape, e.g.
 * "9876543210" -> "+98 765 432 10", "+919876543210" -> "+91 987 654 3210".
 * Returns "" when there are no digits. A leading "+" is always added.
 */
export function formatPhone(raw: string): string {
  // One extra digit is kept so validation can reject it instead of silently truncating.
  const digits = raw.replace(/\D/g, "").slice(0, MAX_PHONE_DIGITS + 1);
  if (!digits) return "";

  const ccLen = countryCodeLength(digits);
  const country = digits.slice(0, ccLen);
  const rest = digits.slice(ccLen);

  const groups: string[] = [];
  if (rest.length > 0) groups.push(rest.slice(0, 3));
  if (rest.length > 3) groups.push(rest.slice(3, 6));
  if (rest.length > 6) groups.push(rest.slice(6));

  return ["+" + country, ...groups].join(" ");
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
  else if (phoneDigits < MIN_PHONE_DIGITS || phoneDigits > MAX_PHONE_DIGITS)
    errors.phone = msg.phone.invalid;

  if (v.message.length > 2000) errors.message = msg.message.invalid;

  return errors;
}
