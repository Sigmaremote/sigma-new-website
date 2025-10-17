export const veemCopy = {
  hero: {
    title: `SigmaRemote vs Veem: Wallet-First Contractor Payments Without Hidden Fees`,
    subtitle: `Veem isn't built for global contractors.
SigmaRemote delivers flat-fee USD payouts, wallet control, and instant onboarding - no bloated costs.`
  },
  matrix: {
    title: `Side-by-Side on What Really Matters`,
    leftTitle: `Veem`,
    leftBullets: [
      `Free basic use; $29 international USD payout fee (or $40 for payments over $10K), plus 1% fee for instant debit card deposits`,
      `Claims savings over banks but does not disclose actual FX margins or markups`,
      ` Receiving banks may levy $20-$50 SWIFT/intermediary fees, which reduces payouts`,
      `Standard payments take 2-3 business days; instant debit deposit costs 1% fee.`,
      `Multi-currency wallet supports 15+ currencies, but no long-term USD holding-must convert before withdrawal.`,
      `Manual onboarding with business focus - not built for fast contractor setup`,
      `Platform geared toward SMB invoicing rather than payouts for remote teams.`
    ],
    rightTitle: `Sigma`,
    rightBullets: [
      `$18/month per active contractor - reduced rates for teams of 20+`,
      `0% FX with USD wallets; ~1% FX  only if converting to local currency`,
      `$0 with USD wallet (no forced conversions)`,
      `1-2 business days, or instant with USDC. Optimized infrastructure`,
      `Contractors hold USD wallet, choose when and how to convert`,
      `<15 min mobile onboarding`,
      `Fast, human-first support optimized for contractor payouts`
    ]
  },
  painPoints: {
    title: `Pain Points with Veem`,
    intro: `Here's why Veem costs more than it looks`,
    bullets: [
      `Hidden FX Markups: Rates may promise savings, but undisclosed currency conversions reduce contractor take-home pay.`,
      `USD Payout Fees: Each USD international transfer charges $29-$40, even if both parties use Veem.`,
      `Bank Intermediary Fees: SWIFT or correspondent banks may deduct $20-$50 from received amounts.`,
      `Slow Standard Transfers: Standard payouts land in 2-3 business days; the instant route costs extra.`,
      `No USD Wallet Control: Contractors can't hold USD-funds are forced through conversion steps before access.`,
      `Support & UX Tradeoffs: No dedicated mobile app and support focused on invoice management-not global payouts.`
    ]
  },
  whySigmaWins: {
    title: `Why SigmaRemote Wins`,
    intro: `A better approach for paying international contractors:`,
    bullets: [
      `Flat Fees, No Surprises: $18/month per active contractor - reduced rates for teams of 20+. 0% FX on USD wallet payments; ~1% FX when currency conversion is required.`,
      `USD Wallets Built In: Contractors keep 100% of what you send - no forced conversion.`,
      `Faster Payouts, Globally: 1-2 business day transfers or instant stablecoin delivery via USDC/USDT.`,
      `Better for LATAM, Africa, Asia: Mobile-first onboarding, crypto-native infrastructure, and wallet support.`,
      `No Shutdown Surprises: Real human support helps your team stay paid - fast.`
    ]
  }
} as const;