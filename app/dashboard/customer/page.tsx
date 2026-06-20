'use client'

import { useState } from "react"
import DashboardHeader from "@/components/DashboardHeader"
import { BarChart3, Clock, DollarSign, Star, Calendar } from "lucide-react"

export default function CustomerDashboard() {
  const [userRole] = useState<"customer" | "staff">("customer")

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userRole={userRole} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, Sarah! 👋</h1>
          <p className="text-gray-600">Here's what's happening with your account</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-orange-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Bookings</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
              </div>
              <Calendar className="text-orange-600" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Upcoming Shifts</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">2</p>
              </div>
              <Clock className="text-blue-600" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Spent</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">£1,240</p>
              </div>
              <DollarSign className="text-green-600" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-yellow-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Average Rating</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">4.8★</p>
              </div>
              <Star className="text-yellow-600" size={40} />
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Bookings</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((booking) => (
              <div key={booking} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">Sarah Johnson - Childcare</h3>
                    <p className="text-gray-600 text-sm mt-1">📅 June {20 + booking}, 2026 • 2:00 PM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">⭐ Rating: 4.9</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-orange-600">£32</p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mt-2">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <button className="bg-gradient-to-br from-orange-600 to-orange-500 text-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="font-bold text-lg mb-2">Find Caregivers</h3>
            <p className="text-sm opacity-90">Browse verified caregivers near you</p>
          </button>

          <button className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="font-bold text-lg mb-2">My Bookings</h3>
            <p className="text-sm opacity-90">View and manage your bookings</p>
          </button>

          <button className="bg-gradient-to-br from-purple-600 to-purple-500 text-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="font-bold text-lg mb-2">Payment History</h3>
            <p className="text-sm opacity-90">View your payment transactions</p>
          </button>
        </div>
      </main>
    </div>
  )
}