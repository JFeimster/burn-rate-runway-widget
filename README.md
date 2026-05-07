# Burn Rate Runway Extender Widget

A deploy-ready static iframe widget for Wix blog articles, Wix Groups, partner directories, and tool hubs.

## What it does

The widget calculates estimated startup runway using:

- Current Cash on Hand
- Monthly Expenses
- Monthly Revenue

It outputs:

- Estimated runway in months
- Estimated death date
- Net monthly burn
- Daily burn
- Downloadable `.ics` calendar invite: `Death Date: Runway Review`
- Two CTA links:
  - Get Same-Day Instant Funding: `https://bankbreezy.com/funding/jason`
  - Funding for Any Reason: `https://tally.so/r/w4R2Ad`

## Recommended iframe embed

Replace the `src` URL after deployment.

```html
<iframe
  src="https://YOUR-VERCEL-DOMAIN.vercel.app/"
  title="Burn Rate Runway Extender"
  width="100%"
  height="920"
  style="max-width:940px;width:100%;border:0;overflow:hidden;"
  loading="lazy"
></iframe>
```

## Wix sizing notes

Target max dimensions:

- Width: `940px`
- Height: under `1200px`

Suggested Wix iframe height:

- Desktop: `900–980px`
- Mobile: `1040–1120px`

The widget sends a `postMessage` height event, but Wix custom embeds may not automatically resize from that message. Set the iframe height manually inside Wix if needed.

## Local development

No install required.

```bash
npx serve .
```

Or open `index.html` directly in your browser.

## Deploy to Vercel

```bash
vercel
```

For production:

```bash
vercel --prod
```

## GitHub setup

```bash
git init
git add .
git commit -m "Add burn rate runway extender widget"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/burn-rate-runway-widget.git
git push -u origin main
```

Then import the repo into Vercel.

## File structure

```txt
burn-rate-runway-widget/
├─ index.html
├─ styles.css
├─ script.js
├─ README.md
├─ vercel.json
├─ package.json
├─ robots.txt
└─ .gitignore
```
