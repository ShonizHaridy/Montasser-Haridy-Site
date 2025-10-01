import { getTranslations } from 'next-intl/server';
import { Sparkles } from 'lucide-react';

export default async function ServiceOverview({ service }) {
  const t = await getTranslations(`services.${service}.overview`);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700">
              <Sparkles className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
              <span>Overview</span>
            </div>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {t('title')}
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-600 leading-relaxed mb-8 text-center">
            {t('description')}
          </p>
          
          {/* Coverage Box */}
          {t.has('coverage') && (
            <div className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('coverage')}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}