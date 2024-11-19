'use client'
import { useState } from 'react'
import Link from 'next/link'

const mainNavItems = [
  { name: 'Products', href: '#products' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Developers', href: '#developers' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="hidden md:flex justify-center items-center bg-primary/5 py-2 w-full">
        <span className="text-primary">Looking for enterprise solutions?</span>
        <Link href="/enterprise" 
          className="ml-2 font-semibold text-primary hover:text-primary/80 underline">
          Visit PingMe Enterprise →
        </Link>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-primary">
              <img 
                src="/images/pingme-logo.svg" 
                alt="PingMe Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-medium hover:text-primary transition-colors">
                {item.name}
              </Link>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-lg 
              font-semibold hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-medium p-2"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'opacity-100 max-h-64' 
              : 'opacity-0 max-h-0'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-4">
            {mainNavItems.map((item) => (
              <Link key={item.name} href={item.href} 
                className="block text-gray-medium hover:text-primary transition-colors">
                {item.name}
              </Link>
            ))}
            <button className="w-full bg-primary text-white px-6 py-2 rounded-lg 
              font-semibold hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 