import { ScanLine } from "lucide-react"

export function QrisSection() {
  return (
    <section id="qris" className="scroll-mt-20 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-2">
        <ScanLine className="h-5 w-5 text-primary" aria-hidden="true" />
        <h2 className="font-display text-lg font-bold text-card-foreground">Bayar via QRIS</h2>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        Scan kode QRIS di bawah ini dengan aplikasi e-wallet atau mobile banking apa pun. Berlaku untuk semua aplikasi
        berlogo QRIS.
      </p>

      <div className="mt-5 flex flex-col items-center">
        <div className="w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-white p-2">
          <img
            src="/qris-zydanstore.jpg"
            alt="Kode QRIS ZYDANSTORE — NMID ID1024359079836"
            className="h-auto w-full rounded-lg object-contain"
          />
        </div>

        <dl className="mt-4 w-full max-w-xs space-y-2 rounded-xl border border-border bg-background p-3 text-sm">
          <div className="flex items-center justify-between gap-3">
            <dt className="text-muted-foreground">Merchant</dt>
            <dd className="font-semibold text-card-foreground">ZYDANSTORE</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-muted-foreground">NMID</dt>
            <dd className="font-mono text-xs font-semibold text-card-foreground">ID1024359079836</dd>
          </div>
        </dl>

        <p className="mt-3 text-center text-xs text-muted-foreground">
          Setelah membayar, kirim bukti transfer ke customer service untuk konfirmasi cepat.
        </p>
      </div>
    </section>
  )
}
