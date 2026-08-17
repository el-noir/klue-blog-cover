import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KLUE vs. a Hardened Target',
  description: 'One bug, no signature required.',
}

export default function ArticleCoverPage() {
  return (
    <main className="min-h-screen bg-[#07151d] px-5 py-5 text-[#f3f5f1] sm:px-10 sm:py-10 lg:px-16">
      <div className="relative mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-[1440px] flex-col overflow-hidden border border-[#2d5b61]/80 bg-[#0b202a] sm:min-h-[calc(100vh-5rem)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'linear-gradient(#6aa79a18 1px, transparent 1px), linear-gradient(90deg, #6aa79a18 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#0b202a]/35" />

        <header className="relative flex items-center justify-between border-b border-[#a8c9be]/30 px-6 py-5 sm:px-10 lg:px-14">
          <div className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shellvoide_logo-nWMLkFwiInV5pV0UJXV13av0nrUiuc.png"
              alt="KLUE logo"
              className="size-8 object-contain"
            />
            <span className="font-mono text-sm font-semibold tracking-[0.34em]">KLUE</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#c6d8d0]/70">Field note / 2026</span>
        </header>

        <section className="relative flex flex-1 flex-col justify-center px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
          <div className="max-w-5xl">
            <p className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.26em] text-[#35bd80]">
              <span className="size-2 rounded-full bg-[#35bd80]" /> Security research
            </p>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-[7.5rem]">
              KLUE vs. a
              <br />
              Hardened Target
            </h1>
            <p className="mt-8 font-mono text-sm uppercase tracking-[0.18em] text-[#c6d8d0]/75 sm:text-base">
              One bug. No signature required.
            </p>
          </div>
        </section>

        <footer className="relative flex items-center justify-between border-t border-[#a8c9be]/30 px-6 py-4 font-mono text-[9px] uppercase tracking-[0.2em] text-[#c6d8d0]/65 sm:px-10 lg:px-14">
          <span>KLUE / SHELLVOIDE</span>
          <span>Responsible disclosure</span>
        </footer>
      </div>
    </main>
  )
}
