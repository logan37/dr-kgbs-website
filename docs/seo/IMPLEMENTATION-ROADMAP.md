# Implementation roadmap

Each item lists what it depends on and how to tell if it failed.

## Phase 1: foundation (weeks 1 to 4)

| # | Task | Depends on | How we'll know it failed |
|---|---|---|---|
| 1.1 | Confirm and connect the practice domain (`drsrinijapulmo.com` or another), HTTPS on | Domain ownership | Site still served from github.io, or certificate errors |
| 1.2 | Verify every number and contact detail: phone, WhatsApp, email, patient count, procedure count, rating, review count. Remove any that cannot be verified | Doctor's input | Placeholder phone (80088 12345) still live |
| 1.3 | Doctor confirms which testimonials and claims are allowed under current medical council rules | Doctor's input | Published content later has to be taken down |
| 1.4 | Split the single page into routes and prerender to static HTML (`vite-react-ssg` or Astro) | Redesign approved | "View source" on a test page shows an empty `<div id="root">` |
| 1.5 | Per-page titles, descriptions, canonical tags, share image; remove `meta keywords` | 1.4 | Search Console reports duplicate titles or missing canonicals |
| 1.6 | `sitemap.xml`, `robots.txt`; submit sitemap in Search Console and Bing Webmaster Tools | 1.1, 1.4 | Sitemap shows errors or pages "Discovered, not indexed" after 4 weeks |
| 1.7 | `Physician` schema on Home and About | 1.2 | Rich Results Test or Schema validator errors |
| 1.8 | Claim or create the Google Business Profile (practitioner listing at TrueMed address) | 1.2 | Listing not verified, or merged with TrueMed's listing |
| 1.9 | Analytics: Search Console, GA4 or a privacy-friendly alternative, events for call, WhatsApp and form clicks | 1.1 | No booking events recorded in the first week |
| 1.10 | Publish Phase 1 pages from the content calendar | 1.4, doctor review | Pages live without "written by / reviewed" line |

## Phase 2: expansion (weeks 5 to 12)

| # | Task | Depends on | How we'll know it failed |
|---|---|---|---|
| 2.1 | Publish remaining test and condition pages with `MedicalTest`, `MedicalProcedure`, `MedicalCondition` schema | 1.4 | Pages not indexed 4 weeks after publishing |
| 2.2 | Internal links between conditions and tests, breadcrumbs | 2.1 | Pages with no internal links in Search Console's Links report |
| 2.3 | Consistent listings: Practo, Justdial, Lybrate, Apollo 247, Bing Places, Apple Business Connect | 1.2 | Different phone or address on any listing |
| 2.4 | Reply to Google reviews as they arrive. Do not solicit reviews (NMC guidelines, Oct 2026) | 1.8 | Reviews left unanswered for more than a week |
| 2.5 | Real photos of doctor, clinic and equipment on site and Google profile | Photo shoot | Placeholder images still live |

## Phase 3: scale (months 4 to 6)

| # | Task | Depends on | How we'll know it failed |
|---|---|---|---|
| 3.1 | Start patient articles, 2 a month | Phase 2 pages live | Articles get no impressions after 8 weeks |
| 3.2 | Get listed on Hyderabad "best pulmonologist" round-ups and medical directories; contribute to local health stories | Strong About page | No new referring domains in 3 months |
| 3.3 | Core Web Vitals pass on mobile (LCP under 2.5 s, INP under 200 ms, CLS under 0.1) | 1.4 | PageSpeed field data shows "Needs improvement" |
| 3.4 | Decide on Telugu versions of the top 5 pages (with `hreflang`) | Search Console query data | Not applicable until decided |

## Phase 4: authority (months 7 to 12)

- Talks for residents' associations, corporate health camps in Hitec City, and pages for each event.
- Cite and link the doctor's published research; add new publications as they appear.
- Quarterly content review and update of every medical page.

## Targets

The new site starts from zero history, so targets are set on things the plan directly controls, then adjusted once 3 months of data exist.

| Metric | At launch | 3 months | 6 months | 12 months |
|---|---|---|---|---|
| Indexed pages | 1 (github.io) | 15+ | 22+ | 40+ |
| Google Business Profile calls and direction requests | Start tracking | Baseline set | +30% on baseline | +60% on baseline |
| Local pack appearance for "pulmonologist Kondapur" | Check manually | Appearing | Top 3 | Top 3 |
| Site pages ranking top 10 for a test search (e.g. "PFT test Kondapur") | 0 | 2 | 5 | 8 |
| Bookings from site and Google profile (calls + WhatsApp + form) | Start tracking | Baseline set | +30% on baseline | +60% on baseline |
| Core Web Vitals (mobile) | Not measured | Pass in lab tests | Pass in field data | Pass |

## Who does what

| Work | Owner |
|---|---|
| Code, prerendering, schema, sitemap | Developer |
| Medical content writing or review, credentials, claims sign-off | Dr. Srinija |
| Google profile, review replies, photos | Clinic front desk with developer support |
| Monthly reporting | Developer |
