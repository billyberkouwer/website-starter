import { VisualEditing } from "next-sanity"
import { SanityLive } from '@/sanity/lib/live';
import { draftMode } from 'next/headers';
import type { ReactNode } from 'react';
import { DisableDraftMode } from "@/components/DisableDraftMode";
import "@/styles/global.scss";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const { isEnabled } = await draftMode();
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <SanityLive />
        {isEnabled && <VisualEditing />}
        {isEnabled && <DisableDraftMode />}
      </body>
    </html>
  );
} 