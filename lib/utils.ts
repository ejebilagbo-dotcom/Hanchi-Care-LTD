import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatDistanceToNow, format } from "date-fns"

// Tailwind + clsx utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format currency
export function formatCurrency(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount)
}

// Format date to relative time
export function formatRelativeTime(date: Date): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}

// Format date to standard format
export function formatDate(date: Date, formatString: string = "MMM dd, yyyy"): string {
  return format(new Date(date), formatString)
}

// Calculate hours worked between two dates
export function calculateHoursWorked(startTime: Date, endTime: Date): number {
  const diff = new Date(endTime).getTime() - new Date(startTime).getTime()
  return diff / (1000 * 60 * 60) // Convert milliseconds to hours
}

// Calculate vacation hours earned
export function calculateVacationEarned(hoursWorked: number, hoursPerVacation: number = 12): number {
  return Math.floor(hoursWorked / hoursPerVacation)
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone number
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9]{10,}$/
  return phoneRegex.test(phone.replace(/\D/g, ""))
}

// Generate random string
export function generateRandomString(length: number = 32): string {
  return Math.random().toString(36).substring(2, length + 2)
}

// Capitalize first letter
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// Truncate string
export function truncate(str: string, length: number = 50): string {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

// Get initials from name
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)
}

// Calculate rating percentage
export function getRatingPercentage(rating: number, maxRating: number = 5): number {
  return (rating / maxRating) * 100
}

// Get rating color
export function getRatingColor(rating: number): string {
  if (rating >= 4.5) return "text-green-600"
  if (rating >= 3.5) return "text-blue-600"
  if (rating >= 2.5) return "text-yellow-600"
  return "text-red-600"
}

// Delay promise (for testing, debugging)
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Deep clone object
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

// Get age from date of birth
export function getAge(dateOfBirth: Date): number {
  const today = new Date()
  const birthDate = new Date(dateOfBirth)
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return age
}

// Format time (HH:mm)
export function formatTime(hours: number, minutes: number = 0): string {
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
}

// Extract error message from error object
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message
  return String(error)
}

// Safe JSON parse
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json)
  } catch {
    return fallback
  }
}

// Check if string is URL
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Get query parameters from URL
export function getQueryParams(url: string): Record<string, string> {
  const params = new URLSearchParams(new URL(url).search)
  const result: Record<string, string> = {}
  params.forEach((value, key) => {
    result[key] = value
  })
  return result
}

// Build query string
export function buildQueryString(params: Record<string, any>): string {
  return Object.entries(params)
    .filter(([, value]) => value !== null && value !== undefined && value !== "")
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&")
}

// Merge objects deeply
export function mergeObjects<T extends Record<string, any>>(target: T, source: Partial<T>): T {
  const result = { ...target }
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === "object" && source[key] !== null) {
        result[key] = mergeObjects(target[key] || {}, source[key])
      } else {
        result[key] = source[key]
      }
    }
  }
  return result
}
