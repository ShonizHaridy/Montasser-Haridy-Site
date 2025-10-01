// src/components/contact/ContactHero.js
import { getTranslations } from 'next-intl/server';
import { Phone, MessageCircle } from 'lucide-react';

export default async function ContactHero() {
  const t = await getTranslations('contact');

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-amber-500/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {t('title')}
        </h1>

        <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:0238333366"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105 min-w-[200px]"
          >
            <Phone className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
            <span className="font-mono">0238333366</span>
          </a>

            <a          
            href="https://wa.me/201070009593"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105 min-w-[200px]"
          >
            <MessageCircle className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
            <span className="font-mono">01070009593</span>
          </a>
        </div>
      </div>
    </section>
  );
}