import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: "Michael Dos Santos Web Developer & Designer Portugal",
    template: "%s | Michael Dos Santos Web Developer & Designer Portugal",
  },
  description:
    "I am a web developer and designer based in Portugal. I love to create websites that are beautiful, functional, and easy to use.",
};
export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F5F5F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
      <GoogleAnalytics gaId={"G-SC1YEJV0NY"} />
    </html>
  );
}
