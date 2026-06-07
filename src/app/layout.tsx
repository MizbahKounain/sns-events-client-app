import type { Metadata } from "next";
import { Playfair_Display, Syne } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SNS Events | Luxury Event Decoration",
  description: "Turning Celebrations Into Beautiful Memories — premium haldi, wedding, reception & party décor.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${syne.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
