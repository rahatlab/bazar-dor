# 🛒 BazarDor

**Essential Commodity Prices at a Glance** — A modern web application displaying today's prices, yesterday's comparisons, and market-specific details for essential goods—including rice, lentils, oil, vegetables, fish, and meat—across various markets in Bangladesh.

## 🚀 Features

1. **Live Price Ticker** — An infinite scroll marquee right below the navigation displaying all product prices and their ▲▼ change indicators.
2. **Home Page Analytics** — "Prices Increased Today" (top 6) and "Prices Decreased Today" (top 6) sections + a responsive grid of all products."Prices Increased Today" (top 6) and "Prices Decreased Today" (top 6) sections + a responsive grid of all products.
3. **Category Page + Sorting** — Default / Low to High / High to Low sorting (numeric-based), along with skeleton loaders and empty states.
4. **Product Detail (Protected)** — Restricted access requiring login; displays minimum/maximum/average prices alongside a 12-market price comparison table.
5. **Authentication** — Email/Password + Google + GitHub sign-in/up using BetterAuth, complete with toast notifications.
6. **Profile & Updates** — Profile page, name update route, and sign out; supports Bengali numerals (e.g., ১৪৮) and is fully responsive across the entire site.

## 🛠️ Technologies

- **Next.js 16** (App Router, JavaScript)
- **Tailwind CSS 4 + daisyUI 5** — styling & responsiveness
- **BetterAuth** — email/password + Google + GitHub auth
- **MongoDB** — BetterAuth-er jonno users & sessions store
- **react-hot-toast** — notification
- **Noto Serif Bengali** — Bengali typography
- ডেটা: Programming Hero BazarDor API

## ⚙️ Setup

```bash
git clone <your-repo-url>
cd bazar-dor
npm install
cp .env.example .env
npm run dev
```

`.env`-e অবশ্যই পূরণ করুন:

- `MONGODB_URI` — MongoDB Atlas connection string (BetterAuth-er jonno)
- `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`
- `GOOGLE_CLIENT_ID/SECRET`, `GITHUB_CLIENT_ID/SECRET` (ঐচ্ছিক — social login-er jonno)

## 📦 Build & Deploy

```bash
npm run build
npm run start
```

Vercel-এ deploy করতে সব env variable সেটিংসে যোগ করুন।

## 📬 Submission

- **Live Link:** _\[add after deploy\]_
- **GitHub Repository Link:** _\[add\]_
