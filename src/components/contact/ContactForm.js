'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: t('success')
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || t('error')
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: t('error')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    t('litigation_option'),
    t('corporate_option'),
    t('residency_option'),
    t('consultation_option')
  ];

  // Shared input classes
  const inputClasses = `w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors text-gray-900 bg-white ${
    isRTL ? 'text-right' : 'text-left'
  }`;

  const labelClasses = `block text-sm font-medium text-gray-700 mb-2 ${
    isRTL ? 'text-right' : 'text-left'
  }`;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      
      <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        {t('submit')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClasses}>
            {t('name')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            dir={isRTL ? 'rtl' : 'ltr'}
            className={inputClasses}
            placeholder={isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name'}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            {t('email')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            dir="ltr"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors text-gray-900 bg-white text-left"
            placeholder="email@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClasses}>
            {t('phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            dir="ltr"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors text-gray-900 bg-white text-left"
            placeholder="+20 XXX XXX XXXX"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className={labelClasses}>
            {t('service')}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            dir={isRTL ? 'rtl' : 'ltr'}
            className={inputClasses}
          >
            <option value="">{t('select_service')}</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClasses}>
            {t('message')} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            dir={isRTL ? 'rtl' : 'ltr'}
            className={`${inputClasses} resize-none`}
            placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
          />
        </div>

        {/* Status Message */}
        {status.message && (
          <div 
            className={`flex items-start p-4 rounded-lg ${
              status.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {status.type === 'success' ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 ltr:mr-3 rtl:ml-3" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 ltr:mr-3 rtl:ml-3" />
            )}
            <span className={`text-sm flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              {status.message}
            </span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center px-6 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin ltr:mr-2 rtl:ml-2" />
              {t('sending')}
            </>
          ) : (
            <>
              <Send className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
              {t('submit')}
            </>
          )}
        </button>
        
      </form>
      
    </div>
  );
}