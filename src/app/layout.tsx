import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: " We Build Websites Portugal",
    template: "%s | We Build Websites Portugal",
  },
  description:
    "We build websites for clients and for ourselves. We are a team of creatives and developers who love to build websites. We love to work with clients to create websites that are beautiful, functional, and easy to use. We also love to work on our own projects and to learn new things.",
};
export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GoogleTagManager gtmId={"G-SC1YEJV0NY"} />

      <html lang="en" className={GeistSans.variable}>
        <body>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </>
  );
}
