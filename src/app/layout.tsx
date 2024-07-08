import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Duality Agency Algarve | We Build Websites Portugal",
    template: "%s | Duality Agency Algarve | We Build Websites Portugal",
  },
  description:
    "We build websites for clients and for ourselves. We are a team of creatives and developers who love to build websites. We love to work with clients to create websites that are beautiful, functional, and easy to use. We also love to work on our own projects and to learn new things.",
};
export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 5,
  width: "device-width",
  themeColor: "#000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
