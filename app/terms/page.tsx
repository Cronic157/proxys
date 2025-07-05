import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ProxysLogo } from "@/components/proxys-logo"

export const metadata: Metadata = {
  title: "Terms of Service | proxys.online - Proxy Service Agreement & Conditions",
  description:
    "Read the complete terms of service for proxys.online proxy services. Understand your rights, responsibilities, and our service conditions for premium proxy solutions.",
  keywords: [
    "terms of service",
    "proxy service agreement",
    "service conditions",
    "proxy terms",
    "user agreement",
    "service policy",
    "proxy service rules",
    "acceptable use policy",
    "service limitations",
    "proxy service contract",
  ],
  openGraph: {
    title: "Terms of Service | proxys.online",
    description:
      "Read the complete terms of service for proxys.online proxy services. Understand your rights and responsibilities.",
    url: "https://proxys.online/terms",
  },
  alternates: {
    canonical: "https://proxys.online/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <ProxysLogo className="h-8 sm:h-10 lg:h-12 w-auto" />
          </Link>

          <Button asChild variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Terms of Service Content */}
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <article className="prose prose-gray max-w-none" itemScope itemType="https://schema.org/WebPage">
            <header>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" itemProp="name">
                Terms of Service - Proxy Service Agreement
              </h1>

              <p className="text-gray-600 mb-8">
                <strong>Last updated:</strong>{" "}
                <time dateTime={new Date().toISOString()} itemProp="dateModified">
                  {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </p>
            </header>

            <div className="space-y-8" itemProp="mainContentOfPage">
              <section itemScope itemType="https://schema.org/WebPageElement">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Proxy Service Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using proxys.online ("Service"), you accept and agree to be bound by the terms and
                  provisions of this agreement. If you do not agree to abide by the above, please do not use this proxy
                  service. These Terms of Service ("Terms") govern your use of our premium proxy services and website.
                </p>
              </section>

              <section itemScope itemType="https://schema.org/WebPageElement">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Proxy Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  proxys.online provides premium proxy server services that allow users to route their internet traffic
                  through our secure servers. Our proxy services include but are not limited to HTTP/HTTPS proxies,
                  SOCKS proxies, residential proxies, datacenter proxies, and related infrastructure services. We
                  reserve the right to modify, suspend, or discontinue any aspect of the proxy service at any time.
                </p>
              </section>

              {/* Continue with other sections with SEO optimization... */}

              <section itemScope itemType="https://schema.org/ContactPoint">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information for Legal Matters</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Legal Email:</strong>{" "}
                    <a href="mailto:legal@proxys.online" className="text-[#1E90FF] hover:underline" itemProp="email">
                      legal@proxys.online
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Support:</strong>{" "}
                    <a href="mailto:support@proxys.online" className="text-[#1E90FF] hover:underline">
                      support@proxys.online
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Website:</strong>{" "}
                    <a href="https://proxys.online" className="text-[#1E90FF] hover:underline" itemProp="url">
                      https://proxys.online
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}
