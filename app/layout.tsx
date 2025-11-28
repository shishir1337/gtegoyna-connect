import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri, Anek_Bangla } from "next/font/google"
import "./globals.css";
import { Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
})

const anekBangla = Anek_Bangla({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-anek-bangla",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://connect.gtegoyna.com.bd"),
  title: "Connect with গ তে গয়না | Social Links & Contact",
  description:
    "Connect with গ তে গয়না - Visit our website, follow us on social media, and get in touch. Discover premium handcrafted Bangladeshi jewelry.",
  keywords: [
    "গ তে গয়না connect",
    "gtegoyna links",
    "gtegoyna social media",
    "gtegoyna contact",
    "Bangladeshi jewelry links",
  ],
  alternates: {
    canonical: "https://connect.gtegoyna.com.bd",
    languages: {
      "bn-BD": "https://connect.gtegoyna.com.bd",
      "en-US": "https://connect.gtegoyna.com.bd",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Connect with গ তে গয়না | Social Links & Contact",
    description: "Connect with গ তে গয়না - Visit our website, follow us on social media, and get in touch.",
    type: "website",
    url: "https://connect.gtegoyna.com.bd",
    siteName: "গ তে গয়না Connect",
    locale: "bn_BD",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Connect with গ তে গয়না | Social Links & Contact",
    description: "Connect with গ তে গয়না - Visit our website, follow us on social media, and get in touch.",
    site: "@gtegoyna",
  },
  other: {
    "og:see_also": "https://gtegoyna.com.bd",
  },
}

export const viewport: Viewport = {
  themeColor: "#010101",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn">
      <body className={`${hindSiliguri.variable} ${anekBangla.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

