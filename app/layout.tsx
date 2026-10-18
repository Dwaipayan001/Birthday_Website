import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--display", subsets: ["latin"], weight: ["400", "500", "600"] });
const sans = Manrope({ variable: "--sans", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const bengali = Noto_Serif_Bengali({ variable: "--bengali", subsets: ["bengali"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "For You, On Your Birthday",
  description: "A quiet birthday letter, written with admiration, gratitude, and no expectations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable} ${bengali.variable}`}>{children}</body></html>;
}
