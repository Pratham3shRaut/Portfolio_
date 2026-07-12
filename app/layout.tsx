import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ExperienceShell } from "@/components/experience-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Prathamesh Raut — Full Stack Developer", template: "%s — Prathamesh Raut" },
  description: "Full Stack Developer in Pune building scalable applications with React, TypeScript, Node.js, Java, FastAPI, SQL, Docker, and CI/CD.",
  keywords: ["Prathamesh Raut", "Full Stack Developer", "React developer", "Java developer", "FastAPI", "Pune"],
  openGraph: { title: "Prathamesh Raut — Full Stack Developer", description: "Scalable products, built end to end.", type: "website", locale: "en_IN" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "light dark", themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f2efe8" }, { media: "(prefers-color-scheme: dark)", color: "#101110" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><Providers><ExperienceShell/><a href="#content" className="fixed left-4 top-4 z-[100] -translate-y-24 bg-ink px-4 py-2 text-canvas focus:translate-y-0">Skip to content</a><Header/><SmoothScroll/>{children}</Providers></body></html>;
}
