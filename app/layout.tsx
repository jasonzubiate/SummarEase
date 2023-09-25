import "./globals.css";
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
    <html lang="en">
      <ProviderLayout>
        {children}
        <Analytics />
      </ProviderLayout>
    </html>
  );
}
