'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RelatedPosts({ currentSlug }) {
  const locale = useLocale();
  const t = useTranslations('blog');

  // Sample related posts - in production, fetch based on category/tags
  const relatedPosts = [
    {
      id: 1,
      slug: 'saudi-company-formation-without-sponsor',
      title: locale === 'ar' 
        ? 'تأسيس شركة في السعودية بدون كفيل'
        : 'Saudi Company Formation Without Sponsor',
      excerpt: locale === 'ar'
        ? 'دليل شامل لتأسيس شركتك في المملكة'
        : 'Complete guide to establishing your company',
      image: '/images/image2.jpeg',
      category: 'corporate',
      date: '2025-09-20'
    },
    {
      id: 2,
      slug: 'uae-golden-visa-requirements',
      title: locale === 'ar'
        ? 'متطلبات الإقامة الذهبية في الإمارات'
        : 'UAE Golden Visa Requirements',
      excerpt: locale === 'ar'
        ? 'كل ما تحتاج معرفته عن الإقامة الذهبية'
        : 'Everything you need to know about golden visa',
      image: '/images/nav_image.jpeg',
      category: 'residency',
      date: '2025-09-15'
    },
    {
      id: 3,
      slug: 'criminal-defense-strategies',
      title: locale === 'ar'
        ? 'استراتيجيات الدفاع في القضايا الجنائية'
        : 'Criminal Defense Strategies',
      excerpt: locale === 'ar'
        ? 'أهم الاستراتيجيات القانونية في الدفاع'
        : 'Key legal strategies in defense',
      image: '/images/image1.jpeg',
      category: 'criminal',
      date: '2025-09-10'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('related_posts')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('articles_interest')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100 group"
            >
              <Link href={`/${locale}/blog/${post.slug}`}>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {t(`categories.${post.category}`)}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString(locale, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>

                <Link href={`/${locale}/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <Link 
                  href={`/${locale}/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                >
                  {t('read_more')}
                  <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>{t('view_all_articles')}</span>
            <ArrowRight className="w-5 h-5 ltr:ml-2 rtl:mr-2 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
          </Link>
        </div>


      </div>
    </section>
  );
}