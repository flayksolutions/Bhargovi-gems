import { NextResponse } from "next/server";
import {
  normalizeContact,
  validateContact,
  withCountryCode,
} from "@/lib/contactValidation";
import { sendContactEmail } from "@/lib/sendContactEmail";
import { contactFormSection } from "@/lib/content";

export const runtime = "nodejs";

const MAX_BODY_CHARS = 10_000;
/** Real people cannot fill four fields this fast. */
const MIN_ELAPSED_MS = 3000;

const ok = () => NextResponse.json({ ok: true });

export async function POST(req: Request) {
  if (!req.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ ok: false }, { status: 415 });
  }

  const declared = Number(req.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > MAX_BODY_CHARS) {
    return NextResponse.json({ ok: false }, { status: 413 });
  }

  const text = await req.text();
  if (text.length > MAX_BODY_CHARS) {
    return NextResponse.json({ ok: false }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const raw = body as Record<string, unknown>;

  // Bot traps: pretend success so the bot learns nothing.
  const honeypotFilled =
    typeof raw.referralCode === "string" && raw.referralCode.trim() !== "";
  const tooFast =
    typeof raw.elapsedMs !== "number" || raw.elapsedMs < MIN_ELAPSED_MS;
  if (honeypotFilled || tooFast) return ok();

  const values = normalizeContact(raw);
  const errors = validateContact(
    values,
    contactFormSection.messages.errors
  );
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  try {
    await sendContactEmail({ ...values, phone: withCountryCode(values.phone) });
    return ok();
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
