'use client'

import { useState } from "react"
import Header from "@/components/Header"
import { Calendar, Clock, User, MapPin, DollarSign, MessageCircle, Share2 } from "lucide-react"

export default function MyBookingsPage() {
  const [filter, setFilter] = useState("all")

  const bookings = [
    {
      id: 1,
      caregiver: "Sarah Johnson",
      service: "Childcare",
      date: "June 22, 2026",
      time: "2:00 PM - 6:00 PM",
      location: "London, UK",
      cost: "£32",
      status: "confirmed",
      rating: null,
    },
    {
      id: 2,
      caregiver: "Michael Chen",
      service: "Elderly Care",
      date: "June 25, 2026",
      time: "10:00 AM - 2:00 PM",
      location: "Manchester, UK",
      cost: "£48",
      status: "pending",
      rating: null,
    },
    {
      id: 3,
      caregiver: "Emma Williams",
      service: "Disability Support",
      date: "June 18, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Birmingham, UK",
      cost: "£112",
      status: "completed",
      rating: 5,
    },
  ]

  const filteredBookings = filter === "all" ? bookings : bookings.filter((b) => b.status === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">Manage your care service bookings</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {["all", "confirmed", "pending", "completed", "cancelled"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-2 rounded-lg font-medium transition whitespace-nowrap ${
                filter === status ? "bg-orange-600 text-white" : "bg-white text-gray-700 border border-gray-300 hover:border-orange-600"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{booking.caregiver}</h3>
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-medium">
                      {booking.service}
                    </span>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(booking.status)}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Calendar size={16} />
                      Date & Time
                    </p>
                    <p className="font-semibold text-gray-900 mt-1">{booking.date}</p>
                    <p className="text-sm text-gray-600">{booking.time}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <MapPin size={16} />
                      Location
                    </p>
                    <p className="font-semibold text-gray-900 mt-1">{booking.location}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <DollarSign size={16} />
                      Cost
                    </p>
                    <p className="font-bold text-green-600 text-lg mt-1">{booking.cost}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Actions</p>
                    <div className="flex gap-2 mt-2">
                      <button className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-200 transition text-sm">
                        <MessageCircle size={16} />
                        Message
                      </button>
                      <button className="flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-2 rounded-lg hover:bg-purple-200 transition text-sm">
                        <Share2 size={16} />
                        Share
                      </button>
                    </div>
                  </div>
                </div>

                {/* Rating Section */}
                {booking.status === "completed" && (
                  <div className="pt-6 border-t border-gray-200">
                    {booking.rating ? (
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-2">Your Rating: ⭐ {booking.rating}/5</p>
                        <p className="text-sm text-gray-600">"Excellent service! Very professional and caring."</p>
                      </div>
                    ) : (
                      <button className="text-orange-600 font-semibold hover:text-orange-700">Leave a Review</button>
                    )}
                  </div>
                )}

                {/* Pending Actions */}
                {booking.status === "pending" && (
                  <div className="pt-6 border-t border-gray-200 flex gap-3">
                    <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium">
                      Confirm
                    </button>
                    <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium">
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No bookings found</p>
          </div>
        )}
      </main>
    </div>
  )
}
