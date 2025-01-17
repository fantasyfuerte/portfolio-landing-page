import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Landing Page",
  description: "A portfolio landing page for practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} select-none`}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
