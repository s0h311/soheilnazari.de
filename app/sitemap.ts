import { MetadataRoute } from 'next'

const siteUrl = 'https://soheilnazari.de'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(2024, 0, 12),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: new Date(2024, 0, 12),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/reads`,
      lastModified: new Date(2023, 6, 31),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(2024, 0, 16),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(2023, 7, 12),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
