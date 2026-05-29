import { Wallet, Smartphone, CreditCard, Landmark, QrCode, Banknote } from "lucide-react"

const methods = [
  { name: "DANA", icon: Wallet },
  { name: "OVO", icon: Smartphone },
  { name: "GoPay", icon: CreditCard },
  { name: "ShopeePay", icon: Banknote },
  { name: "Transfer Bank", icon: Landmark },
  { name: "QRIS", icon: QrCode },
]

export function PaymentMethods() {
  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <h2 className="font-display text-lg font-bold text-card-foreground">Payment Lengkap</h2>
      <p className="mt-1 text-sm text-muted-foreground">Pilih metode pembayaran favoritmu.</p>

      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {methods.map(({ name, icon: Icon }) => (
          <li
            key={name}
            className="flex items-center gap-2.5 rounded-xl border border-border bg-muted/60 px-3 py-3 transition-colors hover:border-primary/40 hover:bg-primary/5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-card-foreground">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
