import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://proxys.online"),
  title: {
    default: "Fast, Secure & Private Proxies | proxys.online - Premium Proxy Services",
    template: "%s | proxys.online",
  },
  description:
    "Premium proxy services with 99.9% uptime, high-speed performance, and worldwide IP locations. Perfect for web scraping, automation, privacy, and business needs. Get started today!",
  keywords: [
    "proxy services",
    "private proxies",
    "dedicated proxies",
    "web scraping proxies",
    "high-speed proxies",
    "secure proxies",
    "proxy servers",
    "IP rotation",
    "anonymous browsing",
    "proxy API",
    "residential proxies",
    "datacenter proxies",
    "HTTPS proxies",
    "SOCKS proxies",
    "proxy automation",
    "business proxies",
    "premium proxies",
    "reliable proxies",
    "worldwide proxies",
    "proxy infrastructure",
  ],
  authors: [{ name: "proxys.online Team" }],
  creator: "proxys.online",
  publisher: "proxys.online",
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
    type: "website",
    locale: "en_US",
    url: "https://proxys.online",
    siteName: "proxys.online",
    title: "Fast, Secure & Private Proxies | proxys.online - Premium Proxy Services",
    description:
      "Premium proxy services with 99.9% uptime, high-speed performance, and worldwide IP locations. Perfect for web scraping, automation, privacy, and business needs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "proxys.online - Premium Proxy Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast, Secure & Private Proxies | proxys.online",
    description: "Premium proxy services with 99.9% uptime, high-speed performance, and worldwide IP locations.",
    images: ["/twitter-image.jpg"],
    creator: "@proxysonline",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://proxys.online",
  },
  category: "technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1E90FF" />
        <meta name="msapplication-TileColor" content="#1E90FF" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "proxys.online",
              url: "https://proxys.online",
              logo: "https://proxys.online/logo.png",
              description:
                "Premium proxy services with high-speed performance, 99.9% uptime, and worldwide IP locations.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-XXX-XXX-XXXX",
                contactType: "customer service",
                email: "support@proxys.online",
              },
              sameAs: [
                "https://twitter.com/proxysonline",
                "https://facebook.com/proxysonline",
                "https://linkedin.com/company/proxysonline",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
