'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Shield, Award, Globe, Phone, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const stats = [
    { label: t('experience'), icon: Award },
    { label: t('cases'), icon: Shield },
    { label: t('success'), icon: Globe },
  ];

  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="bg-dotted"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-0">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${isRTL ? 'lg:order-2' : ''}`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight"
            >
              {t('title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-200 mb-6 lg:mb-8 max-w-2xl"
            >
              {t('subtitle')}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12"
            >
              <a
                href={`/${locale}/contact`}
                className="group flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-accent/90 transition-all glow-effect"
              >
                {t('cta')}
                <ArrowRight className={`w-5 h-5 group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              </a>

              <a
                href="tel:0238333366"
                className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-red-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {t('emergency')}
              </a>
            </motion.div>

            {/* Stats - Desktop: horizontal, Mobile: 3 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1 sm:mb-2">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    <span className="text-xl sm:text-2xl font-bold text-white">{stat.label.split(' ')[0]}</span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-tight">{stat.label.split(' ').slice(1).join(' ')}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Container - CRITICAL: Proper containment to prevent overflow */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${isRTL ? 'lg:order-1' : ''} relative px-4 sm:px-0`}
          >
            {/* Image wrapper with proper containment */}
            <div className="relative w-full max-w-full mx-auto">
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden lg:floating-animation">
                <Image
                  src="/images/image1.jpeg"
                  alt="Counselor Montaser Haridy"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Contact Cards - Properly contained within viewport */}
              {/* WhatsApp Card - Bottom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className={`absolute -bottom-4 lg:-bottom-6 ${
                  isRTL 
                    ? 'right-0 lg:-right-6' 
                    : 'left-0 lg:-left-6'
                } bg-white rounded-xl p-3 sm:p-4 shadow-xl w-[calc(100%-2rem)] sm:w-auto max-w-[280px]`}
              >
                <a 
                  href="https://wa.me/201070009593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">WhatsApp</p>
                    <p className="text-xs sm:text-sm text-gray-600" dir="ltr">01070009593</p>
                  </div>
                </a>
              </motion.div>

              {/* Phone Card - Top */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className={`absolute -top-4 lg:-top-6 ${
                  isRTL 
                    ? 'left-0 lg:-left-6' 
                    : 'right-0 lg:-right-6'
                } bg-white rounded-xl p-3 sm:p-4 shadow-xl w-[calc(100%-2rem)] sm:w-auto max-w-[280px]`}
              >
                <a 
                  href="tel:0238333366"
                  className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Phone</p>
                    <p className="text-xs sm:text-sm text-gray-600" dir="ltr">0238333366</p>
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}