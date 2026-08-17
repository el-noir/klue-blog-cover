import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KLUE vs. a Hardened Target',
  description: 'One bug, no signature required.',
}

export default function ArticleCoverPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-6 text-foreground sm:px-12 sm:py-8 lg:px-20">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col border border-foreground/15 bg-background/90 px-6 py-6 sm:px-10 sm:py-8 lg:px-14 lg:py-10">
        <header className="flex items-center justify-between border-b border-foreground/15 pb-5">
          <div className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shellvoide_logo-nWMLkFwiInV5pV0UJXV13av0nrUiuc.png"
              alt="KLUE logo"
              className="size-8 object-contain"
            />
            <span className="font-mono text-sm font-semibold tracking-[0.34em]">KLUE</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">Field note / 2026</span>
        </header>

        <section className="flex flex-1 flex-col justify-center gap-10 py-12 sm:gap-14 sm:py-16">
          <div className="max-w-5xl">
            <p className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              <span className="size-2 rounded-full bg-primary" /> Security research
            </p>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-[7.5rem]">
              KLUE vs. a
              <br />
              Hardened Target
            </h1>
            <p className="mt-8 font-mono text-sm uppercase tracking-[0.18em] text-foreground/60 sm:text-base">
              One bug. No signature required.
            </p>
          </div>
        </section>

        <footer className="relative flex items-center justify-between border-t border-foreground/15 pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/50 sm:px-10 lg:px-14">
          <span>KLUE / SHELLVOIDE</span>
          <span>Responsible disclosure</span>
        </footer>
      </div>
    </main>
  )
}
