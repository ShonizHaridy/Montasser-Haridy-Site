import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import CountriesHero from '@/components/countries/CountriesHero';
import MainMarkets from '@/components/countries/MainMarkets';
import AdditionalCountries from '@/components/countries/AdditionalCountries';
import CountriesStats from '@/components/countries/CountriesStats';
import CountriesCTA from '@/components/countries/CountriesCTA';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'countries' });
  
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

export default async function CountriesPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <CountriesHero />
      {/* <MainMarkets /> */}
      <AdditionalCountries />
      <CountriesStats />
      <CountriesCTA />
    </div>
  );
}