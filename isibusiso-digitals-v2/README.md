# iSibusiso Digital Experiences

A modern business website for **iSibusiso Digital Experiences**, built with React, TypeScript, Vite, Tailwind CSS and an Express API.

The project combines a responsive marketing site with a small backend responsible for contact-form validation, persistence and email notifications.

## Architecture


Browser
  |
  +--> React + TypeScript + Vite
  |      |
  |      +--> Wouter routing
  |      +--> Tailwind CSS
  |      +--> React Hook Form + Zod validation
  |      +--> React Query mutation
  |      +--> Google Analytics (consent-based)
  |
  +--> POST /api/contact
           |
           +--> Express
           +--> Zod validation
           +--> Storage
           |     +--> Development: in-memory storage
           |     +--> Production: SQL Server via Tedious
           |
           +--> Nodemailer / Gmail SMTP

## Main Features

- Responsive home page with hero, services, process and contact sections.
- Dedicated `/pricing` page using the shared navigation and footer layout.
- Contact form with client- and server-side validation.
- Contact enquiries saved in development memory or production SQL Server.
- Email notification through Gmail SMTP.
- Cookie-consent controlled Google Analytics page views.
- Reusable UI primitives for buttons, cards, forms, inputs and notifications.
- TypeScript across the application and server code.

## Project Structure


src/
├── components/
│   ├── analytics/       # Cookie consent and Google Analytics
│   ├── layout/          # Navbar and footer
│   ├── sections/        # Hero, services, process, pricing and contact
│   └── ui/              # Reusable UI primitives
├── pages/               # Home, pricing and 404 pages
├── lib/                 # Shared utilities and React Query client
├── assets/              # Page and service imagery
├── App.tsx              # Application providers and routing
├── layout.tsx           # Shared layout for secondary pages
└── main.tsx             # React entry point

server/
├── db.ts                # Production SQL Server connection
├── mail.ts              # Gmail SMTP email service
├── middleware.ts        # Request logging and error handling
├── routes.ts            # API routes
├── schema.ts            # Shared server validation schema
├── static.ts            # Production static-file serving
├── storage.ts           # Development/production persistence abstraction
└── vite.ts              # Development Vite middleware


## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The development server runs the Express API and Vite development middleware together.

## Production Build

```bash
npm run build
npm start
```

The build has separate server and client steps:

- `build:server` compiles the TypeScript Express server into `dist/server`.
- `build:client` creates the Vite production bundle.
- `build` runs both steps.
