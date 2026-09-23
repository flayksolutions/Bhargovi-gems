import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import ContactHero from "@/components/ContactHero/ContactHero";
import ContactFormSection from "@/components/ContactFormSection/ContactFormSection";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import { contactFormSection, contactHeroSection, footer, site } from "@/lib/content";

const title = "Contact — Bhargovi Gems";
const description =
  "Get in touch with Bhargovi Gems for enquiries on certified natural diamonds, volume orders and partnerships.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title,
    description,
    url: "/contact",
    siteName: "Bhargovi Gems",
    images: ["/images/hero-poster.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-poster.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader brand={site.brand} nav={site.nav} cta={site.cta} />

      <main>
        <ContactHero {...contactHeroSection} />

        <div className="scroll-stack">
          <ContactFormSection {...contactFormSection} />
        </div>
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
