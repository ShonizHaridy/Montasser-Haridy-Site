// import { generateBlogPosts } from '@/lib/blogData'; // You'll need to export this

export async function GET(request, { params }) {
  const { locale } = await params;
  const posts = generateBlogPosts(locale);
  
  const siteUrl = 'https://yourwebsite.com';
  const feedUrl = `${siteUrl}/${locale}/blog/rss.xml`;
  
  const rssItems = posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/${locale}/blog/${post.slug}</link>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/${locale}/blog/${post.slug}</guid>
      <category>${post.category}</category>
      <author>${post.author}</author>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${locale === 'ar' ? 'مدونة المستشار منتصر هريدي' : 'Counselor Montaser Haridy Blog'}</title>
    <link>${siteUrl}/${locale}/blog</link>
    <description>${locale === 'ar' ? 'رؤى قانونية، تحديثات القضايا، وأخبار الصناعة' : 'Legal insights, case updates, and industry news'}</description>
    <language>${locale}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}