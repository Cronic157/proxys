import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://proxys.online"

  // Blog post slugs
  const blogPosts = [
    "ultimate-guide-web-scraping-2024",
    "residential-vs-datacenter-proxies",
    "proxy-rotation-strategies",
    "e-commerce-price-monitoring",
    "social-media-automation-proxies",
    "proxy-security-best-practices",
    "proxy-performance-optimization",
    "avoiding-ip-bans-detection",
    "proxy-apis-integration-guide",
    "mobile-proxy-solutions",
    "proxy-legal-compliance",
    "instagram-scraping-proxies",
    "amazon-price-monitoring",
    "proxy-server-locations",
    "proxy-monitoring-analytics",
    "selenium-proxy-automation",
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
