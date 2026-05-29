"use client"

import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"

const MEMBERS = ["Rizky", "Fajar", "Andi", "Dimas", "Aldi", "Rama", "Ilham", "Bintang"]
const NOMINAL = ["Rp150.000", "Rp250.000", "Rp500.000", "Rp1.000.000", "Rp2.500.000"]

type Notif = { id: number; name: string; saldo: string }

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function LiveNotifications() {
  const [items, setItems] = useState<Notif[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now()
      setItems((prev) => [...prev, { id, name: pick(MEMBERS), saldo: pick(NOMINAL) }])
      setTimeout(() => {
        setItems((prev) => prev.filter((n) => n.id !== id))
      }, 4000)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-[998] flex max-w-[calc(100vw-2rem)] flex-col gap-2"
      aria-live="polite"
      aria-atomic="false"
    >
      {items.map((n) => (
        <div
          key={n.id}
          className="animate-notif flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_15px_rgba(0,191,255,0.5)]"
        >
          <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
          <span>
            <strong className="font-semibold">{n.name}</strong> berhasil menarik saldo {n.saldo}
          </span>
        </div>
      ))}
    </div>
  )
}
