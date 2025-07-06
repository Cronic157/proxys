import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Globe, Shield, Zap, Clock, Server, Headphones, Menu, Mail, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

import { ProxysLogo } from "@/components/proxys-logo"
import { NetworkIllustration } from "@/components/network-illustration"

export const metadata: Metadata = {
  title: "Fast, Secure & Private Proxies | proxys.online - Premium Proxy Services",
  description:
    "Get premium proxy services with 99.9% uptime, lightning-fast speeds, and worldwide IP locations. Perfect for web scraping, automation, privacy protection, and business applications. Start today!",
  keywords: [
    "buy proxies online",
    "premium proxy service",
    "fast proxy servers",
    "secure private proxies",
    "web scraping proxies",
    "proxy automation tools",
    "dedicated IP addresses",
    "residential proxy network",
    "datacenter proxies",
    "proxy API integration",
    "anonymous browsing",
    "IP rotation service",
    "high-speed proxy",
    "reliable proxy provider",
    "business proxy solutions",
  ],
  openGraph: {
    title: "Fast, Secure & Private Proxies | proxys.online",
    description:
      "Premium proxy services with 99.9% uptime, high-speed performance, and worldwide IP locations. Perfect for web scraping, automation, and privacy.",
    url: "https://proxys.online",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "proxys.online Homepage - Premium Proxy Services",
      },
    ],
  },
  alternates: {
    canonical: "https://proxys.online",
  },
}

// Structured Data for the homepage
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://proxys.online/#website",
      url: "https://proxys.online",
      name: "proxys.online",
      description: "Premium proxy services with high-speed performance and worldwide coverage",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://proxys.online/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://proxys.online/#service",
      name: "Premium Proxy Services",
      description:
        "High-speed, secure, and private proxy services for web scraping, automation, and privacy protection",
      provider: {
        "@type": "Organization",
        name: "proxys.online",
      },
      serviceType: "Proxy Services",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Proxy Service Plans",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Private Proxy Service",
              description: "Dedicated private proxies with high-speed performance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Residential Proxy Service",
              description: "Residential IP addresses for maximum anonymity",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://proxys.online/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a proxy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A proxy server acts as an intermediary between your device and the internet, masking your real IP address and providing anonymity, security, and access to geo-restricted content.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started with proxys.online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Click the 'Buy Proxies' button, choose your package, complete the payment, and receive your proxy credentials instantly. Our setup guides will help you configure everything in minutes.",
          },
        },
        {
          "@type": "Question",
          name: "Can I rotate IP addresses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Our service supports IP rotation. Configure automatic intervals or rotate manually through our API—ideal for web scraping and automation.",
          },
        },
        {
          "@type": "Question",
          name: "Are the proxies shared or dedicated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer both options. Dedicated proxies provide exclusive IPs for maximum performance, while shared proxies are a cost-effective alternative for basic needs.",
          },
        },
      ],
    },
  ],
}

export default function ProxysLandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b border-gray-100 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <ProxysLogo className="h-8 sm:h-10 lg:h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-6 xl:space-x-8"
              role="navigation"
              aria-label="Main navigation"
            >
              <Link href="#" className="text-sm xl:text-base text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link
                href="#features"
                className="text-sm xl:text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </Link>
              <Link href="#faq" className="text-sm xl:text-base text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </Link>
              <Link
                href="#contact"
                className="text-sm xl:text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
              <Link href="/blog" className="text-sm xl:text-base text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </Link>
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                asChild
                size="sm"
                className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white text-xs sm:text-sm px-3 sm:px-4 py-2"
              >
                <Link href="https://myaccount.proxysonline.com" target="_blank" rel="noopener noreferrer">
                  Buy Proxies
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-8 w-8 sm:h-10 sm:w-10"
                aria-label="Open mobile menu"
              >
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
          itemScope
          itemType="https://schema.org/WebPageElement"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                    Fast, Secure, and Private <span className="text-[#1E90FF]">Proxies</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Reliable proxy solutions for web scraping, automation, privacy protection, and business
                    applications. Get premium proxy services with 99.9% uptime and worldwide IP coverage.
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                >
                  <Link href="https://myaccount.proxysonline.com" target="_blank" rel="noopener noreferrer">
                    Buy Proxies Now
                  </Link>
                </Button>
              </div>

              {/* Network Illustration */}
              <div className="flex justify-center order-1 lg:order-2">
                <NetworkIllustration className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-12 sm:py-16 md:py-20 bg-gray-50"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why Choose Our Premium Proxy Services?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Professional-grade proxy infrastructure designed for maximum reliability, performance, and security
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-[#1E90FF]" />,
                  title: "High-Speed Performance",
                  desc: "Lightning-fast, low-latency IP addresses optimized for maximum performance and minimal delays. Perfect for time-sensitive applications.",
                  schema: "speed",
                },
                {
                  icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-[#1E90FF]" />,
                  title: "99.9% Uptime Guarantee",
                  desc: "Guaranteed uptime with redundant infrastructure ensuring your operations never stop. Enterprise-grade reliability you can trust.",
                  schema: "reliability",
                },
                {
                  icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-[#1E90FF]" />,
                  title: "Private & Dedicated IPs",
                  desc: "Exclusive access to dedicated IP addresses ensuring maximum privacy and security for your sensitive data and operations.",
                  schema: "security",
                },
                {
                  icon: <Server className="h-6 w-6 sm:h-8 sm:w-8 text-[#1E90FF]" />,
                  title: "Easy API Integration",
                  desc: "Simple integration with comprehensive API documentation and developer-friendly tools. Get started in minutes, not hours.",
                  schema: "integration",
                },
                {
                  icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-[#1E90FF]" />,
                  title: "Worldwide IP Locations",
                  desc: "Global IP pool spanning multiple countries and regions for comprehensive geographic coverage and geo-targeting capabilities.",
                  schema: "coverage",
                },
                {
                  icon: <Headphones className="h-6 w-6 sm:h-8 sm:w-8 text-[#1E90FF]" />,
                  title: "24/7 Expert Support",
                  desc: "Round-the-clock technical support from our expert team whenever you need assistance. Real humans, real solutions.",
                  schema: "support",
                },
              ].map(({ icon, title, desc, schema }, index) => (
                <Card
                  key={title}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1E90FF]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      {icon}
                    </div>
                    <CardTitle className="text-lg sm:text-xl" itemProp="name">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    <CardDescription
                      className="text-center text-gray-600 text-sm sm:text-base leading-relaxed"
                      itemProp="description"
                    >
                      {desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 sm:py-16 md:py-20" itemScope itemType="https://schema.org/FAQPage">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Frequently Asked Questions About Our Proxy Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Get answers to common questions about our premium proxy services and features
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                {[
                  {
                    q: "What is a proxy server and how does it work?",
                    a: "A proxy server acts as an intermediary between your device and the internet, masking your real IP address and providing anonymity, security, and access to geo-restricted content. It routes your internet traffic through our secure servers.",
                  },
                  {
                    q: "How do I get started with proxys.online proxy services?",
                    a: 'Getting started is easy! Click the "Buy Proxies" button, choose your package, complete the payment, and receive your proxy credentials instantly. Our comprehensive setup guides will help you configure everything in minutes.',
                  },
                  {
                    q: "Can I rotate IP addresses with your proxy service?",
                    a: "Yes! Our service supports both automatic and manual IP rotation. Configure automatic intervals or rotate manually through our API—ideal for web scraping, automation, and avoiding rate limits.",
                  },
                  {
                    q: "Are your proxies shared or dedicated?",
                    a: "We offer both options to meet different needs and budgets. Dedicated proxies provide exclusive IP addresses for maximum performance, while shared proxies are a cost-effective alternative for basic requirements.",
                  },
                ].map(({ q, a }, idx) => (
                  <AccordionItem
                    value={`item-${idx}`}
                    key={q}
                    className="border border-gray-200 rounded-lg px-4 sm:px-6"
                    itemProp="mainEntity"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <AccordionTrigger
                      className="text-left font-semibold text-gray-900 hover:no-underline text-sm sm:text-base py-4"
                      itemProp="name"
                    >
                      {q}
                    </AccordionTrigger>
                    <AccordionContent
                      className="text-gray-600 pt-2 text-sm sm:text-base leading-relaxed"
                      itemProp="acceptedAnswer"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">{a}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="py-12 sm:py-16 md:py-20 bg-[#1E90FF]"
          itemScope
          itemType="https://schema.org/WebPageElement"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Ready to Get Started with Premium Proxies?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 px-4">
                Join thousands of customers who trust our reliable proxy infrastructure for their business and personal
                needs.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-[#1E90FF] hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
              >
                <Link href="https://myaccount.proxysonline.com" target="_blank" rel="noopener noreferrer">
                  Buy Premium Proxies Now
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="bg-gray-900 text-white py-12 sm:py-16"
          itemScope
          itemType="https://schema.org/WPFooter"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8">
              <div className="space-y-4 sm:col-span-2 lg:col-span-1">
                <ProxysLogo className="h-12 sm:h-16 w-auto brightness-0 invert" />
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Professional proxy solutions for businesses and developers worldwide. Premium quality, reliable
                  performance.
                </p>
              </div>

              <div className="space-y-4" itemScope itemType="https://schema.org/ContactPoint">
                <h3 className="text-base sm:text-lg font-semibold">Contact Us</h3>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <a
                    href="mailto:support@proxys.online"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base break-all"
                    itemProp="email"
                  >
                    support@proxys.online
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-semibold">Resources</h3>
                <div className="space-y-2">
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors block text-sm sm:text-base"
                  >
                    Expert Blog
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors block text-sm sm:text-base"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors block text-sm sm:text-base"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Follow us on Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Follow us on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
              <p className="text-gray-400 text-sm sm:text-base">
                © {new Date().getFullYear()} proxys.online. All rights reserved. Premium proxy services worldwide.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
