'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'الرئيسية', href: '#' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'الأسعار', href: '#pricing' },
  { name: 'تواصل معنا', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50">
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-100 px-6 py-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-l from-[#00897B] to-teal-600 bg-clip-text text-transparent">
              شركة النظافة العصرية
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-[#00897B] transition-colors duration-300 py-2 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00897B] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {isOpen ? <X className="text-[#00897B]" /> : <Menu className="text-[#00897B]" />}
            </button>
          </div>
        </div>
      </nav>
      
      {isOpen && (
        <div className="absolute top-full w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg md:hidden">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#00897B] hover:translate-x-2 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
