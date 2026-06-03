// Application Constants

export const APP_NAME = "Hanchi Care LTD";
export const APP_DESCRIPTION = "Premium care services platform";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

// Colors - Hanchi Care Theme
export const COLORS = {
  primary: "#FF8C00", // Orange
  white: "#FFFFFF",
  darkGray: "#333333",
  lightGray: "#F5F5F5",
};

// User Roles
export const USER_ROLES = {
  CUSTOMER: "CUSTOMER",
  STAFF: "STAFF",
  ADMIN: "ADMIN",
} as const;

// Subscription Tiers
export const SUBSCRIPTION_TIERS = {
  FREE: {
    name: "Free",
    price: 0,
    features: [
      "Browse caregivers",
      "Book shifts",
      "Basic support",
    ],
  },
  PREMIUM: {
    name: "Premium",
    price: 9.99,
    features: [
      "All Free features",
      "Priority matching",
      "Faster response time",
      "Premium support",
      "5% discount on services",
    ],
  },
  VIP: {
    name: "VIP",
    price: 24.99,
    features: [
      "All Premium features",
      "Dedicated account manager",
      "Custom scheduling",
      "10% discount on services",
      "Priority customer service",
      "Exclusive caregiver access",
    ],
  },
} as const;

// Shift Categories
export const SHIFT_CATEGORIES = [
  "Babysitting",
  "Nanny Services",
  "Elderly Care",
  "Companion Care",
  "Disability Support",
  "Household Help",
  "Shopping Assistance",
  "Meal Preparation",
  "Transportation",
  "Other",
] as const;

// Vacation Calculation
export const VACATION_CALCULATION = {
  HOURS_PER_VACATION: 12, // 12 hours worked = 1 hour vacation
  VACATION_EARNED: 1, // 1 hour vacation
} as const;

// Payment Status
export const PAYMENT_STATUS = {
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  REFUNDED: "REFUNDED",
} as const;

// Shift Status
export const SHIFT_STATUS = {
  AVAILABLE: "AVAILABLE",
  BOOKED: "BOOKED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
} as const;

// Rating Scale
export const RATING_SCALE = [1, 2, 3, 4, 5];

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;

// File Upload
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_FILE_TYPES = ["pdf", "jpg", "jpeg", "png", "doc", "docx"];

// API Error Messages
export const ERROR_MESSAGES = {
  UNAUTHORIZED: "Unauthorized access",
  INVALID_CREDENTIALS: "Invalid email or password",
  USER_NOT_FOUND: "User not found",
  EMAIL_ALREADY_EXISTS: "Email already exists",
  INVALID_EMAIL: "Invalid email format",
  PASSWORD_TOO_SHORT: "Password must be at least 8 characters",
  INTERNAL_SERVER_ERROR: "Internal server error",
  INVALID_REQUEST: "Invalid request",
  NOT_FOUND: "Resource not found",
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: "Logged in successfully",
  SIGNUP_SUCCESS: "Account created successfully",
  LOGOUT_SUCCESS: "Logged out successfully",
  PROFILE_UPDATED: "Profile updated successfully",
  SHIFT_BOOKED: "Shift booked successfully",
  PAYMENT_PROCESSED: "Payment processed successfully",
  PAYMENT_FAILED: "Payment failed",
} as const;

// Regex Patterns
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[0-9]{10,}$/,
  STRONG_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
} as const;

// Date Formats
export const DATE_FORMATS = {
  SHORT: "MMM dd, yyyy",
  LONG: "MMMM dd, yyyy",
  DATETIME: "MMM dd, yyyy HH:mm",
  TIME: "HH:mm",
} as const;
