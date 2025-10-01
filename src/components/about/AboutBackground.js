import { getTranslations } from 'next-intl/server';

export default async function AboutBackground() {
  const t = await getTranslations('about.background');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              {t('intro')}
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              {t('experience')}
            </p>
            
            <div className="bg-gradient-to-r from-primary-50 to-gold-50 rounded-2xl p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('vision')}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('vision')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}