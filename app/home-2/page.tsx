import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import FacilityCarousel from "@/components/FacilityCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import GlobalOfficesSection from "@/components/GlobalOfficesSection";
import CertificationsSection from "@/components/CertificationsSection";
import SiteFooter from "@/components/SiteFooter";
import {
  aboutSection,
  certificationsSection,
  facilitySection,
  footer,
  heroSection,
  officesSection,
  processSection,
  productsSection,
  site,
  statsSection,
  testimonialsSection,
} from "@/lib/content";

export default function HomeAlt() {
  return (
    <>
      <SiteHeader brand={site.brand} nav={site.nav} cta={site.cta} />

      <main>
        <Hero {...heroSection} />
        <StatsBar {...statsSection} />
        <ProductsSection {...productsSection} />
        <AboutSection {...aboutSection} />
        <ProcessSection {...processSection} />
        <FacilityCarousel {...facilitySection} />
        <TestimonialsSection {...testimonialsSection} />
        <GlobalOfficesSection {...officesSection} />
        <CertificationsSection {...certificationsSection} />
      </main>

      <SiteFooter brand={site.brand} {...footer} />
    </>
  );
}
