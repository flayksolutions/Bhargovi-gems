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

export const metadata: Metadata = {
  title: "About Us — Bhargovi Gems",
  description:
    "Three generations of expertise in sourcing, cutting and polishing certified natural diamonds for the world's leading jewellery brands.",
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
          <MilestonesSection {...milestonesSection} />
          <VisionSection {...visionSection} />
        </div>
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
