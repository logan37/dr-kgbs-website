import { Link, useParams } from 'react-router'
import { PageHeader } from '@/components/PageHeader'
import { BookingBand } from '@/components/BookingBand'
import { Button } from '@/components/ui/button'
import { useBooking } from '@/context/BookingContext'
import { content } from '@/content/site'
import { findCondition, findTest } from '@/lib/site'
import NotFound from './NotFound'

export default function TestPage() {
  const { slug = '' } = useParams()
  const test = findTest(slug)
  const { openBooking } = useBooking()
  if (!test) return <NotFound />

  const related = test.relatedConditions.map(findCondition).filter((c) => c !== undefined)

  return (
    <>
      <PageHeader
        title={test.name}
        intro={test.summary}
        crumbs={[{ label: 'Tests and treatment', to: '/tests/' }, { label: test.shortName }]}
      >
        <dl className="flex flex-wrap gap-x-10 gap-y-3 font-sans">
          <div>
            <dt className="text-sm font-bold text-muted-foreground">How long</dt>
            <dd className="text-lg font-semibold">{test.duration}</dd>
          </div>
          <div>
            <dt className="text-sm font-bold text-muted-foreground">Who does it</dt>
            <dd className="text-lg font-semibold">{test.performedBy}</dd>
          </div>
        </dl>
      </PageHeader>

      <div className="container-page flex flex-col gap-12 py-14 lg:flex-row lg:gap-16">
        <article className="flex flex-1 flex-col gap-12">
          <section className="flex flex-col gap-4">
            {test.intro.map((p) => (
              <p key={p} className="reading">
                {p}
              </p>
            ))}
          </section>

          <Block heading="Who it's for" items={test.whoItsFor} />
          <Block heading="How to prepare" items={test.howToPrepare} />
          <Block heading="What happens" items={test.whatHappens} ordered />
          {test.afterwards && (
            <section className="flex flex-col gap-3">
              <h2 className="heading-md text-2xl">Afterwards</h2>
              <p className="reading">{test.afterwards}</p>
            </section>
          )}
          <p className="font-sans text-sm text-muted-foreground">
            Written by {content.doctor.name}, {content.doctor.degrees}.
          </p>
        </article>

        <aside className="flex flex-col gap-6 lg:w-[300px] lg:shrink-0">
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 lg:sticky lg:top-24">
            <p className="font-sans text-lg font-bold">Book this test</p>
            <p className="text-ink-soft">The clinic will confirm a time and tell you how to prepare.</p>
            <Button onClick={() => openBooking()} className="h-12 text-base font-bold">
              Book a consultation
            </Button>
            {related.length > 0 && (
              <div className="flex flex-col gap-1 border-t pt-4 font-sans">
                <p className="text-sm font-bold text-muted-foreground">Used for</p>
                {related.map((c) => (
                  <Link key={c.slug} to={`/conditions/${c.slug}/`} className="py-1.5 font-semibold text-primary underline-offset-4 hover:underline">
                    {c.shortName}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>

      <BookingBand />
    </>
  )
}

function Block({ heading, items, ordered = false }: { heading: string; items: string[]; ordered?: boolean }) {
  if (!items.length) return null
  const List = ordered ? 'ol' : 'ul'
  return (
    <section className="flex flex-col gap-4">
      <h2 className="heading-md text-2xl">{heading}</h2>
      <List className={`reading flex flex-col gap-2 pl-5 ${ordered ? 'list-decimal' : 'list-disc'} marker:text-primary`}>
        {items.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </List>
    </section>
  )
}
