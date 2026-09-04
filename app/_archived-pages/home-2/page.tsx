import SiteHeader from "@/components/archived-components/SiteHeader/SiteHeader";
import Hero from "@/components/archived-components/Hero/Hero";
import StatsBar from "@/components/archived-components/StatsBar/StatsBar";
import ProductsSection from "@/components/archived-components/ProductsSection/ProductsSection";
import AboutSection from "@/components/archived-components/AboutSection/AboutSection";
import ProcessSection from "@/components/archived-components/ProcessSection/ProcessSection";
import FacilityCarousel from "@/components/archived-components/FacilityCarousel/FacilityCarousel";
import TestimonialsSection from "@/components/archived-components/TestimonialsSection/TestimonialsSection";
import GlobalOfficesSection from "@/components/archived-components/GlobalOfficesSection/GlobalOfficesSection";
import CertificationsSection from "@/components/CertificationsSection/CertificationsSection";
import SiteFooter from "@/components/archived-components/SiteFooter/SiteFooter";
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
