# Hanchi Care LTD - Database Schema

## Overview

This document describes the complete database schema for the Hanchi Care platform. The schema is built with PostgreSQL and managed using Prisma ORM.

## Entity Relationship Diagram

```
User (base)
├── Customer
├── Staff
└── Admin

Shift
└── ShiftBooking
    ├── Customer
    ├── Staff
    └── Payment

Payment

PremiumSubscription
└── Customer

VacationTime
└── Staff

Review
├── Customer
└── Staff

Document
└── Staff

AuditLog
└── User
```

## Core Entities

### User

Base user entity for all platform users.

| Field | Type | Description |
|-------|------|----------|
| id | String (CUID) | Primary key |
| email | String | Unique email address |
| name | String | Full name |
| password | String | Hashed password |
| phone | String? | Phone number |
| role | UserRole | CUSTOMER, STAFF, or ADMIN |
| profileImage | String? | Profile image URL |
| isEmailVerified | Boolean | Email verification status |
| isPhoneVerified | Boolean | Phone verification status |
| isActive | Boolean | Account active status |
| createdAt | DateTime | Account creation timestamp |
| updatedAt | DateTime | Last update timestamp |

**Indexes:**
- email (unique)
- role

### Customer

Customer-specific profile extending User.

| Field | Type | Description |
|-------|------|----------|
| id | String (CUID) | Primary key |
| userId | String (FK) | Reference to User |
| address | String? | Street address |
| city | String? | City |
| state | String? | State/Province |
| zipCode | String? | Postal code |
| emergencyContact | String? | Emergency contact name |
| emergencyPhone | String? | Emergency contact phone |
| subscriptionTier | SubscriptionTier | FREE, PREMIUM, or VIP |
| subscriptionStartDate | DateTime? | Subscription start date |
| subscriptionEndDate | DateTime? | Subscription end date |
| totalSpent | Float | Total amount spent |
| totalOrders | Int | Total number of bookings |
| averageRating | Float | Average rating from staff |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Last update timestamp |

**Relationships:**
- One-to-One with User
- One-to-Many with ShiftBooking
- One-to-Many with Payment
- One-to-Many with Review

### Staff

Caregiver/Staff-specific profile extending User.

| Field | Type | Description |
|-------|------|----------|
| id | String (CUID) | Primary key |
| userId | String (FK) | Reference to User |
| bio | String? | Professional bio |
| specializations | String[] | Array of specializations |
| yearsOfExperience | Int? | Years of experience |
| hourlyRate | Float | Hourly rate in USD |
| certifications | String[] | Array of certifications |
| backgroundCheckPass | Boolean | Background check status |
| backgroundCheckDate | DateTime? | Background check date |
| totalHoursWorked | Float | Total hours worked |
| totalEarnings | Float | Total earnings |
| averageRating | Float | Average rating from customers |
| completedShifts | Int | Number of completed shifts |
| cancelledShifts | Int | Number of cancelled shifts |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Last update timestamp |

**Relationships:**
- One-to-One with User
- One-to-Many with ShiftBooking
- One-to-One with VacationTime
- One-to-Many with Review
- One-to-Many with Document

### Admin

Admin/Auditor profile extending User.

| Field | Type | Description |
|-------|------|----------|
| id | String (CUID) | Primary key |
| userId | String (FK) | Reference to User |
| canViewAllUsers | Boolean | View all users permission |
| canManageUsers | Boolean | Manage users permission |
| canProcessPayments | Boolean | Process payments permission |
| canViewReports | Boolean | View reports permission |
| canManageDisputes | Boolean | Manage disputes permission |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Last update timestamp |

## Shift Management

### Shift

Available care services/shifts.

| Field | Type | Description |
|-------|------|----------|
| id | String (CUID) | Primary key |
| title | String | Shift title |
| description | String? | Detailed description |
| category | String | Service category (babysitting, eldercare, etc.) |
| startTime | DateTime | Shift start time |
| endTime | DateTime | Shift end time |
| status | ShiftStatus | AVAILABLE, BOOKED, IN_PROGRESS, COMPLETED, CANCELLED |
| address | String | Service location address |
| city | String | City |
| state | String | State/Province |
| zipCode | String | Postal code |
| minRating | Float | Minimum caregiver rating required |
| requiredCertifications | String[] | Required certifications |
| baseRate | Float | Base payment rate |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Last update timestamp |

**Indexes:**
- status
- startTime
- category

### ShiftBooking

Represents a caregiver booked for a shift.

| Field | Type | Description |
|-------|------|----------|
| id | String (CUID) | Primary key |
| shiftId | String (FK) | Reference to Shift |
| customerId | String (FK) | Reference to Customer |
| staffId | String (FK) | Reference to Staff |
| hoursWorked | Float | Actual hours worked |
| actualStartTime | DateTime? | Actual start time |
| actualEndTime | DateTime? | Actual end time |
| status | ShiftStatus | Booking status |
| notes | String? | Additional notes |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Last update timestamp |
| completedAt | DateTime? | Completion timestamp |

**Constraints:**
- Unique constraint on (shiftId, staffId)

**Relationships:**
- Many-to-One with Shift
- Many-to-One with Customer
- Many-to-One with Staff
- One-to-Many with Payment

## Payment & Subscriptions

### Payment

Payment records for shifts and services.

| Field | Type | Description |
|-------|------|----------|
| id | String (CUID) | Primary key |
| customerId | String (FK) | Reference to Customer |
| shiftBookingId | String? (FK) | Reference to ShiftBooking |
| amount | Float | Payment amount |
| currency | String | Currency code (default: USD) |
| status | PaymentStatus | PENDING, COMPLETED, FAILED, REFUNDED |
| paymentMethod | String? | Payment method used |
| stripePaymentIntentId | String? | Stripe payment intent ID |
| description | String? | Payment description |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Last update timestamp |
| completedAt | DateTime? | Completion timestamp |

**Indexes:**
- customerId
- status
- stripePaymentIntentId

### PremiumSubscription

Subscription management for customers.

| Field | Type | Description |
|-------|------|----------|
| id | String (CUID) | Primary key |
| customerId | String (FK) | Reference to Customer |
| tier | SubscriptionTier | PREMIUM or VIP |
| monthlyPrice | Float | Monthly subscription price |
| stripeSubscriptionId | String? | Stripe subscription ID |
| isActive | Boolean | Active status |
| startDate | DateTime | Subscription start date |
| endDate | DateTime? | Subscription end date |
| renewalDate | DateTime? | Next renewal date |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Last update timestamp |

**Constraints:**
- Unique constraint on customerId

## Vacation & Benefits

### VacationTime

Automatic vacation accrual for staff.

Calculation Rule: **1 hour vacation for every 12 hours worked**

| Field | Type | Description |
|-------|------|----------|
| id | String (CUID) | Primary key |
| staffId | String (FK) | Reference to Staff |
| totalAccrued | Float | Total vacation hours accrued |
| totalUsed | Float | Total vacation hours used |
| available | Float | Available vacation hours |
| lastCalculatedHours | Float | Last calculated work hours |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Last update timestamp |

**Constraints:**
- Unique constraint on staffId

## Reviews & Feedback

### Review

Customer reviews for staff/caregivers.

| Field | Type | Description |
|-------|------|----------|
| id | String (CUID) | Primary key |
| customerId | String (FK) | Reference to Customer |
| staffId | String (FK) | Reference to Staff |
| rating | Int | Rating 1-5 |
| comment | String? | Review comment |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Last update timestamp |

**Constraints:**
- Unique constraint on (customerId, staffId)

**Indexes:**
- staffId
- rating

## Documents & Verification

### Document

Staff documents (certifications, background checks, etc.).

| Field | Type | Description |
|-------|------|----------|
| id | String (CUID) | Primary key |
| staffId | String (FK) | Reference to Staff |
| type | String | Document type (certification, background_check, etc.) |
| fileName | String | Original file name |
| fileUrl | String | S3 URL to document |
| uploadedAt | DateTime | Upload timestamp |
| expiresAt | DateTime? | Document expiration date |
| createdAt | DateTime | Creation timestamp |
| updatedAt | DateTime | Last update timestamp |

**Indexes:**
- staffId
- type

## Audit & Compliance

### AuditLog

Complete audit trail of all admin and system actions.

| Field | Type | Description |
|-------|------|----------|
| id | String (CUID) | Primary key |
| userId | String (FK) | Reference to User |
| action | AuditAction | Type of action performed |
| resourceType | String | Type of resource affected |
| resourceId | String? | ID of affected resource |
| changes | Json? | Before/after values |
| ipAddress | String? | IP address of request |
| userAgent | String? | User agent string |
| createdAt | DateTime | Timestamp |

**Indexes:**
- userId
- action
- resourceType
- createdAt

## Enums

### UserRole
- CUSTOMER
- STAFF
- ADMIN

### ShiftStatus
- AVAILABLE
- BOOKED
- IN_PROGRESS
- COMPLETED
- CANCELLED

### PaymentStatus
- PENDING
- COMPLETED
- FAILED
- REFUNDED

### SubscriptionTier
- FREE
- PREMIUM
- VIP

### AuditAction
- LOGIN
- LOGOUT
- CREATE
- UPDATE
- DELETE
- VIEW
- DOWNLOAD
- EXPORT
- MODIFY_USER

## Database Constraints

### Foreign Keys
- All foreign keys cascade on delete
- SetNull for optional relationships

### Unique Constraints
- User.email
- Customer.userId
- Staff.userId
- Admin.userId
- ShiftBooking (shiftId, staffId)
- Review (customerId, staffId)
- PremiumSubscription.customerId
- VacationTime.staffId

### Indexes
Created for performance on frequently queried fields:
- User: email, role
- Customer: subscriptionTier
- Staff: backgroundCheckPass, hourlyRate
- Shift: status, startTime, category
- ShiftBooking: customerId, staffId, status
- Payment: customerId, status, stripePaymentIntentId
- Review: staffId, rating
- Document: staffId, type
- AuditLog: userId, action, resourceType, createdAt

## Migration Strategy

1. **Initial Setup**
   ```bash
   npx prisma migrate dev --name init
   ```

2. **Running Migrations**
   ```bash
   npx prisma migrate deploy
   ```

3. **Seeding Data**
   ```bash
   npx prisma db seed
   ```

## Backup & Disaster Recovery

- Regular automated backups (recommended daily)
- Point-in-time recovery capability
- Production database encryption
- Read-only replicas for analytics

---

**Last Updated:** June 2026
