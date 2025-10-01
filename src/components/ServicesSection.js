'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Scale, Building, Globe, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  const t = useTranslations('services');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const services = [
    {
      key: 'litigation',
      icon: Scale,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      key: 'corporate',
      icon: Building,
      gradient: 'from-green-500 to-green-600',
    },
    {
      key: 'residency',
      icon: Globe,
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      key: 'consultation',
      icon: Phone,
      gradient: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/${locale}/services/${service.key}`}>
                  <div className="relative bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border/50 hover:border-accent/20">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {t(`${service.key}.title`)}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {t(`${service.key}.description`)}
                    </p>

                    {/* Areas */}
                    <div className="space-y-2 mb-6">
{[
  t(`${service.key}.areas.0`),
  t(`${service.key}.areas.1`),
  t(`${service.key}.areas.2`),
  t(`${service.key}.areas.3`)
].map((area, idx) => (
  <div key={idx} className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-accent" />
    <span className="text-sm text-muted-foreground">{area}</span>
  </div>
))}
                    </div>

                    {/* Learn More */}
                    <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-all">
                      <span>{t('learn_more')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent/90 transition-colors"
          >
            {t('view_all')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}