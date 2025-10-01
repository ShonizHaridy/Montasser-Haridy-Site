import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceOverview from '@/components/services/ServiceOverview';
import ServiceTypes from '@/components/services/ServiceTypes';
// import ServiceTypes from './components/ServiceTypes';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceHighlights from '@/components/services/ServiceHighlights';
import ServiceCTA from '@/components/services/ServiceCTA';

const services = ['litigation', 'corporate', 'residency', 'consultation'];

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service,
  }));
}

export async function generateMetadata({ params }) {
  const { service, locale } = await params;
  
  if (!services.includes(service)) {
    return { title: 'Service Not Found' };
  }
  
  const t = await getTranslations({ locale, namespace: `service_details.${service}` });
  
  return {
    title: t('hero.title'),
    description: t('hero.description'),
  };
}

export default async function ServicePage({ params }) {
  const { service, locale } = await params;
  
  if (!services.includes(service)) {
    notFound();
  }
  
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceTypes service={service} />
      <ServiceProcess service={service} />
      <ServiceHighlights service={service} />
      <ServiceCTA service={service} />
    </div>
  );
}