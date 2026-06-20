'use client'

import { useState } from "react"
import Header from "@/components/Header"
import { Search, MapPin, Star, Clock, User } from "lucide-react"

export default function ShiftsPage() {
  const [filters, setFilters] = useState({
    location: "",
    serviceType: "all",
    date: "",
  })

  const shifts = [
    {
      id: 1,
      caregiver: "Sarah Johnson",
      rating: 4.9,
      service: "Childcare",
      date: "June 22, 2026",
      time: "2:00 PM - 6:00 PM",
      location: "London, UK",
      rate: "£16/hour",
      availability: 3,
    },
    {
      id: 2,
      caregiver: "Michael Chen",
      rating: 4.8,
      service: "Elderly Care",
      date: "June 23, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Manchester, UK",
      rate: "£18/hour",
      availability: 1,
    },
    {
      id: 3,
      caregiver: "Emma Williams",
      rating: 5.0,
      service: "Disability Support",
      date: "June 24, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Birmingham, UK",
      rate: "£17/hour",
      availability: 2,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Available Shifts</h1>
          <p className="text-gray-600">Find and book professional caregivers</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow p-6 mb-12">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                value={filters.serviceType}
                onChange={(e) => setFilters({ ...filters, serviceType: e.target.value })}
              >
                <option value="all">All Services</option>
                <option value="childcare">Childcare</option>
                <option value="elderly">Elderly Care</option>
                <option value="disability">Disability Support</option>
                <option value="household">Household Services</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              />
            </div>

            <div className="flex items-end">
              <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-semibold flex items-center justify-center gap-2">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Shifts List */}
        <div className="space-y-6">
          {shifts.map((shift) => (
            <div key={shift.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <div className="p-6">
                <div className="grid md:grid-cols-5 gap-4 items-center">
                  {/* Caregiver Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                        {shift.caregiver.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{shift.caregiver}</h3>
                        <div className="flex items-center gap-1">
                          <Star size={16} className="fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">{shift.rating}</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">
                      {shift.service}
                    </span>
                  </div>

                  {/* Shift Details */}
                  <div>
                    <p className="text-sm text-gray-600">📅 Date</p>
                    <p className="font-semibold text-gray-900">{shift.date}</p>
                    <p className="text-sm text-gray-600 mt-1">⏰ {shift.time}</p>
                  </div>

                  {/* Location */}
                  <div>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <MapPin size={16} /> Location
                    </p>
                    <p className="font-semibold text-gray-900">{shift.location}</p>
                  </div>

                  {/* Rate */}
                  <div>
                    <p className="text-sm text-gray-600">Rate</p>
                    <p className="text-2xl font-bold text-green-600">{shift.rate}</p>
                    <p className="text-xs text-gray-600 mt-1">{shift.availability} slots left</p>
                  </div>

                  {/* Action */}
                  <div className="text-center">
                    <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition font-semibold">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}