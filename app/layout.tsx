'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ReactNode, useState} from "react";
import {Button} from "@/components/ui/button";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>TODO: Insert header here</header>
        <Button aria-label="Click to open navigation drawer." onClick={() => setIsOpen(true)}>≣</Button>
        {children}
        <footer>TODO: Insert footer here</footer>
      </body>
    </html>
  );
}
