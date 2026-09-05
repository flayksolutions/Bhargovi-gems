import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import DiamondInfoHero from "@/components/DiamondInfoHero/DiamondInfoHero";
import ChapterRail from "@/components/ChapterRail/ChapterRail";
import FourCsSection from "@/components/FourCsSection/FourCsSection";
import ShapesCutsSection from "@/components/ShapesCutsSection/ShapesCutsSection";
import LabGrownVsMinedSection from "@/components/LabGrownVsMinedSection/LabGrownVsMinedSection";
import AnatomyGlossarySection from "@/components/AnatomyGlossarySection/AnatomyGlossarySection";
import DiamondInfoFaqSection from "@/components/DiamondInfoFaqSection/DiamondInfoFaqSection";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import {
  anatomyGlossarySection,
  chapterRailSection,
  diamondInfoFaqSection,
  diamondInfoHeroSection,
  footer,
  fourCsSection,
  labGrownVsMinedSection,
  shapesCutsSection,
  site,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Diamond Information — Bhargovi Gems",
  description:
    "From the 4Cs to shapes and lab-grown vs mined — everything our sourcing partners need to specify, verify and buy lab-grown diamonds with confidence.",
};

export default function DiamondInformationPage() {
  return (
    <>
      <SiteHeader brand={site.brand} nav={site.nav} cta={site.cta} />

      <main>
        <DiamondInfoHero {...diamondInfoHeroSection} />

        <div className="scroll-stack">
          <ChapterRail {...chapterRailSection} />
          <FourCsSection {...fourCsSection} />
          <ShapesCutsSection {...shapesCutsSection} />
          <LabGrownVsMinedSection {...labGrownVsMinedSection} />
          <AnatomyGlossarySection {...anatomyGlossarySection} />
          <DiamondInfoFaqSection {...diamondInfoFaqSection} />
        </div>
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
