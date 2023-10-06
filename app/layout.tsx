import "./globals.css";

import LenisContext from "@/context/LenisContext";
import type { Metadata } from "next";
import { ProviderLayout } from "@/components";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "SummarEase",
  description: "AI Article Summarizer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisContext>
      <html lang="en">
        <ProviderLayout>
          {children}
          <Analytics />
        </ProviderLayout>
      </html>
    </LenisContext>
  );
}
