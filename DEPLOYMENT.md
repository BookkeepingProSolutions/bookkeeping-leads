# Vercel Deployment Guide

## Quick Start Deployment

### Prerequisites
- GitHub account (already set up ✅)
- Vercel account (create at https://vercel.com)

### Step 1: Create Vercel Account
1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub repositories

### Step 2: Import Your Project
1. Once logged in, click **"Add New..."** → **"Project"**
2. Find and select **`BookkeepingProSolutions/bookkeeping-leads`**
3. Click **"Import"**

### Step 3: Configure Project
Vercel will auto-detect your Next.js project. Configure the following:

**Framework Preset:** Next.js (auto-detected)
**Root Directory:** `./` (leave as default)
**Build Command:** `npm run build` (auto-filled)
**Output Directory:** `.next` (auto-filled)

### Step 4: Environment Variables
Click **"Environment Variables"** and add the following:

| Name | Value | Where to Get It |
|------|-------|-----------------|
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | [Create Google Analytics property](#google-analytics-setup) |
| `NEXT_PUBLIC_FB_PIXEL_ID` | `123456789012345` | [Create Facebook Pixel](#facebook-pixel-setup) |
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly link | Your existing Calendly account |

**Note:** You can deploy first without these and add them later.

### Step 5: Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `https://bookkeeping-leads-xxx.vercel.app`

---

## Custom Domain Setup

### Step 1: Purchase Domain
Purchase a domain from:
- **Namecheap** (recommended, ~$10-15/year)
- **GoDaddy**
- **Google Domains**

Suggested domains:
- `bookkeepingprosolutions.com`
- `constructionbookkeepingpro.com`
- `getbookkeepingpro.com`

### Step 2: Add Domain to Vercel
1. In your Vercel project, go to **Settings** → **Domains**
2. Enter your domain name (e.g., `bookkeepingprosolutions.com`)
3. Click **"Add"**

### Step 3: Configure DNS
Vercel will show you DNS records to add. In your domain registrar:

**For Namecheap:**
1. Go to Domain List → Manage → Advanced DNS
2. Add these records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | `76.76.21.21` | Automatic |
| CNAME | www | `cname.vercel-dns.com` | Automatic |

**Wait 10-60 minutes** for DNS propagation.

### Step 4: Verify
Once DNS propagates, Vercel will automatically issue an SSL certificate. Your site will be live at:
- `https://bookkeepingprosolutions.com`
- `https://www.bookkeepingprosolutions.com`

---

## Google Analytics Setup

### Create GA4 Property
1. Go to https://analytics.google.com
2. Click **"Admin"** (bottom left)
3. Click **"Create Property"**
4. Enter property name: `BookkeepingPro Solutions`
5. Select timezone and currency
6. Click **"Next"** → **"Create"**

### Get Measurement ID
1. In Property column, click **"Data Streams"**
2. Click **"Add stream"** → **"Web"**
3. Enter your website URL
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)
5. Add this to Vercel environment variables as `NEXT_PUBLIC_GA_ID`

---

## Facebook Pixel Setup

### Create Facebook Pixel
1. Go to https://business.facebook.com
2. Click **"Events Manager"** in left menu
3. Click **"Connect Data Sources"** → **"Web"** → **"Get Started"**
4. Choose **"Facebook Pixel"** → **"Connect"**
5. Enter Pixel name: `BookkeepingPro Website`
6. Enter website URL
7. Click **"Continue"**

### Get Pixel ID
1. In Events Manager, click your pixel name
2. Copy the **Pixel ID** (15-16 digit number)
3. Add this to Vercel environment variables as `NEXT_PUBLIC_FB_PIXEL_ID`

---

## Continuous Deployment

### Automatic Deployments
Every time you push to GitHub:
1. Vercel automatically detects the push
2. Builds your project
3. Deploys the new version
4. Your site updates in 2-3 minutes

### Deploy from Command Line
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

---

## Monitoring & Analytics

### Vercel Dashboard
Monitor your deployments at: https://vercel.com/dashboard

**Key metrics:**
- Build status
- Deployment history
- Performance analytics
- Error logs

### Google Analytics Dashboard
Track visitors at: https://analytics.google.com

**Key metrics to watch:**
- Users and sessions
- Lead magnet downloads
- Form submissions
- Traffic sources

---

## Troubleshooting

### Build Fails
**Error:** `npm run build` fails
**Solution:** 
```bash
# Test build locally first
npm run build
# Fix any errors, commit, and push
```

### Environment Variables Not Working
**Error:** Analytics not tracking
**Solution:**
1. Go to Vercel project → Settings → Environment Variables
2. Ensure variables start with `NEXT_PUBLIC_`
3. Redeploy the project

### DNS Not Propagating
**Error:** Domain shows "DNS not configured"
**Solution:**
1. Wait 24-48 hours for full propagation
2. Use https://dnschecker.org to verify
3. Clear browser cache

---

## Next Steps After Deployment

✅ **Immediate:**
1. Test all forms and downloads
2. Verify analytics tracking
3. Test Calendly integration
4. Check mobile responsiveness

✅ **Within 24 Hours:**
1. Submit sitemap to Google Search Console
2. Start running ads with your live URL
3. Share on social media
4. Begin email outreach campaigns

---

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Google Analytics Help:** https://support.google.com/analytics
- **Facebook Business Help:** https://facebook.com/business/help
