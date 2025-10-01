import { getTranslations } from 'next-intl/server';
import { Star, Users, Briefcase, Sparkles } from 'lucide-react';

export default async function VIPClients() {
  const t = await getTranslations('about.vip');

  const clients = [
    { key: 'artists', icon: '🎭', iconComponent: Star },
    { key: 'politicians', icon: '🏛️', iconComponent: Users },
    { key: 'business', icon: '💼', iconComponent: Briefcase },
    { key: 'influencers', icon: '⭐', iconComponent: Sparkles }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gold-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
        
        {/* Features */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <ul className="space-y-4">
              {t.raw('features').map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="ml-4 rtl:mr-4 rtl:ml-0 text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Clients Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('clients.title')}
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div 
                key={client.key}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl mb-4">{client.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {t(`clients.${client.key}`)}
                </h4>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}