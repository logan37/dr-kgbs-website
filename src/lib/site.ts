import { content } from '@/content/site'

const { contact, clinic, doctor } = content

export const telHref = `tel:${contact.phone}`

export function whatsappHref(message: string = content.booking.whatsappGreeting) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export const addressLines = [clinic.name, clinic.unit, clinic.streetAddress, `${clinic.city} ${clinic.postalCode}`]

export const fullAddress = addressLines.join(', ')

/**
 * Public address of the site. The deploy workflow can set VITE_SITE_URL;
 * otherwise site.url from the content file is used.
 */
export const siteUrl = ((import.meta.env.VITE_SITE_URL as string | undefined) || content.site.url).replace(/\/$/, '')

/** Absolute URL for a site path, used in canonical links, sitemaps and structured data. */
export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`
}

/** URL for a file in /public, respecting the deploy base path. */
export function assetUrl(path: string) {
  if (!path) return ''
  if (/^https?:\/\//.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export function findTest(slug: string) {
  return content.tests.find((t) => t.slug === slug)
}

export function findCondition(slug: string) {
  return content.conditions.find((c) => c.slug === slug)
}

export const doctorInitials = doctor.name
  .replace(/^Dr\.?\s*/, '')
  .split(/\s+/)
  .map((part) => part[0])
  .join('')
  .slice(0, 2)
