import { Link } from 'react-router'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { useBooking } from '@/context/BookingContext'
import { content } from '@/content/site'

export function SymptomPicker() {
  const { symptoms } = content.home
  const { openBooking } = useBooking()

  return (
    <Tabs defaultValue={symptoms[0]?.id} orientation="vertical" className="flex flex-col gap-8 lg:flex-row">
      <TabsList
        aria-label="Symptoms"
        className="flex h-auto w-full flex-col items-stretch gap-2 bg-transparent p-0 lg:w-[340px] lg:shrink-0"
      >
        {symptoms.map((s) => (
          <TabsTrigger
            key={s.id}
            value={s.id}
            className="h-auto min-h-14 justify-start whitespace-normal rounded-[10px] border-[1.5px] border-input bg-white px-5 py-3 text-left font-sans text-[17px] font-semibold text-ink shadow-none data-[state=active]:border-ink data-[state=active]:bg-ink data-[state=active]:text-white data-[state=active]:shadow-none"
          >
            {s.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {symptoms.map((s) => (
        <TabsContent key={s.id} value={s.id} className="mt-0 flex-1 rounded-2xl bg-background p-7 sm:p-9">
          <div className="flex flex-col gap-6">
            <h3 className="font-sans text-2xl font-extrabold tracking-tight sm:text-[28px]">{s.label}</h3>
            <p className="reading text-lg text-foreground">{s.explanation}</p>
            <dl className="grid gap-5 sm:grid-cols-3">
              {[
                ['Common causes', s.commonCauses],
                ['The test that tells', s.test],
                ['How long it takes', s.duration],
              ].map(([term, detail]) => (
                <div key={term} className="flex flex-col gap-1">
                  <dt className="font-sans text-[15px] font-bold text-muted-foreground">{term}</dt>
                  <dd className="text-[17px] leading-snug">{detail}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap items-center gap-4">
              <Button onClick={() => openBooking()} className="h-12 px-6 text-base font-bold">
                Book a visit about this
              </Button>
              {s.learnMore && (
                <Link to={s.learnMore} className="py-2 font-sans font-bold text-primary underline-offset-4 hover:underline">
                  Read more about this
                </Link>
              )}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
