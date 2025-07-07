import { NextRequest, NextResponse } from "next/server";
import { draftMode } from "next/headers";

export async function GET(request: NextRequest) {
  const dm = await draftMode();
  dm.enable();
  // Redirect to the page the Studio is previewing
  const url = request.nextUrl.searchParams.get("redirect") || "/";
  return NextResponse.redirect(new URL(url, request.url));
} 