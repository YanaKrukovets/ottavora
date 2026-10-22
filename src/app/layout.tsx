import type { Metadata } from "next";
import { Fraunces, Hedvig_Letters_Sans } from "next/font/google";
import { CartProvider } from "@/components/cart";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const hedvig = Hedvig_Letters_Sans({
  variable: "--font-hedvig",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Handmade Art by Ottawa Artists | Ottavora",
  description:
    "Shop original paintings, prints, ceramics, and other handmade work from independent Ottawa artists and makers. Online only, delivered across Canada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" className={`${fraunces.variable} ${hedvig.variable} antialiased`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
