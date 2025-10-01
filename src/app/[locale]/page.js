import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CountriesSection from '@/components/CountriesSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CountriesSection />
      <ContactSection />
    </div>
  );
}