'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function EnterpriseNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const enterpriseNavItems = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Security', href: '#security' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Resources', href: '#resources' },
  ]

  return (
    <nav className="bg-white shadow-sm">
      {/* Return to main site banner - moved outside container */}
      <div className="hidden md:flex justify-center items-center bg-gray-50 py-2 w-full">
        <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
          ← Return to PingMe.com
        </Link>
      </div>

      <div className="container mx-auto px-4">
        {/* Main Navigation - matched height */}
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/enterprise" className="flex items-center">
              <img 
                src="/images/enterprise-logo.svg" 
                alt="PingMe Enterprise" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {enterpriseNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Contact Sales
              </button>
              <button className="bg-primary text-white px-6 py-2 rounded-lg 
                font-semibold hover:bg-primary/90 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2"
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
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-4">
            {enterpriseNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-600 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="space-y-2 pt-4 border-t border-gray-100">
              <button className="w-full text-primary font-semibold hover:text-primary/80 
                transition-colors py-2">
                Contact Sales
              </button>
              <button className="w-full bg-primary text-white px-6 py-2 rounded-lg 
                font-semibold hover:bg-primary/90 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 