import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import { Footer } from "@/feature/layout/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estetery",
  description:
    "A great platform to buy, sell, or even rent your properties without any commisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} h-full min-h-screen flex flex-col`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
