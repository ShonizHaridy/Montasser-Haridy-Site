import { getTranslations } from 'next-intl/server';
import { Scale, Shield, Award } from 'lucide-react';

export default async function CriminalExpertise() {
  const t = await getTranslations('about.criminal');

  const cases = [
    { key: 'murder', icon: '⚖️' },
    { key: 'drugs', icon: '🚫' },
    { key: 'money_laundering', icon: '💰' },
    { key: 'security', icon: '🛡️' },
    { key: 'economic', icon: '📊' },
    { key: 'media', icon: '📺' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl mb-6">
            <Scale className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          
          <p className="text-xl text-red-700 font-semibold">
            {t('subtitle')}
          </p>
        </div>
        
        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {t('description')}
          </p>
        </div>
        
        {/* Cases Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('expertise')}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem) => (
              <div 
                key={caseItem.key}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{caseItem.icon}</div>
                <h4 className="font-semibold text-gray-900 text-lg">
                  {t(`cases.${caseItem.key}`)}
                </h4>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center">
          <p className="text-xl font-bold text-white">
            {t('subtitle')}
          </p>
        </div>
        
      </div>
    </section>
  );
}