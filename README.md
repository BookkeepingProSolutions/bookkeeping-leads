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

- **Analytics & Tracking**:
  - Google Analytics 4 integration
  - Facebook Pixel tracking
  - Conversion event tracking
  - UTM parameter support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Analytics**: Google Analytics 4, Facebook Pixel
- **Deployment**: Vercel

## 📁 Project Structure

```
/app
  page.tsx          # Main landing page
  layout.tsx        # Root layout with SEO + Analytics
  globals.css       # Global styles
/components
  Hero.tsx          # Hero section
  EbookCards.tsx    # Ebook selection cards
  ContactForm.tsx   # Lead capture form
  Footer.tsx        # Footer component
/lib
  analytics.ts      # Analytics tracking utilities
/public
  /ebooks           # HTML ebooks (ready for PDF conversion)
    7-financial-tricks-construction.html
    tax-minimization-checklist.html
    scalable-bookkeeping-blueprint.html
/marketing
  email-sequences.md      # Complete email automation templates
  outreach-templates.md   # Cold outreach email templates
  social-media-strategy.md # 30-day content calendar
  analytics-setup.md      # Analytics configuration guide
DEPLOYMENT.md      # Complete Vercel deployment guide
vercel.json        # Vercel configuration
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

### Quick Deploy to Vercel

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete step-by-step instructions.

**Quick steps:**
1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/BookkeepingProSolutions/bookkeeping-leads)

## 🔒 Environment Variables

Create these in Vercel (or `.env.local` for local development):

```bash
# Google Analytics (optional but recommended)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Facebook Pixel (optional but recommended)
NEXT_PUBLIC_FB_PIXEL_ID=123456789012345

# Calendly URL
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
```

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for how to get these values.

## 📧 Email Marketing

### Email Automation Sequences

Complete email sequences ready to import into Mailchimp, ConvertKit, or ActiveCampaign:

- Welcome sequence (5 emails)
- Lead magnet nurture sequences
- Re-engagement campaigns
- Post-consultation follow-ups

📄 See **[marketing/email-sequences.md](./marketing/email-sequences.md)**

## 📤 Cold Outreach Templates

Ready-to-use email templates for:
- Construction company outreach
- Real estate professional outreach
- Partnership/referral outreach
- LinkedIn messaging

📄 See **[marketing/outreach-templates.md](./marketing/outreach-templates.md)**

## 📱 Social Media Strategy

30-day content calendar with:
- LinkedIn posts (3-5x/week)
- Instagram content (4-5x/week)
- Facebook posts (3-4x/week)
- Content templates and hashtag strategy

📄 See **[marketing/social-media-strategy.md](./marketing/social-media-strategy.md)**

## 📊 Analytics Setup

Complete guides for:
- Google Analytics 4 setup
- Facebook Pixel configuration
- Conversion tracking
- UTM parameter strategy
- Dashboard creation

📄 See **[marketing/analytics-setup.md](./marketing/analytics-setup.md)**

### Track Events Programmatically

```typescript
import { trackLeadMagnetDownload, trackFormSubmission, trackCalendlyClick } from '@/lib/analytics';

// Track lead magnet download
trackLeadMagnetDownload('7 Financial Tricks');

// Track form submission
trackFormSubmission('Contact Form');

// Track consultation booking
trackCalendlyClick();
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

## 📈 Lead Generation Roadmap

Now that your site is ready, here's your roadmap to start generating clients:

### Week 1: Deploy & Setup
- [ ] Deploy to Vercel (see [DEPLOYMENT.md](./DEPLOYMENT.md))
- [ ] Set up Google Analytics & Facebook Pixel
- [ ] Configure email automation platform
- [ ] Test all forms and tracking

### Week 2: Traffic Generation
- [ ] Launch Google Ads campaign
- [ ] Start social media posting (use 30-day calendar)
- [ ] Begin cold outreach (50 emails/week)
- [ ] Optimize for local SEO

### Week 3-4: Scale
- [ ] A/B test landing page elements
- [ ] Expand ad campaigns
- [ ] Build strategic partnerships
- [ ] Create video content

## 📚 Complete Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deploy to Vercel + custom domain setup
- **[marketing/email-sequences.md](./marketing/email-sequences.md)** - Email automation templates
- **[marketing/outreach-templates.md](./marketing/outreach-templates.md)** - Cold email templates
- **[marketing/social-media-strategy.md](./marketing/social-media-strategy.md)** - 30-day content plan
- **[marketing/analytics-setup.md](./marketing/analytics-setup.md)** - Analytics configuration

## 📝 License

© 2025 BookkeepingPro Solutions. All rights reserved.

## 🤝 Support

For questions or support, contact: contact@bookkeepingpro-solutions.com

---

**Ready to launch?** Start with [DEPLOYMENT.md](./DEPLOYMENT.md) →
