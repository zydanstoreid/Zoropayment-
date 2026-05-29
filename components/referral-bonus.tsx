import { Gift } from "lucide-react"

export function ReferralBonus() {
  return (
    <section className="overflow-hidden rounded-2xl border border-accent/40 bg-accent/15 p-5 shadow-sm sm:p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Gift className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="font-display text-lg font-bold text-foreground">Bonus Referral</h2>
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-foreground">
              Rp20.000
            </span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Dapatkan bonus saldo Rp20.000 untuk setiap member baru yang mendaftar menggunakan kode referral kamu.
          </p>
        </div>
      </div>
    </section>
  )
}
