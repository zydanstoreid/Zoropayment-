import { MessageCircle, BadgeCheck, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-12 text-ink-foreground sm:pb-20 sm:pt-16">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-3xl px-4">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-ink-foreground/80">
          <BadgeCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Payment &amp; Deposit Premium
        </span>

        <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
          Transaksi cepat,
          <br />
          aman, dan terpercaya.
        </h1>

        <p className="mt-4 max-w-md text-pretty leading-relaxed text-ink-foreground/70">
          ZoroPayment melayani deposit dan pembayaran premium dengan berbagai metode populer. Proses dikonfirmasi
          langsung oleh customer service kami.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/62882008288872"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chat CS WhatsApp
          </a>
          <a
            href="#qris"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:bg-white/5"
          >
            <Zap className="h-4 w-4 text-primary" aria-hidden="true" />
            Bayar via QRIS
          </a>
        </div>

        <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
          <div>
            <dt className="text-lg font-bold text-primary sm:text-xl">24 Jam</dt>
            <dd className="text-xs text-ink-foreground/60">Layanan aktif</dd>
          </div>
          <div>
            <dt className="text-lg font-bold text-primary sm:text-xl">6+</dt>
            <dd className="text-xs text-ink-foreground/60">Metode bayar</dd>
          </div>
          <div>
            <dt className="text-lg font-bold text-primary sm:text-xl">Rp20rb</dt>
            <dd className="text-xs text-ink-foreground/60">Bonus referral</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
