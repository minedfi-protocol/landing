export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
  keywords: string[]
  authors: Array<{
    name: string
    url: string
  }>
  creator: string
}

export const siteConfig: SiteConfig = {
  name: 'MinedFi',
  description: 'Description of your landing page that will appear in search engines.',
  url: 'https://yourwebsite.com',
  ogImage: '/og.jpg',
  links: {
    twitter: 'https://twitter.com/yourhandle',
    github: 'https://github.com/yourcompany'
  },
  keywords: ['Your Company', 'Your Industry', 'Your Service', 'Additional Keywords'],
  authors: [
    {
      name: 'Your Name',
      url: 'https://yourwebsite.com'
    }
  ],
  creator: 'Your Name'
}
