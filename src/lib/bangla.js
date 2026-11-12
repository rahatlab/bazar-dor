const BN = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
const EN = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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

// Percent badge: formatPercent(2.1) → "২.১" (drop trailing .0)
export const formatPercent = (n) => toBn(Number(n).toFixed(1).replace(/\.0$/, ""));
