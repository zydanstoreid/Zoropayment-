import { ShieldCheck } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-display text-base font-extrabold tracking-tight text-ink-foreground">
            Zoro<span className="text-primary">Payment</span>
          </span>
        </div>
        <a
          href="https://wa.me/62882008288872"
          className="rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:opacity-90"
        >
          Chat CS
        </a>
      </div>
    </header>
  )
}
