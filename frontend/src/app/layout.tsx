import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./animations.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BexaVolt — Smart EV Charging for Modern Australian Homes",
  description: "BexaVolt delivers intelligent, safe and powerful home EV charging solutions. Get a free quote today and start charging smarter.",
  keywords: "EV charger, home EV charging, electric vehicle, Australia, smart charger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
