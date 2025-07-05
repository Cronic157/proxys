import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ProxysLogo } from "@/components/proxys-logo"

export const metadata: Metadata = {
  title: "Privacy Policy | proxys.online - Data Protection & Privacy Rights",
  description:
    "Learn how proxys.online protects your privacy and personal data. Comprehensive privacy policy covering data collection, usage, security measures, and your privacy rights.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "proxy privacy",
    "data security",
    "GDPR compliance",
    "privacy rights",
    "data collection",
    "information security",
    "proxy service privacy",
  ],
  openGraph: {
    title: "Privacy Policy | proxys.online",
    description:
      "Learn how proxys.online protects your privacy and personal data. Comprehensive privacy policy covering data protection and your rights.",
    url: "https://proxys.online/privacy",
  },
  alternates: {
    canonical: "https://proxys.online/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
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

      {/* Privacy Policy Content */}
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <article className="prose prose-gray max-w-none" itemScope itemType="https://schema.org/WebPage">
            <header>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" itemProp="name">
                Privacy Policy - Data Protection at proxys.online
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction to Our Privacy Commitment</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to proxys.online ("we," "our," or "us"). We are committed to protecting your privacy and
                  ensuring the security of your personal information. This comprehensive Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when you visit our website and use our premium
                  proxy services.
                </p>
              </section>

              <section itemScope itemType="https://schema.org/WebPageElement">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">2.1 Personal Information</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      We may collect the following personal information to provide our proxy services:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Billing and payment information for proxy service subscriptions</li>
                      <li>Account credentials and authentication data</li>
                      <li>Communication preferences and support interactions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">2.2 Technical Information</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      We automatically collect certain technical information to improve our proxy services:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>IP addresses and connection logs for security purposes</li>
                      <li>Browser type, version, and operating system information</li>
                      <li>Usage patterns and proxy service performance data</li>
                      <li>Cookies and similar tracking technologies for website functionality</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section itemScope itemType="https://schema.org/WebPageElement">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use your information for the following legitimate business purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Providing and maintaining our premium proxy services</li>
                  <li>Processing payments and managing your proxy service account</li>
                  <li>Communicating with you about our proxy services and updates</li>
                  <li>Improving our proxy infrastructure and user experience</li>
                  <li>Ensuring security and preventing fraudulent activities</li>
                  <li>Complying with legal obligations and regulatory requirements</li>
                  <li>Sending marketing communications about proxy services (with your consent)</li>
                </ul>
              </section>

              <section itemScope itemType="https://schema.org/WebPageElement">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share your
                    information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>
                      <strong>Service Providers:</strong> With trusted third-party service providers who assist us in
                      operating our business
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law, court order, or government regulation
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                    </li>
                    <li>
                      <strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our
                      users
                    </li>
                  </ul>
                </div>
              </section>

              <section itemScope itemType="https://schema.org/WebPageElement">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures
                  include encryption, secure servers, access controls, and regular security assessments. However, no
                  method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section itemScope itemType="https://schema.org/WebPageElement">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                  this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                  Connection logs and usage data may be retained for up to 30 days for security and service optimization
                  purposes.
                </p>
              </section>

              <section itemScope itemType="https://schema.org/WebPageElement">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your jurisdiction, you may have the following rights:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate or incomplete data</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@proxys.online" className="text-[#1E90FF] hover:underline" itemProp="email">
                    privacy@proxys.online
                  </a>
                  .
                </p>
              </section>

              <section itemScope itemType="https://schema.org/WebPageElement">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website
                  traffic, and personalize content. You can control cookie settings through your browser preferences.
                  Disabling cookies may affect the functionality of our website.
                </p>
              </section>

              <section itemScope itemType="https://schema.org/WebPageElement">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of
                  residence. We ensure that such transfers comply with applicable data protection laws and implement
                  appropriate safeguards to protect your information.
                </p>
              </section>

              <section itemScope itemType="https://schema.org/WebPageElement">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect
                  personal information from children under 18. If we become aware that we have collected such
                  information, we will take steps to delete it promptly.
                </p>
              </section>

              <section itemScope itemType="https://schema.org/WebPageElement">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use
                  of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section itemScope itemType="https://schema.org/ContactPoint">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us About Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Privacy Email:</strong>{" "}
                    <a href="mailto:privacy@proxys.online" className="text-[#1E90FF] hover:underline" itemProp="email">
                      privacy@proxys.online
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
