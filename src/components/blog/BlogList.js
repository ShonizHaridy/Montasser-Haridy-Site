'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

// Sample blog posts
const generateBlogPosts = (locale) => [
  {
    id: 1,
    slug: 'new-investment-law-egypt-2025',
    title: locale === 'ar' 
      ? 'قانون الاستثمار الجديد في مصر 2025'
      : 'New Investment Law in Egypt 2025',
    excerpt: locale === 'ar'
      ? 'تحليل شامل للتعديلات الجديدة على قانون الاستثمار وتأثيرها على المستثمرين الأجانب'
      : 'Comprehensive analysis of new amendments to investment law and their impact on foreign investors',
    image: '/images/image1.jpeg',
    category: 'legal_updates',
    author: locale === 'ar' ? 'المستشار منتصر هريدي' : 'Counselor Montaser Haridy',
    date: '2025-09-25',
    readTime: locale === 'ar' ? '5 دقائق' : '5 min read'
  },
  {
    id: 2,
    slug: 'saudi-company-formation-without-sponsor',
    title: locale === 'ar'
      ? 'تأسيس شركة في السعودية بدون كفيل - الدليل الكامل'
      : 'Saudi Company Formation Without Sponsor - Complete Guide',
    excerpt: locale === 'ar'
      ? 'خطوات تفصيلية لتأسيس شركتك في المملكة العربية السعودية بدون الحاجة لكفيل سعودي'
      : 'Step-by-step guide to establishing your company in Saudi Arabia without needing a Saudi sponsor',
    image: '/images/image2.jpeg',
    category: 'corporate',
    author: locale === 'ar' ? 'المستشار منتصر هريدي' : 'Counselor Montaser Haridy',
    date: '2025-09-20',
    readTime: locale === 'ar' ? '8 دقائق' : '8 min read'
  },
  {
    id: 3,
    slug: 'uae-golden-visa-requirements',
    title: locale === 'ar'
      ? 'متطلبات الإقامة الذهبية في الإمارات'
      : 'UAE Golden Visa Requirements',
    excerpt: locale === 'ar'
      ? 'دليل شامل للحصول على الإقامة الذهبية في دولة الإمارات العربية المتحدة'
      : 'Comprehensive guide to obtaining golden residency in the United Arab Emirates',
    image: '/images/nav_image.jpeg',
    category: 'residency',
    author: locale === 'ar' ? 'المستشار منتصر هريدي' : 'Counselor Montaser Haridy',
    date: '2025-09-15',
    readTime: locale === 'ar' ? '6 دقائق' : '6 min read'
  },
  {
    id: 4,
    slug: 'criminal-defense-strategies',
    title: locale === 'ar'
      ? 'استراتيجيات الدفاع في القضايا الجنائية الكبرى'
      : 'Defense Strategies in Major Criminal Cases',
    excerpt: locale === 'ar'
      ? 'نظرة على أهم الاستراتيجيات القانونية المستخدمة في الدفاع عن المتهمين في القضايا الجنائية'
      : 'Overview of key legal strategies used in defending clients in criminal cases',
    image: '/images/image1.jpeg',
    category: 'criminal',
    author: locale === 'ar' ? 'المستشار منتصر هريدي' : 'Counselor Montaser Haridy',
    date: '2025-09-10',
    readTime: locale === 'ar' ? '10 دقائق' : '10 min read'
  },
  {
    id: 5,
    slug: 'foreign-residency-egypt-guide',
    title: locale === 'ar'
      ? 'دليل الإقامة للأجانب في مصر'
      : 'Foreign Residency Guide in Egypt',
    excerpt: locale === 'ar'
      ? 'كل ما تحتاج معرفته عن إجراءات الإقامة للأجانب في مصر'
      : 'Everything you need to know about residency procedures for foreigners in Egypt',
    image: '/images/image2.jpeg',
    category: 'residency',
    author: locale === 'ar' ? 'المستشار منتصر هريدي' : 'Counselor Montaser Haridy',
    date: '2025-09-05',
    readTime: locale === 'ar' ? '7 دقائق' : '7 min read'
  },
  {
    id: 6,
    slug: 'case-study-successful-appeal',
    title: locale === 'ar'
      ? 'دراسة حالة: نجاح استئناف في قضية جنائية'
      : 'Case Study: Successful Criminal Appeal',
    excerpt: locale === 'ar'
      ? 'كيف نجحنا في قلب حكم إدانة إلى براءة من خلال استئناف محكم'
      : 'How we successfully overturned a conviction through a solid appeal',
    image: '/images/nav_image.jpeg',
    category: 'case_studies',
    author: locale === 'ar' ? 'المستشار منتصر هريدي' : 'Counselor Montaser Haridy',
    date: '2025-08-30',
    readTime: locale === 'ar' ? '12 دقيقة' : '12 min read'
  }
];

export default function BlogList({ category, page }) {
  const locale = useLocale();
  const t = useTranslations('blog');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const postsPerPage = 6;

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      let allPosts = generateBlogPosts(locale);
      
      if (category && category !== 'all') {
        allPosts = allPosts.filter(post => post.category === category);
      }
      
      const startIndex = (page - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const paginatedPosts = allPosts.slice(startIndex, endIndex);
      
      setPosts(paginatedPosts);
      setLoading(false);
    }, 300);
  }, [category, page, locale]);

  if (loading) {
    return (
      <div className="space-y-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
            <div className="aspect-[16/9] bg-gray-300"></div>
            <div className="p-8 space-y-4">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-20 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
        <p className="text-gray-500 text-lg">{t('no_results')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article 
          key={post.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
        >
          <div className="grid md:grid-cols-5 gap-0">
            {/* Image */}
            <Link href={`/blog/${post.slug}`} className="md:col-span-2">
              <div className="relative aspect-[16/9] md:aspect-auto md:h-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 ltr:left-4 rtl:right-4">
                  <span className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {t(`categories.${post.category}`)}
                  </span>
                </div>
              </div>
            </Link>
            
            {/* Content */}
            <div className="md:col-span-3 p-8 flex flex-col justify-between">
              <div>
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString(locale, { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-slate-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              
              {/* Read More */}
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-slate-900 font-semibold hover:text-slate-700 transition-colors group/link"
              >
                <span>{t('read_more')}</span>
                <ArrowRight className="w-5 h-5 ltr:ml-2 rtl:mr-2 ltr:group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 rtl:rotate-180 transition-transform" />
              </Link>
            </div>
          </div>
        </article>
      ))}
      
      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-12">
        <Link 
          href={`/blog?page=${Math.max(1, page - 1)}`}
          className={`px-6 py-3 bg-white border-2 border-gray-300 rounded-xl font-semibold hover:border-slate-900 hover:bg-slate-50 transition-all ${
            page === 1 ? 'opacity-50 pointer-events-none' : ''
          }`}
        >
          {t('previous')}
        </Link>
        <Link 
          href={`/blog?page=${page + 1}`}
          className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
        >
          {t('next')}
        </Link>
      </div>
    </div>
  );
}