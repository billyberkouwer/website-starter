import { NextRequest, NextResponse } from "next/server";
import { draftMode } from "next/headers";

export async function GET(request: NextRequest) {
  const dm = await draftMode();
  dm.enable();
  console.log(request.nextUrl.searchParams.get("redirect"))
  // Redirect to the page the Studio is previewing
  const url = request.nextUrl.searchParams.get("redirect") || "/";
  return NextResponse.redirect(new URL(process.env.NEXT_PUBLIC_SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000", request.url));
} 