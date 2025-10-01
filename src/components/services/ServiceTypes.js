import { getTranslations } from 'next-intl/server';
import { CheckCircle, Sparkles } from 'lucide-react';

export default async function ServiceTypes({ service }) {
  const t = await getTranslations(`service_details.${service}`);
  const servicesT = await getTranslations('services');
  
  const typesData = t.raw('types');
  const typeKeys = Object.keys(typesData);
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 mb-6">
            <Sparkles className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {servicesT('our_specialized')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {servicesT('our_specialized_subtitle')}
          </p>
        </div>
        
        {/* Service Types Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {typeKeys.map((typeKey, index) => {
            const typeData = typesData[typeKey];
            
            return (
              <div 
                key={typeKey}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-200 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex-1">
                    {typeData?.title || 'No Title'}
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                </div>
                
                {/* Items List */}
                <div className="space-y-4">
                  {typeData?.items && Array.isArray(typeData.items) ? (
                    typeData.items.map((item, idx) => (
                      <div key={idx} className="flex items-start group/item">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center ltr:mr-3 rtl:ml-3 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-red-500">No items found</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}