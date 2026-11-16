import { Link } from 'react-router'
import { content } from '@/content/site'
import { addressLines, telHref } from '@/lib/site'

export function SiteFooter() {
  const { doctor, contact, clinic } = content
  return (
    <footer className="bg-ink pb-24 font-sans text-[#C7D6DF] lg:pb-0">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2 lg:col-span-2">
          <p className="text-lg font-extrabold text-white">{doctor.name}</p>
          <p>{doctor.degrees}</p>
          <p>{doctor.title}</p>
          <p>{doctor.registration}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold text-white">Clinic</p>
          <address className="not-italic leading-relaxed">
            {addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a href={telHref} className="mt-1 py-1 text-white underline-offset-4 hover:underline">
            {contact.phoneDisplay}
          </a>
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="py-1 text-white underline-offset-4 hover:underline">
              {contact.email}
            </a>
          )}
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-1">
          <p className="mb-1 font-bold text-white">Pages</p>
          {[
            ['Tests and treatment', '/tests/'],
            ['Conditions', '/conditions/'],
            ['About the doctor', '/about/'],
            ['Hours and location', '/visit/'],
            ['Privacy notice', '/privacy/'],
            ['Medical disclaimer', '/medical-disclaimer/'],
          ].map(([label, to]) => (
            <Link key={to} to={to} className="py-1 text-white underline-offset-4 hover:underline">
              {label}
            </Link>
          ))}
          {doctor.profiles.map((p) => (
            <a key={p.href} href={p.href} rel="noopener" className="py-1 text-white underline-offset-4 hover:underline">
              {p.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/15">
        <p className="container-page py-6 font-serif text-sm leading-relaxed">
          Information on this site is for general education and does not replace a consultation. {doctor.name} consults
          at {clinic.name}, {clinic.locality}, {clinic.city}.
        </p>
      </div>
    </footer>
  )
}
