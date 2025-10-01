import { getTranslations } from 'next-intl/server';

export default async function Timeline() {
  const t = await getTranslations('about');

  const timeline = [
    { year: '2010', title: 'Career Beginning', desc: 'Law firm establishment and specialization in civil cases' },
    { year: '2015', title: 'Regional Expansion', desc: 'Opening branches in Saudi Arabia and UAE' },
    { year: '2018', title: 'High-Profile Cases', desc: 'Specialization in celebrity and public figure cases' },
    { year: '2020', title: 'Digital Services', desc: 'Launch of remote legal consultation services' },
    { year: '2025', title: 'Legal Leadership', desc: 'Leadership in distinguished legal services' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Journey of Success
          </h2>
          <p className="text-xl text-gray-600">
            A journey of excellence and professional achievements over the years
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}