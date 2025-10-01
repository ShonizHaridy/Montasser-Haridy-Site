// src/contexts/LanguageContext.js
'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    countries: "Countries",
    contact: "Contact",
    
    // Services Navigation
    litigation: "Litigation",
    corporate: "Corporate",
    residency: "Residency", 
    consultation: "Consultation",
    
    // Home Page
    heroTitle: "Elite Legal Counsel",
    heroSubtitle: "Distinguished legal representation for celebrities, politicians & business leaders",
    heroDescription: "Exceptional expertise in high-profile sensitive cases with absolute confidentiality and professional excellence across Egypt, Saudi Arabia & UAE.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    
    // Services Preview
    servicesTitle: "Our Legal Services",
    servicesSubtitle: "Comprehensive legal solutions across multiple jurisdictions",
    
    litigationTitle: "Litigation Management",
    litigationDesc: "Expert representation in criminal, civil, and family cases across all court levels",
    
    corporateTitle: "Corporate Services", 
    corporateDesc: "Complete company formation and business legal services in Egypt, Saudi Arabia & UAE",
    
    residencyTitle: "Foreign Residency",
    residencyDesc: "Legal residency solutions for foreign nationals with documented success across multiple countries",
    
    consultationTitle: "Phone Consultation",
    consultationDesc: "24/7 legal consultation services available from anywhere with complete privacy",
    
    // Why Choose Us
    whyChooseTitle: "Why Choose Our Firm",
    whyChooseSubtitle: "Distinguished by excellence, trusted by leaders",
    
    // Contact
    contactTitle: "Get Legal Consultation",
    contactSubtitle: "Ready to assist with your legal needs",
    
    // Footer
    quickLinks: "Quick Links",
    legalServices: "Legal Services", 
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved",
    
    // Common
    readMore: "Read More",
    viewAll: "View All",
    phone: "Phone",
    email: "Email",
    address: "Address",
    
    // Meta
    homeMetaTitle: "Counselor Montaser Haridy | Elite Legal Services in Egypt, Saudi Arabia & UAE",
    homeMetaDesc: "Distinguished legal expertise for celebrities, politicians, and business leaders. Expert litigation, corporate services, and residency solutions.",
  },
  ar: {
    // Navigation  
    home: "الرئيسية",
    about: "من نحن", 
    services: "الخدمات",
    countries: "البلدان",
    contact: "اتصل بنا",
    
    // Services Navigation
    litigation: "إدارة التقاضي",
    corporate: "إدارة الشركات",
    residency: "إقامات الأجانب",
    consultation: "الاستشارات الهاتفية",
    
    // Home Page
    heroTitle: "محامي النخبة",
    heroSubtitle: "تمثيل قانوني متميز للمشاهير والساسة ورجال الأعمال",
    heroDescription: "خبرة استثنائية في القضايا الحساسة عالية الأهمية مع السرية المطلقة والتميز المهني عبر مصر والسعودية والإمارات.",
    getStarted: "ابدأ الآن",
    learnMore: "اعرف أكثر",
    
    // Services Preview
    servicesTitle: "خدماتنا القانونية",
    servicesSubtitle: "حلول قانونية شاملة عبر ولايات قضائية متعددة",
    
    litigationTitle: "إدارة التقاضي", 
    litigationDesc: "تمثيل خبير في القضايا الجنائية والمدنية والأسرة عبر جميع مستويات المحاكم",
    
    corporateTitle: "إدارة الشركات",
    corporateDesc: "خدمات تأسيس الشركات والخدمات القانونية التجارية الكاملة في مصر والسعودية والإمارات",
    
    residencyTitle: "إقامات الأجانب",
    residencyDesc: "حلول الإقامة القانونية للمواطنين الأجانب مع نجاحات موثقة عبر دول متعددة",
    
    consultationTitle: "الاستشارات الهاتفية",
    consultationDesc: "خدمات استشارة قانونية على مدار الساعة متاحة من أي مكان مع خصوصية كاملة",
    
    // Why Choose Us
    whyChooseTitle: "لماذا تختار مكتبنا",
    whyChooseSubtitle: "متميزون بالامتياز، موثوقون من القادة",
    
    // Contact
    contactTitle: "احصل على استشارة قانونية", 
    contactSubtitle: "مستعدون لمساعدتك في احتياجاتك القانونية",
    
    // Footer
    quickLinks: "روابط سريعة",
    legalServices: "الخدمات القانونية",
    followUs: "تابعنا", 
    allRightsReserved: "جميع الحقوق محفوظة",
    
    // Common
    readMore: "اقرأ أكثر",
    viewAll: "عرض الكل", 
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    address: "العنوان",
    
    // Meta
    homeMetaTitle: "المستشار منتصر هريدي | خدمات قانونية متميزة في مصر والسعودية والإمارات",
    homeMetaDesc: "خبرة قانونية متميزة للمشاهير والساسة ورجال الأعمال. خبراء في التقاضي وخدمات الشركات وحلول الإقامة.",
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    setIsLoaded(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key) => translations[language][key] || key;

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};