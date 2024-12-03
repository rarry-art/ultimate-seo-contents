import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Ultimate SEO Contents
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
} 