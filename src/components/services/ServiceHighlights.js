import { getTranslations } from 'next-intl/server';
import { Star, Shield, Clock, Award, Users, Globe } from 'lucide-react';

const iconMap = {
  0: Star,
  1: Shield,
  2: Clock,
  3: Award,
  4: Users,
  5: Globe
};

export default async function ServiceHighlights({ service }) {
  const t = await getTranslations(`service_details.${service}`);
  const servicesT = await getTranslations('services');
  const highlights = t.raw('highlights');

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {servicesT('why_choose')}
          </h2>
          <p className="text-xl text-gray-600">
            {servicesT('why_choose_subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = iconMap[index] || Star;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {highlight}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}