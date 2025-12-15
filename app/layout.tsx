import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Construction Business Guides | BookkeepingPro Solutions",
  description: "Get free expert guides for construction business owners. Learn how to maximize profits, minimize taxes, and build scalable financial systems. 7 Financial Tricks, Tax Minimization Checklist, and Scalable Bookkeeping Blueprint.",
  keywords: "construction bookkeeping, construction accounting, construction business, tax minimization, job costing, bookkeeping for contractors",
  openGraph: {
    title: "Free Construction Business Guides | BookkeepingPro Solutions",
    description: "Get free expert guides for construction business owners. Learn how to maximize profits, minimize taxes, and build scalable financial systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Construction Business Guides | BookkeepingPro Solutions",
    description: "Get free expert guides for construction business owners.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
