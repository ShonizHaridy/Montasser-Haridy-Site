import { getTranslations } from 'next-intl/server';
import { Scale, Award, Users, Shield } from 'lucide-react';
import Image from 'next/image';

export default async function AboutHero() {
  const t = await getTranslations('about.hero');
  const statsT = await getTranslations('about.stats');

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-50 via-white to-gold-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              <Award className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
              {t('badge')}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              {t('title')}
            </h1>
            
            <h2 className="text-2xl text-gray-700 font-medium">
              {t('subtitle')}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('description')}
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">{statsT('years')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-sm text-gray-600">{statsT('cases')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">16+</div>
                <div className="text-sm text-gray-600">{statsT('countries')}</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-primary-100 via-white to-gold-100">
              <Image
                src="/images/image1.jpeg"
                alt={t('title')}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
              <Shield className="w-8 h-8 text-gold-500" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <Award className="w-8 h-8 text-primary-500" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}