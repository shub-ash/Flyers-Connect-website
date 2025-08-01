import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Flyers Connect - Premium Mac Rentals for Smart Teams",
  description:
    "Rent MacBook Pros, iMacs, and Mac Minis - Delivered to Your Door. Premium Apple Mac product rentals for businesses and individuals across India.",
  keywords:
    "Mac rental, MacBook rental, iMac rental, Mac Mini rental, Apple rental India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
