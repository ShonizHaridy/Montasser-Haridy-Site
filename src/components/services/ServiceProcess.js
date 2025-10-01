import { getTranslations } from 'next-intl/server';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default async function ServiceProcess({ service }) {
  const t = await getTranslations(`service_details.${service}.process`);
  const servicesT = await getTranslations('services');
  const steps = t.raw('steps');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {servicesT('our_process_subtitle')}
          </p>
        </div>
        
        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden md:block absolute ltr:left-10 rtl:right-10 top-16 bottom-16 w-1 bg-gradient-to-b from-amber-500 via-slate-300 to-amber-500"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative flex ltr:flex-row rtl:flex-row-reverse items-start gap-6 group"
                >
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-xl z-10 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  
                  {/* Step Content Card */}
                  <div className="flex-grow bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-amber-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 flex-1">
                        {step.title}
                      </h3>
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 ltr:ml-3 rtl:mr-3" />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute ltr:left-9 rtl:right-9 -bottom-6 text-amber-500">
                      <ArrowRight className="w-8 h-8 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}