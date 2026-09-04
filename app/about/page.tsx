import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import AboutHero from "@/components/AboutHero/AboutHero";
import LegacySection from "@/components/LegacySection/LegacySection";
import MilestonesSection from "@/components/MilestonesSection/MilestonesSection";
import FacilitiesSection from "@/components/FacilitiesSection/FacilitiesSection";
import ValuesSection from "@/components/ValuesSection/ValuesSection";
import CertificationsSection from "@/components/CertificationsSection/CertificationsSection";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import {
  aboutValuesSection,
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
        <ValuesSection {...aboutValuesSection} />
        <CertificationsSection {...certificationsSection} />
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
