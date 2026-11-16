import { Link } from 'react-router'
import { PageHeader } from '@/components/PageHeader'
import { BookingBand } from '@/components/BookingBand'
import { content } from '@/content/site'

export default function ConditionsIndex() {
  return (
    <>
      <PageHeader
        title="Conditions"
        intro="Symptoms, causes, when to see a doctor, and how each condition is tested and treated."
        crumbs={[{ label: 'Conditions' }]}
      />
      <div className="container-page py-14">
        <ul className="grid gap-4 md:grid-cols-2">
          {content.conditions.map((c) => (
            <li key={c.slug}>
              <Link
                to={`/conditions/${c.slug}/`}
                className="group flex h-full flex-col gap-3 rounded-xl border bg-white p-6 text-ink no-underline transition-colors hover:border-primary"
              >
                <span className="font-sans text-xl font-bold group-hover:text-primary">{c.name}</span>
                <span className="leading-relaxed text-ink-soft">{c.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <BookingBand />
    </>
  )
}
