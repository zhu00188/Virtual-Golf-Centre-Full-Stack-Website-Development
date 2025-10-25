# Virtual Golf Centre — Full Stack Website

> Client-facing project

This repository contains a full-stack web application built as a client-facing industry project for Algonquin College. The app is a reservation/booking website for a virtual golf centre. It demonstrates a modern React/Next.js full-stack setup with server components, API routes, and a Prisma-based PostgreSQL backend.

## At a glance

- Tech stack: Next.js (App Router), TypeScript, React, Prisma, PostgreSQL, Tailwind CSS (PostCSS), React Hook Form, Zod, React Query
- ORM & migrations: Prisma (see `prisma/` folder with `schema.prisma` and migrations)
- Packaging: Node.js, npm
- Primary features: booking system, availability checks, service definitions, customer signup/booking, admin endpoints and booking management

## Features implemented

- Public Service Pages: Explore available services and bays with a clean, intuitive layout following consistent style guidelines (color palette, typography, spacing).
- Responsive & Adaptive UI: Tailwind/PostCSS-based components with flexible grids and fluid layouts, ensuring seamless usability on phones, tablets, and desktops.
- Design & UX Principles: Visual hierarchy, spacing, and interactive elements applied consistently to enhance usability and maintain a professional look.
- Booking Flow: Complete reservation process including date/time selection, party size, customer details, and confirmation — designed for clarity and ease of use across all devices.
- Admin Management: API routes for adding availability, listing bookings, and managing reservations, following a structured, maintainable code design.
- Availability & Conflict Prevention: Backend logic with Prisma and database constraints to prevent booking conflicts and ensure reliable data handling.
- Prisma Migrations & Typed Client: Strongly-typed database client with schema migrations for maintainability and scalability.

## Setup and run

1. Clone the repo.

```
powershell
git clone https://github.com/zhu00188/Virtual-Golf-Centre-Full-Stack-Website-Development.git
cd Virtual-Golf-Centre-Full-Stack-Website-Development
npm install
```

2. Create `.env` with `DATABASE_URL` (and `SHADOW_DATABASE_URL` if using Prisma migrate dev with shadow DB).

3. Prepare the database (generate client and run migrations):

```powershell
npx prisma generate
npx prisma migrate dev --name init
```

4. Start the development server:

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

