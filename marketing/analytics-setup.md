# Analytics & Tracking Setup Guide

Complete guide to setting up analytics and tracking for your BookkeepingPro Solutions website.

---

## Quick Start Checklist

- [ ] Set up Google Analytics 4
- [ ] Install Facebook Pixel
- [ ] Configure conversion tracking
- [ ] Set up Google Tag Manager (optional but recommended)
- [ ] Create UTM parameter strategy
- [ ] Set up goal tracking
- [ ] Install heat mapping tool (optional)
- [ ] Configure email tracking
- [ ] Set up call tracking (optional)

---

## Part 1: Google Analytics 4 Setup

### Step 1: Create GA4 Property

1. Go to https://analytics.google.com
2. Click **Admin** (gear icon, bottom left)
3. Under **Account**, click **Create Account**
4. Enter account name: `BookkeepingPro Solutions`
5. Configure data sharing settings (recommend all enabled)
6. Click **Next**

### Step 2: Create Property

1. Property name: `BookkeepingPro Website`
2. Time zone: Your local timezone
3. Currency: USD
4. Click **Next**
5. Business info:
   - Industry: Professional Services
   - Business size: Select appropriate size
6. Click **Create**
7. Accept Terms of Service

### Step 3: Get Measurement ID

1. Click **Data Streams** (under Admin → Property column)
2. Click **Add stream** → **Web**
3. Enter your website URL
4. Stream name: `BookkeepingPro Main Site`
5. Click **Create stream**
6. **Copy your Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 4: Add to Vercel

1. Go to your Vercel project
2. Settings → Environment Variables
3. Add new variable:
   - Name: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX` (your Measurement ID)
   - All environments: ✓
4. Click **Save**
5. Redeploy your site

### Verification

1. Go to your live website
2. Open Chrome DevTools (F12)
3. Go to **Network** tab
4. Filter for `gtag`
5. Refresh page—you should see Google Analytics requests
6. OR use **Google Analytics Debugger** Chrome extension

---

## Part 2: Configure GA4 Events & Conversions

### Important Events to Track

The analytics.ts file we created tracks these events automatically:

1. **Lead Magnet Downloads**
   - Event name: `lead_magnet_download`
   - Parameters: `content_name` (e.g., "7 Financial Tricks")

2. **Form Submissions**
   - Event name: `form_submission`
   - Parameters: `content_name` (e.g., "Contact Form")

3. **Calendly Clicks**
   - Event name: `calendly_click`
   - Parameters: Consultation scheduling

4. **Outbound Links**
   - Event name: `outbound_link`
   - Parameters: URL and label

### Mark Events as Conversions

1. In GA4, go to **Admin** → **Events**
2. Wait 24-48 hours for events to appear (you need actual traffic first)
3. Toggle **Mark as conversion** for these events:
   - `lead_magnet_download`
   - `form_submission`
   - `calendly_click`

---

## Part 3: Facebook Pixel Setup

### Step 1: Create Facebook Pixel

1. Go to https://business.facebook.com/events_manager
2. Click **Connect Data Sources**
3. Select **Web**
4. Click **Get Started**
5. Choose **Facebook Pixel**
6. Enter pixel name: `BookkeepingPro Website Traffic`
7. Enter your website URL
8. Click **Continue**

### Step 2: Get Pixel ID

1. In Events Manager, click your pixel name
2. Click **Settings** tab
3. **Copy your Pixel ID** (15-16 digits)

### Step 3: Add to Vercel

1. Go to Vercel project → Settings → Environment Variables
2. Add:
   - Name: `NEXT_PUBLIC_FB_PIXEL_ID`
   - Value: Your pixel ID
3. Save and redeploy

### Step 4: Verify Installation

1. Install **Facebook Pixel Helper** Chrome extension
2. Visit your website
3. Click the extension icon
4. Should show green indicator with your pixel ID

### Configure Facebook Events

Facebook Pixel automatically tracks:
- **PageView** - Every page load
- **Lead** - Lead magnet downloads
- **Contact** - Form submissions
- **Schedule** - Calendly clicks

These are set up in the `analytics.ts` file.

---

## Part 4: Google Tag Manager (GTM) - Optional Advanced Setup

GTM makes it easier to add tracking scripts without code changes.

### Setup Process

1. Go to https://tagmanager.google.com
2. Create account: `BookkeepingPro Solutions`
3. Create container: `BookkeepingPro Website`
4. Selected Web
5. Copy the two code snippets provided

### Installation (If using GTM instead of direct GA4)

Add GTM snippets to `app/layout.tsx` instead of direct GA4/FB scripts.

**Note:** Our current implementation uses direct integration, which is simpler. Only use GTM if you plan to add many third-party scripts (ads, heatmaps, etc.).

---

## Part 5: UTM Parameter Strategy

UTM parameters track where traffic comes from.

### UTM Format

```
https://bookkeepingprosolutions.com?utm_source=facebook&utm_medium=social&utm_campaign=tax_season_2024
```

### UTM Parameters Explained

| Parameter | Purpose | Example |
|-----------|---------|---------|
| `utm_source` | Identifies traffic source | `facebook`, `linkedin`, `email`, `google` |
| `utm_medium` | Identifies medium | `social`, `cpc`, `email`, `organic` |
| `utm_campaign` | Identifies campaign | `tax_season_2024`, `lead_magnet_promo` |
| `utm_content` | Differentiates ads/links | `carousel_ad`, `story_ad`, `link_in_bio` |
| `utm_term` | Identifies keywords (paid search) | `construction_bookkeeping` |

### Use Cases

#### Email Marketing
```
https://bookkeepingprosolutions.com?utm_source=mailchimp&utm_medium=email&utm_campaign=welcome_series&utm_content=email_3
```

#### Social Media Posts
```
https://bookkeepingprosolutions.com?utm_source=linkedin&utm_medium=social&utm_campaign=case_study_post&utm_content=march_2024
```

#### Paid Ads
```
https://bookkeepingprosolutions.com?utm_source=google&utm_medium=cpc&utm_campaign=construction_leads&utm_term=construction_bookkeeping
```

#### Cold Outreach Emails
```
https://bookkeepingprosolutions.com?utm_source=cold_email&utm_medium=email&utm_campaign=outreach_batch_1&utm_content=construction_template
```

### UTM Builder Tool

Use our built-in function from `lib/analytics.ts`:

```typescript
import { buildUTMUrl } from '@/lib/analytics';

const url = buildUTMUrl(
  'https://bookkeepingprosolutions.com',
  'facebook',        // source
  'social',          // medium
  'tax_season_2024', // campaign
  'carousel_ad',     // content (optional)
  undefined          // term (optional)
);
```

Or use Google's free tool: https://ga-dev-tools.google/campaign-url-builder/

---

## Part 6: Conversion Tracking Setup

### Key Conversions to Track

1. **Lead Magnet Download**
   - Value: $50 (est. lead value)
   - Trigger: Download button click

2. **Contact Form Submission**
   - Value: $100 (warmer lead)
   - Trigger: Form submit success

3. **Calendly Consultation Booking**
   - Value: $200 (hot lead)
   - Trigger: Calendly link click

4. **Phone Call**
   - Value: $150
   - Trigger: Phone number click (if using call tracking)

### Assign Conversion Values in GA4

1. Go to **Admin** → **Conversions**
2. Click on each conversion event
3. Toggle recording user engagement
4. Use these values when setting up ad campaigns

---

## Part 7: Dashboard & Reporting

### Create Custom Dashboard in GA4

1. Go to **Reports** → **Library**
2. Click **Create new collection**
3. Name it: `Lead Generation Dashboard`

#### Widgets to Add:

**Traffic Overview:**
- Users (last 30 days)
- Sessions
- Average session duration
- Bounce rate

**Lead Generation:**
- Lead magnet downloads
- Contact form submissions
- Calendly clicks
- Total conversions

**Traffic Sources:**
- Source/medium breakdown
- Landing page performance
- Campaign performance

**Behavior:**
- Top pages
- Exit pages
- User flow

### Weekly Review Checklist

Every Monday, review:
- [ ] Total visitors (vs. last week)
- [ ] Lead magnet downloads
- [ ] Form submissions
- [ ] Consultation bookings
- [ ] Top traffic sources
- [ ] Best performing content
- [ ] Conversion rate by source

---

## Part 8: Advanced Tracking Options

### Call Tracking (Optional)

**Tools:**
- **CallRail** ($45/month)
- **CallTrackingMetrics** ($39/month)

**Benefits:**
- Track which marketing channels drive phone calls
- Record calls for quality/training
- Integrate with Google Analytics

**Setup:**
Replace your phone number on the site with a tracking number that forwards to your real number.

---

### Heat Mapping & Session Recording (Optional)

**Tools:**
- **Hotjar** (Free for 35 sessions/day)
- **Microsoft Clarity** (100% free, unlimited)
- **Crazy Egg** ($29/month)

**Benefits:**
- See where users click
- Watch session recordings
- Identify UX issues
- Optimize conversion rate

**Recommended:** Start with **Microsoft Clarity** (it's free!)

#### Microsoft Clarity Setup:

1. Go to https://clarity.microsoft.com
2. Create account
3. Create new project: `BookkeepingPro Website`
4. Copy tracking code
5. Add to Vercel environment variables
6. Add script to `app/layout.tsx` (similar to GA4)

---

### Email Tracking

If using Mailchimp, ConvertKit, or ActiveCampaign:
- UTM parameters added automatically
- Track email opens & clicks
- See which emails drive conversions

**Manual setup:**
Add UTM parameters to all email links:
```
utm_source=mailchimp
utm_medium=email
utm_campaign=[campaign_name]
```

---

## Part 9: Tracking Implementation Checklist

### Immediate Setup (Today):
- [x] Google Analytics 4 installed
- [x] Facebook Pixel installed
- [ ] GA4 verified working
- [ ] FB Pixel verified working
- [ ] Environment variables added to Vercel

### Week 1:
- [ ] Mark conversions in GA4
- [ ] Create custom dashboard
- [ ] Set up UTM parameters for first campaign
- [ ] Test all tracking events manually

### Week 2:
- [ ] Add Microsoft Clarity for heat maps
- [ ] Set up weekly reporting schedule
- [ ] Create conversion value benchmarks
- [ ] Integrate with email platform

### Month 1:
- [ ] Review first month's data
- [ ] Identify top-performing channels
- [ ] Optimize underperforming pages
- [ ] Set up advanced goals (if needed)

---

## Part 10: Troubleshooting

### GA4 Not Tracking

**Check:**
1. Is `NEXT_PUBLIC_GA_ID` set correctly in Vercel?
2. Did you redeploy after adding the env variable?
3. Are you testing on your live site (not localhost)?
4. Is the Measurement ID correct format (`G-XXXXXXXXXX`)?
5. Are you using an ad blocker? (Disable for testing)

**Debug:**
- Install **Google Analytics Debugger** Chrome extension
- Check browser console for errors
- Verify in GA4 Realtime report (should show active users)

---

### Facebook Pixel Not Firing

**Check:**
1. Is `NEXT_PUBLIC_FB_PIXEL_ID` set in Vercel?
2. Is the Pixel ID just numbers (no extra characters)?
3. Did you redeploy?
4. Install **Facebook Pixel Helper** extension

**Debug:**
- Open DevTools → Network tab
- Filter for `facebook`
- Should see `fbevents.js` loading

---

### Events Not Appearing in GA4

**Note:** Events can take 24-48 hours to appear in the **Events** list in GA4 admin.

**Check immediately** in:
- **Realtime** report (shows events as they happen)
- **DebugView** (if using GA4 debug mode)

---

## Part 11: Privacy & Compliance

### Cookie Consent (Optional but Recommended)

**Tools:**
- **CookieYes** (Free up to 25K pageviews)
- **Osano** ($199/month)
- **OneTrust** (Enterprise)

### Privacy Policy

Your privacy policy should mention:
- You use Google Analytics and Facebook Pixel
- What data you collect (IP address, browsing behavior, etc.)
- How users can opt-out
- Link to Google Analytics opt-out: https://tools.google.com/dlpage/gaoptout

**Get template:** https://www.termsfeed.com/privacy-policy-generator/

---

## Part 12: Metrics Glossary

### Key Terms

**Users:** Unique visitors to your site
**Sessions:** Individual visits (one user can have multiple sessions)
**Bounce Rate:** % of single-page sessions
**Conversion Rate:** % of sessions that result in a conversion
**Event:** Specific action (download, click, submit)
**Source/Medium:** Where traffic came from (e.g., google/organic, facebook/social)

### What Success Looks Like

**Month 1 Goals:**
- 500-1,000 visitors
- 20-40 lead magnet downloads (2-4% conversion)
- 5-10 consultation bookings
- Track top 3 traffic sources

**Month 3 Goals:**
- 1,500-2,500 visitors
- 50-100 lead downloads
- 15-25 consultations
- 3-5 new clients

**Month 6 Goals:**
- 3,000-5,000 visitors
- 100-200 lead downloads
- 30-50 consultations
- 8-12 new clients

---

## Resources & Links

- **Google Analytics Help:** https://support.google.com/analytics
- **Facebook Business Help:** https://www.facebook.com/business/help
- **UTM Builder:** https://ga-dev-tools.google/campaign-url-builder/
- **GA4 vs Universal Analytics:** https://support.google.com/analytics/answer/11583528
- **Microsoft Clarity:** https://clarity.microsoft.com
- **Google Tag Manager:** https://tagmanager.google.com

---

## Quick Reference: Event Names

Use these exact event names in your tracking:

| Action | Event Name | Used In |
|--------|-----------|---------|
| Lead magnet download | `lead_magnet_download` | GA4 + FB Pixel |
| Contact form submit | `form_submission` | GA4 + FB Pixel |
| Calendly click | `calendly_click` | GA4 + FB Pixel |
| Phone click | `phone_click` | GA4 |
| Email click | `email_click` | GA4 |
| Outbound link | `outbound_link` | GA4 |

---

**Remember:** "What gets measured gets managed." Track everything, optimize what works, eliminate what doesn't.
