import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SustainabilityHero from "@/components/SustainabilityHero/SustainabilityHero";
import CommitmentSection from "@/components/CommitmentSection/CommitmentSection";
import PillarsSection from "@/components/PillarsSection/PillarsSection";
import IntegritySection from "@/components/IntegritySection/IntegritySection";
import CaringSection from "@/components/CaringSection/CaringSection";
import PlanetSection from "@/components/PlanetSection/PlanetSection";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import {
  caringSection,
  commitmentSection,
  footer,
  integritySection,
  pillarsSection,
  planetSection,
  site,
  sustainabilityHeroSection,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Sustainability — Bhargovi Gems",
  description:
    "From lab to jewel, every stone we grow reflects our commitment to people and the planet.",
};

export default function SustainabilityPage() {
  return (
    <>
      <SiteHeader brand={site.brand} nav={site.nav} cta={site.cta} />

      <main>
        <SustainabilityHero {...sustainabilityHeroSection} />
        <CommitmentSection {...commitmentSection} />
        <PillarsSection {...pillarsSection} />
        <IntegritySection {...integritySection} />
        <CaringSection {...caringSection} />
        <PlanetSection {...planetSection} />
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
