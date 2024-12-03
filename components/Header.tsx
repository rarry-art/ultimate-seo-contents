'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif font-bold text-primary-600 hover:text-primary-800 transition-colors duration-200">
            Ultimate SEO Contents
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Home</Link></li>
              <li><Link href="/categories" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Categories</Link></li>
              <li><Link href="/about" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">About</Link></li>
              <li><Link href="/contact" className="text-secondary-600 hover:text-primary-600 transition-colors duration-200">Contact</Link></li>
            </ul>
          </nav>
          <button 
            className="md:hidden text-secondary-600 hover:text-primary-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><Link href="/" className="block py-2 text-secondary-600 hover:text-primary-600 transition-colors duration-200">Home</Link></li>
              <li><Link href="/categories" className="block py-2 text-secondary-600 hover:text-primary-600 transition-colors duration-200">Categories</Link></li>
              <li><Link href="/about" className="block py-2 text-secondary-600 hover:text-primary-600 transition-colors duration-200">About</Link></li>
              <li><Link href="/contact" className="block py-2 text-secondary-600 hover:text-primary-600 transition-colors duration-200">Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

