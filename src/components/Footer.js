'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: t('nav.home'), href: `/${locale}` },
    { name: t('nav.about'), href: `/${locale}/about` },
    { name: t('nav.services'), href: `/${locale}/services` },
    { name: t('nav.countries'), href: `/${locale}/countries` },
    { name: t('nav.gallery'), href: `/${locale}/gallery` },
    { name: t('nav.contact'), href: `/${locale}/contact` },
  ];

  const offices = [
    {
      city: t('footer.egypt_office.city'),
      address: t('footer.egypt_office.address'),
      services: t('footer.egypt_office.services'),
    },
    {
      city: t('footer.saudi_office.city'),
      address: t('footer.saudi_office.address'),
      services: t('footer.saudi_office.services'),
    },
    {
      city: t('footer.uae_office.city'),
      address: t('footer.uae_office.address'),
      services: t('footer.uae_office.services'),
    },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: t('footer.social.facebook_url'), 
      icon: Facebook 
    },
    { 
      name: 'Instagram', 
      href: t('footer.social.instagram_url'), 
      icon: Instagram 
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              {t('about.title')}
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              {t('footer.company_desc')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+20238333366"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>0238333366</span>
              </a>
              <a
                href="https://wa.me/201070009593"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>01070009593</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>{t('contact.location_value')}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.offices')}</h4>
            <div className="space-y-4">
              {offices.map((office, index) => (
                <div key={index} className="text-sm">
                  <div className="font-medium text-accent">{office.city}</div>
                  <div className="text-primary-foreground/80">{office.address}</div>
                  <div className="text-primary-foreground/60">{office.services}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} {t('about.title')}. {t('footer.rights')}.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              {t('footer.premium_services')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}