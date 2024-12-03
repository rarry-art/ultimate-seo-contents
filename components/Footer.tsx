import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-secondary-800 text-secondary-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-white">About Us</h3>
            <p className="text-secondary-300">Ultimate SEO Contents provides cutting-edge insights and strategies for digital marketing success.</p>
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-secondary-300 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-secondary-300 hover:text-white transition-colors duration-200">Terms of Service</Link></li>
              <li><Link href="/sitemap" className="text-secondary-300 hover:text-white transition-colors duration-200">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-white">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="https://twitter.com/ultimateseo" className="text-secondary-300 hover:text-white transition-colors duration-200">Twitter</a></li>
              <li><a href="https://facebook.com/ultimateseo" className="text-secondary-300 hover:text-white transition-colors duration-200">Facebook</a></li>
              <li><a href="https://linkedin.com/company/ultimateseo" className="text-secondary-300 hover:text-white transition-colors duration-200">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary-700 text-center text-secondary-400">
          <p>&copy; 2023 Ultimate SEO Contents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

