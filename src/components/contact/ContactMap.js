'use client';

import { useTranslations } from 'next-intl';

export default function ContactMap() {
  const t = useTranslations('contact');

  return (
    <section id="map" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('find_us')}
          </h2>
          <p className="text-gray-600">
            {t('find_us_subtitle')}
          </p>
        </div>
        
        {/* Google Maps Embed */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7662708470875!2d30.9146346!3d29.9574009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145857523237d527%3A0x722585dc7b27d7ba!2z2KfZhNiq2YXZitiyINmE2YTYp9iz2KrYtNin2LHYp9iqINin2YTZgtin2YbZiNmG2YrYqSDZiNin2YTZhdin2YTZitip!5e0!3m2!1sar!2seg!4v1760977019691!5m2!1sar!2seg"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('find_us')}
          />
        </div>
        
      </div>
    </section>
  );
}