export type Region = "North America" | "South America";

export type AtAGlance = {
  currency: string;
  payrollCycle: string;
  employerOnCostPct?: string; // e.g. "~25–28%"
  annualLeaveDays?: number | string;
  publicHolidays?: number | string;
  hoursPerWeek?: number | string;
  thirteenthSalary: "Yes" | "No" | "Optional" | string;
  probationMax?: string;
  noticeSeveranceShort?: string;
  onboardingTimeDays?: string; // e.g. "1–3"
};

export type CostRow = {
  scenario: string;
  grossUSDExample?: number;
  employerOnCostPct?: string;
  monthlyEmployerTotalUSD?: string; // "~" if unknown
  timeToOnboard?: string;
  notes?: string;
};

export type UXRow = { 
  need: string; 
  oldWay: string; 
  withSigma: string; 
};

export type FaqQA = { 
  q: string; 
  a: string; 
};

export type CountryGuideIndexItem = {
  slug: string;
  name: string;
  region: Region;
  shortDescription: string;
  image: string;
  capital: string;
  currency: string;
  officialLanguage: string;
};

export type CountryGuideContent = {
  slug: string;
  name: string;
  region: Region;
  hero?: { 
    title?: string; 
    subtitle?: string; 
  };
  intro: string;                 // ~100 words, employer-first
  minimumWage?: {
    dailyRate: string;
    monthlyRate: string;
    northernBorder?: string;
    transportSubsidy?: string;
    source: string;
  };
  atAGlance: AtAGlance;
  hiringOptions: {
    contractors: string;
    eor: string;
    ownEntity: string;
  };
  employerCostsIntro: string;    // disclaimer; no Sigma fees
  costTable: CostRow[];
  complianceBullets: string[];   // 5–7 bullets
  benefitsPackage?: string[];
  countryStats?: {
    capital: string;
    currency: string;
    population: string;
    payrollFrequency: string;
  };
  misclassificationRisks?: string;
  payingWorkers: string;         // ops flow; no fees
  uxRows: UXRow[];               // 5 rows
  faq: FaqQA[];                  // 5–7 Q&A
  lastUpdatedISO: string;
  ogImage?: string;
};
