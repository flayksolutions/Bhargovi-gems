import nodemailer from "nodemailer";
import type { ContactValues } from "./contactValidation";

const REQUIRED_ENV = ["SMTP_USER", "SMTP_PASS", "MAIL_FROM", "MAIL_TO"] as const;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Header values must be single-line. */
function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function buildText(v: ContactValues): string {
  return [
    "New website enquiry",
    "",
    `Name: ${v.fullName}`,
    `Company: ${v.companyName}`,
    `Email: ${v.email}`,
    `Phone: ${v.phone}`,
    "",
    "What they need:",
    v.message || "(no message provided)",
    "",
    "Reply to this email to respond directly to the enquirer.",
  ].join("\n");
}

function buildHtml(v: ContactValues): string {
  const rows: [string, string][] = [
    ["Name", escapeHtml(v.fullName)],
    ["Company", escapeHtml(v.companyName)],
    [
      "Email",
      `<a href="mailto:${escapeHtml(v.email)}" style="color:#2564ca">${escapeHtml(v.email)}</a>`,
    ],
    ["Phone", escapeHtml(v.phone)],
  ];
  const rowHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 16px 8px 0;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#6d7f99;vertical-align:top">${label}</td><td style="padding:8px 0;font-size:15px;color:#12151c">${value}</td></tr>`
    )
    .join("");
  const message = v.message
    ? `<p style="margin:24px 0 6px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#6d7f99">What they need</p><p style="margin:0;font-size:15px;line-height:1.6;color:#12151c;white-space:pre-wrap">${escapeHtml(v.message)}</p>`
    : `<p style="margin:24px 0 0;font-size:14px;color:#6d7f99">No message provided.</p>`;

  return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;color:#12151c">
<p style="margin:0 0 8px;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#2564ca">New website enquiry</p>
<h1 style="margin:0 0 20px;font-size:22px;font-weight:600;color:#022671">${escapeHtml(v.fullName)}, ${escapeHtml(v.companyName)}</h1>
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse">${rowHtml}</table>
${message}
<p style="margin:28px 0 0;font-size:12px;color:#6d7f99">Reply to this email to respond directly to the enquirer.</p>
</div>`;
}

/**
 * Sends one enquiry email. Throws on missing configuration or SMTP failure;
 * the caller logs the error and returns a generic message to the visitor.
 * All provider-specific code lives here.
 */
export async function sendContactEmail(v: ContactValues): Promise<void> {
  const missing: string[] = REQUIRED_ENV.filter((name) => !process.env[name]);
  // Either a well-known provider name (SMTP_SERVICE, e.g. "gmail") or an
  // explicit SMTP_HOST + SMTP_PORT is needed to know where to connect.
  const service = process.env.SMTP_SERVICE;
  if (!service) {
    if (!process.env.SMTP_HOST) missing.push("SMTP_HOST (or SMTP_SERVICE)");
    if (!process.env.SMTP_PORT) missing.push("SMTP_PORT (or SMTP_SERVICE)");
  }
  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(", ")}`);
  }

  const timeouts = {
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  };
  const auth = { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS };

  let transporter;
  if (service) {
    // Nodemailer fills in host, port and TLS for known providers.
    transporter = nodemailer.createTransport({ service, auth, ...timeouts });
  } else {
    const port = Number(process.env.SMTP_PORT);
    if (!Number.isInteger(port) || port <= 0) {
      throw new Error("SMTP_PORT must be a positive integer");
    }
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE
        ? process.env.SMTP_SECURE === "true"
        : port === 465,
      auth,
      ...timeouts,
    });
  }

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    replyTo: { name: singleLine(v.fullName), address: v.email },
    subject: singleLine(`New enquiry from ${v.fullName}, ${v.companyName}`),
    text: buildText(v),
    html: buildHtml(v),
  });
}
