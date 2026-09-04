import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import ContactHero from "@/components/ContactHero/ContactHero";
import ContactFormSection from "@/components/ContactFormSection/ContactFormSection";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import { contactFormSection, contactHeroSection, footer, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Bhargovi Gems",
  description:
    "Get in touch with Bhargovi Gems for enquiries on certified natural diamonds, volume orders and partnerships.",
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
