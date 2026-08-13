import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SustainabilityHero from "@/components/SustainabilityHero";
import CommitmentSection from "@/components/CommitmentSection";
import PillarsSection from "@/components/PillarsSection";
import IntegritySection from "@/components/IntegritySection";
import CaringSection from "@/components/CaringSection";
import PlanetSection from "@/components/PlanetSection";
import SiteFooter from "@/components/SiteFooter";
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
      <SustainabilityHero {...sustainabilityHeroSection} />

      <main>
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
