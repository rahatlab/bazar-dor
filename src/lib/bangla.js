const BN = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
const EN = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const BN_MONTHS = [
  "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
  "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর",
];

const UNITS = {
  kg: "প্রতি কেজি",
  litre: "প্রতি লিটার",
  dozen: "প্রতি ডজন",
  piece: "প্রতি পিস",
};

// English digits → Bengali digits: toBn(148) → "১৪৮"
export const toBn = (n) => String(n).replace(/[0-9]/g, (d) => BN[+d]);

// Bengali/English digits + commas → number: parseBn("১,৮৫০") → 1850
export const parseBn = (s) => {
  const en = String(s)
    .replace(/[০-৯]/g, (d) => EN[BN.indexOf(d)])
    .replace(/[^0-9.]/g, "");
  return Number(en);
};

// Price display: formatPrice(1850) → "১,৮৫০"
export const formatPrice = (n) => toBn(Number(n).toLocaleString("en-US"));

// Percent badge: formatPercent(2) → "২.০" (always one decimal, design onujayi)
export const formatPercent = (n) => toBn(Number(n).toFixed(1));

// API unit → Bengali: unitBn("kg") → "প্রতি কেজি"
export const unitBn = (u) => UNITS[u] || u;

// Today's date: banglaDate() → "১২ নভেম্বর ২০২৬"
export const banglaDate = (d = new Date()) =>
  `${toBn(d.getDate())} ${BN_MONTHS[d.getMonth()]} ${toBn(d.getFullYear())}`;
