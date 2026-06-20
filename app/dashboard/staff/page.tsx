'use client'

import { useState } from "react"
import DashboardHeader from "@/components/DashboardHeader"
import { TrendingUp, Briefcase, Clock, Award } from "lucide-react"

export default function StaffDashboard() {
  const [userRole] = useState<"customer" | "staff">("staff")

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userRole={userRole} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, Michael! 👋</h1>
          <p className="text-gray-600">Here's your earnings and shift summary</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">This Month Earnings</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">£2,480</p>
              </div>
              <TrendingUp className="text-green-600" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Hours Worked</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">128</p>
              </div>
              <Clock className="text-blue-600" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-purple-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Shifts Completed</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
              </div>
              <Briefcase className="text-purple-600" size={40} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-yellow-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Rating</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">4.9★</p>
              </div>
              <Award className="text-yellow-600" size={40} />
            </div>
          </div>
        </div>

        {/* Vacation Accrual */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 mb-12 border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-900 mb-4">Vacation Hours Accrual</h3>
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-900">Hours Earned</span>
              <span className="text-2xl font-bold text-orange-600">10.67 hours</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: "45%" }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">1 hour earned for every 12 hours worked</p>
          </div>
        </div>

        {/* Recent Shifts */}
        <div className="bg-white rounded-xl shadow p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Shifts</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((shift) => (
              <div key={shift} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">Johnson Family - Childcare</h3>
                    <p className="text-gray-600 text-sm mt-1">📅 June {18 + shift}, 2026 • 2:00 PM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">⭐ Customer Rating: 5.0</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">£32</p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mt-2">
                      Paid
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <button className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="font-bold text-lg mb-2">Available Shifts</h3>
            <p className="text-sm opacity-90">Browse and book shifts near you</p>
          </button>

          <button className="bg-gradient-to-br from-green-600 to-green-500 text-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-bold text-lg mb-2">My Earnings</h3>
            <p className="text-sm opacity-90">Track your income and payouts</p>
          </button>

          <button className="bg-gradient-to-br from-orange-600 to-orange-500 text-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105">
            <div className="text-4xl mb-3">👤</div>
            <h3 className="font-bold text-lg mb-2">My Profile</h3>
            <p className="text-sm opacity-90">Update your availability and certifications</p>
          </button>
        </div>
      </main>
    </div>
  )
}