import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Enne Jim Pessoa",
  description: "Portfólio web sobre mim e meus trabalhos enquanto UI/UX designer e desenvolvedore front-end",
  authors: [{ name: "Enne Jim Pessoa", url: "https://enne-jim-pessoa.vercel.app" }],
  openGraph: {
    type: "website",
    title: "Enne Jim Pessoa",
    description: "Portfólio web sobre mim e meus trabalhos enquanto UI/UX designer e desenvolvedore front-end",
    images: "https://github.com/Enne-Amore/enne-jim-pessoa/blob/main/public/favicon/logo.png?raw=true",
    url: "https://enne-jim-pessoa.vercel.app",
    siteName: "Enne Jim Pessoa"
  },
  twitter: {
    card: "summary_large_image",
    site: "https://enne-jim-pessoa.vercel.app",
    title: "Enne Jim Pessoa",
    description: "Portfólio web sobre mim e meus trabalhos enquanto UI/UX designer e desenvolvedore front-end",
    images: "https://github.com/Enne-Amore/enne-jim-pessoa/blob/main/public/favicon/logo.png?raw=true",
  },
  icons: {
    icon: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  verification: {
    google: ""
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`scroll-smooth`}>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
