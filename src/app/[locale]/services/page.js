import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Scale, Building2, Globe, Phone, ArrowRight, CheckCircle } from 'lucide-react';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'services' });

  const services = [
    {
      key: 'litigation',
      icon: Scale,
      color: 'from-blue-500 to-blue-600',
    },
    {
      key: 'corporate',
      icon: Building2,
      color: 'from-green-500 to-green-600',
    },
    {
      key: 'residency',
      icon: Globe,
      color: 'from-purple-500 to-purple-600',
    },
    {
      key: 'consultation',
      icon: Phone,
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary-50 via-white to-gold-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.key}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {t(`${service.key}.title`)}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t(`${service.key}.description`)}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {t.raw(`${service.key}.areas`).map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{area}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={`/${locale}/services/${service.key}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    {t('learn_more')}
                    <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}