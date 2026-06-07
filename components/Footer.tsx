import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-20">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex-center">
                <span className="text-white font-bold">HCL</span>
              </div>
              <span className="font-bold text-xl">Hanchi Care</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional care services connecting customers with verified care professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/browse" className="hover:text-orange-600">Browse Jobs</Link></li>
              <li><Link href="/post-job" className="hover:text-orange-600">Post a Job</Link></li>
              <li><Link href="/how-it-works" className="hover:text-orange-600">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-orange-600">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-orange-600">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-orange-600">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-orange-600">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-orange-600">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-orange-600" />
                <a href="mailto:support@hanchicare.com" className="hover:text-orange-600">
                  support@hanchicare.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-orange-600" />
                <a href="tel:+442071838000" className="hover:text-orange-600">
                  +44 (0)207 183 8000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-orange-600" />
                <span>London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Hanchi Care Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-orange-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-600">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-orange-600">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
