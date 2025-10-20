import { getTranslations } from 'next-intl/server';
import { Location, TickCircle, Buildings } from 'iconsax-react';
import ReactCountryFlag from 'react-country-flag';

export default async function MainMarkets() {
  const t = await getTranslations('countries');

  const markets = [
    {
      key: 'egypt',
      countryCode: 'EG',
      color: 'red'
    },
    {
      key: 'saudi',
      countryCode: 'SA',
      color: 'green'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('main_markets_section.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('main_markets_section.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {markets.map((market) => (
            <div 
              key={market.key}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
            >
              {/* Flag */}
              <div className="flex justify-center mb-6">
                <ReactCountryFlag
                  countryCode={market.countryCode}
                  svg
                  style={{
                    width: '4rem',
                    height: '4rem',
                  }}
                />
              </div>
              
              {/* Country Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t(`${market.key}.name`)}
                </h3>
                <div className={`inline-block px-3 py-1 bg-${market.color}-100 text-${market.color}-700 rounded-full text-sm font-semibold mb-4`}>
                  {t(`${market.key}.role`)}
                </div>
                <p className="text-gray-600">
                  {t(`${market.key}.description`)}
                </p>
              </div>
              
              {/* Location */}
              <div className="flex items-start mb-4 pb-4 border-b border-gray-200">
                <Location size="20" variant="Bold" color="#9ca3af" className="ltr:mr-3 rtl:ml-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{t(`${market.key}.location`)}</span>
              </div>

              {/* Services */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Buildings size="16" variant="Bold" color="currentColor" className="ltr:mr-2 rtl:ml-2" />
                  {t('services_label')}
                </h4>
                <div className="space-y-2">
                  {t.raw(`${market.key}.services`).map((service, idx) => (
                    <div key={idx} className="flex items-center">
                      <TickCircle size="16" variant="Bold" color="#22c55e" className="ltr:mr-2 rtl:ml-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Cases */}
              <div className="bg-primary-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {t(`${market.key}.cases`)}
                </div>
                <div className="text-sm text-gray-600">{t('successfully_completed')}</div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}