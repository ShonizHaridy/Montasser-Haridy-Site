import { Phone, MessageCircle } from 'lucide-react';

export default function CountriesCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Need Legal Services in Any of These Countries?
        </h2>
        
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Contact us today for professional consultation and support worldwide
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0238333366"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call: 0238333366
          </a>
          
          <a
            href="https://wa.me/201070009593"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
        </div>
        
      </div>
    </section>
  );
}