# SEO strategy: Dr. Srinija Kummaraganti, pulmonology clinic, Kondapur

Prepared 16 November 2026. Business type: local healthcare practice (single location, one doctor). Template used: local service, adapted for medical (YMYL) content.

## The situation in one paragraph

Patients searching "pulmonologist Kondapur", "asthma doctor near me" or "PFT test Hyderabad" today see hospital department pages (KIMS, Apollo, Sri Sri Holistic, Sunshine) and directories (Practo, Apollo 247, DocIndia). An independent specialist can win these searches by being the most specific, best-verified result: one doctor, one address, tests done in person, real reviews. The current site cannot compete yet. All the content is one JavaScript-rendered page at a github.io address, so there is only one URL to rank, and crawlers that do not run JavaScript see an empty page.

## Goals

1. Appear in the Google local pack (map results) for pulmonologist, chest specialist and asthma doctor searches in Kondapur, Gachibowli, Madhapur, Hitec City and Kothaguda.
2. Rank the site's own pages for test-specific searches: spirometry / PFT, allergy skin prick test, sleep study, bronchoscopy, in west Hyderabad.
3. Turn visits into booked consultations: calls, WhatsApp messages, form requests, direction requests.
4. Be the source AI assistants (Google AI Overviews, ChatGPT, Perplexity) cite when asked about these tests and conditions in Hyderabad.

## Target searches

No keyword volume tool is connected, so these are grouped by intent, not by volume. Check volumes in Google Keyword Planner or Search Console once the site has data.

| Group | Example searches | Page that should rank |
|---|---|---|
| Doctor, local | pulmonologist Kondapur, chest specialist Gachibowli, lung doctor near me, Dr Srinija Kummaraganti | Home, About |
| Test, local | PFT test Hyderabad, spirometry test Kondapur, allergy test Hyderabad, skin prick test cost Hyderabad, sleep study Hyderabad | Test pages |
| Procedure | bronchoscopy Hyderabad, pleural tapping, thoracentesis | Procedure pages |
| Condition | asthma specialist Hyderabad, chronic cough treatment, COPD doctor, sleep apnea doctor Hyderabad, ILD specialist | Condition pages |
| Questions | is PFT test painful, how to prepare for spirometry, is asthma curable, snoring or sleep apnea | Sections on test and condition pages; later articles |

## Strategy pillars

### 1. Fix the foundation (technical)
- Move to the doctor's own domain. `drsrinijapulmo.com` already appears in the site data as the email domain: confirm it is registered to the practice, then serve the site there with HTTPS. A github.io subpath cannot build a durable brand or carry a Google Business Profile link well.
- Give every service and condition its own URL, and prerender each page to static HTML at build time, so content is present without JavaScript.
- Add canonical tags, `robots.txt`, `sitemap.xml`, a real 1200×630 share image, and per-page titles and descriptions.
- Remove the `meta keywords` tag (search engines ignore it). Confirm `kimi-plugin-inspect-react` only runs in development.

### 2. Local presence (the biggest lever for a clinic)
- Claim or create a Google Business Profile for Dr. Srinija as a practitioner at the TrueMed address. Primary category Pulmonologist, secondary Allergist. Add hours, WhatsApp, photos of the clinic and the spirometer, and the website link.
- Keep name, address and phone exactly the same everywhere: website, Google, Practo, Justdial, Lybrate, Apollo 247, Bing Places, Apple Business Connect.
- Do not ask patients for reviews. The NMC guidelines of 6 October 2026 prohibit soliciting or sharing patient reviews for promotion. Reply to reviews that arrive on their own, without sharing medical details.

### 3. Content that earns trust (E-E-A-T for medical pages)
Medical pages are judged on who wrote them and whether that person is qualified.
- Every page shows "Written by Dr. Srinija Kummaraganti, MD (Pulmonology)" with a review date.
- Show the Telangana State Medical Council registration number on the About page.
- Real photographs of the doctor, the clinic and the equipment, no stock images.
- Cite guidelines where they apply (GINA for asthma, GOLD for COPD, ATS/ERS for spirometry).
- Each test page answers what patients ask: what it is, how to prepare, does it hurt, how long, what the result means, cost or cost range.

### 4. AI search readiness
- Prerendered HTML is the main requirement; most AI crawlers do not execute JavaScript.
- Short, quotable answers near the top of each page ("A spirometry test takes 15 to 25 minutes and does not hurt").
- Complete Physician schema with address, geo, hours and medical specialty.
- Be listed on Hyderabad "best pulmonologist" round-ups and directories; these lists are what assistants draw on for local recommendations.

## Schema plan

| Page | Schema |
|---|---|
| Home | `Physician` (name, image, address, geo, telephone, openingHoursSpecification, medicalSpecialty: Pulmonary, isAcceptingNewPatients), `WebSite` |
| About | `Physician` with `hasCredential`, `alumniOf`, `memberOf`; `ProfilePage` |
| Test pages | `MedicalTest` or `DiagnosticProcedure`, `BreadcrumbList` |
| Procedure pages | `MedicalProcedure` / `TherapeuticProcedure`, `BreadcrumbList` |
| Condition pages | `MedicalCondition` with `signOrSymptom`, `possibleTreatment`, `BreadcrumbList`; `MedicalWebPage` with `lastReviewed` and `reviewedBy` |
| Contact | `ContactPage` |

Do not add `AggregateRating` from your own testimonials: Google does not show review stars for a business's reviews of itself. Do not add `FAQPage` expecting a search feature; Google retired FAQ rich results in May 2026. Plain question-and-answer sections on the page are still useful.

## Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| Medical advertising rules | The NMC Guidelines on Ethical Advertising (6 Oct 2026) prohibit testimonials, review solicitation, "best" claims, patient counts and success rates, and require the registration number on the site. | The rebuilt site follows these rules by default (see docs/CONTENT-GUIDE.md). Keep copy factual and have the doctor approve changes. |
| Unverified numbers | The site data shows 12,000+ patients, 1,500+ procedures, 4.9 from 340+ reviews and a placeholder phone number. | Replace each with a verified figure or remove it before launch. |
| Clinic name confusion | The doctor practises inside TrueMed Diagnostics; Google may merge or reject a second listing at the same address. | Use a practitioner listing (doctor's name), not a duplicate clinic listing. Coordinate with TrueMed. |
| Doorway pages | Making one page per Hyderabad neighbourhood with the same text gets filtered. | No neighbourhood pages. Mention the areas served on the Home and Contact pages only. |

## Measurement

Track monthly, starting from the day the new domain goes live:
- Google Business Profile: calls, direction requests, website clicks, review count and rating.
- Search Console: indexed pages, impressions and clicks for the target searches, average position.
- Bookings: form submissions, WhatsApp chats started from the site, tracked phone clicks.
- Core Web Vitals (LCP, INP, CLS) from PageSpeed Insights field data once traffic allows.

Targets are in [IMPLEMENTATION-ROADMAP.md](IMPLEMENTATION-ROADMAP.md). Page list in [SITE-STRUCTURE.md](SITE-STRUCTURE.md). Competitors in [COMPETITOR-ANALYSIS.md](COMPETITOR-ANALYSIS.md). Publishing plan in [CONTENT-CALENDAR.md](CONTENT-CALENDAR.md).
