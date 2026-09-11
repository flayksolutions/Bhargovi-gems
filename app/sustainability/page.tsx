import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SustainabilityHero from "@/components/SustainabilityHero/SustainabilityHero";
import SustainabilityCommitmentSection from "@/components/SustainabilityCommitmentSection/SustainabilityCommitmentSection";
import PillarsSection from "@/components/PillarsSection/PillarsSection";
import IntegritySection from "@/components/IntegritySection/IntegritySection";
import SustainabilityEnvironmentSection from "@/components/SustainabilityEnvironmentSection/SustainabilityEnvironmentSection";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import {
  commitmentSection,
  environmentSection,
  footer,
  integritySection,
  pillarsSection,
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

        <div className="scroll-stack">
          <SustainabilityCommitmentSection {...commitmentSection} />
          <PillarsSection {...pillarsSection} />
          <SustainabilityEnvironmentSection {...environmentSection} />
          <IntegritySection {...integritySection} />
        </div>
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
