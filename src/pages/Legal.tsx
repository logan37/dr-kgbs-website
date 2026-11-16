import { PageHeader } from '@/components/PageHeader'
import { content } from '@/content/site'

export function Privacy() {
  const { legal, contact } = content
  return (
    <>
      <PageHeader title="Privacy notice" crumbs={[{ label: 'Privacy notice' }]} intro={`Last updated ${legal.lastUpdated}.`} />
      <div className="container-page flex flex-col gap-10 py-14">
        {legal.privacy.map((section) => (
          <section key={section.heading} className="flex flex-col gap-3">
            <h2 className="heading-md text-2xl">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p} className="reading">
                {p}
              </p>
            ))}
          </section>
        ))}
        {contact.email && (
          <p className="reading">
            Contact:{' '}
            <a href={`mailto:${contact.email}`} className="font-semibold text-primary underline underline-offset-2">
              {contact.email}
            </a>
          </p>
        )}
      </div>
    </>
  )
}

export function Disclaimer() {
  const { legal } = content
  return (
    <>
      <PageHeader title="Medical disclaimer" crumbs={[{ label: 'Medical disclaimer' }]} />
      <div className="container-page flex flex-col gap-4 py-14">
        {legal.disclaimer.map((p) => (
          <p key={p} className="reading">
            {p}
          </p>
        ))}
      </div>
    </>
  )
}
