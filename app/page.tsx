import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ReferralBonus } from "@/components/referral-bonus"
import { PaymentMethods } from "@/components/payment-methods"
import { QrisSection } from "@/components/qris-section"
import { Confirmation } from "@/components/confirmation"
import { PaymentNumber } from "@/components/payment-number"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <Hero />
        <div className="mx-auto w-full max-w-3xl px-4 pb-20">
          <div className="relative z-10 -mt-8 flex flex-col gap-4 sm:gap-5">
            <ReferralBonus />
            <PaymentMethods />
            <QrisSection />
            <Confirmation />
            <PaymentNumber />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
