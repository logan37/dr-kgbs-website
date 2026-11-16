import { PageHeader } from '@/components/PageHeader'
import { BookingBand } from '@/components/BookingBand'
import { DoctorPortrait } from '@/components/DoctorPortrait'
import { content } from '@/content/site'

export default function About() {
  const { doctor } = content
  return (
    <>
      <PageHeader title={doctor.fullName} intro={`${doctor.title}. ${doctor.degrees}.`} crumbs={[{ label: 'About the doctor' }]} />

      <div className="container-page flex flex-col gap-12 py-14 md:flex-row md:gap-16">
        <aside className="flex flex-col gap-6 md:w-[34%] md:shrink-0">
          <DoctorPortrait />
          <dl className="flex flex-col gap-4 font-sans">
            <div>
              <dt className="text-sm font-bold text-muted-foreground">Registration</dt>
              <dd className="font-serif text-base">{doctor.registration}</dd>
            </div>
            {doctor.languages.length > 0 && (
              <div>
                <dt className="text-sm font-bold text-muted-foreground">Consults in</dt>
                <dd className="font-serif text-base">{doctor.languages.join(', ')}</dd>
              </div>
            )}
            {doctor.profiles.length > 0 && (
              <div>
                <dt className="text-sm font-bold text-muted-foreground">Profiles</dt>
                <dd className="flex flex-col">
                  {doctor.profiles.map((p) => (
                    <a key={p.href} href={p.href} rel="noopener" className="py-1 font-semibold text-primary underline-offset-4 hover:underline">
                      {p.label}
                    </a>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </aside>

        <div className="flex flex-col gap-12">
          <section className="flex flex-col gap-4">
            <p className="max-w-[30em] text-xl leading-normal text-ink sm:text-[22px]">“{doctor.philosophy}”</p>
            {doctor.bio.map((p) => (
              <p key={p} className="reading">
                {p}
              </p>
            ))}
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="heading-md text-2xl">Education and training</h2>
            <ul className="flex flex-col border-t-2 border-ink">
              {doctor.qualifications.map((q) => (
                <li key={q.degree} className="flex flex-col gap-1 border-b py-4 sm:flex-row sm:gap-6">
                  <span className="font-sans text-[17px] font-bold sm:w-[45%]">{q.degree}</span>
                  <span className="text-ink-soft">{q.institution}</span>
                </li>
              ))}
            </ul>
          </section>

          {doctor.publications.length > 0 && (
            <section className="flex flex-col gap-4">
              <h2 className="heading-md text-2xl">Published research</h2>
              <ul className="flex flex-col gap-4">
                {doctor.publications.map((p) => (
                  <li key={p.title} className="reading">
                    {p.url ? (
                      <a href={p.url} rel="noopener" className="font-semibold text-primary underline underline-offset-2">
                        {p.title}
                      </a>
                    ) : (
                      <span className="font-semibold text-ink">{p.title}</span>
                    )}
                    . <em>{p.journal}</em>
                    {p.year ? `, ${p.year}` : ''}.
                  </li>
                ))}
              </ul>
            </section>
          )}

          {doctor.memberships.length > 0 && (
            <section className="flex flex-col gap-4">
              <h2 className="heading-md text-2xl">Memberships</h2>
              <ul className="reading list-disc pl-5">
                {doctor.memberships.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      <BookingBand />
    </>
  )
}
