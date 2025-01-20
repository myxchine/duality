import type { Metadata } from "next";
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
  src: "./fonts/chicago.ttf",
  variable: "--font-accent",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Premium Web Designer & Developer | Michael Dos Santos",
    template: " | Premium Web Designer & Developer | Michael Dos Santos",
  },
  description:
    "I architect optimised websites and user experiences resulting in world class lead generation and conversion.",
  icons: {
    icon: "/favicon.ico",
  },
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
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
