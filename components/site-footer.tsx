import { ShieldCheck } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-2 px-4 py-8 text-center">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-extrabold tracking-tight text-card-foreground">
            Zoro<span className="text-primary">Payment</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">Payment &amp; Deposit Premium</p>
        <p className="mt-1 text-xs text-muted-foreground">© 2026 ZoroPayment. Semua hak dilindungi.</p>
      </div>
    </footer>
  )
}
