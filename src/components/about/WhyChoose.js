import { getTranslations } from 'next-intl/server';
import { CheckCircle, Zap, Shield, Clock } from 'lucide-react';

export default async function WhyChoose() {
  const t = await getTranslations('about.why_choose');

  const features = [
    {
      icon: CheckCircle,
      title: t('trust'),
      color: 'blue'
    },
    {
      icon: Zap,
      title: t('speed'),
      color: 'green'
    },
    {
      icon: Shield,
      title: t('media'),
      color: 'purple'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className={`w-16 h-16 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}