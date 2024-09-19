import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import Head from "next/head";
import { GeistSans } from "geist/font/sans";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  applicationName: "Michael Dos Santos",
  metadataBase: new URL(`https://michaelsantos.pt`),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  title: {
    default: "Custom Web Developer & Designer in Portugal | Michael Dos Santos",
    template:
      "%s | Custom Web Developer & Designer in Portugal | Michael Dos Santos",
  },
  description:
    "I am a custom web developer and designer based in Lisbon, Portugal. I love to create websites that are functional, fast, look good, and are easy to use. This optimises you conversion rate and increases your profits.",
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
    <html lang="en" className={GeistSans.variable}>
      <body>
        <Head>
          <link rel="canonical" href={`https://michaelsantos.pt`} />
        </Head>
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
