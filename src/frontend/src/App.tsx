import { SiteLayout } from './components/site/SiteLayout';
import { SiteHeader } from './components/site/SiteHeader';
import { HeroSection } from './components/site/sections/HeroSection';
import { ServicesSection } from './components/site/sections/ServicesSection';
import { PricingOrQuoteSection } from './components/site/sections/PricingOrQuoteSection';
import { AboutSection } from './components/site/sections/AboutSection';
import { LocationsSection } from './components/site/sections/LocationsSection';
import { TestimonialsSection } from './components/site/sections/TestimonialsSection';
import { FaqSection } from './components/site/sections/FaqSection';
import { ContactSection } from './components/site/sections/ContactSection';
import { SiteFooter } from './components/site/SiteFooter';

export default function App() {
  return (
    <SiteLayout>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingOrQuoteSection />
        <AboutSection />
        <LocationsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </SiteLayout>
  );
}
