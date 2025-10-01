import { getTranslations } from 'next-intl/server';
import { Newspaper } from 'lucide-react';

export default async function BlogHero() {
  const t = await getTranslations('blog');
  const commonT = await getTranslations('common');

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
          <Newspaper className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
          {commonT('legal_insights')}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('title')}
        </h1>
        
        <p className="text-xl text-primary-100 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}