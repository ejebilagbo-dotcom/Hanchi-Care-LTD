# Hanchi Care LTD - Setup Guide

This guide will help you get Hanchi Care LTD running locally on your machine.

## Prerequisites

Before you begin, make sure you have:

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm**, **yarn**, or **pnpm** (comes with Node.js, or install separately)
- **Git** ([Download](https://git-scm.com/))
- **PostgreSQL** 13+ locally or cloud-hosted ([PostgreSQL](https://www.postgresql.org/), [Heroku Postgres](https://www.heroku.com/postgres), [Supabase](https://supabase.com/))

## Step 1: Clone the Repository

```bash
git clone https://github.com/ejebilagbo-dotcom/Hanchi-Care-LTD.git
cd Hanchi-Care-LTD
```

## Step 2: Install Dependencies

Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

## Step 3: Setup Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Now edit `.env.local` and fill in your values:

### Database Setup

**Option A: Local PostgreSQL**

1. Make sure PostgreSQL is running
2. Create a new database:
   ```bash
   createdb hanchi_care
   ```
3. Add to `.env.local`:
   ```
   DATABASE_URL="postgresql://postgres:password@localhost:5432/hanchi_care"
   ```

**Option B: Supabase (Recommended for Development)**

1. Go to [supabase.com](https://supabase.com/)
2. Create a new project
3. Copy the connection string from Project Settings → Database
4. Add to `.env.local`:
   ```
   DATABASE_URL="postgresql://[user]:[password]@[host]:[port]/[database]"
   ```

**Option C: Heroku Postgres**

1. Create a Heroku app with PostgreSQL addon
2. Copy the DATABASE_URL from Config Vars
3. Add to `.env.local`:
   ```
   DATABASE_URL="postgres://[user]:[password]@[host]:[port]/[database]"
   ```

### NextAuth Setup

Generate a secret for NextAuth:

```bash
# On macOS/Linux:
openssl rand -base64 32

# On Windows (PowerShell):
[Convert]::ToBase64String((1..32 | ForEach-Object { [byte](Get-Random -Maximum 256) }))
```

Add to `.env.local`:
```
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-generated-secret-here"
```

### Stripe Setup

1. Create a [Stripe](https://stripe.com) account
2. Go to Developers → API Keys
3. Copy the Publishable and Secret keys
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_WEBHOOK_SECRET="whsec_..."
   ```

### AWS S3 Setup (Optional, for file uploads)

1. Create an [AWS](https://aws.amazon.com) account
2. Create S3 bucket
3. Create IAM user with S3 access
4. Add to `.env.local`:
   ```
   AWS_ACCESS_KEY_ID="your-access-key"
   AWS_SECRET_ACCESS_KEY="your-secret-key"
   AWS_S3_BUCKET_NAME="hanchi-care-bucket"
   AWS_REGION="us-east-1"
   ```

### Other Services (Optional)

Email service (SendGrid):
```
SENDGRID_API_KEY="your-sendgrid-api-key"
```

SMS service (Twilio):
```
TWILIO_ACCOUNT_SID="your-account-sid"
TWILIO_AUTH_TOKEN="your-auth-token"
TWILIO_PHONE_NUMBER="+1234567890"
```

Redis (for caching):
```
REDIS_URL="redis://localhost:6379"
```

## Step 4: Setup Database

### Initialize the Database

```bash
npx prisma migrate dev --name init
```

This will:
1. Create all tables in your database
2. Generate Prisma Client
3. Run any seed files

### (Optional) Seed with Sample Data

```bash
npx prisma db seed
```

### View Database (Optional)

```bash
npx prisma studio
```

This opens a GUI to view and edit your database at `http://localhost:5555`

## Step 5: Run the Development Server

```bash
pnpm dev
```

Or with npm:
```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

## Step 6: Create Your First Admin Account

1. Go to `http://localhost:3000/signup`
2. Sign up with your email
3. You'll need to manually set your role to ADMIN in the database for now:

   ```bash
   npx prisma studio
   ```
   
   Or via SQL:
   ```sql
   UPDATE users SET role = 'ADMIN' WHERE email = 'your-email@example.com';
   ```

## Useful Commands

### Development
```bash
pnpm dev           # Start development server
pnpm build         # Build for production
pnpm start         # Start production server
pnpm lint          # Run linter
```

### Database
```bash
npx prisma migrate dev      # Create and run migration
npx prisma migrate deploy   # Deploy migrations
npx prisma db seed          # Seed database
npx prisma studio           # Open Prisma Studio
npx prisma generate         # Generate Prisma Client
```

### Testing
```bash
pnpm test                # Run tests
pnpm test:watch         # Run tests in watch mode
pnpm test:coverage      # Generate coverage report
```

## Project Structure

```
hanchi-care/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Protected routes
│   ├── api/               # API endpoints
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/            # Reusable components
├── lib/                   # Utility functions
├── prisma/
│   └── schema.prisma     # Database schema
├── public/               # Static assets
├── docs/                 # Documentation
├── .env.example          # Environment template
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill the process using port 3000
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Database Connection Error

- Check that PostgreSQL is running
- Verify DATABASE_URL is correct
- Make sure the database exists
- Check username and password

### Prisma Migration Issues

```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Or create a new migration
npx prisma migrate dev --name describe_your_changes
```

### Node/npm Version Issues

```bash
# Check versions
node --version
npm --version

# Update npm
npm install -g npm@latest

# Use nvm to switch Node versions
nvm install 18
nvm use 18
```

## Next Steps

1. Review the [Database Schema](DATABASE_SCHEMA.md)
2. Check the [API Documentation](API_DOCUMENTATION.md)
3. Start building features!
4. When ready, see [Deployment Guide](DEPLOYMENT.md)

## Getting Help

- Check the [README](../README.md)
- Review [Database Schema](DATABASE_SCHEMA.md)
- Check [API Documentation](API_DOCUMENTATION.md)
- Open an issue on GitHub

---

**Happy coding! 🚀**
