'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useState } from 'react';

// Same getPostData function but without tags
const getPostData = (slug, locale) => {
  const posts = {
    'new-investment-law-egypt-2025': {
      title: locale === 'ar' 
        ? 'قانون الاستثمار الجديد في مصر 2025: تحليل شامل للتعديلات والفرص'
        : 'New Investment Law in Egypt 2025: Comprehensive Analysis of Amendments and Opportunities',
      image: '/images/image1.jpeg',
      category: 'legal_updates',
      author: locale === 'ar' ? 'المستشار منتصر هريدي' : 'Counselor Montaser Haridy',
      date: '2025-09-25',
      readTime: locale === 'ar' ? '8 دقائق' : '8 min read',
      content: locale === 'ar' ? `
        <h2>مقدمة</h2>
        <p>شهدت مصر في عام 2025 تعديلات جوهرية على قانون الاستثمار، تهدف إلى تحسين مناخ الاستثمار وجذب المزيد من رؤوس الأموال الأجنبية. في هذا المقال، نستعرض أهم التعديلات وتأثيرها على المستثمرين.</p>

        <h2>التعديلات الرئيسية</h2>
        <p>تضمنت التعديلات الجديدة عدة محاور رئيسية:</p>
        <ul>
          <li><strong>تبسيط الإجراءات:</strong> تم تقليص مدة تأسيس الشركات إلى 48 ساعة فقط</li>
          <li><strong>الحوافز الضريبية:</strong> إعفاءات ضريبية للمشاريع الاستراتيجية تصل إلى 10 سنوات</li>
          <li><strong>حماية المستثمر:</strong> ضمانات قانونية أقوى ضد نزع الملكية</li>
          <li><strong>الشباك الواحد:</strong> توحيد جميع الإجراءات في نقطة واحدة</li>
        </ul>

        <h2>الفرص الاستثمارية الجديدة</h2>
        <p>فتح القانون الجديد المجال أمام قطاعات واعدة مثل:</p>
        <ul>
          <li>الطاقة المتجددة والهيدروجين الأخضر</li>
          <li>التكنولوجيا والتحول الرقمي</li>
          <li>الصناعات التحويلية والتصديرية</li>
          <li>السياحة والضيافة</li>
        </ul>

        <h2>نصائح قانونية للمستثمرين</h2>
        <p>ننصح المستثمرين الراغبين في دخول السوق المصري بـ:</p>
        <ol>
          <li>التشاور مع مستشار قانوني متخصص قبل البدء</li>
          <li>دراسة الحوافز المتاحة لكل قطاع</li>
          <li>التأكد من استيفاء جميع المتطلبات القانونية</li>
          <li>الاستفادة من خدمات الشباك الواحد</li>
        </ol>

        <h2>الخلاصة</h2>
        <p>يمثل قانون الاستثمار الجديد نقلة نوعية في مناخ الأعمال المصري، ويفتح آفاقاً واسعة للمستثمرين المحليين والأجانب. نحن في مكتب المستشار منتصر هريدي مستعدون لمساعدتكم في كل خطوة من رحلتكم الاستثمارية.</p>
      ` : `
        <h2>Introduction</h2>
        <p>Egypt witnessed fundamental amendments to its investment law in 2025, aimed at improving the investment climate and attracting more foreign capital. In this article, we review the most important amendments and their impact on investors.</p>

        <h2>Key Amendments</h2>
        <p>The new amendments included several main axes:</p>
        <ul>
          <li><strong>Simplified Procedures:</strong> Company formation period reduced to just 48 hours</li>
          <li><strong>Tax Incentives:</strong> Tax exemptions for strategic projects up to 10 years</li>
          <li><strong>Investor Protection:</strong> Stronger legal guarantees against expropriation</li>
          <li><strong>One-Stop Shop:</strong> Unification of all procedures in one point</li>
        </ul>

        <h2>New Investment Opportunities</h2>
        <p>The new law opened the door to promising sectors such as:</p>
        <ul>
          <li>Renewable energy and green hydrogen</li>
          <li>Technology and digital transformation</li>
          <li>Manufacturing and export industries</li>
          <li>Tourism and hospitality</li>
        </ul>

        <h2>Legal Advice for Investors</h2>
        <p>We advise investors wishing to enter the Egyptian market to:</p>
        <ol>
          <li>Consult with a specialized legal advisor before starting</li>
          <li>Study the incentives available for each sector</li>
          <li>Ensure all legal requirements are met</li>
          <li>Take advantage of one-stop shop services</li>
        </ol>

        <h2>Conclusion</h2>
        <p>The new investment law represents a qualitative leap in the Egyptian business climate and opens wide horizons for local and foreign investors. We at Counselor Montaser Haridy's office are ready to assist you in every step of your investment journey.</p>
      `
    }
  };

  return posts[slug] || null;
};

export default function BlogPostContent({ slug }) {
  const locale = useLocale();
  const t = useTranslations('blog');
  const [copied, setCopied] = useState(false);

  const post = getPostData(slug, locale);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('not_found')}
        </h1>
        <Link href="/blog" className="text-slate-900 hover:text-slate-700 font-semibold">
          {t('back_to_blog')}
        </Link>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-slate-900 hover:text-slate-700 mb-8 font-semibold group"
        >
          <ArrowLeft className="w-5 h-5 ltr:mr-2 rtl:ml-2 ltr:group-hover:-translate-x-1 rtl:group-hover:translate-x-1 rtl:rotate-180 transition-transform" />
          <span>{t('back_to_blog')}</span>
        </Link>

        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold">
            {t(`categories.${post.category}`)}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b-2 border-gray-200">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>
              {new Date(post.date).toLocaleDateString(locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Share Buttons - Sticky on Desktop */}
        <div className="lg:fixed lg:left-8 lg:top-1/2 lg:transform lg:-translate-y-1/2 mb-8 lg:mb-0 z-10">
          <div className="flex lg:flex-col gap-3 bg-white lg:bg-white p-4 rounded-xl shadow-xl">
            <button
              onClick={() => handleShare('facebook')}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all hover:scale-110"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-all hover:scale-110"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-all hover:scale-110"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button
              onClick={copyLink}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-800 transition-all hover:scale-110 relative"
              aria-label="Copy link"
            >
              <LinkIcon className="w-5 h-5" />
              {copied && (
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                  {locale === 'ar' ? 'تم النسخ!' : 'Copied!'}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
        />

        {/* Author Box */}
        <div className="mt-16 bg-gradient-to-br from-slate-50 to-amber-50 rounded-2xl p-8 border-2 border-gray-200">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {post.author}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('author_bio')}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-slate-900 hover:text-slate-700 font-semibold group"
              >
                <span>{t('more_about_counselor')}</span>
                <ArrowRight className="w-4 h-4 ltr:ml-2 rtl:mr-2 ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Custom styles for prose content */}
      <style jsx global>{`
        .prose h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: #1f2937;
          border-bottom: 3px solid #f59e0b;
          padding-bottom: 0.5rem;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #374151;
        }
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #4b5563;
          font-size: 1.125rem;
        }
        .prose ul, .prose ol {
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }
        .prose li {
          margin-bottom: 0.75rem;
          line-height: 1.8;
          color: #4b5563;
        }
        .prose strong {
          color: #1f2937;
          font-weight: 700;
        }
        .prose a {
          color: #1e293b;
          text-decoration: underline;
          font-weight: 600;
        }
        .prose a:hover {
          color: #475569;
        }
      `}</style>
    </article>
  );
}