'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-max flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex-center">
            <span className="text-white font-bold text-xl">HCL</span>
          </div>
          <span className="hidden md:block font-bold text-xl text-dark">Hanchi Care</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-dark hover:text-orange-600 transition-colors">
            Home
          </Link>
          <Link href="/browse" className="text-dark hover:text-orange-600 transition-colors">
            Browse Jobs
          </Link>
          <Link href="/post-job" className="text-dark hover:text-orange-600 transition-colors">
            Post a Job
          </Link>
          <Link href="/how-it-works" className="text-dark hover:text-orange-600 transition-colors">
            How It Works
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="btn-secondary text-sm">
            Sign In
          </Link>
          <Link href="/signup" className="btn-primary text-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-gray-50">
          <div className="container-max py-4 flex flex-col gap-4">
            <Link href="/" className="text-dark hover:text-orange-600">Home</Link>
            <Link href="/browse" className="text-dark hover:text-orange-600">Browse Jobs</Link>
            <Link href="/post-job" className="text-dark hover:text-orange-600">Post a Job</Link>
            <Link href="/how-it-works" className="text-dark hover:text-orange-600">How It Works</Link>
            <hr className="my-2" />
            <Link href="/login" className="btn-secondary text-sm text-center">Sign In</Link>
            <Link href="/signup" className="btn-primary text-sm text-center">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
