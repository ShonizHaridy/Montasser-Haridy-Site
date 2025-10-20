import { getTranslations } from 'next-intl/server';
import { Location, Call } from 'iconsax-react';

export default async function Offices() {
  const t = await getTranslations('footer');
  const officesT = await getTranslations('about.offices');

  const offices = [
    {
      country: 'Egypt',
      flag: '🇪🇬',
      city: t('egypt_office.city'),
      address: t('egypt_office.address'),
      services: t('egypt_office.services'),
      phone: '0238333366'
    },
    {
      country: 'Saudi Arabia',
      flag: '🇸🇦',
      city: t('saudi_office.city'),
      address: t('saudi_office.address'),
      services: t('saudi_office.services'),
      phone: '+966 (53) 777 2556'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {officesT('title')}
          </h2>
          <p className="text-xl text-gray-600">
            {officesT('subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offices.map((office, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="text-4xl mb-4">{office.flag}</div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {office.city}
              </h3>
              <p className="text-primary-600 font-semibold mb-4">
                {office.country}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <Location size="20" variant="Bold" color="#9ca3af" className="mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 whitespace-pre-line">{office.address}</span>
                </div>

                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Call size="20" variant="Bold" color="#9ca3af" className="flex-shrink-0" />
                  <span className="text-gray-600" dir={office.phone.startsWith('+') ? 'ltr' : undefined}>{office.phone}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t('available_services')}
                </h4>
                <p className="text-gray-600 text-sm">
                  {office.services}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}