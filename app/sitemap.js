const SITE_URL = 'https://aelyssystems.ch'

export default function sitemap() {
  const lastModified = new Date()
  const sections = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' },
    { path: '#expertise', priority: 0.9, changeFrequency: 'monthly' },
    { path: '#business-analyse', priority: 0.8, changeFrequency: 'monthly' },
    { path: '#automatisation', priority: 0.8, changeFrequency: 'monthly' },
    { path: '#developpement', priority: 0.8, changeFrequency: 'monthly' },
    { path: '#methode', priority: 0.7, changeFrequency: 'monthly' },
    { path: '#contact', priority: 0.7, changeFrequency: 'monthly' },
  ]
  return sections.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}/${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
