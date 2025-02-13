import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const accent = localFont({
  src: "./fonts/custom.woff",
  variable: "--font-accent",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Michael Dos Santos",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#fff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${accent.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
