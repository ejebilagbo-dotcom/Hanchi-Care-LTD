import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-orange-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Find Your Perfect Caregiver?
        </h2>
        <p className="text-xl text-orange-100 mb-8">
          Join thousands of families who trust Hanchi Care for their care needs
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shifts"
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            Book Now <ArrowRight size={20} />
          </Link>
          <Link
            href="/signup?role=staff"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 transition inline-flex items-center justify-center gap-2"
          >
            Join as Caregiver <ArrowRight size={20} />
          </Link>
        </div>

        <p className="text-orange-100 mt-8 text-sm">
          No credit card required • Free to sign up • Verified caregivers only
        </p>
      </div>
    </section>
  )
}
