export type ComparePoint = { 
  text: string; 
  tone?: "negative" | "neutral" | "positive";
  tooltip?: string;
};
export type CompareSet = {
  competitorName: string;
  hero: {
    title: string;
    subtitle: string;
  };
  competitorPoints: ComparePoint[];
  sigmaPoints: ComparePoint[];
  painPoints: string[];
  whySigmaWins: string[];
};

export const COMPARE_DATA: Record<string, CompareSet> = {
  deel: {
    competitorName: "Deel",
    hero: {
      title: "SigmaRemote vs Deel - Lower Costs, Faster Global Payroll for Your Team",
      subtitle: "Deel's high per-contractor fees and payout restrictions can slow your team down. See why scaling businesses choose SigmaRemote for predictable costs, faster onboarding, and global payouts without forced conversion."
    },
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
      "High per-contractor pricing: $29-49/month base plus FX and platform fees - costs that scale with headcount.",
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
  remote: {
    competitorName: "Remote",
    hero: {
      title: "SigmaRemote vs Remote: A Simpler, Cheaper Way to Pay Global Teams",
      subtitle: "Remote.com offers a powerful suite - but do you really need the complexity and cost? See why modern teams are switching to SigmaRemote for flat pricing, faster USD payouts, and mobile-first onboarding."
    },
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
        text: "0% FX with USD wallets; ~1% FX  only if converting to local currency",
        tone: "positive",
        tooltip: "Minimal FX costs, especially with USD wallet option"
      },
      { 
        text: "$0 with USD wallet (no forced conversions)",
        tone: "positive",
        tooltip: "Zero fees when using USD wallet, no forced conversions"
      },
      { 
        text: "1-2 business days, or instant with USDC. Optimized infrastructure",
        tone: "positive",
        tooltip: "Faster processing with optimized payment infrastructure"
      },
      { 
        text: "Contractors hold USD wallet, choose when and how to convert",
        tone: "positive",
        tooltip: "Multiple payment options including crypto and USD wallet"
      },
      { 
        text: "<15 min mobile onboarding",
        tone: "positive",
        tooltip: "Lightning-fast contractor onboarding process"
      },
      { 
        text: "Fast, human-first support optimized for contractor payouts",
        tone: "positive",
        tooltip: "Dedicated human support with quick response times"
      },
    ],
    painPoints: [
      "High recurring costs: $29/month per contractor - only billable if invoiced, which compounds quickly for large teams.",
      "Unpredictable FX exposure: FX markups are passed to contractors, making it harder for finance teams to forecast costs accurately.",
      "Correspondent bank fees: SWIFT payments often incur $20-$50, reducing net received amount.",
      "Limited control over disbursements: Funds must follow Remote's release schedule; businesses can't always time payments strategically.",
      "No wallet control: Contractors lose autonomy over when/how to withdraw funds.",
      "Cumbersome onboarding: Manual portal sign-up with region-specific delays.",
      "Inconsistent support responsiveness: Reported delays in resolving payment and compliance exceptions impact business continuity."
    ],
    whySigmaWins: [
      "Flat Fees, No Surprises: $18/month per active contractor - reduced rates for teams of 20+. 0% FX on USD wallet payments; ~1% FX when currency conversion is required.",
      "USD Wallets Built In: Contractors keep 100% of what you send - no forced conversion.",
      "Faster Payouts, Globally: 1-2 business day transfers or instant stablecoin delivery via USDC/USDT.",
      "Better for LATAM, Africa, Asia: Mobile-first onboarding, crypto-native infrastructure, and wallet support.",
      "No Shutdown Surprises: Real human support helps your team stay paid - fast."
    ],
  },
  rippling: {
    competitorName: "Rippling",
    hero: {
      title: "SigmaRemote vs Rippling: A Simpler, Contractor-First Alternative",
      subtitle: "Rippling bundles HR, payroll, and IT-but for contractor payments it's complex and costly. Discover why fast-growing teams choose SigmaRemote for transparent pricing, wallet-based payouts, and global ease."
    },
    competitorPoints: [
      { 
        text: "$8-$35/month per user; contractor module grossly expensive; pricing requires quote & contract",
        tone: "negative",
        tooltip: "Higher monthly costs with additional platform fees"
      },
      { 
        text: "FX markup passed to contractor; no disclosure online; hidden rate variability.",
        tone: "negative",
        tooltip: "Hidden FX costs passed to contractors, reducing their take-home pay"
      },
      { 
        text: "SWIFT & local payouts can carry $20-$50 intermediary bank fees.",
        tone: "negative",
        tooltip: "Additional banking fees that can significantly impact small payments"
      },
      { 
        text: "2-4+ days via SWIFT; slow in less compliant markets.",
        tone: "neutral",
        tooltip: "Slower processing times, especially in compliance-heavy countries"
      },
      { 
        text: "No USD wallet access; forced conversions; limited crypto payouts.",
        tone: "negative",
        tooltip: "Limited payment flexibility and forced currency conversions"
      },
      { 
        text: "Manual portal-based onboarding; contracts, KYC, and sales delays.",
        tone: "neutral",
        tooltip: "Manual processes that slow down contractor onboarding"
      },
      { 
        text: "Support and billing issues; contract lock-ins.",
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
        text: "0% FX with USD wallets; ~1% FX  only if converting to local currency",
        tone: "positive",
        tooltip: "Minimal FX costs, especially with USD wallet option"
      },
      { 
        text: "$0 with USD wallet (no forced conversions)",
        tone: "positive",
        tooltip: "Zero fees when using USD wallet, no forced conversions"
      },
      { 
        text: "1-2 business days, or instant with USDC. Optimized infrastructure",
        tone: "positive",
        tooltip: "Faster processing with optimized payment infrastructure"
      },
      { 
        text: "Contractors hold USD wallet, choose when and how to convert",
        tone: "positive",
        tooltip: "Multiple payment options including crypto and USD wallet"
      },
      { 
        text: "<15 min mobile onboarding",
        tone: "positive",
        tooltip: "Lightning-fast contractor onboarding process"
      },
      { 
        text: "Fast, human-first support optimized for contractor payouts",
        tone: "positive",
        tooltip: "Dedicated human support with quick response times"
      },
    ],
    painPoints: [
      "Confusing, stacked pricing: Thousands in hidden monthly costs unless you negotiate. Basic payroll starts at $8-$35/user/month, contractor features require consulting.",
      "Hidden FX markups - FX conversion rates aren't published or guaranteed, meaning businesses can't lock in predictable payout costs",
      "Correspondent bank charges: Even after Rippling sends payment, intermediary banks deduct $20-$50, reducing payouts.",
      "Slow cross-border payouts: Especially in emerging markets, SWIFT delays push timelines to days or weeks.",
      "Limited currency control - No built-in USD wallet for contractors, meaning businesses can't give teams the choice to hold USD and convert at favorable times.",
      "Onboarding tied to sales cycles - Account setup and compliance clearance are often linked to negotiated deals, slowing time-to-hire",
      "Customer support pain: Reports of sudden billing spikes, long-term contracts, and limited support responses."
    ],
    whySigmaWins: [
      "Flat Fees, No Surprises: $18/month per active contractor - reduced rates for teams of 20+. 0% FX on USD wallet payments; ~1% FX when currency conversion is required.",
      "USD Wallets Built In: Contractors keep 100% of what you send - no forced conversion.",
      "Faster Payouts, Globally: 1-2 business day transfers or instant stablecoin delivery via USDC/USDT.",
      "Better for LATAM, Africa, Asia: Mobile-first onboarding, crypto-native infrastructure, and wallet support.",
      "No Shutdown Surprises: Real human support helps your team stay paid - fast."
    ],
  },
  gusto: {
    competitorName: "Gusto",
    hero: {
      title: "Say Goodbye to Hidden FX and Slow Wires - Meet the Alternative to Gusto",
      subtitle: "Gusto is built for HR. SigmaRemote is built for speed.\nDitch hidden FX, slow wires, and admin friction. Switch to flat-fee global payouts your contractors actually prefer."
    },
    competitorPoints: [
      { 
        text: "$35/month base + $6 per contractor",
        tone: "negative",
        tooltip: "Higher monthly costs with additional platform fees"
      },
      { 
        text: "1-2.5% FX markup hidden in exchange rate - contractor receives less than what you send.",
        tone: "negative",
        tooltip: "Hidden FX costs passed to contractors, reducing their take-home pay"
      },
      { 
        text: "May incur $20-$50 in SWIFT/intermediary bank deductions - Gusto doesn't cover these.",
        tone: "negative",
        tooltip: "Additional banking fees that can significantly impact small payments"
      },
      { 
        text: "2-5 business days depending on country, currency, and bank route.",
        tone: "neutral",
        tooltip: "Slower processing times, especially in compliance-heavy countries"
      },
      { 
        text: "No wallet support; payouts always auto-convert to local currency. Limited payout control.",
        tone: "negative",
        tooltip: "Limited payment flexibility and forced currency conversions"
      },
      { 
        text: "HR-led setup with forms and contracts; W-8 BEN form collection.",
        tone: "neutral",
        tooltip: "Manual processes that slow down contractor onboarding"
      },
      { 
        text: "S24/7 support available, but global contractor issues often face delays or canned responses.",
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
        text: "0% FX with USD wallets; ~1% FX  only if converting to local currency",
        tone: "positive",
        tooltip: "Minimal FX costs, especially with USD wallet option"
      },
      { 
        text: "$0 with USD wallet (no forced conversions)",
        tone: "positive",
        tooltip: "Zero fees when using USD wallet, no forced conversions"
      },
      { 
        text: "1-2 business days, or instant with USDC. Optimized infrastructure",
        tone: "positive",
        tooltip: "Faster processing with optimized payment infrastructure"
      },
      { 
        text: "Contractors hold USD wallet, choose when and how to convert",
        tone: "positive",
        tooltip: "Multiple payment options including crypto and USD wallet"
      },
      { 
        text: "<15 min mobile onboarding",
        tone: "positive",
        tooltip: "Lightning-fast contractor onboarding process"
      },
      { 
        text: "Fast, human-first support optimized for contractor payouts",
        tone: "positive",
        tooltip: "Dedicated human support with quick response times"
      },
    ],
    painPoints: [
      "Hidden FX markups: Gusto bakes a 1-2.5% FX fee into the exchange rate, with no visibility or control for sender or recipient.",
      "Surprise withdrawal costs: Contractors may receive $20-$50 less due to SWIFT and intermediary bank fees - and Gusto doesn't cover it.",
      "No wallet control: Contractors can't hold USD or decide when to convert. Payouts are always auto-converted to local currency.",
      "Slow cross-border payments: Transfers take 2-5 business days, especially in emerging markets.",
      "Clunky onboarding for global contractors: Admins must manually upload W-8 BEN forms and manage contract setup through the HR portal.",
      "Support not optimized for global issues: Gusto's 24/7 support often falls short when resolving international payout or compliance issues."
    ],
    whySigmaWins: [
      "Flat Fees, No Surprises: $18/month per active contractor - reduced rates for teams of 20+. 0% FX on USD wallet payments; ~1% FX when currency conversion is required.",
      "USD Wallets Built In: Contractors keep 100% of what you send - no forced conversion.",
      "Faster Payouts, Globally: 1-2 business day transfers or instant stablecoin delivery via USDC/USDT.",
      "Better for LATAM, Africa, Asia: Mobile-first onboarding, crypto-native infrastructure, and wallet support.",
      "No Shutdown Surprises: Real human support helps your team stay paid - fast."
    ],
  },
  ontop: {
    competitorName: "Ontop",
    hero: {
      title: "SigmaRemote vs Ontop: A Lean, Contractor-First Alternative",
      subtitle: "Ontop covers onboarding, contracts, and compliance-but paying contractors remains complex and costly. Learn why fast-moving teams prefer SigmaRemote for transparent fees, USD wallet payouts, and onboarding in under 15 minutes."
    },
    competitorPoints: [
      { 
        text: "$49/month per contractor + 1% payment commission",
        tone: "negative",
        tooltip: "Higher monthly costs with additional platform fees"
      },
      { 
        text: " Currency conversion rates include 1% payment commission and a hidden markup on top of the mid-market rate.",
        tone: "negative",
        tooltip: "Hidden FX costs passed to contractors, reducing their take-home pay"
      },
      { 
        text: "May incur $0-45 in SWIFT/intermediary fees, depending on country and rail.",
        tone: "negative",
        tooltip: "Additional banking fees that can significantly impact small payments"
      },
      { 
        text: "ACH to local bank takes 3-5 days; timing can vary by region and bank route.",
        tone: "neutral",
        tooltip: "Slower processing times, especially in compliance-heavy countries"
      },
      { 
        text: "No hidden wallet fees, but $10 inactivity fee after two months of inactivity.",
        tone: "negative",
        tooltip: "Limited payment flexibility and forced currency conversions"
      },
      { 
        text: "Portal-based setup; sales consult required; billing/contract details locked pre-payment.",
        tone: "neutral",
        tooltip: "Manual processes that slow down contractor onboarding"
      },
      { 
        text: "Inconsistent response times. Contractors report slow issue resolution and limited access to live help.",
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
        text: "0% FX with USD wallets; ~1% FX  only if converting to local currency",
        tone: "positive",
        tooltip: "Minimal FX costs, especially with USD wallet option"
      },
      { 
        text: "$0 with USD wallet (no forced conversions)",
        tone: "positive",
        tooltip: "Zero fees when using USD wallet, no forced conversions"
      },
      { 
        text: "1-2 business days, or instant with USDC. Optimized infrastructure",
        tone: "positive",
        tooltip: "Faster processing with optimized payment infrastructure"
      },
      { 
        text: "Contractors hold USD wallet, choose when and how to convert",
        tone: "positive",
        tooltip: "Multiple payment options including crypto and USD wallet"
      },
      { 
        text: "<15 min mobile onboarding",
        tone: "positive",
        tooltip: "Lightning-fast contractor onboarding process"
      },
      { 
        text: "Fast, human-first support optimized for contractor payouts",
        tone: "positive",
        tooltip: "Dedicated human support with quick response times"
      },
    ],
    painPoints: [
      "Expensive contractor SaaS model: $49/month plus 1% commission on each payment; discounts only apply at scale.",
      "Hidden FX behavior: Payment fees and FX markups embedded in unlabeled conversion rates-not clearly disclosed pre-payment.",
      "Unpredictable bank fees: Contractors in some markets lose $0-$45 to SWIFT or intermediary deductions.",
      "Delayed payout flow: Self-reported 3-5 day delay in fund arrival, even with nominal intra-US transfers.",
      "Limited contractor control: No universal USD wallet; contractors rely on platform-directed payout methods.",
      "Heavy onboarding friction: Sales-driven setup, manual contract/legal handling, slow quote cycle.",
      "Inconsistent support experience: Delayed responses for payment issues, limited access to live help, and no dedicated account managers for small teams. Contractors may face long resolution times via email-only support."
    ],
    whySigmaWins: [
      "Flat Fees, No Surprises: $18/month per active contractor - reduced rates for teams of 20+. 0% FX on USD wallet payments; ~1% FX when currency conversion is required.",
      "USD Wallets Built In: Contractors keep 100% of what you send - no forced conversion.",
      "Faster Payouts, Globally: 1-2 business day transfers or instant stablecoin delivery via USDC/USDT.",
      "Better for LATAM, Africa, Asia: Mobile-first onboarding, crypto-native infrastructure, and wallet support.",
      "No Shutdown Surprises: Real human support helps your team stay paid - fast."
    ],
  },
  payoneer: {
    competitorName: "Payoneer",
    hero: {
      title: "SigmaRemote vs Payoneer: Lower Costs, Faster Global Payroll for Your Team",
      subtitle: "Payoneer's FX markups and slow payouts cost businesses thousands per year. SigmaRemote helps you cut payment costs by up to 70%, pay in 1-2 days, and streamline payroll for global contractors."
    },
    competitorPoints: [
      { 
        text: "No flat pricing. Hidden FX and withdrawal fees can quickly add up.",
        tone: "negative",
        tooltip: "Higher monthly costs with additional platform fees"
      },
      { 
        text: "3-3.5% FX markup + extra fees - contractors lose ~$35 per $1,000 sent",
        tone: "negative",
        tooltip: "Hidden FX costs passed to contractors, reducing their take-home pay"
      },
      { 
        text: "Additional 2-3% deducted on receipt",
        tone: "negative",
        tooltip: "Additional banking fees that can significantly impact small payments"
      },
      { 
        text: " 3-5 business days, delays are common",
        tone: "neutral",
        tooltip: "Slower processing times, especially in compliance-heavy countries"
      },
      { 
        text: "Clunky UI, limited payout flexibility",
        tone: "negative",
        tooltip: "Limited payment flexibility and forced currency conversions"
      },
      { 
        text: "Manual forms and long wait times",
        tone: "neutral",
        tooltip: "Manual processes that slow down contractor onboarding"
      },
      { 
        text: "Often no response. Up to 3% accounts shut down",
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
        text: "0% FX with USD wallets; ~1% FX  only if converting to local currency",
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
        text: "Clean dashboard, USD wallet control",
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
      "High FX Markups: Up to 3.5% above the mid-market rate - costing your business ~$35 for every $1,000 sent.",
      "Hidden Transaction Fees: $3.15 per ATM withdrawal, 1-2% withdrawal fees, plus a $29.95 annual inactivity fee for unused accounts.",
      "Slow Payouts: Bank transfers can take 2-5 business days, delaying contractor cash flow.",
      "Account Freezes & Compliance Delays: Unexpected account holds and lengthy automated reviews can disrupt scheduled payroll.",
      "Clunky User Experience: A confusing dashboard and slow fund access - especially on mobile - make payout management harder for finance teams."
    ],
    whySigmaWins: [
      "Flat Fees, No Surprises: $18/month per active contractor - reduced rates for teams of 20+. 0% FX on USD wallet payments; ~1% FX when currency conversion is required.",
      "Keep More of Every Payment: With USD wallets, contractors keep 100% of what you send - no forced FX or hidden fees.",
      "Get Paid Fast: Payouts arrive in 1-2 days, or instantly via stablecoins like USDC.",
      "Flexible Payout Options: Pay to USD wallets, local banks, crypto, or global Visa cards.",
      "Built for Emerging Markets: Optimized onboarding and payout rails for LATAM, Africa, and Asia.",
      "Real Human Support: Mobile-first support, no tickets or shutdown surprises."
    ],
  },
  veem: {
    competitorName: "Veem",
    hero: {
      title: "SigmaRemote vs Veem: Wallet-First Contractor Payments Without Hidden Fees",
      subtitle: "Veem isn't built for global contractors.\nSigmaRemote delivers flat-fee USD payouts, wallet control, and instant onboarding - no bloated costs."
    },
    competitorPoints: [
      { 
        text: "Free basic use; $29 international USD payout fee (or $40 for payments over $10K), plus 1% fee for instant debit card deposits",
        tone: "negative",
        tooltip: "Higher monthly costs with additional platform fees"
      },
      { 
        text: "Claims savings over banks but does not disclose actual FX margins or markups",
        tone: "negative",
        tooltip: "Hidden FX costs passed to contractors, reducing their take-home pay"
      },
      { 
        text: " Receiving banks may levy $20-$50 SWIFT/intermediary fees, which reduces payouts",
        tone: "negative",
        tooltip: "Additional banking fees that can significantly impact small payments"
      },
      { 
        text: "Standard payments take 2-3 business days; instant debit deposit costs 1% fee.",
        tone: "neutral",
        tooltip: "Slower processing times, especially in compliance-heavy countries"
      },
      { 
        text: "Multi-currency wallet supports 15+ currencies, but no long-term USD holding-must convert before withdrawal.",
        tone: "negative",
        tooltip: "Limited payment flexibility and forced currency conversions"
      },
      { 
        text: "Manual onboarding with business focus - not built for fast contractor setup",
        tone: "neutral",
        tooltip: "Manual processes that slow down contractor onboarding"
      },
      { 
        text: "Platform geared toward SMB invoicing rather than payouts for remote teams.",
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
        text: "0% FX with USD wallets; ~1% FX  only if converting to local currency",
        tone: "positive",
        tooltip: "Minimal FX costs, especially with USD wallet option"
      },
      { 
        text: "$0 with USD wallet (no forced conversions)",
        tone: "positive",
        tooltip: "Zero fees when using USD wallet, no forced conversions"
      },
      { 
        text: "1-2 business days, or instant with USDC. Optimized infrastructure",
        tone: "positive",
        tooltip: "Faster processing with optimized payment infrastructure"
      },
      { 
        text: "Contractors hold USD wallet, choose when and how to convert",
        tone: "positive",
        tooltip: "Multiple payment options including crypto and USD wallet"
      },
      { 
        text: "<15 min mobile onboarding",
        tone: "positive",
        tooltip: "Lightning-fast contractor onboarding process"
      },
      { 
        text: "Fast, human-first support optimized for contractor payouts",
        tone: "positive",
        tooltip: "Dedicated human support with quick response times"
      },
    ],
    painPoints: [
      "Hidden FX Markups: Rates may promise savings, but undisclosed currency conversions reduce contractor take-home pay.",
      "USD Payout Fees: Each USD international transfer charges $29-$40, even if both parties use Veem.",
      "Bank Intermediary Fees: SWIFT or correspondent banks may deduct $20-$50 from received amounts.",
      "Slow Standard Transfers: Standard payouts land in 2-3 business days; the instant route costs extra.",
      "No USD Wallet Control: Contractors can't hold USD-funds are forced through conversion steps before access.",
      "Support & UX Tradeoffs: No dedicated mobile app and support focused on invoice management-not global payouts."
    ],
    whySigmaWins: [
      "Flat Fees, No Surprises: $18/month per active contractor - reduced rates for teams of 20+. 0% FX on USD wallet payments; ~1% FX when currency conversion is required.",
      "USD Wallets Built In: Contractors keep 100% of what you send - no forced conversion.",
      "Faster Payouts, Globally: 1-2 business day transfers or instant stablecoin delivery via USDC/USDT.",
      "Better for LATAM, Africa, Asia: Mobile-first onboarding, crypto-native infrastructure, and wallet support.",
      "No Shutdown Surprises: Real human support helps your team stay paid - fast."
    ],
  },
  paypal: {
    competitorName: "PayPal",
    hero: {
      title: "SigmaRemote vs PayPal: Designed for Transparent Contractor Payments, Not Merchant Relays",
      subtitle: "PayPal is built for online sales, customer payments, and consumer transfers-not lean, international contractor payouts. Discover why teams switch to SigmaRemote for flat-fee USD wallet payouts, minimal FX, and global control."
    },
    competitorPoints: [
      { 
        text: "Buyers often pay 2.99%-3.49% + fixed fee; +1.5% for international. Mass Payouts cost 2% of payment.",
        tone: "negative",
        tooltip: "High transaction fees for international payments"
      },
      { 
        text: "PayPal adds 3-4% FX spread on top of mid-market rate; currency conversion fees up to 4.5%",
        tone: "negative",
        tooltip: "Significant FX markups that reduce contractor payouts"
      },
      { 
        text: "Receiving USD internationally costs 1.5% + fixed fee, plus conversion if currency differs.",
        tone: "negative",
        tooltip: "Additional fees for receiving international payments"
      },
      { 
        text: "Payouts take 1-3 business days depending on region and bank; mass payouts align with batch schedule.",
        tone: "neutral",
        tooltip: "Variable processing times based on location and payment method"
      },
      { 
        text: "No contractor-centric wallet flow. Recipients must accept funds and convert-no autonomy.",
        tone: "negative",
        tooltip: "Limited control over payment flow and currency conversion"
      },
      { 
        text: " Designed for merchants. Set up flows center on buyers and compliance, not contractor payouts.",
        tone: "negative",
        tooltip: "Platform not optimized for contractor payment workflows"
      },
      { 
        text: "Support optimized for conflict resolution in sales and payments-contractor payout issues are deprioritized.",
        tone: "negative",
        tooltip: "Support not focused on contractor payment needs"
      },
    ],
    sigmaPoints: [
      { 
        text: "$18/month per active contractor - reduced rates for teams of 20+",
        tone: "positive",
        tooltip: "Transparent, lower pricing with volume discounts"
      },
      { 
        text: "0% FX with USD wallets; ~1% FX  only if converting to local currency",
        tone: "positive",
        tooltip: "Minimal FX costs with USD wallet option"
      },
      { 
        text: "$0 with USD wallet (no forced conversions)",
        tone: "positive",
        tooltip: "No additional fees when using USD wallets"
      },
      { 
        text: "1-2 business days, or instant with USDC. Optimized infrastructure",
        tone: "positive",
        tooltip: "Faster processing with crypto options"
      },
      { 
        text: "Contractors hold USD wallet, choose when and how to convert",
        tone: "positive",
        tooltip: "Full control over currency conversion timing"
      },
      { 
        text: "<15 min mobile onboarding",
        tone: "positive",
        tooltip: "Quick and easy contractor setup"
      },
      { 
        text: "Fast, human-first support optimized for contractor payouts",
        tone: "positive",
        tooltip: "Dedicated support for contractor payment issues"
      },
    ],
    painPoints: [
      "High seller fees: International commercial transactions often cost up to ~5%: 3.49% + 1.5% + fixed currency surcharge.",
      "Steep FX margins: Contractors lose an additional 3-4% to PayPal's currency conversion spread.",
      "Mass Payout costs: Paying multiple contractors via PayPal Payouts costs ~2% per payout, capped per currency.",
      "Slow and cumbersome for contractors: Recipients must confirm payments, convert currencies manually, or wait for transfers to local bank accounts.",
      "Clunky UX for contractor payments: PayPal is optimized for consumer checkout-not repeated contractor payouts or wallet control.",
      "Limited support for contractor flows: Support is centered on refunds, disputes, and account holds-not global contractor needs."
    ],
    whySigmaWins: [
      "Flat Fees, No Surprises: $18/month per active contractor - reduced rates for teams of 20+. 0% FX on USD wallet payments; ~1% FX when currency conversion is required.",
      "USD Wallets Built In: Contractors keep 100% of what you send - no forced conversion.",
      "Faster Payouts, Globally: 1-2 business day transfers or instant stablecoin delivery via USDC/USDT.",
      "Better for LATAM, Africa, Asia: Mobile-first onboarding, crypto-native infrastructure, and wallet support.",
      "No Shutdown Surprises: Real human support helps your team stay paid - fast."
    ],
  },
  wise: {
    competitorName: "Wise",
    hero: {
      title: "SigmaRemote vs Wise: Simple Contractor Payouts vs General Business Banking",
      subtitle: "Wise offers transparent currency conversion and batch tools-but it's built for banking, not contractor-first payouts. Discover why teams choose SigmaRemote for predictable USD wallet payouts, flat fees, and full control."
    },
    competitorPoints: [
      { 
        text: " No monthly fee; one-time setup fee (~$31) for international account details. Transaction fees start at 0.33% per send.",
        tone: "negative",
        tooltip: "Setup costs and transaction fees for international accounts"
      },
      { 
        text: "Uses mid-market rate with transparent markup; conversion fees from ~0.33% to 0.57% depending on currency pair.",
        tone: "negative",
        tooltip: "Variable conversion fees based on currency pairs"
      },
      { 
        text: "Receiving USD wires cost $6.11 USD; GBP SWIFT is £2.16; EUR SWIFT is €2.39.",
        tone: "negative",
        tooltip: "Fixed fees for receiving international wire transfers"
      },
      { 
        text: "Domestic and batch transfers vary widely; can take hours or days depending on route.",
        tone: "neutral",
        tooltip: "Variable transfer times depending on payment route"
      },
      { 
        text: "Multi currency balances (40+ currencies), but no contractor wallet flow-funds move instantly on send.",
        tone: "negative",
        tooltip: "No contractor wallet control, funds move immediately"
      },
      { 
        text: "Setup is built for businesses-not contractors. Unlocking USD access costs ~$31",
        tone: "negative",
        tooltip: "Business-focused setup, not contractor-friendly"
      },
      { 
        text: "Support via app and dashboard; limited contractor-focused tooling. High transparency, but not designed for payroll/customer payouts.",
        tone: "negative",
        tooltip: "Support not optimized for contractor payouts"
      },
    ],
    sigmaPoints: [
      { 
        text: "$18/month per active contractor - reduced rates for teams of 20+",
        tone: "positive",
        tooltip: "Transparent, lower pricing with volume discounts"
      },
      { 
        text: "0% FX with USD wallets; ~1% FX  only if converting to local currency",
        tone: "positive",
        tooltip: "Minimal FX costs with USD wallet option"
      },
      { 
        text: "$0 with USD wallet (no forced conversions)",
        tone: "positive",
        tooltip: "No additional fees when using USD wallets"
      },
      { 
        text: "1-2 business days, or instant with USDC. Optimized infrastructure",
        tone: "positive",
        tooltip: "Faster processing with crypto options"
      },
      { 
        text: "Contractors hold USD wallet, choose when and how to convert",
        tone: "positive",
        tooltip: "Full control over currency conversion timing"
      },
      { 
        text: "<15 min mobile onboarding",
        tone: "positive",
        tooltip: "Quick and easy contractor setup"
      },
      { 
        text: "Fast, human-first support optimized for contractor payouts",
        tone: "positive",
        tooltip: "Dedicated support for contractor payment issues"
      },
    ],
    painPoints: [
      "Setup costs for international accounts: A one-time onboarding charge (~$31) applies before accessing account details in up to 23 currencies.",
      "Variable fees per transfer: International transfers incur fees starting from ~0.33-0.57% depending on currency.",
      "Contractor fees on receiving wire transfers: USD SWIFT payments cost $6.11 per transaction; similar fixed fees apply for GBP/EUR.",
      "Slow payouts via bank rails: Batch payouts and international transfers vary significantly in timing-can stretch to multiple days.",
      "Not contractor-first experience: No independent contractor setup or wallet-payouts controlled by sender, not by recipient.",
      "Support is platform-first, not payout-first: Wise is designed for banking operations, not global payroll customer support."
    ],
    whySigmaWins: [
      "Flat Fees, No Surprises: $18/month per active contractor - reduced rates for teams of 20+. 0% FX on USD wallet payments; ~1% FX when currency conversion is required.",
      "USD Wallets Built In: Contractors keep 100% of what you send - no forced conversion.",
      "Faster Payouts, Globally: 1-2 business day transfers or instant stablecoin delivery via USDC/USDT.",
      "Better for LATAM, Africa, Asia: Mobile-first onboarding, crypto-native infrastructure, and wallet support.",
      "No Shutdown Surprises: Real human support helps your team stay paid - fast."
    ],
  },
  hyperwallet: {
    competitorName: "Hyperwallet",
    hero: {
      title: "SigmaRemote vs Hyperwallet: Designed for Global Contractor Payouts, Not Parent Corp Platforms",
      subtitle: "Hyperwallet is a proven mass-payout engine, but lacks wallet control, clear pricing, and fast UX. SigmaRemote delivers flat fees, USD flexibility, and a contractor-first experience."
    },
    competitorPoints: [
      { 
        text: "Charges vary by client. No public fee list. Some platforms note 2% wire fees, monthly inactivity fees of $3/month after 90 days",
        tone: "negative",
        tooltip: "Unclear pricing with varying fees and inactivity charges"
      },
      { 
        text: "Exchange rates are not disclosed; typical markup ranges around 2%-3.75%.",
        tone: "negative",
        tooltip: "Hidden FX markups that reduce contractor payouts"
      },
      { 
        text: "Local or wire transfers may include $7.70 USD min or up to $23 or similar in fees.",
        tone: "negative",
        tooltip: "High transfer fees for local and wire transfers"
      },
      { 
        text: "Local deposit: ~2 business days; wire transfers: up to 5 business days.",
        tone: "neutral",
        tooltip: "Variable processing times depending on transfer type"
      },
      { 
        text: "No wallet control; funds converted automatically via third-party integrations. Not contractor-centric UX.",
        tone: "negative",
        tooltip: "No contractor control over funds or currency conversion"
      },
      { 
        text: "Built as enterprise integration via PayPal platforms, not mobile-first or contractor onboarding optimized. Setup varies by partner.",
        tone: "negative",
        tooltip: "Enterprise-focused setup, not contractor-friendly"
      },
      { 
        text: "Support geared toward marketplaces/platforms; payees sometimes experience delays and confusion.",
        tone: "negative",
        tooltip: "Support not optimized for individual contractors"
      },
    ],
    sigmaPoints: [
      { 
        text: "$18/month per active contractor - reduced rates for teams of 20+",
        tone: "positive",
        tooltip: "Transparent, lower pricing with volume discounts"
      },
      { 
        text: "0% FX with USD wallets; ~1% FX  only if converting to local currency",
        tone: "positive",
        tooltip: "Minimal FX costs with USD wallet option"
      },
      { 
        text: "$0 with USD wallet (no forced conversions)",
        tone: "positive",
        tooltip: "No additional fees when using USD wallets"
      },
      { 
        text: "1-2 business days, or instant with USDC. Optimized infrastructure",
        tone: "positive",
        tooltip: "Faster processing with crypto options"
      },
      { 
        text: "Contractors hold USD wallet, choose when and how to convert",
        tone: "positive",
        tooltip: "Full control over currency conversion timing"
      },
      { 
        text: "<15 min mobile onboarding",
        tone: "positive",
        tooltip: "Quick and easy contractor setup"
      },
      { 
        text: "Fast, human-first support optimized for contractor payouts",
        tone: "positive",
        tooltip: "Dedicated support for contractor payment issues"
      },
    ],
    painPoints: [
      "Unclear pricing: Hyperwallet doesn't publish public pricing. Fees vary by platform, with reports of ~2% wire fees and $3/month inactivity charges after 90 days.",
      "Hidden currency conversion fees: Currency exchange rates are not shown at payout. Users report losing 1.9% to 3.75% due to hidden FX markups.",
      "High withdrawal costs: Transfer fees vary widely, with $7.70 to $23+ reported for wire withdrawals.",
      "Slow delivery speeds: Payouts to local banks take ~2 business days; wires can take up to 5 days.",
      "No wallet control for contractors: Funds are automatically converted or routed through platform settings-contractors don't control currency or timing.",
      "Support can be hard to reach: Contractors have reported delays and confusion with platform-integrated support desks."
    ],
    whySigmaWins: [
      "Flat Fees, No Surprises: $18/month per active contractor - reduced rates for teams of 20+. 0% FX on USD wallet payments; ~1% FX when currency conversion is required.",
      "USD Wallets Built In: Contractors keep 100% of what you send - no forced conversion.",
      "Faster Payouts, Globally: 1-2 business day transfers or instant stablecoin delivery via USDC/USDT.",
      "Better for LATAM, Africa, Asia: Mobile-first onboarding, crypto-native infrastructure, and wallet support.",
      "No Shutdown Surprises: Real human support helps your team stay paid - fast."
    ],
  },
};
