import type { Metadata } from "next";
import SiteHeader from "@/components/archived-components/SiteHeader/SiteHeader";
import SustainabilityHero from "@/components/archived-components/SustainabilityHero/SustainabilityHero";
import CommitmentSection from "@/components/archived-components/CommitmentSection/CommitmentSection";
import PillarsSection from "@/components/archived-components/PillarsSection/PillarsSection";
import IntegritySection from "@/components/archived-components/IntegritySection/IntegritySection";
import CaringSection from "@/components/archived-components/CaringSection/CaringSection";
import PlanetSection from "@/components/archived-components/PlanetSection/PlanetSection";
import SiteFooter from "@/components/archived-components/SiteFooter/SiteFooter";
import {
  caringSection,
  footer,
  legacyCommitmentSection,
  legacyIntegritySection,
  legacyPillarsSection,
  planetSection,
  site,
  sustainabilityHeroSection,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Sustainability (archived) — Bhargovi Gems",
  description: "Archived copy of the pre-redesign sustainability page.",
};

export default function ArchivedSustainabilityPage() {
  return (
    <>
      <SiteHeader brand={site.brand} nav={site.nav} cta={site.cta} />

      <main>
        <SustainabilityHero {...sustainabilityHeroSection} />
        <CommitmentSection {...legacyCommitmentSection} />
        <PillarsSection {...legacyPillarsSection} />
        <IntegritySection {...legacyIntegritySection} />
        <CaringSection {...caringSection} />
        <PlanetSection {...planetSection} />
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
