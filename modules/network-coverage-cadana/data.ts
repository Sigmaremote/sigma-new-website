export type CoverageRegion =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "South America"
  | "Oceania";

export type CoverageCountry = {
  name: string;
  iso2: string; // "NG"
  region: CoverageRegion;
  flag: string; // emoji
  // Detail page data (dummy but structured)
  solutions: string[]; // ["Contractor Pay","AOR (Agent of Record)"]
  paymentSupported: string[]; // ["Local Bank Transfer","Mobile Money","USD Wallet","USDC","USDT","Card Payout"]
  payoutLimits?: string; // "None" etc
  payoutCutoff?: string; // "Realtime 24x7"
  eorOfferings?: string[]; // ["Gross to net calculations"]
  walletOfferings?: string[]; // ["Card","Crypto","Foreign Bank Accounts"]
  note?: string; // short note line
};

export const coverageCadanaRegions: CoverageRegion[] = [
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Oceania",
];

export const coverageCadanaCountries: CoverageCountry[] = [
  // AFRICA
  {
    name: "Ghana",
    iso2: "GH",
    region: "Africa",
    flag: "🇬🇭",
    solutions: ["Contractor Pay", "AOR (Agent of Record)"],
    paymentSupported: ["Local Bank Transfer", "Mobile Money", "USD Wallet", "USDC", "USDT"],
    payoutLimits: "None",
    payoutCutoff: "Realtime 24x7",
    eorOfferings: ["Gross to net calculations"],
    walletOfferings: ["Card", "Crypto", "Foreign Bank Accounts"],
    note: "Mobile money popular. Wallet helps conversion timing.",
  },
  {
    name: "Kenya",
    iso2: "KE",
    region: "Africa",
    flag: "🇰🇪",
    solutions: ["Contractor Pay", "AOR (Agent of Record)"],
    paymentSupported: ["Local Bank Transfer", "Mobile Money", "USD Wallet", "USDC", "USDT"],
    payoutCutoff: "Same day",
    eorOfferings: ["Gross to net calculations"],
    walletOfferings: ["Card", "Crypto"],
    note: "Mobile money support. USD wallet avoids forced conversion.",
  },
  {
    name: "Nigeria",
    iso2: "NG",
    region: "Africa",
    flag: "🇳🇬",
    solutions: ["Contractor Pay", "AOR (Agent of Record)"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet", "USDC", "USDT"],
    payoutCutoff: "Same day",
    eorOfferings: ["Gross to net calculations"],
    walletOfferings: ["Card", "Crypto"],
    note: "Strong local rails. Wallet or stablecoin preferred for speed.",
  },
  {
    name: "South Africa",
    iso2: "ZA",
    region: "Africa",
    flag: "🇿🇦",
    solutions: ["Contractor Pay", "AOR (Agent of Record)"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet", "USDC", "USDT", "Card Payout"],
    payoutCutoff: "1–2 days",
    walletOfferings: ["Card", "Foreign Bank Accounts"],
  },
  {
    name: "Egypt",
    iso2: "EG",
    region: "Africa",
    flag: "🇪🇬",
    solutions: ["Contractor Pay", "AOR (Agent of Record)"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet", "USDC", "USDT"],
    payoutCutoff: "1–2 days",
  },

  // ASIA
  {
    name: "Philippines",
    iso2: "PH",
    region: "Asia",
    flag: "🇵🇭",
    solutions: ["Contractor Pay", "AOR (Agent of Record)"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet", "USDC", "USDT", "Card Payout"],
    payoutCutoff: "1–2 days",
  },
  {
    name: "India",
    iso2: "IN",
    region: "Asia",
    flag: "🇮🇳",
    solutions: ["Contractor Pay", "AOR (Agent of Record)"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
    payoutCutoff: "1–2 days",
  },
  {
    name: "Indonesia",
    iso2: "ID",
    region: "Asia",
    flag: "🇮🇩",
    solutions: ["Contractor Pay", "AOR (Agent of Record)"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet", "USDC"],
    payoutCutoff: "Same day",
  },
  {
    name: "Vietnam",
    iso2: "VN",
    region: "Asia",
    flag: "🇻🇳",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
  },
  {
    name: "Malaysia",
    iso2: "MY",
    region: "Asia",
    flag: "🇲🇾",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet", "Card Payout"],
  },

  // EUROPE
  {
    name: "United Kingdom",
    iso2: "GB",
    region: "Europe",
    flag: "🇬🇧",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet", "Card Payout"],
  },
  {
    name: "Germany",
    iso2: "DE",
    region: "Europe",
    flag: "🇩🇪",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
  },
  {
    name: "France",
    iso2: "FR",
    region: "Europe",
    flag: "🇫🇷",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
  },
  {
    name: "Spain",
    iso2: "ES",
    region: "Europe",
    flag: "🇪🇸",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet", "Card Payout"],
  },
  {
    name: "Poland",
    iso2: "PL",
    region: "Europe",
    flag: "🇵🇱",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
  },

  // NORTH AMERICA
  {
    name: "United States",
    iso2: "US",
    region: "North America",
    flag: "🇺🇸",
    solutions: ["Contractor Pay"],
    paymentSupported: ["ACH / Wire", "USD Wallet", "Card Payout"],
  },
  {
    name: "Mexico",
    iso2: "MX",
    region: "North America",
    flag: "🇲🇽",
    solutions: ["Contractor Pay", "AOR (Agent of Record)"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet", "USDC", "USDT"],
  },
  {
    name: "Canada",
    iso2: "CA",
    region: "North America",
    flag: "🇨🇦",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
  },
  {
    name: "Dominican Republic",
    iso2: "DO",
    region: "North America",
    flag: "🇩🇴",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
  },
  {
    name: "Guatemala",
    iso2: "GT",
    region: "North America",
    flag: "🇬🇹",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
  },

  // SOUTH AMERICA
  {
    name: "Brazil",
    iso2: "BR",
    region: "South America",
    flag: "🇧🇷",
    solutions: ["Contractor Pay", "AOR (Agent of Record)"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet", "USDC", "USDT", "Card Payout"],
    note: "PIX on roadmap. Wallet keeps dollars until conversion.",
  },
  {
    name: "Argentina",
    iso2: "AR",
    region: "South America",
    flag: "🇦🇷",
    solutions: ["Contractor Pay", "AOR (Agent of Record)"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet", "USDC", "USDT"],
    note: "High demand for USD wallet payouts.",
  },
  {
    name: "Chile",
    iso2: "CL",
    region: "South America",
    flag: "🇨🇱",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
  },
  {
    name: "Colombia",
    iso2: "CO",
    region: "South America",
    flag: "🇨🇴",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet", "USDC"],
  },
  {
    name: "Peru",
    iso2: "PE",
    region: "South America",
    flag: "🇵🇪",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
  },

  // OCEANIA
  {
    name: "Australia",
    iso2: "AU",
    region: "Oceania",
    flag: "🇦🇺",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet", "Card Payout"],
  },
  {
    name: "New Zealand",
    iso2: "NZ",
    region: "Oceania",
    flag: "🇳🇿",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
  },
  {
    name: "Fiji",
    iso2: "FJ",
    region: "Oceania",
    flag: "🇫🇯",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
  },
  {
    name: "Papua New Guinea",
    iso2: "PG",
    region: "Oceania",
    flag: "🇵🇬",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
  },
  {
    name: "Guam",
    iso2: "GU",
    region: "Oceania",
    flag: "🇬🇺",
    solutions: ["Contractor Pay"],
    paymentSupported: ["Local Bank Transfer", "USD Wallet"],
  },
];
