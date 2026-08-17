const models = [
  { name: 'Claude Opus 4.8', provider: 'Anthropic', logo: '/logos/anthropic.svg' },
  { name: 'DeepSeek V4', provider: 'DeepSeek', logo: '/logos/deepseek.svg' },
  { name: 'GLM 5.2', provider: 'Z.ai', logo: '/logos/zai.png' },
  { name: 'Kimi K2.7', provider: 'Moonshot AI', logo: '/logos/moonshot.png' },
]

export default function Page() {
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
            <span className="font-mono text-sm font-semibold tracking-[0.3em]">KLUE</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/55">Benchmark / 2026</span>
        </header>

        <div className="flex flex-1 flex-col justify-center gap-10 py-12 sm:gap-14 sm:py-16">
          <div className="max-w-xl">
            <p className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              <span className="size-2 rounded-full bg-primary" /> KLUE field note
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[0.9] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
              Four models.<br /><span className="text-primary">One</span> evaluation.
            </h1>
          </div>

          <div className="grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {models.map((model) => (
              <div key={model.name} className="flex aspect-square flex-col items-center justify-center gap-4 border border-foreground/15 bg-card/80 p-5 text-center shadow-sm sm:p-7">
                <div className="flex size-20 items-center justify-center sm:size-28">
                  <img src={model.logo} alt={`${model.provider} logo`} className="max-h-full max-w-full object-contain" />
                </div>
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-foreground/60 sm:text-[10px]">{model.provider}</p>
              </div>
            ))}
          </div>
        </div>

        <footer className="flex items-center justify-between border-t border-foreground/15 pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/50">
          <span>KLUE / 2026</span>
          <span>Model evaluation</span>
        </footer>
      </div>
    </main>
  )
}

