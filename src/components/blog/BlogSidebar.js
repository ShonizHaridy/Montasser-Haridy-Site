'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Calendar, Rss } from 'lucide-react';
import { Link } from '@/i18n/navigation';

export default function BlogSidebar() {
  const locale = useLocale();
  const t = useTranslations('blog');

  const categories = [
    'legal_updates',
    'case_studies',
    'investment',
    'corporate',
    'criminal',
    'residency',
    'news'
  ];

  const recentPosts = [
    {
      id: 1,
      slug: 'new-investment-law-egypt-2025',
      title: locale === 'ar' ? 'قانون الاستثمار الجديد' : 'New Investment Law',
      date: '2025-09-25'
    },
    {
      id: 2,
      slug: 'saudi-company-formation-without-sponsor',
      title: locale === 'ar' ? 'تأسيس شركة في السعودية' : 'Saudi Company Formation',
      date: '2025-09-20'
    },
    {
      id: 3,
      slug: 'uae-golden-visa-requirements',
      title: locale === 'ar' ? 'الإقامة الذهبية في الإمارات' : 'UAE Golden Visa',
      date: '2025-09-15'
    }
  ];

  return (
    <div className="space-y-8 sticky top-24">
      
      {/* RSS Feed */}
      {/* <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Rss className="w-6 h-6" />
          <h3 className="text-xl font-bold">
            {t('rss_feed')}
          </h3>
        </div>
        <p className="text-gray-300 mb-4 text-sm">
          {t('rss_feed_desc')}
        </p>
        <a
          href={`/${locale}/blog/rss.xml`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-gray-100 transition-all"
        >
          {t('subscribe_rss')}
        </a>
      </div> */}
      
      {/* Categories */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          {t('all_categories')}
        </h3>
        <div className="space-y-2">
          <Link
            href="/blog"
            className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors font-medium text-gray-700 hover:text-slate-900"
          >
            {t('all')}
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog?category=${category}`}
              className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-gray-700 hover:text-slate-900"
            >
              {t(`categories.${category}`)}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Recent Posts */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          {t('recent_posts')}
        </h3>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-slate-700 transition-colors leading-snug">
                {post.title}
              </h4>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                <span>
                  {new Date(post.date).toLocaleDateString(locale, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Newsletter */}
      {/* <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-3">
          {t('subscribe_newsletter')}
        </h3>
        <p className="text-amber-100 mb-4 text-sm">
          {t('subscribe_newsletter_desc')}
        </p>
        <input
          type="email"
          placeholder={t('your_email')}
          className="w-full px-4 py-3 rounded-xl mb-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white"
        />
        <button className="w-full bg-white text-amber-600 px-4 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors shadow-lg">
          {t('subscribe_button')}
        </button>
      </div> */}
      
    </div>
  );
}