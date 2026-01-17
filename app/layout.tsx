"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode, useState } from "react";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false); // pass isOPen to sidebar and setIsOpen to header
  // remember to focus on nav on open
  console.log(isOpen);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`} // TODO manipulate this for dark vs light mode toggle
      >
        <Header setIsOpen={setIsOpen} />
        {children}
        <footer>TODO: Insert footer here</footer>
      </body>
    </html>
  );
}
