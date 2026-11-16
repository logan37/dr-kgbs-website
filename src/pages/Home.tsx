import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { BookingBand } from '@/components/BookingBand'
import { ClinicAddress, ClinicHours } from '@/components/ClinicDetails'
import { DoctorPortrait } from '@/components/DoctorPortrait'
import { FaqList } from '@/components/FaqList'
import { SpirometryCurve } from '@/components/SpirometryCurve'
import { SymptomPicker } from '@/components/SymptomPicker'
import { WhatsAppIcon } from '@/components/icons'
import { useBooking } from '@/context/BookingContext'
import { content } from '@/content/site'
import { whatsappHref } from '@/lib/site'

export default function Home() {
  const { openBooking } = useBooking()
  const { home, doctor, tests, faqs, rating, clinic } = content

  return (
    <>
      {/* Hero */}
      <section className="container-page flex flex-col gap-12 py-14 sm:py-[72px] lg:flex-row lg:items-center lg:gap-16">
        <div className="flex flex-1 flex-col gap-6 lg:max-w-[560px]">
          <h1 className="heading-xl max-w-[13ch]">{home.heading}</h1>
          <p className="lede max-w-[34em]">{home.intro}</p>
          <div className="flex flex-wrap gap-3 font-sans">
            <Button onClick={() => openBooking()} className="h-[54px] px-7 text-[17px] font-bold">
              Book a consultation
            </Button>
            <Button asChild variant="outline" className="h-[54px] border-[1.5px] border-ink bg-transparent px-6 text-[17px] font-bold">
              <a href={whatsappHref()} target="_blank" rel="noopener">
                <WhatsAppIcon className="size-5" />
                Ask on WhatsApp
              </a>
            </Button>
          </div>
          <p className="max-w-[34em] text-base leading-relaxed text-muted-foreground">
            {home.credentialLine}
            {rating && (
              <>
                {' '}
                <a href={rating.url} target="_blank" rel="noopener" className="text-primary underline underline-offset-2">
                  Rated {rating.value} from {rating.count} Google reviews
                </a>
                .
              </>
            )}
          </p>
        </div>
        <div className="flex-1 lg:max-w-[560px]">
          <SpirometryCurve />
        </div>
      </section>

      {/* Symptoms */}
      <section id="symptoms" className="border-y bg-white">
        <div className="container-page flex flex-col gap-9 py-16 sm:py-[88px]">
          <div className="flex max-w-[44em] flex-col gap-3">
            <h2 className="heading-lg">{home.symptomsHeading}</h2>
            <p className="lede text-lg">{home.symptomsIntro}</p>
          </div>
          <SymptomPicker />
        </div>
      </section>

      {/* Tests */}
      <section id="tests" className="container-page flex flex-col gap-8 py-16 sm:py-[88px]">
        <div className="flex max-w-[44em] flex-col gap-3">
          <h2 className="heading-lg">{home.testsHeading}</h2>
          <p className="lede text-lg">{home.testsIntro}</p>
        </div>
        <ul className="flex flex-col border-t-2 border-ink">
          {tests.map((t) => (
            <li key={t.slug} className="border-b">
              <Link
                to={`/tests/${t.slug}/`}
                className="group grid gap-x-8 gap-y-2 py-6 text-ink no-underline md:grid-cols-[minmax(0,280px)_minmax(0,1fr)_180px] md:items-baseline"
              >
                <span className="font-sans text-xl font-bold leading-snug group-hover:text-primary group-hover:underline group-hover:underline-offset-4">
                  {t.shortName}
                </span>
                <span className="reading">{t.summary}</span>
                <span className="flex flex-col font-sans text-[15px]">
                  <span className="font-semibold">{t.duration}</span>
                  <span className="text-muted-foreground">{t.performedBy}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Doctor */}
      <section id="doctor" className="bg-ink text-[#E6EEF2]">
        <div className="container-page flex flex-col gap-12 py-16 sm:py-24 md:flex-row">
          <div className="md:w-[38%] md:shrink-0">
            <DoctorPortrait dark />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="heading-lg text-white">{doctor.fullName}</h2>
            <p className="max-w-[30em] text-xl leading-normal text-white sm:text-[22px]">“{doctor.philosophy}”</p>
            <p className="max-w-[36em] text-lg leading-[1.7]">
              {doctor.title} with {doctor.yearsInPractice} years in pulmonary and allergy medicine, consulting at {clinic.name},{' '}
              {clinic.locality}.
            </p>
            <ul className="flex flex-col border-t border-[#36506A]">
              {doctor.qualifications.map((q) => (
                <li key={q.degree} className="flex flex-col gap-1 border-b border-[#36506A] py-4 sm:flex-row sm:gap-6">
                  <span className="font-sans text-[17px] font-bold text-white sm:w-[45%]">{q.degree}</span>
                  <span className="text-base text-[#C7D6DF]">{q.institution}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-[#C7D6DF]">{doctor.registration}</p>
            <Link to="/about/" className="self-start py-2 font-sans font-bold text-white underline underline-offset-4">
              More about {doctor.name}
            </Link>
          </div>
        </div>
      </section>

      {/* First visit */}
      <section className="container-page flex flex-col gap-9 py-16 sm:py-[88px]">
        <h2 className="heading-lg">{home.firstVisitHeading}</h2>
        <ol className="grid gap-8 md:grid-cols-3">
          {home.firstVisitSteps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-2.5 border-t-[3px] border-primary pt-5">
              <span className="font-sans text-4xl font-extrabold leading-none text-primary" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="heading-md">{step.title}</h3>
              <p className="text-[17px] leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section id="questions" className="border-t bg-white">
        <div className="container-page flex flex-col gap-10 py-16 sm:py-[88px] lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-3 lg:w-[34%] lg:shrink-0">
            <h2 className="heading-lg">{home.faqHeading}</h2>
            <p className="text-[17px] leading-relaxed text-ink-soft">{home.faqIntro}</p>
          </div>
          <div className="flex-1">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="container-page flex flex-col gap-10 py-16 sm:py-[88px] md:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <h2 className="heading-lg">Hours and location</h2>
          <ClinicAddress />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <ClinicHours />
          <Link to="/visit/" className="self-start py-2 font-sans font-bold text-primary underline-offset-4 hover:underline">
            Directions, map and appointment form
          </Link>
        </div>
      </section>

      <BookingBand />
    </>
  )
}
