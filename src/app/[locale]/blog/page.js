import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import BlogList from '@/components/blog/BlogList';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { Newspaper } from 'lucide-react';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function BlogPage({ params, searchParams }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const category = searchParams?.category || 'all';
  const page = parseInt(searchParams?.page || '1');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-amber-500/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Newspaper className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            {locale === 'ar' ? 'رؤى قانونية' : 'Legal Insights'}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {locale === 'ar' ? 'آخر الأخبار' : 'Latest News'}
          </h1>
          
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            {locale === 'ar' ? 'رؤى قانونية، تحديثات القضايا، وأخبار الصناعة' : 'Legal insights, case updates, and industry news'}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogList category={category} page={page} />
            </div>
            <div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}