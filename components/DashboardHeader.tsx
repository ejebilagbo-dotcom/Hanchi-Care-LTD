'use client'

import Link from "next/link"
import { useState } from "react"
import { Menu, X, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DashboardHeader({ userRole }: { userRole: "customer" | "staff" | "admin" }) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    localStorage.removeItem("userId")
    router.push("/")
  }

  const dashboardLink = userRole === "customer" ? "/dashboard/customer" : userRole === "staff" ? "/dashboard/staff" : "/dashboard/admin"

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b-4 border-orange-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={dashboardLink} className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
          Hanchi Care
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href={dashboardLink} className="text-gray-600 hover:text-orange-600 transition font-medium">
            Dashboard
          </Link>
          
          {userRole === "customer" && (
            <>
              <Link href="/shifts" className="text-gray-600 hover:text-orange-600 transition">
                Find Caregivers
              </Link>
              <Link href="/my-bookings" className="text-gray-600 hover:text-orange-600 transition">
                My Bookings
              </Link>
            </>
          )}
          
          {userRole === "staff" && (
            <>
              <Link href="/available-shifts" className="text-gray-600 hover:text-orange-600 transition">
                Available Shifts
              </Link>
              <Link href="/my-earnings" className="text-gray-600 hover:text-orange-600 transition">
                Earnings
              </Link>
            </>
          )}

          <Link href="/profile" className="text-gray-600 hover:text-orange-600 transition">
            Profile
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-orange-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link href={dashboardLink} className="block text-gray-600 hover:text-orange-600 transition py-2 font-medium">
              Dashboard
            </Link>
            {userRole === "customer" && (
              <>
                <Link href="/shifts" className="block text-gray-600 hover:text-orange-600 transition py-2">
                  Find Caregivers
                </Link>
                <Link href="/my-bookings" className="block text-gray-600 hover:text-orange-600 transition py-2">
                  My Bookings
                </Link>
              </>
            )}
            {userRole === "staff" && (
              <>
                <Link href="/available-shifts" className="block text-gray-600 hover:text-orange-600 transition py-2">
                  Available Shifts
                </Link>
                <Link href="/my-earnings" className="block text-gray-600 hover:text-orange-600 transition py-2">
                  Earnings
                </Link>
              </>
            )}
            <Link href="/profile" className="block text-gray-600 hover:text-orange-600 transition py-2">
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left text-gray-600 hover:text-orange-600 transition py-2"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  )
}