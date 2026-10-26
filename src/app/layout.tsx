import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
});

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'AKSH.DEV — Freelance Full Stack Developer',
  description: 'Freelance Full Stack Developer from Jaipur specializing in React, Next.js, Shopify and interactive web experiences.',
  openGraph: {
    title: 'AKSH.DEV — Freelance Full Stack Developer',
    description: 'Freelance Full Stack Developer from Jaipur specializing in React, Next.js, Shopify and interactive web experiences.',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'AKSH.DEV',
    images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png` }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AKSH.DEV — Freelance Full Stack Developer',
    description: 'Freelance Full Stack Developer from Jaipur specializing in React, Next.js, Shopify and interactive web experiences.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`],
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased`}>
      <head>
        {/* JSON‑LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Akshay Sharma',
          url: process.env.NEXT_PUBLIC_SITE_URL,
          sameAs: [
            'https://www.linkedin.com/in/akshay-sharma006/',
            'https://github.com/akshay-sharma062',
            'https://www.instagram.com/akshay_sharma/',
            'https://wa.me/919929046909',
          ],
          jobTitle: 'Freelance Full Stack Developer',
          worksFor: {
            '@type': 'Organization',
            name: 'AKSH.DEV',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jaipur',
            addressCountry: 'India',
          },
        }) }} />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-primary">
        {children}
      </body>
    </html>
  );
}
