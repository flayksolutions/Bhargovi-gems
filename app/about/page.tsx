import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import AboutHero from "@/components/AboutHero/AboutHero";
import LegacySection from "@/components/LegacySection/LegacySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection/WhyChooseUsSection";
import FounderNoteSection from "@/components/FounderNoteSection/FounderNoteSection";
import MilestonesSection from "@/components/MilestonesSection/MilestonesSection";
import VisionSection from "@/components/VisionSection/VisionSection";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import {
  aboutHeroSection,
  footer,
  founderNoteSection,
  legacySection,
  milestonesSection,
  site,
  visionSection,
  whyChooseUsSection,
} from "@/lib/content";

const title = "About Us — Bhargovi Gems";
const description =
  "Three generations of expertise in sourcing, cutting and polishing certified natural diamonds for the world's leading jewellery brands.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title,
    description,
    url: "/about",
    siteName: "Bhargovi Gems",
    images: ["/images/about/hero-legacy-office.webp"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/about/hero-legacy-office.webp"],
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader brand={site.brand} nav={site.nav} cta={site.cta} />

      <main>
        <AboutHero {...aboutHeroSection} />

        <div className="scroll-stack">
          <LegacySection {...legacySection} />
          <WhyChooseUsSection {...whyChooseUsSection} />
          <FounderNoteSection {...founderNoteSection} />
          {/* <MilestonesSection {...milestonesSection} /> */}
          <VisionSection {...visionSection} />
        </div>
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
