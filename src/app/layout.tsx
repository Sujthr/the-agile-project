import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theagileproject.com"),
  title: {
    default: "The Agile Project | Agile, Fintech & Trading Platform Delivery",
    template: "%s | The Agile Project",
  },
  description:
    "Expert insights on Agile project management, product delivery, and building high-performance fintech & trading platforms. By Sujit Kumar Thakur.",
  keywords: [
    "Agile",
    "Scrum",
    "Project Management",
    "Fintech",
    "Trading Platform",
    "Product Management",
    "Software Delivery",
    "OMS",
    "RMS",
  ],
  authors: [{ name: "Sujit Kumar Thakur" }],
  creator: "Sujit Kumar Thakur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theagileproject.com",
    siteName: "The Agile Project",
    title: "The Agile Project | Agile, Fintech & Trading Platform Delivery",
    description:
      "Expert insights on Agile project management, product delivery, and building high-performance fintech & trading platforms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Agile Project",
    description:
      "Agile, Fintech & Trading Platform Delivery insights by Sujit Kumar Thakur.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
