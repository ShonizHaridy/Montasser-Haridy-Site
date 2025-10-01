import { getTranslations } from 'next-intl/server';
import ReactCountryFlag from 'react-country-flag';

export default async function AdditionalCountries() {
  const t = await getTranslations('countries.additional');
  const countries = t.raw('list');

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {countries.map((country, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-3">
                <ReactCountryFlag
                  countryCode={getCountryCode(country.name)}
                  svg
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                  }}
                />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                {country.name}
              </h4>
              <p className="text-xs text-primary-600 font-medium">
                {country.cases}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

// Helper function to map country names to codes
function getCountryCode(countryName) {
  const codes = {
    'Syria': 'SY',
    'Iraq': 'IQ',
    'Lebanon': 'LB',
    'Jordan': 'JO',
    'Palestine': 'PS',
    'Oman': 'OM',
    'Sudan': 'SD',
    'Yemen': 'YE',
    'Tunisia': 'TN',
    'Algeria': 'DZ',
    'Turkey': 'TR',
    'USA': 'US',
    'Canada': 'CA',
    'France': 'FR',
    'Germany': 'DE'
  };
  return codes[countryName] || 'US';
}