import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ar'],
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Use 'as-needed' for no prefix on default locale
  localePrefix: 'as-needed'
});

// Keep your locale config for UI purposes
export const localeConfig = {
  en: {
    label: 'English',
    dir: 'ltr',
    flag: '🇺🇸'
  },
  ar: {
    label: 'العربية',
    dir: 'rtl', 
    flag: '🇸🇦'
  }
};