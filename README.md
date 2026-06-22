# Pet Project — Frontend

Client side of a pet project app. Next.js 16 + React 19 + TanStack Query

Backend lives in a separate repo: [pet-project-backend](https://github.com/LanselonX/pet-project-backend) (NestJS + Prisma + PostgreSQL)

## What it does

- Landing page
- Login / registration with automatic token refresh
- Menu with filtering by meal type (vegetarian, gluten free, low carb, and so on) and a full nutrition breakdown per meal
- Cart and checkout
- Your own orders and order details
- Admin panel: dashboard, tables for meals / orders / users, an editable meal form, and pending orders you can move through statuses in real time

## Stack

Next.js 16.1 on the App Router, React 19, Tailwind v4, and shadcn/ui for components. Server state runs through TanStack Query, tables through TanStack Table. HTTP is Axios with an interceptor that handles silent token refresh. Forms are React Hook Form + Zod, toasts are Sonner, icons are Lucide. Everything is TypeScript in strict mode

## How it's organized

The code is grouped by feature. Each feature keeps its own API calls, components, hooks, config and types together, so `auth`, `cart`, `meal`, `order`, `dashboard` and `users` are all self-contained. The `app/` folder only handles routing and layouts

```
src/
├── app/
│   ├── layout.tsx            # root layout: fonts, QueryProvider, Toaster
│   ├── page.tsx              # landing
│   ├── (root)/               # everything that sits under the public header
│   │   ├── layout.tsx        # renders <Header />
│   │   ├── auth/             # login / registration
│   │   ├── meals/            # menu
│   │   ├── cart/
│   │   └── order/            # your orders (note: singular)
│   └── admin/                # admin panel, has its own sidebar layout
│       ├── page.tsx          # dashboard
│       ├── meals/            # table + meals/[id] edit form
│       ├── orders/           # table + orders/[id] details
│       └── users/
│
├── middleware.ts             # keeps non-admins out of /admin
│
├── features/                 # auth, cart, meal, order, dashboard, users
├── components/
│   ├── shared/               # DataTable, header, sidebar, pagination, hero
│   └── ui/                   # shadcn base components
├── api/                      # axios instance + refresh interceptor
├── providers/                # QueryClientProvider
├── lib/                      # cn(), date formatting
└── types/                    # shared types
```

## Auth

Tokens live in `httpOnly` cookies that the backend sets, so the frontend never touches them directly. It only checks whether the `Authentication` cookie exists

That check happens in the `Header`, which is a Server Component. It reads the cookie on the server and passes a plain `isLoggedIn` flag down to the client header, which then decides whether to show Cart / Order / Logout or Login / Registration

When an access token expires, the Axios interceptor catches the 401 and refreshes the token without the user noticing. If the refresh itself fails, the user gets sent to `/auth`

Login and registration share a single `useAuthMutation` hook: it runs the request, shows a toast, then pushes to `/meals` and refreshes so the server-rendered header picks up the new cookie

## Admin guard

`middleware.ts` runs before admin pages load. It reads the `Authentication` cookie, decodes the JWT to look at the role, and if you're not an `ADMIN` it redirects you back to the landing page. This is just a UX gate — the real authorization check stays on the backend

## DataTable

All three admin tables use one generic `DataTable` component; only the column definitions differ per entity. Rows can be made clickable through a `getRowHref` prop, and meal/order rows also have an explicit action button that links to their edit or detail page

## Running it

You'll need Node 20+ and the backend running

```bash
git clone https://github.com/LanselonX/pet-project-frontend.git
cd pet-project-frontend
npm install
cp .env.example .env.local   # fill in the values below
npm run dev
```

Then open http://localhost:3000

## Environment

```env
# backend URL for client-side requests
NEXT_PUBLIC_API_URL=http://localhost:4000

# backend URL for server-side requests, also the rewrite target
API_PROXY_DESTINATION=http://localhost:4000

# refresh endpoint, used directly by the interceptor
NEXT_PUBLIC_REFRESH_URL=http://localhost:4000/auth/refresh
```

`API_PROXY_DESTINATION` is used in two places: as the server-side base URL and as the rewrite target in `next.config.ts`

## Related

- [pet-project-backend](https://github.com/LanselonX/pet-project-backend) — NestJS + Prisma + PostgreSQL
