import { content } from '@/content/site'
import { absoluteUrl, findCondition, findTest } from '@/lib/site'

const rootPath = (p: string) => (p.startsWith('/') ? p : `/${p}`)

export interface PageMeta {
  title: string
  description: string
  path: string
  noindex?: boolean
  jsonLd: Record<string, unknown>[]
}

const { site, doctor, clinic, contact } = content

/** Every page that is pre-built at deploy time and listed in the sitemap. */
export const routePaths: string[] = [
  '/',
  '/about/',
  '/tests/',
  ...content.tests.map((t) => `/tests/${t.slug}/`),
  '/conditions/',
  ...content.conditions.map((c) => `/conditions/${c.slug}/`),
  '/visit/',
  '/privacy/',
  '/medical-disclaimer/',
]

export const NOT_FOUND_PATH = '/404/'

function physician() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': absoluteUrl('/#physician'),
    name: doctor.name,
    description: site.description,
    url: absoluteUrl('/'),
    telephone: contact.phone,
    email: contact.email || undefined,
    medicalSpecialty: ['Pulmonary'],
    isAcceptingNewPatients: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${clinic.unit}, ${clinic.streetAddress}`,
      addressLocality: clinic.city,
      addressRegion: clinic.region,
      postalCode: clinic.postalCode,
      addressCountry: clinic.country,
    },
    openingHoursSpecification: clinic.hours.flatMap((h) =>
      h.schema.map((s) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: s.days.map(dayName),
        opens: s.opens,
        closes: s.closes,
      })),
    ),
    areaServed: clinic.areasServed.map((name) => ({ '@type': 'Place', name })),
  }
  if (clinic.geo) data.geo = { '@type': 'GeoCoordinates', ...clinic.geo }
  if (doctor.photo.src) data.image = absoluteUrl(rootPath(doctor.photo.src))
  return data
}

function person() {
  return {
    '@type': 'Person',
    '@id': absoluteUrl('/about/#doctor'),
    name: doctor.fullName,
    jobTitle: doctor.title,
    worksFor: { '@id': absoluteUrl('/#physician') },
    knowsLanguage: doctor.languages,
    hasCredential: doctor.qualifications.map((q) => ({
      '@type': 'EducationalOccupationalCredential',
      name: q.degree,
      recognizedBy: q.institution,
    })),
    memberOf: doctor.memberships.map((name) => ({ '@type': 'Organization', name })),
    sameAs: doctor.profiles.map((p) => p.href),
  }
}

function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

function dayName(code: string) {
  const map: Record<string, string> = {
    Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday', Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday',
  }
  return map[code] ?? code
}

function title(page: string) {
  return page ? `${page} | ${site.titleSuffix}` : site.titleSuffix
}

const home = { name: 'Home', path: '/' }

export function getPageMeta(rawPath: string): PageMeta {
  const path = rawPath.endsWith('/') ? rawPath : `${rawPath}/`
  const parts = path.split('/').filter(Boolean)

  if (path === '/') {
    return { title: title(''), description: site.description, path, jsonLd: [physician()] }
  }

  if (path === '/about/') {
    return {
      title: title(`About ${doctor.name}`),
      description: `${doctor.fullName}, ${doctor.degrees}. ${doctor.title} at ${clinic.name}, ${clinic.locality}.`,
      path,
      jsonLd: [
        { '@context': 'https://schema.org', '@type': 'ProfilePage', mainEntity: person() },
        breadcrumbs([home, { name: 'About the doctor', path }]),
      ],
    }
  }

  if (path === '/tests/') {
    return {
      title: title('Tests and treatment'),
      description: `Lung function tests, allergy skin tests, sleep studies, bronchoscopy and other procedures at ${clinic.name}, ${clinic.locality}.`,
      path,
      jsonLd: [breadcrumbs([home, { name: 'Tests and treatment', path }])],
    }
  }

  if (parts[0] === 'tests' && parts[1]) {
    const test = findTest(parts[1])
    if (test) {
      return {
        title: title(`${test.shortName} in ${clinic.locality}, ${clinic.city}`),
        description: test.summary,
        path,
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': test.category === 'Procedure' ? 'MedicalProcedure' : 'MedicalTest',
            name: test.name,
            description: test.summary,
            url: absoluteUrl(path),
          },
          breadcrumbs([home, { name: 'Tests and treatment', path: '/tests/' }, { name: test.shortName, path }]),
        ],
      }
    }
  }

  if (path === '/conditions/') {
    return {
      title: title('Conditions'),
      description: 'Asthma, COPD, chronic cough, nasal allergy, sleep apnea, tuberculosis and other lung conditions: symptoms, causes and treatment.',
      path,
      jsonLd: [breadcrumbs([home, { name: 'Conditions', path }])],
    }
  }

  if (parts[0] === 'conditions' && parts[1]) {
    const condition = findCondition(parts[1])
    if (condition) {
      return {
        title: title(`${condition.shortName}: symptoms, causes and treatment`),
        description: condition.summary,
        path,
        jsonLd: [
          {
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            url: absoluteUrl(path),
            author: { '@id': absoluteUrl('/about/#doctor'), '@type': 'Person', name: doctor.fullName },
            about: {
              '@type': 'MedicalCondition',
              name: condition.name,
              description: condition.summary,
              signOrSymptom: condition.symptoms.map((name) => ({ '@type': 'MedicalSignOrSymptom', name })),
            },
          },
          breadcrumbs([home, { name: 'Conditions', path: '/conditions/' }, { name: condition.shortName, path }]),
        ],
      }
    }
  }

  if (path === '/visit/') {
    return {
      title: title('Hours, location and appointments'),
      description: `${clinic.name}, ${clinic.unit}, ${clinic.streetAddress}, ${clinic.city}. Clinic hours and appointment requests.`,
      path,
      jsonLd: [physician(), breadcrumbs([home, { name: 'Hours and location', path }])],
    }
  }

  if (path === '/privacy/') {
    return { title: title('Privacy notice'), description: 'How appointment request details are collected and used.', path, jsonLd: [] }
  }

  if (path === '/medical-disclaimer/') {
    return { title: title('Medical disclaimer'), description: 'About the medical information on this website.', path, jsonLd: [] }
  }

  return { title: title('Page not found'), description: site.description, path, noindex: true, jsonLd: [] }
}

/** Head tags for a page, used when pre-building HTML. */
export function renderHeadTags(meta: PageMeta) {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  const canonical = absoluteUrl(meta.path)
  const image = site.shareImage ? absoluteUrl(rootPath(site.shareImage)) : ''
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}">`,
    meta.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="${esc(meta.title)}">`,
    `<meta property="og:description" content="${esc(meta.description)}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:locale" content="${site.language.replace('-', '_')}">`,
    image ? `<meta property="og:image" content="${image}">` : '',
    `<meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}">`,
    ...meta.jsonLd.map(
      (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`,
    ),
  ]
  return tags.filter(Boolean).join('\n    ')
}
