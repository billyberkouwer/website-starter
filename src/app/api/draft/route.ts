import { NextResponse } from "next/server";
import { draftMode } from "next/headers";

export async function GET() {
  const dm = await draftMode();
  dm.enable();
  const url = process.env.NEXT_PUBLIC_SANITY_STUDIO_PREVIEW_URL ? process.env.NEXT_PUBLIC_SANITY_STUDIO_PREVIEW_URL : "http://localhost:3000"
  const redirect = new URL(url)
  return NextResponse.redirect(redirect);
} 