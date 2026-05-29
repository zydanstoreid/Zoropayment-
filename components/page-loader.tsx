"use client"

import { useEffect, useState } from "react"

export function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-5 bg-black"
      role="status"
      aria-live="polite"
    >
      <div
        className="size-16 animate-spin rounded-full border-[6px] border-muted border-t-primary"
        aria-hidden="true"
      />
      <p className="text-lg font-bold tracking-tight text-primary">ZoroPayment</p>
      <span className="sr-only">Memuat...</span>
    </div>
  )
}
