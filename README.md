This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project overview

Celtic Virtual Golf Website is a Next.js full‑stack prototype for a virtual golf centre. The project aims to provide a smooth online experience for browsing the venue, booking golf bays, managing memberships, and ordering food — covering the user flow from discovery to booking confirmation and basic admin management.

### Key implemented features
- Frontend pages and UI
  - Home page with hero, carousel, service cards, and quick actions (Sign up, Book a Tee Time).
  - About, Food & Drink, Booking entry pages and reusable UI components (`src/components`) such as `ExploreCarousel`, `FAQ`, and `SiteFooter`.
  - Responsive layout and styling with Tailwind CSS.
- Booking & membership flow
  - Member registration / login page skeletons.
  - Booking wizard UI with multiple steps: Contact → Service & Bay → Availability → Confirmation (placeholder UI exists and ready to be wired to API).
- API and persistence
  - App Router API route structure present for availability, bookings, bays, and services under `src/app/api`.
  - Prisma for database schema and migrations (`prisma/schema.prisma` and `prisma/migrations`).
- Admin / Dashboard
  - Admin and Dashboard page skeletons to manage bookings and resources.
- Client state & validation
  - Client-side data fetching and caching using React Query.
  - Forms & validation with react-hook-form and zod.
  - Date/time handling with react-day-picker and date-fns (+ date-fns-tz).
- Other
  - Email support via nodemailer (dependency present).
  - Static assets (images/icons) under `public/` used throughout the UI.

### Tech stack
- Framework: Next.js (App Router)
- Language: TypeScript + React
- Styling: Tailwind CSS
- ORM: Prisma
- Client libs: @tanstack/react-query, react-hook-form, zod
- Utilities: date-fns, react-day-picker, nodemailer

### Local development quick commands
1. Install dependencies:
```bash
npm install
```
2. Run development server:
```bash
npm run dev
```
3. Build & start:
```bash
npm run build
npm start
```

> Note: `package.json` uses Next.js turbopack for development and build by default.

### Database & migrations
- Prisma schema: `prisma/schema.prisma`. Migrations are in `prisma/migrations`.
- Typical steps:
  - Set `DATABASE_URL` in environment variables.
  - Run migrations: `npx prisma migrate dev`.
  - Seed (if needed): check `prisma/seed.ts`.

### Project layout (high level)
- `src/app/` — Next.js App Router pages and layout (`layout.tsx`, `page.tsx`).
- `src/components/` — UI components (carousel, booking pieces, footer, etc.).
- `src/lib/` — helpers (e.g., `prisma.ts`, `email.ts`).
- `prisma/` — Prisma schema, migrations, seed.
- `public/` — images and icons.