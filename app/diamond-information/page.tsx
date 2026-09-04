import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import AboutHero from "@/components/AboutHero/AboutHero";
import ChapterRail from "@/components/ChapterRail/ChapterRail";
import FourCsSection from "@/components/FourCsSection/FourCsSection";
import ShapesCutsSection from "@/components/ShapesCutsSection/ShapesCutsSection";
import LabGrownVsMinedSection from "@/components/LabGrownVsMinedSection/LabGrownVsMinedSection";
import CertificationVerificationSection from "@/components/CertificationVerificationSection/CertificationVerificationSection";
import RoughToPolishedSection from "@/components/RoughToPolishedSection/RoughToPolishedSection";
import QualityStandardsSection from "@/components/QualityStandardsSection/QualityStandardsSection";
import AnatomyGlossarySection from "@/components/AnatomyGlossarySection/AnatomyGlossarySection";
import DiamondInfoFaqSection from "@/components/DiamondInfoFaqSection/DiamondInfoFaqSection";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import {
  anatomyGlossarySection,
  certificationVerificationSection,
  chapterRailSection,
  diamondInfoFaqSection,
  diamondInfoHeroSection,
  footer,
  fourCsSection,
  labGrownVsMinedSection,
  qualityStandardsSection,
  roughToPolishedSection,
  shapesCutsSection,
  site,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Diamond Information — Bhargovi Gems",
  description:
    "From the 4Cs to certification and our own quality standards — everything our sourcing partners need to specify, verify and buy lab-grown diamonds with confidence.",
};

export default function DiamondInformationPage() {
  return (
    <>
      <SiteHeader brand={site.brand} nav={site.nav} cta={site.cta} />

      <main>
        <div className="scroll-stack">
          <AboutHero {...diamondInfoHeroSection} />
          <ChapterRail {...chapterRailSection} />
          <FourCsSection {...fourCsSection} />
          <ShapesCutsSection {...shapesCutsSection} />
          <LabGrownVsMinedSection {...labGrownVsMinedSection} />
          <CertificationVerificationSection {...certificationVerificationSection} />
          <RoughToPolishedSection {...roughToPolishedSection} />
          <QualityStandardsSection {...qualityStandardsSection} />
          <AnatomyGlossarySection {...anatomyGlossarySection} />
          <DiamondInfoFaqSection {...diamondInfoFaqSection} />
        </div>
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
