import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import AboutHero from "@/components/AboutHero";
import LegacySection from "@/components/LegacySection";
import MilestonesSection from "@/components/MilestonesSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ProcessSection from "@/components/ProcessSection";
import CertificationsSection from "@/components/CertificationsSection";
import SiteFooter from "@/components/SiteFooter";
import {
  aboutApproachProcessSection,
  aboutHeroSection,
  certificationsSection,
  facilitiesPageSection,
  footer,
  legacySection,
  milestonesSection,
  site,
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
        <LegacySection {...legacySection} />
        <MilestonesSection {...milestonesSection} />
        <FacilitiesSection {...facilitiesPageSection} />
        <ProcessSection {...aboutApproachProcessSection} />
        <CertificationsSection {...certificationsSection} />
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
