import { getTranslations } from 'next-intl/server';
import { Globe, MapPin } from 'lucide-react';

export default async function CountriesHero() {
  const t = await getTranslations('countries.hero');

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-50 via-white to-gold-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Global Presence
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('subtitle')}
          </p>
          
        </div>
      </div>
    </section>
  );
}