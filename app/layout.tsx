import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Construction Business Guides | BookkeepingPro Solutions",
  description: "Get free expert guides for construction business owners. Learn how to maximize profits, minimize taxes, and build scalable financial systems. 7 Financial Tricks, Tax Minimization Checklist, and Scalable Bookkeeping Blueprint.",
  keywords: "construction bookkeeping, construction accounting, construction business, tax minimization, job costing, bookkeeping for contractors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
