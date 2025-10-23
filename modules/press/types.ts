export type PressArticle = {
  slug: string;
  title: string;
  summary?: string;
  dateISO: string;        // e.g. "2025-07-14"
  author?: string;        // optional
  location?: string;      // optional e.g. "San Francisco, CA"
  coverImage?: string;    // optional
};
