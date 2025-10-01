import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import AboutHero from '@/components/about/AboutHero';
import AboutBackground from '@/components/about/AboutBackground';
import CriminalExpertise from '@/components/about/CriminalExpertise';
import VIPClients from '@/components/about/VIPClients';
import WhyChoose from '@/components/about/WhyChoose';
import Offices from '@/components/about/Offices';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  
  return {
    title: t('hero.title') + ' | ' + (locale === 'ar' ? 'محامي النخبة' : 'Elite Lawyer'),
    description: t('hero.description'),
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <AboutHero />
      <AboutBackground />
      <CriminalExpertise />
      <VIPClients />
      <WhyChoose />
      <Offices />
    </div>
  );
}