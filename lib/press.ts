import fs from "fs";
import path from "path";
import matter from "gray-matter";
import fg from "fast-glob";

export type PressItem = {
  title: string;
  slug: string;
  date: string; // ISO
  published: boolean;
};

const PRESS_DIR = path.join(process.cwd(), "content/press");

export async function getAllPress(): Promise<PressItem[]> {
  const files = await fg("*.mdx", { cwd: PRESS_DIR });
  const items: PressItem[] = files.map((file) => {
    const p = path.join(PRESS_DIR, file);
    const src = fs.readFileSync(p, "utf8");
    const { data } = matter(src);
    return {
      title: String(data.title || ""),
      slug: String(data.slug || path.basename(file, ".mdx")),
      date: String(data.date || new Date().toISOString()),
      published: Boolean(data.published ?? false),
    };
  });
  return items
    .filter((i) => i.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getLatestPress(n = 3): Promise<PressItem[]> {
  const all = await getAllPress();
  return all.slice(0, n);
}

export async function hasMorePress(displayedCount = 3): Promise<boolean> {
  const all = await getAllPress();
  return all.length > displayedCount;
}
