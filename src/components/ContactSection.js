'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Call, Whatsapp, Location, Clock, Send, Flash } from 'iconsax-react';

export default function ContactSection() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: 'call',
      label: t('phone'),
      value: '0238333366',
      href: 'tel:+20238333366',
      color: 'blue',
      iconColor: '#2563eb',
    },
    {
      icon: 'whatsapp',
      label: t('whatsapp') + ' ' + (locale === 'ar' ? '(مصر)' : '(Egypt)'),
      value: '01070009593',
      href: 'https://wa.me/201070009593',
      color: 'green',
      iconColor: '#25D366',
    },
    {
      icon: 'whatsapp',
      label: t('whatsapp') + ' ' + (locale === 'ar' ? '(السعودية)' : '(Saudi)'),
      value: '(+966) 53 777 2556',
      href: 'https://wa.me/966537772556',
      color: 'green',
      iconColor: '#25D366',
      isRTL: true,
    },
    {
      icon: 'location',
      label: t('location'),
      value: t('location_value'),
      href: '#',
      color: 'purple',
      iconColor: '#9333ea',
    },
    {
      icon: 'clock',
      label: t('hours'),
      value: t('hours_value'),
      href: '#',
      color: 'orange',
      iconColor: '#f59e0b',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent =
                  info.icon === 'call' ? Call :
                  info.icon === 'whatsapp' ? Whatsapp :
                  info.icon === 'location' ? Location :
                  Clock;

                const colorClasses = {
                  blue: 'bg-blue-100',
                  green: 'bg-green-100',
                  purple: 'bg-purple-100',
                  orange: 'bg-orange-100',
                };

                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-6 p-6 bg-background rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${colorClasses[info.color]}`}>
                      <IconComponent size="32" variant="Bold" color={info.iconColor} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-1">
                        {info.label}
                      </h4>
                      <p className="text-muted-foreground" dir={info.isRTL ? 'ltr' : undefined}>{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Emergency Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl"
            >
              <div className="flex items-center gap-4">
                <Flash size="32" variant="Bold" color="#ffffff" className="animate-pulse" />
                <div>
                  <h4 className="font-bold text-lg">{t('emergency')}</h4>
                  <p className="opacity-90">{t('emergency_desc')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('form.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('form.service')}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                    required
                  >
                    <option value="">{t('form.select_service')}</option>
                    <option value="litigation">{t('form.litigation_option')}</option>
                    <option value="corporate">{t('form.corporate_option')}</option>
                    <option value="residency">{t('form.residency_option')}</option>
                    <option value="consultation">{t('form.consultation_option')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    {t('form.submit')}
                  </button>

                  <a
                    href="tel:+20238333366"
                    className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    <Flash size="20" variant="Bold" color="#ffffff" />
                    {t('form.emergency')}
                  </a>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}