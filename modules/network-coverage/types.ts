export type Region =
  | "Africa"
  | "Asia"
  | "Europe"
  | "North America"
  | "South America"
  | "Oceania"
  | "All";

export type PayoutRails = {
  local_bank?: boolean;
  wire_swift?: boolean;
  mobile_money?: boolean;
  usd_wallet?: boolean;
  card_payout?: boolean;
  usdc?: boolean;
  usdt?: boolean;
};

export type Coverage = {
  country: string;
  iso2: string; // "NG"
  region: Region;
  available: boolean;
  payroll_supported: boolean; // EOR or contractor payroll available
  payout: PayoutRails;
  settlement_time: "instant" | "same-day" | "1-2 days" | "3-5 days";
  fx_note?: string;
  kyc_tier?: "basic" | "enhanced";
  limits?: { min?: number; max?: number }; // USD
  notes?: string;
};
