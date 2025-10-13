import { NextResponse } from "next/server";
import { getLatestPress, hasMorePress } from "@/lib/press";

export async function GET() {
  const items = await getLatestPress(3);
  const hasMore = await hasMorePress(3);
  return NextResponse.json({ items, hasMore }, { headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=600" }});
}
