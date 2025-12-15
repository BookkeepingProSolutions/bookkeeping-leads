---
description: Deploy BookkeepingPro Solutions website to Vercel
---

# Deploy to Vercel - Quick Start Workflow

## Pre-Deployment Checklist
- [x] Code pushed to GitHub ✅
- [x] Vercel configuration file created ✅
- [x] Analytics tracking code integrated ✅
- [ ] Logged into Vercel
- [ ] Project deployed

---

## Step 1: Create Vercel Account & Connect GitHub

// turbo
### 1.1 Navigate to Vercel
Open: https://vercel.com/signup

### 1.2 Sign up with GitHub
- Click **"Continue with GitHub"**
- Authorize Vercel to access your repositories
- Grant access to BookkeepingProSolutions organization

---

## Step 2: Import Your Project

// turbo
### 2.1 Create New Project
- Go to: https://vercel.com/new
- Or click **"Add New..."** → **"Project"** from dashboard

### 2.2 Import Repository
- Find **"BookkeepingProSolutions/bookkeeping-leads"**
- Click **"Import"**

---

## Step 3: Configure Project Settings

### 3.1 Framework Detection
Vercel will auto-detect:
- Framework: **Next.js**
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

✅ Keep all defaults - they're correct!

### 3.2 Environment Variables (Optional - Can Add Later)

**Skip for now if you want to deploy quickly.**

Or add these now:

| Variable Name | Value | Notes |
|--------------|-------|-------|
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Get from Google Analytics |
| `NEXT_PUBLIC_FB_PIXEL_ID` | `123456789012345` | Get from Facebook Business |
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly link | Your scheduling link |

**Note:** You can add these after deployment via Settings → Environment Variables

---

## Step 4: Deploy!

// turbo
### 4.1 Click Deploy Button
- Click **"Deploy"**
- Wait 2-3 minutes for build

### 4.2 Verify Deployment
- You'll see a success screen with confetti! 🎉
- Your site is live at: `https://bookkeeping-leads-[random].vercel.app`

### 4.3 Visit Your Site
- Click **"Visit"** button
- Test the site:
  - ✅ Homepage loads
  - ✅ Forms work
  - ✅ Lead magnets download
  - ✅ Mobile responsive

---

## Step 5: Set Up Custom Domain (Optional)

### 5.1 Purchase Domain
Recommended registrars:
- **Namecheap** (~$12/year) - https://namecheap.com
- **Google Domains**
- **GoDaddy**

Suggested domains:
- `bookkeepingprosolutions.com`
- `constructionbookkeepingpro.com`
- `getbookkeepingpro.com`

### 5.2 Add Domain to Vercel
- Go to Project → **Settings** → **Domains**
- Enter your domain
- Click **"Add"**

### 5.3 Configure DNS
Vercel will show you DNS records to add.

**For Namecheap:**
1. Go to Domain List → Manage → Advanced DNS
2. Add these records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | `76.76.21.21` | Automatic |
| CNAME | www | `cname.vercel-dns.com` | Automatic |

**Wait:** 10-60 minutes for DNS propagation

### 5.4 SSL Certificate
Vercel automatically issues SSL certificate once DNS propagates.

Your site will be live at:
- `https://yourdomain.com`
- `https://www.yourdomain.com`

---

## Step 6: Set Up Analytics (Post-Deployment)

### 6.1 Create Google Analytics 4

**Create Account:**
1. Go to: https://analytics.google.com
2. Click **Admin** (bottom left)
3. Click **Create Property**
4. Name: `BookkeepingPro Solutions`
5. Select timezone and currency
6. Click **Next** → **Create**

**Get Measurement ID:**
1. In Property, click **Data Streams**
2. Click **Add stream** → **Web**
3. Enter your Vercel URL
4. Copy **Measurement ID** (format: `G-XXXXXXXXXX`)

**Add to Vercel:**
1. Vercel Project → Settings → Environment Variables
2. Add:
   - Name: `NEXT_PUBLIC_GA_ID`
   - Value: Your Measurement ID
3. Redeploy (Deployments → three dots → Redeploy)

### 6.2 Create Facebook Pixel

**Create Pixel:**
1. Go to: https://business.facebook.com/events_manager
2. Click **Connect Data Sources** → **Web**
3. Choose **Facebook Pixel**
4. Name: `BookkeepingPro Website`
5. Enter website URL
6. Copy **Pixel ID** (15-16 digits)

**Add to Vercel:**
1. Settings → Environment Variables
2. Add:
   - Name: `NEXT_PUBLIC_FB_PIXEL_ID`
   - Value: Your Pixel ID
3. Redeploy

### 6.3 Verify Tracking

**Google Analytics:**
1. Install **Google Analytics Debugger** Chrome extension
2. Visit your site
3. Check GA4 Realtime report - should show active user

**Facebook Pixel:**
1. Install **Facebook Pixel Helper** Chrome extension
2. Visit your site
3. Extension should show green checkmark

---

## Step 7: Post-Deployment Tasks

### Week 1: Setup & Testing
- [ ] Test all forms
- [ ] Download each lead magnet
- [ ] Test on mobile devices
- [ ] Verify analytics tracking
- [ ] Set up email automation platform
- [ ] Submit sitemap to Google Search Console

### Week 2: Traffic Generation
- [ ] Launch Google Ads ($500-1000/month budget)
- [ ] Start posting on LinkedIn (3-5x/week)
- [ ] Begin cold outreach (50 emails/week)
- [ ] Join local business Facebook groups
- [ ] Optimize Google Business Profile

### Week 3-4: Optimize & Scale
- [ ] Review analytics data
- [ ] A/B test landing page headlines
- [ ] Expand ad campaigns
- [ ] Reach out to 3-5 strategic partners
- [ ] Create first video content

---

## Troubleshooting

### Build Fails
**Error:** Deploy fails with build error

**Solution:**
```bash
# Test build locally
cd /Users/music/Documents/bookkeeping-leads
npm run build

# Fix any errors, then:
git add -A
git commit -m "Fix build errors"
git push origin main
```

### Environment Variables Not Working
**Error:** Analytics not tracking

**Solution:**
1. Verify variables start with `NEXT_PUBLIC_`
2. Check for typos
3. Redeploy after adding variables

### Site Shows 404
**Error:** Site loads but shows 404 on routes

**Solution:**
- Check Output Directory is `.next`
- Verify Framework Preset is `Next.js`
- Redeploy

---

## Success Checklist

- [ ] ✅ Site deployed and live
- [ ] ✅ All pages load correctly
- [ ] ✅ Forms submit successfully
- [ ] ✅ Lead magnets download
- [ ] ✅ Mobile responsive
- [ ] ✅ Google Analytics tracking
- [ ] ✅ Facebook Pixel tracking
- [ ] ✅ Custom domain configured (optional)
- [ ] ✅ SSL certificate active
- [ ] ✅ Email automation set up

---

## Your Live URLs

**Vercel URL:** `https://bookkeeping-leads-[random].vercel.app`  
**Custom Domain:** `https://yourdomain.com` (if configured)  
**GitHub Repo:** https://github.com/BookkeepingProSolutions/bookkeeping-leads

---

## Resources

- **Vercel Docs:** https://vercel.com/docs
- **DEPLOYMENT.md:** See full deployment guide
- **Analytics Setup:** See `marketing/analytics-setup.md`
- **Email Templates:** See `marketing/email-sequences.md`
- **Outreach Templates:** See `marketing/outreach-templates.md`
- **Social Media:** See `marketing/social-media-strategy.md`

---

## Next Action

🚀 **Go to:** https://vercel.com/new  
📋 **Import:** BookkeepingProSolutions/bookkeeping-leads  
⚡ **Deploy:** Click the deploy button!

**Your site will be live in 3 minutes!**
