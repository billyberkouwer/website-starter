import { NextResponse } from "next/server";
import { draftMode } from "next/headers";

export async function GET() {
  const dm = await draftMode();
  dm.disable();
  return NextResponse.redirect(new URL(process.env.NEXT_PUBLIC_SANITY_STUDIO_PREVIEW_URL || "http://localhost:3000"));
} 