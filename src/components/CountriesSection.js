'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import ReactCountryFlag from "react-country-flag";

export default function CountriesSection() {
  const t = useTranslations('countries');
  const locale = useLocale();

  const mainMarkets = [
    {
      countryCode: 'EG',
      name: t('egypt.name'),
      description: t('egypt.description')
    },
    {
      countryCode: 'SA',
      name: t('saudi.name'),
      description: t('saudi.description')
    },
    // {
    //   countryCode: 'AE',
    //   name: t('uae.name'),
    //   description: t('uae.description')
    // },
  ];

  const otherCountries = [
    { name: 'Syria', countryCode: 'SY' },
    { name: 'Iraq', countryCode: 'IQ' },
    { name: 'Lebanon', countryCode: 'LB' },
    { name: 'Jordan', countryCode: 'JO' },
    { name: 'Palestine', countryCode: 'PS' },
    { name: 'Oman', countryCode: 'OM' },
    { name: 'Sudan', countryCode: 'SD' },
    { name: 'Yemen', countryCode: 'YE' },
    { name: 'Tunisia', countryCode: 'TN' },
    { name: 'Algeria', countryCode: 'DZ' },
    { name: 'Turkey', countryCode: 'TR' },
    { name: 'USA', countryCode: 'US' },
    { name: 'Canada', countryCode: 'CA' },
    { name: 'France', countryCode: 'FR' },
    { name: 'Germany', countryCode: 'DE' },
  ];

  const stats = [
    {
      title: t('stats.countries'),
      desc: t('stats.countries_desc')
    },
    {
      title: t('stats.residencies'),
      desc: t('stats.residencies_desc')
    },
    {
      title: t('stats.support'),
      desc: t('stats.support_desc')
    },
    {
      title: t('stats.multilingual'),
      desc: t('stats.multilingual_desc')
    },
  ];

  return (
    <section className="py-20 bg-background">
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

        {/* Main Markets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            {t('main_markets')}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {mainMarkets.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white text-center hover:scale-105 transition-transform"
              >
                <div className="mb-4">
                  <ReactCountryFlag
                    countryCode={country.countryCode}
                    svg
                    style={{
                      width: '4rem',
                      height: '4rem',
                    }}
                  />
                </div>
                <h4 className="text-2xl font-bold mb-2">{country.name}</h4>
                <p className="text-white/80">{country.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Countries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            {t('other_countries')}
          </h3>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-6">
            {otherCountries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center group cursor-pointer"
              >
                <div className="bg-muted rounded-xl p-4 group-hover:bg-accent/10 transition-colors">
                  <div className="mb-2 group-hover:scale-110 transition-transform">
                    <ReactCountryFlag
                      countryCode={country.countryCode}
                      svg
                      style={{
                        width: '2rem',
                        height: '2rem',
                      }}
                    />
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    {country.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl border border-border/50"
            >
              <div className="text-3xl font-bold text-accent mb-2">{feature.title}</div>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}