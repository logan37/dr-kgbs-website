import { Plus } from 'lucide-react'
import type { Faq } from '@/content/types'

/** Native disclosure widgets: work without JavaScript and keep answers in the page for search engines. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="flex flex-col border-t-2 border-ink">
      {items.map((f) => (
        <details key={f.question} className="group border-b">
          <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-4 py-3 font-sans text-lg font-bold sm:text-[19px]">
            {f.question}
            <Plus className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className="reading mb-6">{f.answer}</p>
        </details>
      ))}
    </div>
  )
}
