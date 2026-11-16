import { content } from '@/content/site'
import { assetUrl, doctorInitials } from '@/lib/site'
import { cn } from '@/lib/utils'

/** The doctor's photo, or a neutral initials block until a photo is added in site.ts. */
export function DoctorPortrait({ className, dark = false }: { className?: string; dark?: boolean }) {
  const { photo } = content.doctor
  if (photo.src) {
    return (
      <img
        src={assetUrl(photo.src)}
        alt={photo.alt}
        width={800}
        height={1000}
        className={cn('aspect-[4/5] w-full rounded-2xl object-cover', className)}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={photo.alt}
      className={cn(
        'flex aspect-[4/5] w-full items-center justify-center rounded-2xl font-sans text-7xl font-extrabold tracking-tight',
        dark ? 'bg-[#1F3A50] text-[#6F8BA0]' : 'bg-mist text-[#8FA6B3]',
        className,
      )}
    >
      {doctorInitials}
    </div>
  )
}
