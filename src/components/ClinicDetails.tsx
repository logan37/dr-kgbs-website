import { content } from '@/content/site'
import { addressLines } from '@/lib/site'

export function ClinicHours() {
  return (
    <table className="w-full max-w-[480px] border-collapse font-sans text-base">
      <caption className="sr-only">Clinic hours</caption>
      <tbody>
        {content.clinic.hours.map((h) => (
          <tr key={h.days} className="border-y">
            <th scope="row" className="py-3.5 pr-4 text-left align-top font-bold">
              {h.days}
            </th>
            <td className="py-3.5">
              {h.sessions.map((s) => (
                <span key={s} className="block">
                  {s}
                </span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function ClinicAddress() {
  const { clinic } = content
  return (
    <div className="flex flex-col gap-2">
      <address className="text-lg not-italic leading-relaxed">
        {addressLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
      {clinic.landmark && <p className="text-ink-soft">{clinic.landmark}</p>}
      <a
        href={clinic.mapsUrl}
        target="_blank"
        rel="noopener"
        className="self-start py-2 font-sans font-bold text-primary underline-offset-4 hover:underline"
      >
        Open in Google Maps
      </a>
    </div>
  )
}
