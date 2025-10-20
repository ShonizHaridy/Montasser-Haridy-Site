import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';
import DepartmentsSection from '@/components/contact/DepartmentsSection';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <ContactHero />

      {/* Departments Section */}
      <DepartmentsSection />

      {/* Contact Form Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-24">
              <ContactInfo />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>

      <ContactMap />
    </div>
  );
}