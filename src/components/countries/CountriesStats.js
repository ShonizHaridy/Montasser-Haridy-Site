import { getTranslations } from 'next-intl/server';
import { Globe, Users, Clock, Languages } from 'lucide-react';

export default async function CountriesStats() {
  const t = await getTranslations('countries.stats');

  const stats = [
    {
      icon: Globe,
      value: t('countries'),
      label: t('countries_desc'),
      color: 'blue'
    },
    {
      icon: Users,
      value: t('residencies'),
      label: t('residencies_desc'),
      color: 'green'
    },
    {
      icon: Clock,
      value: t('support'),
      label: t('support_desc'),
      color: 'purple'
    },
    {
      icon: Languages,
      value: t('multilingual'),
      label: t('multilingual_desc'),
      color: 'orange'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className={`w-16 h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}