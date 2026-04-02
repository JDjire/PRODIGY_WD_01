# Secure User Authentication System

Full-stack authentication system built with Next.js App Router, NextAuth.js, MongoDB, JWT sessions, and bcrypt password hashing.

## Features

- User registration with strong password validation
- Credentials login powered by NextAuth.js
- Password hashing with bcrypt
- JWT-based session handling
- Protected dashboard route
- Responsive glassmorphism UI with alerts and loading states
- MongoDB integration through Mongoose
- Deployment-ready configuration for Vercel

## Tech Stack

- Next.js
- React
- Tailwind CSS
- NextAuth.js
- MongoDB Atlas
- Mongoose
- bcrypt
- JWT sessions

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create an environment file:

```bash
cp .env.example .env.local
```

3. Add your values to `.env.local`:

- `MONGODB_URI`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Pages

- `/` - landing page
- `/register` - user registration
- `/login` - user login
- `/dashboard` - protected user dashboard

## Deployment

Deploy on Vercel and add the same environment variables in your Vercel project settings. Use MongoDB Atlas as the hosted database.

## Author

Jiregna Dereje
