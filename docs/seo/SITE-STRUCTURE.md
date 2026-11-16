# Site structure

The current site has one route (`path="*"`) that shows every section on a single page. The plan splits it into pages that can each rank for one topic, prerendered to static HTML.

## URL map

```
/                                   Home
/about/                             About Dr. Srinija (credentials, registration no., research)
/tests/                             Tests and procedures overview
  /tests/spirometry-pft/            Lung function test (PFT / spirometry)
  /tests/allergy-skin-prick-test/   Allergy skin prick test and immunotherapy
  /tests/sleep-study/               Sleep study (polysomnography), CPAP / BiPAP
  /tests/bronchoscopy/              Bronchoscopy, BAL, biopsy
  /tests/thoracentesis/             Pleural fluid drainage
  /tests/pre-operative-lung-check/  Lung clearance before surgery
/conditions/                        Conditions overview
  /conditions/asthma/
  /conditions/allergic-rhinitis/
  /conditions/copd/
  /conditions/chronic-cough/
  /conditions/sleep-apnea/
  /conditions/tuberculosis/
  /conditions/interstitial-lung-disease/
  /conditions/pleural-effusion/
/treatment/copd-rehabilitation/     COPD care and breathing rehab
/lung-check/                        The 4-question screener (noindex if thin)
/visit/                             Hours, address, map, booking form
/articles/                          Patient articles (Phase 2 onward)
/privacy/                           Privacy notice (form collects phone numbers)
/medical-disclaimer/
```

About 22 pages at launch, all with unique content. No neighbourhood or city landing pages.

## Page requirements

| Page type | Minimum content | Must include |
|---|---|---|
| Test page | 800 words | What it is, who needs it, how to prepare, does it hurt, how long, what results mean, cost range, who performs it, booking button |
| Condition page | 800 words | Symptoms, causes, when to see a specialist, which tests, treatment approach, "written by / reviewed on" line |
| Home | 500 words | Doctor name, specialty, address, hours, phone, areas served (Kondapur, Gachibowli, Madhapur, Hitec City, Kothaguda) |
| About | 600 words | Photo, qualifications with institutions, TSMC registration no., memberships, published research with link |

## Internal links

- Every condition page links to the tests that diagnose it (asthma to spirometry and allergy test; sleep apnea to sleep study).
- Every test page links back to the conditions it detects.
- Home links to all test pages and the four most common conditions.
- The symptom picker on Home links each symptom to its condition page.
- Every page ends with the same booking block linking to `/visit/`.
- Breadcrumbs on all inner pages.

## Technical notes for the React build

- Routing: replace the catch-all route with real routes. Use `vite-react-ssg` (or move to Astro / Next.js static export) so each route is written out as its own `index.html` at build time.
- GitHub Pages serves static files only; prerendering removes the need for a 404 redirect hack. If you stay on GitHub Pages, add the custom domain via a `CNAME` file and enforce HTTPS.
- Per-page `<title>`, meta description, canonical URL and Open Graph tags. Generate them from `doctorData.ts` so content and metadata stay in sync.
- `sitemap.xml` generated at build time from the route list. `robots.txt` that allows all crawlers and points to the sitemap.
- Share image: a 1200×630 JPG of the doctor or clinic, absolute URL.
- Self-host or preload the two web fonts; set `font-display: swap`.
- Images: real photos as WebP or AVIF, with width and height set to avoid layout shift.
