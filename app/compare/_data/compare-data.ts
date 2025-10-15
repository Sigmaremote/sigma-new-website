export type ComparePoint = { 
  text: string; 
  tone?: "negative" | "neutral" | "positive";
  tooltip?: string;
};
export type CompareSet = {
  competitorName: string;
  competitorPoints: ComparePoint[];
  sigmaPoints: ComparePoint[];
  painPoints: string[];
  whySigmaWins: string[];
};

export const COMPARE_DATA: Record<string, CompareSet> = {
  deel: {
    competitorName: "Deel",
    competitorPoints: [
      { 
        text: "No per-payment pricing. $29-$49/month per contractor + platform fees",
        tone: "negative",
        tooltip: "Higher monthly costs with additional platform fees"
      },
      { 
        text: "FX costs are passed to the contractor; if currency conversion is needed, the markup varies 1-3%.",
        tone: "negative",
        tooltip: "Hidden FX costs passed to contractors, reducing their take-home pay"
      },
      { 
        text: "SWIFT/local payouts may incur correspondent fees of $20-$50 charged by intermediary banks.",
        tone: "negative",
        tooltip: "Additional banking fees that can significantly impact small payments"
      },
      { 
        text: "3-5 business days typical; longer for high-risk countries or compliance checks",
        tone: "neutral",
        tooltip: "Slower processing times, especially in compliance-heavy countries"
      },
      { 
        text: "No USD wallet. Forced conversion to local currency. Limited crypto/payment options.",
        tone: "negative",
        tooltip: "Limited payment flexibility and forced currency conversions"
      },
      { 
        text: "Portal-based onboarding; contracts generated manually; slower in high-compliance countries.",
        tone: "neutral",
        tooltip: "Manual processes that slow down contractor onboarding"
      },
      { 
        text: "Support delays and slow issue resolution",
        tone: "negative",
        tooltip: "Poor support experience with delayed responses"
      },
    ],
    sigmaPoints: [
      { 
        text: "$18/month per active contractor - reduced rates for teams of 20+",
        tone: "positive",
        tooltip: "Transparent, lower pricing with volume discounts"
      },
      { 
        text: "0% FX with USD wallets; ~1% FX only if converting to local currency",
        tone: "positive",
        tooltip: "Minimal FX costs, especially with USD wallet option"
      },
      { 
        text: "$0 with USD wallet (no forced conversions)",
        tone: "positive",
        tooltip: "Zero fees when using USD wallet, no forced conversions"
      },
      { 
        text: "1-2 business days, optimized infrastructure",
        tone: "positive",
        tooltip: "Faster processing with optimized payment infrastructure"
      },
      { 
        text: "USD wallet, crypto support, fast onboarding",
        tone: "positive",
        tooltip: "Multiple payment options including crypto and USD wallet"
      },
      { 
        text: "<15 min mobile onboarding",
        tone: "positive",
        tooltip: "Lightning-fast contractor onboarding process"
      },
      { 
        text: "Real human support - no ticket blackholes",
        tone: "positive",
        tooltip: "Dedicated human support with quick response times"
      },
    ],
    painPoints: [
      "High per-contractor pricing: $49-$99/month base plus FX and platform fees - costs that scale with headcount.",
      "Higher payroll & EOR costs: Global payroll starts at $29 per employee/month, and EOR services begin at $599 per employee/month",
      "Unclear multi-tier pricing: Different business needs require navigating multiple plans-Contractor, Global Payroll, EOR, PEO-making cost estimates complex",
      "Limited crypto access: Coinbase withdrawals only available to US-based contractors, reducing payout flexibility in global teams.",
      "Slow compliance reviews: Payment delays during KYC/AML checks can disrupt payroll schedules.",
      "Not optimized for emerging markets: Reported payout delays, banking restrictions, and forced conversions in countries like Argentina, Venezuela, and Nigeria."
    ],
    whySigmaWins: [
      "Flat Fees, No Surprises: $18/month per active contractor - reduced rates for teams of 20+. 0% FX on USD wallet payments; ~1% FX when currency conversion is required.",
      "USD Wallets Built In: Contractors keep 100% of what you send - no forced conversion.",
      "Faster Payouts, Globally: 1-2 business day transfers or instant stablecoin delivery via USDC/USDT.",
      "Better for LATAM, Africa, Asia: Mobile-first onboarding, crypto-native infrastructure, and wallet support.",
      "No Shutdown Surprises: Real human support helps your team stay paid - fast."
    ],
  },
  // Add more competitors later (payoneer, remote, wise, etc.)
};
