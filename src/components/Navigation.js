'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { localeConfig } from '@/i18n/routing';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const isRTL = localeConfig[locale]?.dir === 'rtl';

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('blog'), href: '/blog' },
    { name: t('gallery'), href: '/gallery' },
    { name: t('contact'), href: '/contact' },
  ];

  const switchLocale = (newLocale) => {
    router.replace(pathname, { locale: newLocale });
    setIsLangOpen(false);
  };

  const languages = [
    { code: 'en', label: 'English', countryCode: 'US' },
    { code: 'ar', label: 'عربي', countryCode: 'SA' }
  ];

  return (
    <>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo - Always on the start side (left in LTR, right in RTL) */}
            <div className="flex-shrink-0">
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary shadow-md">
                    <Image
                      src="/images/nav_image.jpeg"
                      alt="Counselor Montaser Haridy"
                      width={56}
                      height={56}
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* Center Section - Pages, Language, Contact Buttons */}
            <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
              {/* Pages Navigation */}
              <div className="flex items-center gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-accent whitespace-nowrap ${
                      pathname === item.href ? 'text-accent' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* Separator */}
              <div className="h-6 w-px bg-gray-300" />

              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors min-w-[140px]"
                >
                  <span className="text-sm font-medium">
                    {locale === 'en' ? 'Language' : 'اللغة'}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => switchLocale(lang.code)}
                          className={`w-full px-4 py-2 text-sm text-start hover:bg-muted transition-colors flex items-center gap-3 ${
                            locale === lang.code ? 'bg-accent/10 text-accent font-medium' : 'text-foreground'
                          }`}
                        >
                          <ReactCountryFlag
                            countryCode={lang.countryCode}
                            svg
                            style={{
                              width: '1.5em',
                              height: '1.5em',
                            }}
                          />
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Separator */}
              <div className="h-6 w-px bg-gray-300" />

              {/* Contact Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="tel:0238333366"
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('callNow')}</span>
                </a>

                <a
                  href="https://wa.me/201070009593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('whatsapp')}</span>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t bg-white"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                      pathname === item.href
                        ? 'bg-accent text-accent-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-4 border-t space-y-3">
                  {/* Language Switch Mobile */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground px-3">
                      {locale === 'en' ? 'Switch Language' : 'تغيير اللغة'}
                    </p>
                    <div className="flex gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            switchLocale(lang.code);
                            setIsOpen(false);
                          }}
                          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                            locale === lang.code
                              ? 'bg-accent text-accent-foreground'
                              : 'bg-muted text-foreground'
                          }`}
                        >
                          <ReactCountryFlag
                            countryCode={lang.countryCode}
                            svg
                            style={{
                              width: '1.2em',
                              height: '1.2em',
                            }}
                          />
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <a
                    href="tel:0238333366"
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{t('callNow')}</span>
                  </a>

                  <a
                    href="https://wa.me/201070009593"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg justify-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t('whatsapp')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}