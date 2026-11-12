# 🛒 বাজার দর (BazarDor)

**প্রয়োজনীয় পণ্যের দাম এক নজরে** — বাংলাদেশের বিভিন্ন বাজারের চাল, ডাল, তেল, সবজি, মাছ, মাংসসহ প্রয়োজনীয় পণ্যের আজকের দাম, গতকালের তুলনা ও বাজারভিত্তিক বিস্তারিত দেখানে একটি আধুনিক ওয়েব অ্যাপ।

## 🚀 Features

1. **লাইভ প্রাইস টিকার** — নেভিগেশনের নিচে অসীম স্ক্রল মার্কিতে সব পণ্যের দাম ও ▲▼ পরিবর্তন।
2. **হোম পেজ বিশ্লেষণ** — আজ দাম বেড়েছে (top 6) ও কমেছে (top 6) সেকশন + সব পণ্যের রেসপন্সিভ গ্রিড।
3. **ক্যাটাগরি পেজ + সর্ট** — ডিফল্ট / দাম কম থেকে বেশি / বেশি থেকে কম (সংখ্যাভিত্তিক সর্ট), স্কেলেটন ও খালি অবস্থা।
4. **প্রোডাক্ট ডিটেইল (প্রোটেক্টেড)** — লগইন ছাড়া যায় না; সর্বনিম্ন/সর্বোচ্চ/গড় দাম ও ১২টি বাজারভিত্তিক টেবিল।
5. **অথেনটিকেশন** — BetterAuth দিয়ে ইমেইল/পাসওয়ার্ড + Google + GitHub সাইন ইন/আপ, টোস্ট নোটিফিকেশনসহ।
6. **প্রোফাইল ও আপডেট** — প্রোফাইল পেজ, নাম আপডেট রুট ও সাইন আউট; বাংলা সংখ্যা (১৪৮) ও পুরো সাইট রেসপন্সিভ।

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
