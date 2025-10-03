import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Enne Jim Pessoa",
  description:
    "Portfólio web sobre mim e meus trabalhos enquanto UI/UX designer e desenvolvedore front-end",
  authors: [
    { name: "Enne Jim Pessoa", url: "https://enne-jim-pessoa.vercel.app" },
  ],
  openGraph: {
    type: "website",
    title: "Enne Jim Pessoa",
    description:
      "Portfólio web sobre mim e meus trabalhos enquanto UI/UX designer e desenvolvedore front-end",
    images: "/favicon/logo.png",
    url: "https://enne-jim-pessoa.vercel.app",
    siteName: "Enne Jim Pessoa",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://enne-jim-pessoa.vercel.app",
    title: "Enne Jim Pessoa",
    description:
      "Portfólio web sobre mim e meus trabalhos enquanto UI/UX designer e desenvolvedore front-end",
    images: "/favicon/logo.png",
  },
  icons: {
    icon: "/favicon/logo.png",
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon-16x16.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "icon",
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  verification: {
    google: "N2dwzMN_2Th96csMroFlIe8sR3g7oWyBad-oQcxxWxA",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`scroll-smooth`} suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>

        <GoogleAnalytics gaId="G-FBBVDXR0FH" />

        <GoogleTagManager gtmId="GTM-5LC6VJRJ" />

        <Analytics />
      </body>
    </html>
  );
}
