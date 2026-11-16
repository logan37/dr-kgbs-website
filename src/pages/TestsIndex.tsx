import { Link } from 'react-router'
import { PageHeader } from '@/components/PageHeader'
import { BookingBand } from '@/components/BookingBand'
import { content } from '@/content/site'

export default function TestsIndex() {
  const groups = ['Diagnostic test', 'Procedure', 'Treatment'] as const
  return (
    <>
      <PageHeader title={content.home.testsHeading} intro={content.home.testsIntro} crumbs={[{ label: 'Tests and treatment' }]} />
      <div className="container-page flex flex-col gap-14 py-14">
        {groups.map((group) => {
          const items = content.tests.filter((t) => t.category === group)
          if (!items.length) return null
          return (
            <section key={group} className="flex flex-col gap-5">
              <h2 className="heading-md text-2xl">{group === 'Diagnostic test' ? 'Tests' : `${group}s`}</h2>
              <ul className="grid gap-4 md:grid-cols-2">
                {items.map((t) => (
                  <li key={t.slug}>
                    <Link
                      to={`/tests/${t.slug}/`}
                      className="group flex h-full flex-col gap-3 rounded-xl border bg-white p-6 text-ink no-underline transition-colors hover:border-primary"
                    >
                      <span className="font-sans text-xl font-bold group-hover:text-primary">{t.name}</span>
                      <span className="leading-relaxed text-ink-soft">{t.summary}</span>
                      <span className="mt-auto font-sans text-sm text-muted-foreground">
                        {t.duration}. {t.performedBy}.
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
      <BookingBand />
    </>
  )
}
