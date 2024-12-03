import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { formatSlug } from './seoUtils'

const articles = [
  { 
    id: 1, 
    title: '10 SEO Strategies for 2024', 
    slug: '10-seo-strategies-2024', 
    excerpt: 'Stay ahead of the curve with these cutting-edge SEO tactics for the coming year.',
  },
  { 
    id: 2, 
    title: 'How to Boost Your Affiliate Revenue', 
    slug: 'boost-affiliate-revenue', 
    excerpt: 'Learn proven techniques to increase your affiliate marketing earnings and maximize ROI.',
  },
  { 
    id: 3, 
    title: 'The Future of Digital Marketing', 
    slug: 'future-digital-marketing', 
    excerpt: 'Explore emerging trends and technologies shaping the future of digital marketing.',
  },
  { 
    id: 4, 
    title: 'Content Creation Tips for Better Engagement', 
    slug: 'content-creation-tips', 
    excerpt: 'Discover how to create compelling content that resonates with your audience and drives engagement.',
  },
  { 
    id: 5, 
    title: 'Maximizing Google Ads ROI', 
    slug: 'maximizing-google-ads-roi', 
    excerpt: 'Optimize your Google Ads campaigns for better performance and higher return on investment.',
  },
  { 
    id: 6, 
    title: 'Understanding User Intent in SEO', 
    slug: 'user-intent-seo', 
    excerpt: 'Learn how to align your content with user intent to improve search rankings and user satisfaction.',
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold mb-4 text-secondary-800">Ultimate SEO Contents</h1>
      <p className="text-xl mb-8 text-secondary-600">Discover the latest insights and strategies for success in digital marketing and SEO.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link href={`/article/${article.slug}`} key={article.id} className="block group">
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={`/placeholder.svg?height=300&width=400`}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-serif font-semibold mb-2 text-secondary-800 group-hover:text-primary-600 transition-colors duration-200">{article.title}</h2>
                  <p className="text-secondary-600 mb-4">{article.excerpt}</p>
                </div>
                <span className="inline-flex items-center text-primary-600 group-hover:text-primary-800 transition-colors duration-200">
                  Read more
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

