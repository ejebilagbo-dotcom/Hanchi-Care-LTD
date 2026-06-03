# Hanchi Care LTD

> Premium Care Services Platform - Professional childcare, elderly care, and disability support services

A comprehensive marketplace platform for care services with integrated staff management, secure payment processing, and administrative oversight. Built for reliability, trust, and exceptional service delivery.

## 🎯 About Hanchi Care LTD

Hanchi Care LTD connects families and individuals with vetted, professional caregivers for:
- **Childcare** - Babysitting, nanny services
- **Elderly Care** - Companion care, assistance with daily living
- **Disability Support** - Personal assistance and specialized care
- **Household Services** - Cleaning, shopping, errands

## ✨ Features

### 👨‍👩‍👧 Customer Features
- Browse and book available caregivers with verified credentials
- Real-time shift management and scheduling
- Premium subscription tier for priority attention and faster response
- Secure payment processing with multiple payment methods
- Detailed invoicing and payment history
- Caregiver ratings, reviews, and performance metrics
- Service history and activity records
- Emergency contact and communication tools

### 👔 Staff/Caregiver Features
- Browse and book available shifts in real-time
- Comprehensive hours tracking and logging
- **Automatic vacation accrual** - 1 hour vacation for every 12 hours worked
- Earnings dashboard with transparent pay breakdown
- Detailed work history and performance metrics
- Certification and document management
- Availability calendar and scheduling
- Performance ratings and customer feedback

### 🔐 Admin/Auditor Features (Higher Institution)
- Complete platform oversight and management
- Full access to all staff and customer information
- Detailed activity audit logs with timestamps
- Compliance reporting and verification tools
- Dispute resolution and case management
- Advanced analytics and insights
- Financial reporting and reconciliation
- Staff performance analytics
- Customer satisfaction metrics

## 🛠️ Tech Stack

| Layer | Technology |
|-------|----------|
| **Frontend** | Next.js 14, React 18, TypeScript, Tailwind CSS, shadcn/ui |
| **Backend** | Next.js API Routes, Node.js |
| **Database** | PostgreSQL with Prisma ORM |
| **Authentication** | NextAuth.js with JWT |
| **Payments** | Stripe (payments, subscriptions, payouts) |
| **File Storage** | AWS S3 for documents & certifications |
| **Caching** | Redis for sessions and performance |
| **Email** | SendGrid/Resend for notifications |
| **SMS** | Twilio for alerts |
| **Hosting** | Vercel (frontend), Railway (backend), Supabase (database) |
| **Monitoring** | Sentry for error tracking |

## 📁 Project Structure

```
hanchi-care/
├── app/
│   ├── (auth)/                    # Authentication routes
│   │   ├── login/
│   │   ├── signup/
│   │   └── forgot-password/
│   ├── (dashboard)/               # Protected dashboard routes
│   │   ├── customer/
│   │   ├── staff/
│   │   └── admin/
│   ├── api/                       # API endpoints
│   │   ├── auth/
│   │   ├── shifts/
│   │   ├── payments/
│   │   ├── users/
│   │   └── admin/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── auth/
│   ├── dashboard/
│   ├── shifts/
│   ├── payments/
│   └── common/
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   ├── utils.ts
│   └── constants.ts
├── hooks/
│   └── useAuth.ts
├── prisma/
│   └── schema.prisma
├── public/
├── .env.example
├── .env.local (create this)
├── package.json
├── tsconfig.json
├── next.config.js
└── tailwind.config.ts
```

## 🎨 Design System

**Color Theme:**
- **Primary Orange:** #FF8C00 (Energy, trust, professionalism)
- **White:** #FFFFFF (Cleanliness, clarity)
- **Dark Gray:** #333333 (Text)
- **Light Gray:** #F5F5F5 (Backgrounds)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm
- PostgreSQL database (local or cloud)
- Stripe account (for payments)

### Installation

```bash
# Clone the repository
git clone https://github.com/ejebilagbo-dotcom/Hanchi-Care-LTD.git
cd Hanchi-Care-LTD

# Install dependencies
pnpm install
# or
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Setup database
npx prisma migrate dev --name init
npx prisma db seed

# Run development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Database Schema

Core entities:
- `User` (base) → `Customer`, `Staff`, `Admin`
- `Shift` (available shifts)
- `ShiftBooking` (booked shifts with hours)
- `Payment` (customer payments, staff payouts)
- `PremiumSubscription` (customer premium tiers)
- `Review` (caregiver ratings and feedback)
- `VacationTime` (automatic vacation accrual)
- `AuditLog` (admin activity tracking)
- `Document` (certifications, background checks)

See [docs/DATABASE_SCHEMA.md](docs/DATABASE_SCHEMA.md) for complete schema.

## 📋 Development Roadmap

### Phase 1: MVP (Weeks 1-3)
- [ ] User authentication (3 roles)
- [ ] Basic dashboards
- [ ] Shift creation & booking
- [ ] Hours tracking
- [ ] Basic payments

### Phase 2: Core Features (Weeks 4-5)
- [ ] Premium subscriptions
- [ ] Vacation calculations
- [ ] Work history & analytics
- [ ] Admin audit logs

### Phase 3: Enhanced Features (Weeks 6-7)
- [ ] Ratings & reviews
- [ ] In-app messaging
- [ ] Email/SMS notifications
- [ ] Background verification

### Phase 4: Polish & Scale (Ongoing)
- [ ] Advanced analytics
- [ ] Dispute resolution
- [ ] Mobile app
- [ ] International payments

## 🔒 Security

- JWT-based authentication
- Password hashing with bcrypt
- Environment variable encryption
- HTTPS enforced
- Rate limiting on API endpoints
- SQL injection prevention (Prisma)
- CORS configuration
- Complete audit logs
- Two-factor authentication ready
- Regular security updates

## 🧪 Testing

```bash
# Run tests
pnpm test

# Watch mode
pnpm test:watch

# Coverage
pnpm test:coverage
```

## 📚 Documentation

- [Database Schema](docs/DATABASE_SCHEMA.md)
- [API Documentation](docs/API_DOCUMENTATION.md)
- [Setup Guide](docs/SETUP_GUIDE.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit: `git commit -m 'Add amazing feature'`
3. Push: `git push origin feature/amazing-feature`
4. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For issues or questions, please open a GitHub issue.

## 🎯 Future Enhancements

- [ ] AI-powered shift recommendations
- [ ] Automated compliance reporting
- [ ] Advanced scheduling algorithms
- [ ] Video verification for staff
- [ ] Multi-language support
- [ ] Offline mode
- [ ] Integration with payroll systems
- [ ] Advanced fraud detection

---

**© 2026 Hanchi Care LTD. All rights reserved.**

*Committed to providing professional, reliable, and compassionate care services.*