import { MessageCircle, AlertCircle } from "lucide-react"

export function Confirmation() {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-ink p-5 text-ink-foreground shadow-sm sm:p-6">
      <h2 className="font-display text-lg font-bold">Konfirmasi Transaksi</h2>
      <div className="mt-3 flex items-start gap-2.5 rounded-xl bg-white/5 p-3">
        <AlertCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-ink-foreground/80">
          Semua transaksi <strong className="font-semibold text-ink-foreground">wajib di-ACC</strong> terlebih dahulu
          ke customer service sebelum diproses.
        </p>
      </div>
      <a
        href="https://wa.me/62882008288872"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Chat CS WhatsApp
      </a>
    </section>
  )
}
