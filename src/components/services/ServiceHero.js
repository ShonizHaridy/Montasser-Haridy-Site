import { getTranslations } from 'next-intl/server';
import { Scale, Building2, Globe, Phone, MessageCircle } from 'lucide-react';

const icons = {
  litigation: Scale,
  corporate: Building2,
  residency: Globe,
  consultation: Phone
};

export default async function ServiceHero({ service }) {
  const t = await getTranslations(`services.${service}.hero`);
  const commonT = await getTranslations('common');
  const Icon = icons[service];

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-amber-500/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Icon */}
          <div className="inline-flex w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl items-center justify-center mx-auto mb-8 shadow-2xl">
            <Icon className="w-12 h-12" />
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('title')}
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-gray-200 font-medium mb-8">
            {t('subtitle')}
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            {t('description')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0238333366"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              <Phone className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
              <span>{commonT('call_now')}</span>
            </a>
            <a
              href="https://wa.me/201070009593"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
              <span>{commonT('whatsapp')}</span>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}