import { content } from '@/content/site'

/** A flow-volume loop: a scooped (obstructive) curve drawn inside a dashed expected curve. */
export function SpirometryCurve() {
  return (
    <figure className="m-0 flex flex-col gap-4 rounded-[20px] bg-white p-6 pb-5 sm:p-7">
      <svg
        viewBox="0 0 560 420"
        className="block h-auto w-full"
        role="img"
        aria-label="Spirometry flow-volume curve. A solid line with a scooped shape, typical of narrowed airways, sits inside a dashed line showing the expected curve."
      >
        <g stroke="#D5DFE4" strokeWidth="1">
          <line x1="60" y1="40" x2="60" y2="390" />
          <line x1="60" y1="260" x2="530" y2="260" />
          {[160, 260, 360, 460].map((x) => (
            <line key={x} x1={x} y1="255" x2={x} y2="265" />
          ))}
          {[40, 150, 370].map((y) => (
            <line key={y} x1="55" y1={y} x2="65" y2={y} />
          ))}
        </g>
        <g fontFamily="Schibsted Grotesk, system-ui, sans-serif" fontSize="13" fill="#4B5D6B">
          <text x="156" y="282">1</text>
          <text x="256" y="282">2</text>
          <text x="356" y="282">3</text>
          <text x="456" y="282">4</text>
          <text x="36" y="155">5</text>
          <text x="28" y="45">10</text>
          <text x="32" y="375">-5</text>
          <text x="400" y="300">Volume (litres)</text>
          <text x="72" y="30">Flow (litres per second)</text>
        </g>
        <path
          className="breath-late"
          d="M60,260 C70,120 85,62 112,58 C210,105 400,205 520,260 C490,385 110,385 60,260"
          fill="none"
          stroke="#7A8C99"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <path
          className="breath"
          d="M60,260 C68,150 80,108 98,102 C150,205 260,246 410,260 C385,360 100,360 60,260"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g className="breath-late" fontFamily="Schibsted Grotesk, system-ui, sans-serif" fontSize="14" fontWeight="600">
          <text x="330" y="150" fill="#4B5D6B">Expected for your age</text>
          <line x1="326" y1="146" x2="300" y2="168" stroke="#7A8C99" strokeWidth="1" />
          <text x="196" y="226" fill="hsl(var(--primary))">Your breath out</text>
        </g>
      </svg>
      <figcaption className="text-base leading-relaxed text-ink-soft">{content.home.curveCaption}</figcaption>
    </figure>
  )
}
