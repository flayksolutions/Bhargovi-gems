import JsonLd from "@/components/JsonLd/JsonLd";
import { pageMetadata, pageSchema, pages } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import ContactHero from "@/components/ContactHero/ContactHero";
import ContactFormSection from "@/components/ContactFormSection/ContactFormSection";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import { contactFormSection, contactHeroSection, footer, site } from "@/lib/content";

export const metadata = pageMetadata(pages.contact);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={pageSchema(pages.contact, "ContactPage")} />

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
