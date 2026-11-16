import { Link, useParams } from 'react-router'
import { PageHeader } from '@/components/PageHeader'
import { BookingBand } from '@/components/BookingBand'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { content } from '@/content/site'
import { findCondition, findTest } from '@/lib/site'
import NotFound from './NotFound'

export default function ConditionPage() {
  const { slug = '' } = useParams()
  const condition = findCondition(slug)
  if (!condition) return <NotFound />

  const tests = condition.relatedTests.map(findTest).filter((t) => t !== undefined)

  return (
    <>
      <PageHeader
        title={condition.name}
        intro={condition.summary}
        crumbs={[{ label: 'Conditions', to: '/conditions/' }, { label: condition.shortName }]}
      />

      <div className="container-page flex flex-col gap-12 py-14 lg:flex-row lg:gap-16">
        <article className="flex flex-1 flex-col gap-12">
          <section className="flex flex-col gap-4">
            {condition.overview.map((p) => (
              <p key={p} className="reading">
                {p}
              </p>
            ))}
          </section>

          <div className="grid gap-10 md:grid-cols-2">
            <ListSection heading="Symptoms" items={condition.symptoms} />
            <ListSection heading="Common causes" items={condition.causes} />
          </div>

          <Alert className="border-primary/40 bg-white p-5">
            <AlertTitle className="font-sans text-lg font-bold">When to see a doctor</AlertTitle>
            <AlertDescription className="font-serif text-[17px] leading-relaxed text-ink-soft">
              {condition.whenToSeeADoctor}
            </AlertDescription>
          </Alert>

          <ListSection heading="How it is treated" items={condition.treatment} />

          <p className="font-sans text-sm text-muted-foreground">
            Written by {content.doctor.name}, {content.doctor.degrees}. This page is general information and does not
            replace a consultation.
          </p>
        </article>

        {tests.length > 0 && (
          <aside className="lg:w-[300px] lg:shrink-0">
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 font-sans lg:sticky lg:top-24">
              <p className="text-lg font-bold">Tests for this condition</p>
              {tests.map((t) => (
                <Link key={t.slug} to={`/tests/${t.slug}/`} className="flex flex-col gap-0.5 border-t py-3 text-ink no-underline hover:text-primary">
                  <span className="font-semibold">{t.shortName}</span>
                  <span className="text-sm text-muted-foreground">{t.duration}</span>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>

      <BookingBand heading="See a lung specialist" />
    </>
  )
}

function ListSection({ heading, items }: { heading: string; items: string[] }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="heading-md text-2xl">{heading}</h2>
      <ul className="reading flex list-disc flex-col gap-2 pl-5 marker:text-primary">
        {items.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
