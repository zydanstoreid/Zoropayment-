import { ScanLine } from "lucide-react"

export function QrisSection() {
  return (
    <section id="qris" className="scroll-mt-20 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-2">
        <ScanLine className="h-5 w-5 text-primary" aria-hidden="true" />
        <h2 className="font-display text-lg font-bold text-card-foreground">QRIS Payment</h2>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Scan kode QRIS di bawah ini menggunakan aplikasi e-wallet atau mobile banking kamu.
      </p>

      <div className="mt-5 flex flex-col items-center">
        <div className="rounded-2xl border border-border bg-background p-3">
          <img
            src="/qris.png"
            alt="Kode QRIS untuk pembayaran ZoroPayment"
            className="h-56 w-56 rounded-lg object-contain"
          />
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Pastikan nominal sesuai sebelum konfirmasi ke customer service.
        </p>
      </div>
    </section>
  )
}
