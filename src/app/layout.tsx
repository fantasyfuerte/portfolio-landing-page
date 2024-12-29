import type { Metadata } from "next";
import "./globals.css";
import {Urbanist} from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
})

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
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
