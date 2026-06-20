'use client'

import { useState } from "react"
import Header from "@/components/Header"
import { MapPin, Calendar, Clock, User, Star, MessageCircle, Phone } from "lucide-react"

export default function BookingPage() {
  const [bookingData, setBookingData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    notes: "",
  })

  const caregiver = {
    id: 1,
    name: "Sarah Johnson",
    rating: 4.9,
    reviews: 128,
    image: "SJ",
    service: "Childcare",
    rate: "£16/hour",
    location: "London, UK",
    distance: "2.3 km away",
    experience: "5 years experience",
    verified: true,
    about: "Experienced childcare provider with a passion for working with children aged 0-10.",
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingData({ ...bookingData, date: e.target.value })
  }

  const calculateDuration = () => {
    if (!bookingData.startTime || !bookingData.endTime) return 0
    const [startHour, startMin] = bookingData.startTime.split(":").map(Number)
    const [endHour, endMin] = bookingData.endTime.split(":").map(Number)
    const startMinutes = startHour * 60 + startMin
    const endMinutes = endHour * 60 + endMin
    return (endMinutes - startMinutes) / 60
  }

  const duration = calculateDuration()
  const cost = duration * 16

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Book a Caregiver</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="md:col-span-2 space-y-6">
            {/* Caregiver Card */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {caregiver.image}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-bold text-gray-900">{caregiver.name}</h2>
                      {caregiver.verified && <span className="text-green-600 font-bold">✓</span>}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span>{caregiver.rating} ({caregiver.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">{caregiver.service}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={18} />
                  {caregiver.location}
                </div>
                <div className="flex items-center gap-2 text-gray-600">{caregiver.distance}</div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={18} />
                  {caregiver.experience}
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-orange-600">{caregiver.rate}</span>
                </div>
              </div>

              <p className="mt-4 text-gray-600">{caregiver.about}</p>

              <div className="flex gap-4 mt-6">
                <button className="flex items-center gap-2 flex-1 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition font-medium">
                  <Phone size={18} />
                  Call
                </button>
                <button className="flex items-center gap-2 flex-1 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition font-medium">
                  <MessageCircle size={18} />
                  Message
                </button>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Booking Details</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={handleDateChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                    <input
                      type="time"
                      value={bookingData.startTime}
                      onChange={(e) => setBookingData({ ...bookingData, startTime: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                    <input
                      type="time"
                      value={bookingData.endTime}
                      onChange={(e) => setBookingData({ ...bookingData, endTime: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Notes/Requirements</label>
                  <textarea
                    value={bookingData.notes}
                    onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                    placeholder="e.g., Allergies, dietary requirements, special instructions..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cost Breakdown & Confirmation */}
          <div>
            <div className="bg-white rounded-xl shadow p-6 sticky top-20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Cost Breakdown</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium">{bookingData.date || "Not selected"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{duration.toFixed(1)} hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hourly Rate</span>
                  <span className="font-medium">£16/hour</span>
                </div>

                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-bold">£{cost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Service Fee (5%)</span>
                    <span className="font-bold text-orange-600">£{(cost * 0.05).toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-orange-600">£{(cost * 1.05).toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition font-semibold text-lg">
                Confirm & Pay
              </button>

              <p className="text-xs text-gray-600 text-center mt-4">You won't be charged until the caregiver accepts</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}