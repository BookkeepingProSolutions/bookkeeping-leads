# BookkeepingPro Solutions - Lead Generation Website

A professional Next.js landing page designed to generate leads for BookkeepingPro Solutions' construction-focused bookkeeping services.

## 🎯 Features

- **Three Professional Ebooks** (Construction-focused):
  - 7 Financial Tricks for Construction Business Owners
  - Construction Business Tax Minimization Checklist
  - The Scalable Bookkeeping Blueprint for Growing Construction Companies

- **Premium Landing Page**:
  - Hero section with compelling value proposition
  - Interactive ebook selection cards
  - Lead capture form with email integration
  - Fully responsive mobile-first design
  - SEO optimized

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
/app
  page.tsx          # Main landing page
  layout.tsx        # Root layout with SEO
  globals.css       # Global styles
/components
  Hero.tsx          # Hero section
  EbookCards.tsx    # Ebook selection cards
  ContactForm.tsx   # Lead capture form
  Footer.tsx        # Footer component
/public
  /ebooks           # HTML ebooks (ready for PDF conversion)
    7-financial-tricks-construction.html
    tax-minimization-checklist.html
    scalable-bookkeeping-blueprint.html
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/BookkeepingProSolutions/bookkeeping-leads)

### Deploy to Netlify

```bash
npm run build
# Deploy the .next folder
```

## 📧 Email Integration

The contact form currently displays a success message. To enable email functionality:

1. Create an API route at `/app/api/submit/route.ts`
2. Integrate with:
   - **Resend** (recommended for transactional emails)
   - **SendGrid**
   - **Mailgun**
   - Or your preferred email service

Example with Resend:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'leads@bookkeepingpro-solutions.com',
    to: 'contact@bookkeepingpro-solutions.com',
    subject: 'New Lead from Website',
    html: `<p>New lead: ${data.name} - ${data.email}</p>`
  });
  
  return Response.json({ success: true });
}
```

## 📄 Converting Ebooks to PDF

The ebooks are currently in HTML format. To convert to PDF:

### Option 1: Using Browser
1. Open each HTML file in browser
2. Print → Save as PDF
3. Upload PDFs to `/public/ebooks/`

### Option 2: Using wkhtmltopdf
```bash
# Install wkhtmltopdf
brew install wkhtmltopdf

# Convert each ebook
wkhtmltopdf public/ebooks/7-financial-tricks-construction.html public/ebooks/7-financial-tricks-construction.pdf
wkhtmltopdf public/ebooks/tax-minimization-checklist.html public/ebooks/tax-minimization-checklist.pdf
wkhtmltopdf public/ebooks/scalable-bookkeeping-blueprint.html public/ebooks/scalable-bookkeeping-blueprint.pdf
```

### Option 3: Using Puppeteer (Automated)
```bash
npm install puppeteer
```

Create a script to auto-convert all HTML to PDF.

## 🎨 Customization

### Update Brand Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#1a5490',
        secondary: '#f97316',
      }
    }
  }
}
```

### Update Contact Information

Edit `/components/Footer.tsx` to update contact details.

## 📊 Analytics

Add Google Analytics or Plausible:

```typescript
// app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
```

## 🔒 Environment Variables

Create `.env.local`:

```
RESEND_API_KEY=your_api_key
NEXT_PUBLIC_GA_ID=your_ga_id
```

## 📝 License

© 2025 BookkeepingPro Solutions. All rights reserved.

## 🤝 Support

For questions or support, contact: contact@bookkeepingpro-solutions.com
