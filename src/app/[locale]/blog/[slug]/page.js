import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import BlogPostContent from '@/components/blog/BlogPostContent';
import RelatedPosts from '@/components/blog/RelatedPosts';

// Generate static params for all blog posts
export async function generateStaticParams() {
  // In production, fetch from your CMS/database
  const slugs = [
    'new-investment-law-egypt-2025',
    'saudi-company-formation-without-sponsor',
    'uae-golden-visa-requirements',
    'criminal-defense-strategies',
    'foreign-residency-egypt-guide',
    'case-study-successful-appeal'
  ];
  
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  
  // In production, fetch post data
  return {
    title: `Blog Post - ${slug}`,
    description: 'Blog post description',
  };
}

export default async function BlogPostPage({ params }) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  
  // In production, fetch post data from CMS/database
  // If post not found, call notFound()
  
  return (
    <div className="pt-20">
      <BlogPostContent slug={slug} />
      <RelatedPosts currentSlug={slug} />
    </div>
  );
}