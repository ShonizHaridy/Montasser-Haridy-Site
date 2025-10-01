import { Inter, Noto_Sans_Arabic } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata = {
  title: 'Counselor Montaser Haridy - Elite Legal Services',
  description: 'Voice of Law for Stars, Politicians & Business Leaders',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansArabic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}