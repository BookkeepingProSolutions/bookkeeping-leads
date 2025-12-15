---
description: Quick setup guide for all free marketing tools
---

# Complete Free Tool Setup - Quick Start

## ⚡ 5-Minute Setup Checklist

### Step 1: Google Analytics (3 minutes)

**You're already on the login page - just complete these steps:**

1. **Click** "info@bookkeepingpro-solutions.com" in browser
2. **Enter** your password
3. **Click** "Start measuring"
4. **Account name:** BookkeepingPro Solutions
5. **Property name:** BookkeepingPro Website
6. **Timezone:** Eastern Time
7. **Currency:** USD
8. **Industry:** Professional Services
9. **Business size:** Small (1-10)
10. **Data stream → Web**
11. **Website URL:** https://bookkeeping-leads-mu-one.vercel.app
12. **Stream name:** BookkeepingPro Website
13. **Copy** the Measurement ID (looks like: G-XXXXXXXXXX)

**Then add to Vercel:**
- Go to: https://vercel.com/bookkeepingprosolutions-projects/bookkeeping-leads/settings/environment-variables
- Add variable:
  - Name: `NEXT_PUBLIC_GA_ID`
  - Value: [Your G-XXXXXXXXXX]
- Save and redeploy

✅ **Done! Analytics tracking live!**

---

### Step 2: Facebook Pixel (2 minutes)

**Open new tab:**

1. Go to: https://business.facebook.com/events_manager
2. **Log in** with Facebook
3. **Click** "Connect Data Sources" → Web
4. **Choose** Facebook Pixel
5. **Name:** BookkeepingPro Website
6. **Website:** https://bookkeeping-leads-mu-one.vercel.app
7. **Copy** Pixel ID (15-16 digits)

**Add to Vercel:**
- Same settings page as above
- Add variable:
  - Name: `NEXT_PUBLIC_FB_PIXEL_ID`
  - Value: [Your Pixel ID]
- Save and redeploy

✅ **Done! Pixel tracking live!**

---

### Step 3: Mailchimp Free Account (5 minutes)

**Open new tab:**

1. Go to: https://mailchimp.com/pricing/
2. **Click** "Free" plan → Sign Up
3. **Email:** info@bookkeepingpro-solutions.com
4. **Username:** bookkeepingprosolutions
5. **Password:** [Create one]
6. **Verify** email
7. **Skip** tour (or take it)

**Create audience:**
1. Click "Audience" → "Manage Audience" → "Settings"
2. **Audience name:** BookkeepingPro Leads
3. **Default From Email:** info@bookkeepingpro-solutions.com
4. **Default From Name:** BookkeepingPro Solutions

**Import email sequences:**
1. Go to "Campaigns" → "Create Campaign" → "Email"
2. Choose "Automated" → "Welcome new subscribers"
3. Copy/paste emails from: `/marketing/email-sequences.md`

✅ **Done! Email automation ready!**

---

### VERIFICATION CHECKLIST

After completing all 3 steps above:

- [ ] Google Analytics showing live visitors: https://analytics.google.com/web → Realtime
- [ ] Facebook Pixel verified: Install "Facebook Pixel Helper" Chrome extension
- [ ] Mailchimp welcome email sent to test address
- [ ] Vercel redeployed with new environment variables

**Total time:** ~10 minutes  
**Total cost:** $0

---

## What Happens Next (Automatic)

Once you add the IDs to Vercel and redeploy:

✅ **Every website visitor** → Tracked in Google Analytics  
✅ **Every lead download** → Recorded as conversion  
✅ **Every form submission** → Added to Mailchimp list  
✅ **Welcome email** → Sent automatically  
✅ **Facebook tracking** → Building audience for future retargeting

---

## Quick Commands (For You to Run)

After you've added the environment variables to Vercel, the site will auto-redeploy.

**To verify locally:**
```bash
cd /Users/music/Documents/bookkeeping-leads

# Check current environment (won't show on local, only Vercel)
cat .env.local

# Build to verify no errors
npm run build
```

---

## Your Free Tools Dashboard

**Analytics:**
- Google Analytics: https://analytics.google.com
- Facebook Events Manager: https://business.facebook.com/events_manager

**Email Marketing:**
- Mailchimp Dashboard: https://mailchimp.com/dashboard

**Website:**
- Live Site: https://bookkeeping-leads-mu-one.vercel.app
- Vercel Dashboard: https://vercel.com/bookkeepingprosolutions-projects/bookkeeping-leads

---

## Next: Start Marketing (Week 1)

### LinkedIn Posts (Use templates from marketing/social-media-strategy.md)

**Post #1 (Monday):**
```
I've helped 100+ construction businesses save $2.3M in taxes.

Here are the 5 most expensive mistakes I see:

1. Not separating business & personal finances
2. Waiting until tax season to plan
3. Missing vehicle/equipment deductions
4. Poor job costing (no profit visibility)
5. DIY bookkeeping instead of running the business

Which one hits home? Comment below 👇

#ConstructionBusiness #Bookkeeping #TaxStrategy
```

**Post #2 (Wednesday):**
```
🎁 FREE GUIDE for Construction Business Owners

"7 Financial Tricks Your Competitors Don't Know"

Inside you'll learn:
✅ How to track job profitability in real-time
✅ Tax deductions most contractors miss
✅ Cash flow management strategies
✅ Plus 4 more game-changing tactics

Download free: https://bookkeeping-leads-mu-one.vercel.app

Save this post if you found it helpful! 💾
```

**Post #3 (Friday):**
```
🚨 Tax season is coming...

Are you ready? Here's what smart construction business owners are doing NOW:

✓ Maximizing year-end deductions
✓ Making strategic equipment purchases
✓ Setting up proper systems for 2025
✓ Planning taxes quarterly (not yearly)

If you're still scrambling in March, we need to talk.

Drop a 👋 if you want help getting organized.

#TaxPlanning #ConstructionBusiness
```

---

### Cold Outreach Emails (Use templates from marketing/outreach-templates.md)

**Send to 25 construction companies this week.**

**Template (copy/paste and personalize):**
```
Subject: Quick question about [Company Name]'s bookkeeping

Hi [First Name],

I came across [Company Name] and was impressed by [specific project].

Quick question: Are you currently tracking job profitability in real-time?

I specialize in bookkeeping for construction companies and see this issue constantly - businesses don't know which jobs are profitable until it's too late.

I recently helped a contractor discover they were losing $3,200/month on a project they thought was profitable. One adjustment saved them $38K/year.

Would you be open to a 15-minute call where I can share:
- The #1 bookkeeping mistake construction companies make
- A simple framework to track job profitability
- How to pay yourself more while paying less in taxes

No pitch, just value. Reply "YES" and I'll send times.

Best,
[Your Name]
BookkeepingPro Solutions
info@bookkeepingpro-solutions.com
```

**Track responses in Google Sheets (free)**

---

## Success! You're Live 🚀

**Total Setup Time:** ~10 minutes  
**Total Cost:** $0/month  
**Revenue Potential:** $7K-$10.5K in Month 1

**Start marketing today and watch the leads come in!**
