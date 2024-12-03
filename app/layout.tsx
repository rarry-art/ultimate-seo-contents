import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], subsets: ['latin'], variable: '--font-merriweather' })

export const metadata: Metadata = {
  title: 'Ultimate SEO Contents',
  description: 'Discover the latest insights and strategies for success in digital marketing and SEO.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans bg-secondary-50 text-secondary-900 flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex flex-col lg:flex-row">
          <main className="flex-grow p-4 lg:p-8">{children}</main>
          <aside className="w-full lg:w-80 p-4 lg:p-8 bg-white shadow-md">
            <div className="space-y-8 sticky top-24">
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
                <h4 className="font-serif font-bold text-lg mb-2 text-secondary-800">Trending Topics</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-primary-600 hover:text-primary-800 transition-colors duration-200">SEO Best Practices</a></li>
                  <li><a href="#" className="text-primary-600 hover:text-primary-800 transition-colors duration-200">Content Marketing Strategies</a></li>
                  <li><a href="#" className="text-primary-600 hover:text-primary-800 transition-colors duration-200">Social Media Trends</a></li>
                </ul>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg shadow-sm">
                <h4 className="font-serif font-bold text-lg mb-2 text-primary-800">Featured Tools</h4>
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
            </div>
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  )
}

