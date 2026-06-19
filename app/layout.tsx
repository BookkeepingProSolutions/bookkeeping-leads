import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookkeeping Services in Dover, NJ | BookkeepingPro Solutions",
  description: "Expert bookkeeping, payroll, and tax services for small businesses and construction companies in Dover, NJ. Maximize profits and minimize taxes with BookkeepingPro Solutions.",
  keywords: "Dover bookkeeping, Dover NJ accountant, local bookkeeper near me, construction bookkeeping, tax minimization, payroll services",
  openGraph: {
    title: "Bookkeeping Services in Dover, NJ | BookkeepingPro Solutions",
    description: "Expert bookkeeping, payroll, and tax services for small businesses in Dover, NJ.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookkeeping Services in Dover, NJ | BookkeepingPro Solutions",
    description: "Expert bookkeeping, payroll, and tax services for small businesses in Dover, NJ.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "AW-18244378942";
  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "BookkeepingPro Solutions",
    "url": "https://bookkeepingpro-solutions.com",
    "telephone": "+1-908-288-5268",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "169 Washington Ave",
      "addressLocality": "Dover",
      "addressRegion": "NJ",
      "postalCode": "07801",
      "addressCountry": "US"
    },
    "priceRange": "$$"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Facebook Pixel */}
        {FB_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* Local SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
