import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Universal Rate Limiter - Modern Rate Limiting for JavaScript",
  description: "A universal, TypeScript-first rate limiting library that works everywhere: browsers, Node.js, Express, Next.js, Edge, and serverless platforms.",
  keywords: ["rate limiting", "rate limiter", "typescript", "javascript", "express", "nextjs", "edge", "serverless"],
  authors: [{ name: "Joseph Maina" }],
  openGraph: {
    title: "Universal Rate Limiter",
    description: "Modern rate limiting for JavaScript - works everywhere",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col bg-white dark:bg-zinc-950`}
      >
        <Providers>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
