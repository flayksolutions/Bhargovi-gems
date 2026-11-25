import JsonLd from "@/components/JsonLd/JsonLd";
import { faqPageSchema, pageMetadata, pages } from "@/lib/seo";
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

export const metadata = pageMetadata(pages.diamondInformation);

export default function DiamondInformationPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(pages.diamondInformation)} />

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
