'use client'

import { useState } from "react"
import Header from "@/components/Header"
import { CreditCard, Download, Clock, DollarSign } from "lucide-react"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [amount, setAmount] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Make a Payment</h1>

              {/* Amount Input */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">Amount (£)</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-2xl text-gray-500">£</span>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-2xl font-semibold"
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">Payment Method</label>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-orange-600 transition" onClick={() => setPaymentMethod("card")}>
                    <input type="radio" name="payment" value="card" checked={paymentMethod === "card"} readOnly className="w-4 h-4 text-orange-600" />
                    <div className="ml-4">
                      <div className="flex items-center gap-2">
                        <CreditCard size={20} className="text-orange-600" />
                        <span className="font-semibold text-gray-900">Credit/Debit Card</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Visa, Mastercard, American Express</p>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-orange-600 transition" onClick={() => setPaymentMethod("bank")}>
                    <input type="radio" name="payment" value="bank" checked={paymentMethod === "bank"} readOnly className="w-4 h-4 text-orange-600" />
                    <div className="ml-4">
                      <div className="flex items-center gap-2">
                        <DollarSign size={20} className="text-blue-600" />
                        <span className="font-semibold text-gray-900">Bank Transfer</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Direct bank transfer (UK only)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Card Details (if card selected) */}
              {paymentMethod === "card" && (
                <div className="mb-8 p-6 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Card Details</h3>
                  <div className="space-y-4">
                    <input type="text" placeholder="Cardholder Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent" />
                    <input type="text" placeholder="Card Number" maxLength={19} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="MM/YY" className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent" />
                      <input type="text" placeholder="CVV" className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent" />
                    </div>
                  </div>
                </div>
              )}

              {/* Pay Button */}
              <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition font-semibold text-lg">
                Pay £{amount || "0.00"}
              </button>

              <p className="text-xs text-gray-600 text-center mt-4">Your payment is secure and encrypted</p>
            </div>
          </div>

          {/* Sidebar - Payment History & Info */}
          <div>
            {/* Payment Summary */}
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Payment Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-semibold">£{amount || "0.00"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-semibold">£0.00</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="text-lg font-bold text-orange-600">£{amount || "0.00"}</span>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Transactions</h3>
              <div className="space-y-3 text-sm">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0">
                    <div>
                      <p className="font-medium text-gray-900">Childcare Booking</p>
                      <p className="text-xs text-gray-600">June {20 - i}, 2026</p>
                    </div>
                    <span className="font-semibold text-green-600">+£32</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}