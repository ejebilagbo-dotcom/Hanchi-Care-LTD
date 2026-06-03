import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">Hanchi Care</h1>
          <div className="space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-orange-600">
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Professional Care Services Made Simple
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with vetted caregivers for childcare, elderly care, disability support, and household services.
          Trusted by families. Built for reliability.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/signup?role=customer"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700"
          >
            Book a Caregiver
          </Link>
          <Link
            href="/signup?role=staff"
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50"
          >
            Become a Caregiver
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-2">Verified Caregivers</h3>
            <p className="text-gray-600">All caregivers are background checked and vetted for your peace of mind.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-600">Safe, transparent billing with multiple payment options available.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our team is here to help whenever you need us, anytime, anywhere.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Hanchi Care LTD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
