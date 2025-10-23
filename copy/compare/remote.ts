export const remoteCopy = {
  hero: {
    title: `SigmaRemote vs Remote: A Simpler, Cheaper Way to Pay Global Teams`,
    subtitle: `Remote.com offers a powerful suite - but do you really need the complexity and cost? See why modern teams are switching to SigmaRemote for flat pricing, faster USD payouts, and mobile-first onboarding.`
  },
  matrix: {
    title: `Side-by-Side on What Really Matters`,
    leftTitle: `Remote`,
    leftBullets: [
      `No per-payment pricing. $29–$49/month per contractor + platform fees`,
      `FX costs are passed to the contractor; if currency conversion is needed, the markup varies 1–3%.`,
      `SWIFT/local payouts may incur correspondent fees of $20–$50 charged by intermediary banks.`,
      `3–5 business days typical; longer for high-risk countries or compliance checks`,
      `No USD wallet. Forced conversion to local currency. Limited crypto/payment options.`,
      `Portal-based onboarding; contracts generated manually; slower in high-compliance countries.`,
      `Support delays and slow issue resolution`
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
    title: `Pain Points with Remote`,
    intro: `Key frustrations cited by teams using Remote.com for contractor payments:`,
    bullets: [
      `High recurring costs: $29/month per contractor - only billable if invoiced, which compounds quickly for large teams.`,
      `Unpredictable FX exposure: FX markups are passed to contractors, making it harder for finance teams to forecast costs accurately.`,
      `Correspondent bank fees: SWIFT payments often incur $20–$50, reducing net received amount.`,
      `Limited control over disbursements: Funds must follow Remote's release schedule; businesses can't always time payments strategically.`,
      `No wallet control: Contractors lose autonomy over when/how to withdraw funds.`,
      `Cumbersome onboarding: Manual portal sign-up with region-specific delays.`,
      `Inconsistent support responsiveness: Reported delays in resolving payment and compliance exceptions impact business continuity.`
    ]
  },
  whySigmaWins: {
    title: `Why SigmaRemote Wins`,
    intro: `The smarter, leaner alternative for global contractor payments:`,
    bullets: [
      `Flat Fees, No Surprises: $18/month per active contractor - reduced rates for teams of 20+. 0% FX on USD wallet payments; ~1% FX when currency conversion is required.`,
      `USD Wallets Built In: Contractors keep 100% of what you send - no forced conversion.`,
      `Faster Payouts, Globally: 1–2 business day transfers or instant stablecoin delivery via USDC/USDT.`,
      `Better for LATAM, Africa, Asia: Mobile-first onboarding, crypto-native infrastructure, and wallet support.`,
      `No Shutdown Surprises: Real human support helps your team stay paid - fast.`
    ]
  }
} as const;