# Editing the website content

Everything a visitor reads on the site comes from one file:

**[`src/content/site.ts`](../src/content/site.ts)**

Change a value there, save, and the site updates (instantly with `npm run dev`, or on the next deploy). You do not need to touch any other file to change text, contact details, hours, tests or conditions.

## How the file is organised

| Section | What it controls |
| --- | --- |
| `site` | Site address, page title ending, search description, share image |
| `doctor` | Name, degrees, registration number, photo, biography, qualifications, memberships, research, languages, profile links |
| `clinic` | Clinic name, address, map links, map coordinates, opening hours, areas patients come from |
| `contact` | Phone, WhatsApp number, email |
| `booking` | Appointment form heading, reasons list, sessions, consent wording, emergency note, optional fee and Practo link |
| `rating` | Google rating line under the hero. `null` hides it (default) |
| `home` | Home page heading, intro, curve caption, symptom picker, first-visit steps, section headings |
| `tests` | One entry per test or procedure. Each becomes a page at `/tests/<slug>/` |
| `conditions` | One entry per condition. Each becomes a page at `/conditions/<slug>/` |
| `faqs` | Questions on the home page |
| `testimonials` | Hidden by default (see rules below) |
| `legal` | Privacy notice sections and medical disclaimer |

## Common tasks

**Change the phone number.** Edit all three fields in `contact`: `phone` (`+91` and digits, no spaces), `phoneDisplay` (how it looks on screen), and `whatsapp` (digits only, starting with `91`).

**Add the doctor's photo.** Put a portrait JPG in `public/`, for example `public/doctor.jpg`, then set `doctor.photo.src` to `'/doctor.jpg'`. A 4:5 portrait about 800×1000 pixels works best.

**Add a share image.** Put a 1200×630 JPG at `public/share.jpg` and set `site.shareImage` to `'/share.jpg'`. This is the preview shown when the link is shared on WhatsApp.

**Change clinic hours.** Edit `clinic.hours`. `days` and `sessions` are what visitors see. `schema` is the same information for search engines: two-letter day codes and 24-hour times.

**Add a new test page.** Copy an existing entry in `tests`, give it a new `slug` (lowercase words joined by hyphens), and fill in each field. `relatedConditions` lists condition slugs to link to. The page, sitemap entry and search data are created automatically.

**Add a new condition page.** Same as above, in `conditions`. `relatedTests` lists test slugs.

**Show a consultation fee.** Set `booking.consultationFee`, for example `'Consultation fee: ₹800'`. It appears on the Hours and location page.

## Rules for medical content in India

The NMC issued Guidelines on Ethical Advertising and Public Communication on 6 October 2026. They apply to doctors' websites. In short:

- Keep the registration number filled in and visible.
- Do not add patient testimonials or ask patients for reviews to display.
- Do not add patient counts, success rates, "best", "top", "leading", "No. 1", "guaranteed" or "painless".
- Do not offer discounts or free procedures.
- Condition pages are education only. Do not name drug brands or promise a cure. This matters most for tuberculosis and pleural disease, which are listed under the Drugs and Magic Remedies Act.
- A factual fee declaration is allowed.

Have Dr. Srinija approve any change to medical text before it goes live. This is a summary, not legal advice.

## Before launch

The build prints a list of anything that still looks like a placeholder. To make the build fail until they are fixed, run:

```text
STRICT_CONTENT=1 npm run build
```

Search `site.ts` for `TODO` to find every item.
