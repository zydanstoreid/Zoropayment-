"use client"

import { useState } from "react"
import { Phone, Copy, Check } from "lucide-react"

const NUMBER = "0882008288872"

export function PaymentNumber() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(NUMBER).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-2">
        <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
        <h2 className="font-display text-lg font-bold text-card-foreground">Nomor Payment</h2>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-border bg-muted/60 px-4 py-3">
        <span className="font-mono text-lg font-bold tracking-wide text-card-foreground">{NUMBER}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Salin nomor payment"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:opacity-90"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              Tersalin
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              Salin
            </>
          )}
        </button>
      </div>
    </section>
  )
}
