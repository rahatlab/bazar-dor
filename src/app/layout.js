import { Noto_Serif_Bengali } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { getProducts } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";
import "./globals.css";

const bengali = Noto_Serif_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bn",
  display: "swap",
});

export const metadata = {
  title: "বাজার দর",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে — আজকের বাজারদর আপডেট",
};

export default async function RootLayout({ children }) {
  const products = await getProducts().catch(() => []);

  return (
    <html lang="bn" className={`${bengali.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <Ticker products={products} />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
