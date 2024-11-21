import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import Head from "next/head";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  applicationName: "Michael Dos Santos",
  metadataBase: new URL(`https://michaelsantos.pt`),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  title: {
    default: "Michael Dos Santos Designer & Developer",
    template:
      "%s | Michael Dos Santos Designer & Developer",
  },
  description:
    "I am a custom web developer and designer based in Lisbon, Portugal. I love to create websites that are functional, fast, look good, and are easy to use. This optimises you conversion rate and increases your profits.",
};

const custom = localFont({
  src: "../fonts/BebasNeue.woff",
  variable: "--font-bebas",
  weight: "100 900",
});

const mono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#fff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${mono.variable}  ${custom.variable} antialiased `}
    >
      <body>
        <Head>
          <link rel="canonical" href={`https://michaelsantos.pt`} />
        </Head>
        <main>
          {children}
          <Toaster position="bottom-center" expand={true} />
        </main>
      </body>
    </html>
  );
}
