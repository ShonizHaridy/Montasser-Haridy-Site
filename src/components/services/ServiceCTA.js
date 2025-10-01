import { getTranslations } from 'next-intl/server';
import { Phone, MessageCircle, Shield, Clock, Award } from 'lucide-react';

export default async function ServiceCTA({ service }) {
  const servicesT = await getTranslations('services');
  const contactT = await getTranslations('contact');
  const aboutT = await getTranslations('about');

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {servicesT('ready_started')}
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {servicesT('ready_started_subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel:0238333366"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              <Phone className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
              <span>0238333366</span>
            </a>
            
            <a
              href="https://wa.me/201070009593"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
              <span>{contactT('whatsapp')}</span>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-700">
            <div className="text-center group">
              <div className="inline-flex w-16 h-16 bg-amber-500 rounded-2xl items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">{servicesT('available')}</div>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex w-16 h-16 bg-amber-500 rounded-2xl items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-300">{servicesT('confidential')}</div>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex w-16 h-16 bg-amber-500 rounded-2xl items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-300">{aboutT('stats.years')}</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}