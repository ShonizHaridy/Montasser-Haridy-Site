'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Scale, Users, Globe, Award, Shield, Briefcase, Gavel, Star } from 'lucide-react';

export default function AboutSection() {
  const t = useTranslations('about');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const specialtiesObj = t.raw('specialties');
  const specialties = Array.isArray(specialtiesObj)
    ? specialtiesObj
    : Object.values(specialtiesObj);

  const icons = [Scale, Users, Globe, Award, Shield, Briefcase];

  const criminalCases = [
    {
      title: locale === 'ar' ? 'قضايا القتل والشروع فيه' : 'Murder & Attempted Murder',
      icon: '⚖️'
    },
    {
      title: locale === 'ar' ? 'قضايا المخدرات والإتجار' : 'Drug Trafficking',
      icon: '🚫'
    },
    {
      title: locale === 'ar' ? 'غسيل الأموال' : 'Money Laundering',
      icon: '💰'
    },
    {
      title: locale === 'ar' ? 'قضايا الأمن القومي' : 'National Security',
      icon: '🛡️'
    },
    {
      title: locale === 'ar' ? 'الجرائم الاقتصادية' : 'Economic Crimes',
      icon: '📊'
    },
    {
      title: locale === 'ar' ? 'الجرائم الإعلامية' : 'Media Crimes',
      icon: '📺'
    }
  ];

  const vipClients = [
    {
      icon: '🎭',
      title: locale === 'ar' ? 'فنانين كبار' : 'Major Artists',
      desc: locale === 'ar' ? 'من مصر والعالم العربي' : 'From Egypt and Arab world'
    },
    {
      icon: '🏛️',
      title: locale === 'ar' ? 'سياسيون' : 'Politicians',
      desc: locale === 'ar' ? 'سابقون وحاليون' : 'Former and current'
    },
    {
      icon: '💼',
      title: locale === 'ar' ? 'رجال أعمال' : 'Business Leaders',
      desc: locale === 'ar' ? 'مستثمرون محليون ودوليون' : 'Local and international'
    },
    {
      icon: '⭐',
      title: locale === 'ar' ? 'مؤثرون' : 'Influencers',
      desc: locale === 'ar' ? 'مشاهير عرب' : 'Arab celebrities'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent font-semibold text-lg"
              >
                {t('subtitle')}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6"
              >
                {t('title')}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
            >
              {t('description')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              {t('experience')}
            </motion.p>

            {/* Key Titles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-3 mb-8"
            >
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                <Gavel className="w-6 h-6 text-red-600" />
                <span className="font-bold text-red-700">
                  {locale === 'ar' ? 'أشهر محامي جنايات في مصر' : 'Egypt\'s Most Famous Criminal Lawyer'}
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gold-50 rounded-lg">
                <Star className="w-6 h-6 text-gold-600" />
                <span className="font-bold text-gold-700">
                  {locale === 'ar' ? 'محامي النجوم والساسة ورجال الأعمال' : 'Lawyer for Stars, Politicians & Business Leaders'}
                </span>
              </div>
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t('specialties_title')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specialties.map((specialty, index) => {
                  const Icon = icons[index];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-medium text-foreground">{specialty}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Stats & Features */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm opacity-90">{t('stats.years')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                  <div className="text-sm opacity-90">{t('stats.cases')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">95%+</div>
                  <div className="text-sm opacity-90">{t('stats.success')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">16+</div>
                  <div className="text-sm opacity-90">{t('stats.countries')}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>{t('features.confidentiality')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent" />
                  <span>{t('features.elite')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-accent" />
                  <span>{t('features.expertise')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent" />
                  <span>{t('features.support')}</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>

        {/* Criminal Law Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 p-8 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            {locale === 'ar' ? 'خبرة استثنائية في القضايا الجنائية' : 'Exceptional Criminal Law Expertise'}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criminalCases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-lg font-medium text-red-700">
              {locale === 'ar' ? 
                'محامي القضايا المعقدة - تميز وثقة في قضايا الدم والعقوبات الكبرى' : 
                'Complex Cases Specialist - Excellence and Trust in Major Criminal Cases'
              }
            </p>
          </div>
        </motion.div>

        {/* VIP Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-gradient-to-r from-gold-50 to-yellow-100 rounded-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {locale === 'ar' ? 'محامي النجوم والمشاهير' : 'Lawyer for Stars & Celebrities'}
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {locale === 'ar' ? 
                'اشتهر بخبرته الاستثنائية في التعامل مع القضايا الحساسة ذات الطابع العام والشخصيات العامة مع سرية مطلقة' :
                'Renowned for exceptional expertise in handling sensitive high-profile public cases and public figures with absolute confidentiality'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {vipClients.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}