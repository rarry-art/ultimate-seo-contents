import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { generateSEOMetadata, formatSlug } from '../../seoUtils'

interface ArticlePageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const title = formatSlug(params.slug);
  return generateSEOMetadata(title, `Learn more about ${title} and improve your digital marketing strategies. Get expert insights and actionable tips.`);
}

const relatedArticles = [
  { 
    id: 1, 
    title: 'SEO Basics: A Beginner's Guide', 
    slug: 'seo-basics', 
    excerpt: 'Learn the fundamentals of SEO to kickstart your digital marketing journey.' 
  },
  { 
    id: 2, 
    title: 'Content Marketing 101: Essential Strategies', 
    slug: 'content-marketing-101', 
    excerpt: 'Discover key content marketing strategies to engage your audience and drive conversions.' 
  },
  { 
    id: 3, 
    title: 'Social Media Optimization Techniques', 
    slug: 'social-media-optimization', 
    excerpt: 'Maximize your social media presence with these proven optimization techniques.' 
  },
]

export default function ArticlePage({ params }: ArticlePageProps) {
  const title = formatSlug(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors duration-200 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-serif font-bold mb-6 text-secondary-800">{title}</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="prose lg:prose-xl">
            <p>This is a placeholder for the article content. In a real application, you would fetch the content based on the slug: {params.slug}</p>
            <p>The content here would be rich in keywords and provide valuable information to readers, improving SEO rankings and user engagement.</p>
            <h2>Key Takeaways</h2>
            <ul>
              <li>Important point 1 related to {title}</li>
              <li>Critical insight about the topic</li>
              <li>Actionable tip for implementing the strategy</li>
            </ul>
            <p>By following these strategies, you can improve your digital marketing efforts and achieve better results in your campaigns.</p>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-secondary-800">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((article) => (
                <Link href={`/article/${article.slug}`} key={article.id} className="block group">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative h-40 w-full">
                      <Image
                        src={`/placeholder.svg?height=200&width=300`}
                        alt={article.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-serif font-semibold mb-2 text-secondary-800 group-hover:text-primary-600 transition-colors duration-200">{article.title}</h4>
                        <p className="text-secondary-600 text-sm mb-4">{article.excerpt}</p>
                      </div>
                      <span className="inline-flex items-center text-primary-600 text-sm group-hover:text-primary-800 transition-colors duration-200">
                        Read more
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-primary-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-serif font-bold text-lg mb-2 text-primary-800">Sponsored</h4>
            <div className="bg-white border border-primary-100 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=300"
                alt="Google Ads"
                width={300}
                height={250}
                layout="responsive"
              />
            </div>
          </div>
          <div className="bg-secondary-50 p-4 rounded-lg shadow-sm">
            <h4 className="font-serif font-bold text-lg mb-2 text-secondary-800">Featured Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-600 hover:text-primary-800 transition-colors duration-200">Free SEO Checklist</a></li>
              <li><a href="#" className="text-primary-600 hover:text-primary-800 transition-colors duration-200">Digital Marketing Ebook</a></li>
              <li><a href="#" className="text-primary-600 hover:text-primary-800 transition-colors duration-200">Webinar: Advanced SEO Techniques</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

