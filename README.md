# Burn Rate Runway Extender Widget

<img width="848" height="504" alt="Image" src="https://github.com/user-attachments/assets/2438815d-1502-482c-b742-658bbed6f273" />

---

A deploy-ready static iframe widget that helps founders calculate their estimated runway, understand monthly burn, and generate a calendar-ready funding review prompt before cash pressure turns into business gravity.

Built for:

- Wix blog articles
- Wix Groups
- partner directories
- affiliate resource hubs
- startup finance content
- funding education pages
- lead-generation funnels

This is not just a calculator. It is a tiny financial panic button with better typography.

---

## Live URLs

### Widget

Use this as the iframe source when embedding the calculator:

```txt
https://burn-rate-runway-widget.vercel.app/
```

### Embed Instructions

Use this page to generate copy/paste iframe code for partners:

```txt
https://burn-rate-runway-widget.vercel.app/embed.html
```

### Landing Page

Use this as the public-facing page for social posts, blog CTAs, email links, partner resources, and SEO/AEO traffic:

```txt
https://burn-rate-runway-widget.vercel.app/landing.html
```

---

## What the Tool Does

The Burn Rate Runway Extender helps a founder answer one simple question:

> “How long do I have before the money runs out?”

The user enters:

- Current Cash on Hand
- Monthly Expenses
- Monthly Revenue

The widget calculates:

- Net Monthly Burn
- Daily Burn
- Estimated Runway in Months
- Estimated Cash-Out Date
- Runway Status
- Calendar Invite Artifact

The goal is not to create another spreadsheet graveyard. The goal is to force a decision.

---

## Primary Use Case

Startups often wait too long to deal with cash problems.

By the time they are desperate, they may have fewer funding options, worse terms, weaker documentation, and less leverage.

This widget gives founders a fast runway estimate and then pushes them toward action:

1. Calculate runway.
2. Review the risk level.
3. Download a calendar reminder.
4. Explore funding options before the business is cornered.

Because “we’ll deal with cashflow later” is how founders accidentally schedule their own business funeral.

---

## File Structure

```txt
burn-rate-runway-widget/
├── README.md
├── index.html
├── script.js
├── styles.css
├── embed.html
├── landing.html
├── package.json
├── vercel.json
└── robots.txt
```

---

## File Purpose

### `index.html`

The main widget file.

This is the calculator page that should be embedded in Wix, blogs, groups, landing pages, and partner hubs.

Use it as the iframe source:

```txt
https://burn-rate-runway-widget.vercel.app/
```

### `script.js`

The widget logic.

Handles:

- input validation
- runway calculation
- net monthly burn calculation
- daily burn calculation
- cash-out date calculation
- runway status messaging
- CTA tracking parameter handoff
- `.ics` calendar file generation
- iframe height message posting

### `styles.css`

The widget styling.

Designed around a neo-brutal startup-finance aesthetic:

- bold cards
- heavy borders
- high-contrast buttons
- chunky shadows
- compact embed-safe layout
- mobile-responsive form layout

### `embed.html`

The partner-facing embed instruction page.

Includes:

- standard iframe embed code
- partner-tracked iframe generator
- copy-to-clipboard buttons
- tracking parameter explanations
- recommended Wix iframe sizing guidance

Use this when showing partners how to deploy the asset.

### `landing.html`

The public-facing landing page.

Use this page for:

- social media links
- blog CTAs
- newsletter links
- YouTube descriptions
- SEO/AEO targeting
- partner education pages
- founder resource pages

The landing page includes:

- optimized hero section
- embedded widget
- who-it-is-for section
- result interpretation section
- funding CTA section
- FAQ section
- FAQPage schema

### `vercel.json`

Vercel deployment configuration.

Used for static hosting and iframe-friendly headers.

### `robots.txt`

Basic crawler instructions.

---

## Embed Code

### Standard Embed

```html
<iframe
  src="https://burn-rate-runway-widget.vercel.app/"
  title="Burn Rate Runway Extender"
  width="100%"
  height="920"
  style="max-width:940px;width:100%;border:0;overflow:hidden;"
  loading="lazy"
></iframe>
```

### Partner-Tracked Embed

```html
<iframe
  src="https://burn-rate-runway-widget.vercel.app/?partner=darwin&source=wix_blog&campaign=startup_runway"
  title="Burn Rate Runway Extender"
  width="100%"
  height="920"
  style="max-width:940px;width:100%;border:0;overflow:hidden;"
  loading="lazy"
></iframe>
```

---

## Recommended Wix Embed Settings

When embedding the widget in Wix, use an iframe embed block.

Recommended dimensions:

```txt
Max width: 940px
Desktop height: 920px to 980px
Mobile height: 1040px to 1120px
Absolute max target: under 1200px
```

The widget is designed to stay compact, but Wix iframe behavior can be stubborn. If the result card is getting clipped after a calculation, increase iframe height.

---

## Tracking Parameters

The widget supports simple URL parameters for partner and campaign tracking.

Supported parameters:

```txt
partner
source
campaign
```

Example:

```txt
https://burn-rate-runway-widget.vercel.app/?partner=darwin&source=wix_blog&campaign=startup_runway
```

The widget appends those values to CTA links as:

```txt
utm_partner
utm_source
utm_campaign
```

Example outbound CTA result:

```txt
https://bankbreezy.com/funding/jason?utm_source=burn_rate_runway_widget&utm_medium=tool&utm_campaign=startup_runway&utm_partner=darwin
```

This lets partner traffic avoid vanishing into the marketing fog machine.

---

## CTA Links

The widget currently uses two primary calls to action.

### CTA #1

```txt
Get Same-Day Instant Funding
```

URL:

```txt
https://bankbreezy.com/funding/jason
```

### CTA #2

```txt
Funding for Any Reason
```

URL:

```txt
https://tally.so/r/w4R2Ad
```

These links are also included in the generated calendar invite so the user has a next step attached to the runway review.

---

## Calculation Logic

The widget calculates runway using a simple net-burn formula.

```txt
Net Monthly Burn = Monthly Expenses - Monthly Revenue
```

```txt
Runway in Months = Current Cash on Hand / Net Monthly Burn
```

```txt
Daily Burn = Net Monthly Burn / 30.4375
```

```txt
Estimated Cash-Out Date = Today + Estimated Runway Days
```

If revenue is greater than or equal to monthly expenses, the widget treats the business as not currently burning cash and displays a positive cash-flow message.

---

## Runway Status Logic

The widget classifies runway into practical operating zones.

```txt
Under 3 months:
Red zone. Cut burn, collect cash, and review funding options immediately.

3 to 6 months:
Move now. You still have leverage, but the room is getting smaller.

Over 6 months:
Monitor weekly. Protect runway and keep funding options warm.

Revenue covers expenses:
Not burning cash. Keep reserves healthy and do not let optimism hire a marching band.
```

---

## Calendar Invite Artifact

The widget generates a downloadable `.ics` calendar file.

The calendar invite includes:

- cash on hand
- monthly expenses
- monthly revenue
- net monthly burn
- estimated runway
- CTA links
- disclaimer

Default filename:

```txt
runway-review-funding-action-check.ics
```

This artifact is meant to turn “we should look at this soon” into an actual calendar event.

Because “later” is where cashflow problems go to put on a ski mask.

---

## Landing Page Strategy

The landing page and widget should remain in the same repo for now.

Current recommended structure:

```txt
index.html      = actual embeddable calculator
embed.html      = deployment instructions for partners
landing.html    = public sales/SEO/conversion page
```

The landing page is useful for:

- LinkedIn posts
- Facebook group posts
- Wix blog CTAs
- partner resource libraries
- YouTube descriptions
- newsletter links
- startup finance articles
- SEO/AEO pages

Use the landing page when you want to explain and sell the tool.

Use the root widget URL when you want to embed the actual calculator.

---

## Deployment

This project is deployed on Vercel.

Production URL:

```txt
https://burn-rate-runway-widget.vercel.app/
```

Expected deploy behavior:

1. Commit changes to `main`.
2. Vercel deploys the latest static files.
3. The widget is available at `/`.
4. The embed instruction page is available at `/embed.html`.
5. The landing page is available at `/landing.html`.

---

## Local Development

This is a static HTML/CSS/JS project.

No framework required.

If using the included package setup:

```bash
npm install
npm run dev
```

Or serve the folder with any static server.

Example:

```bash
npx serve .
```

Then open:

```txt
http://localhost:3000
```

Depending on your local server, the port may differ.

---

## QA Checklist

Before sharing or embedding the tool, test the following.

### Widget

- [ ] `/` loads the calculator.
- [ ] Cash, expenses, and revenue fields accept numbers.
- [ ] Empty or invalid fields show validation feedback.
- [ ] Calculation displays runway months.
- [ ] Calculation displays net monthly burn.
- [ ] Calculation displays daily burn.
- [ ] Calculation displays estimated cash-out date.
- [ ] CTA buttons open in a new tab.
- [ ] `.ics` calendar invite downloads correctly.
- [ ] Widget displays properly on mobile.
- [ ] Widget does not exceed intended iframe height in Wix.

### Tracking

Test this URL:

```txt
https://burn-rate-runway-widget.vercel.app/?partner=darwin&source=wix_blog&campaign=startup_runway
```

Then confirm CTA links receive:

```txt
utm_partner=darwin
utm_source=wix_blog
utm_campaign=startup_runway
```

### Embed Page

- [ ] `/embed.html` loads.
- [ ] Standard embed code is visible.
- [ ] Partner slug generator works.
- [ ] Copy buttons work.
- [ ] Tracking parameter explanation is clear.

### Landing Page

- [ ] `/landing.html` loads.
- [ ] Hero section displays correctly.
- [ ] Embedded widget fits without excessive blank space.
- [ ] CTA links work.
- [ ] FAQ section displays correctly.
- [ ] FAQPage schema exists in the `<head>`.
- [ ] Mobile view does not crush the hero layout.
- [ ] CTA buttons are easy to tap on mobile.

---

## Known Constraints

### Wix iframe behavior

Wix may not automatically resize iframes based on the widget’s internal height. Manual iframe height settings may be required.

Recommended:

```txt
Desktop: 920px to 980px
Mobile: 1040px to 1120px
```

### Static-only architecture

This tool does not currently store leads, capture emails, or write submissions to a database.

That is intentional.

It keeps the widget fast, portable, and easy to embed.

Future versions may route events into:

- HubSpot
- Notion
- Google Sheets
- n8n webhook
- Vercel serverless function

### Estimates only

The tool provides planning estimates only.

It does not provide financial advice, lending advice, tax advice, legal advice, or funding approval.

---

## Future Enhancements

Potential next upgrades:

- Add optional lead capture
- Add HubSpot form handoff
- Add n8n webhook event tracking
- Add partner click logging
- Add UTM-preserving redirect routes
- Add PDF export
- Add PNG share card export
- Add “less than 6 months runway” checklist
- Add founder emergency funding readiness score
- Add separate vertical versions for SaaS, eCommerce, creators, and local businesses
- Add Core Tools directory entry
- Add analytics for CTA clicks and widget usage

---

## Suggested Companion Assets

This widget can become part of a larger startup finance toolkit.

Recommended companion assets:

- Startup Runway Emergency Checklist
- Founder Burn Rate Review Worksheet
- Funding Readiness Scorecard
- Cashflow Gap Calculator
- Revenue-Based Funding Estimator
- Platform Payout Delay Worksheet
- Inventory Funding Planner
- Founder Weekly Cash Review Template

---

## Compliance Disclaimer

This tool is for planning and education only.

Estimates are based solely on user-entered values and simple calculations. Funding options, terms, approvals, timelines, and eligibility depend on underwriting, provider requirements, documentation, revenue, credit profile, business history, and other factors.

Nothing in this tool guarantees funding, approval, terms, rates, or availability.

---

## Brand Positioning

The Burn Rate Runway Extender is designed as a practical founder-facing tool with sharp positioning:

> Stop guessing. Run the numbers.

The tone is direct, founder-friendly, and intentionally urgent.

Because cashflow does not care about vibes, pitch decks, or how many podcasts the founder has been on.

---

## Maintainer Notes

Primary repo:

```txt
JFeimster/burn-rate-runway-widget
```

Production:

```txt
https://burn-rate-runway-widget.vercel.app/
```

Primary files to edit:

```txt
index.html
script.js
styles.css
embed.html
landing.html
README.md
```

Do not place widget-specific files in unrelated repos.

This project should remain self-contained unless intentionally migrated into a larger tools directory.
