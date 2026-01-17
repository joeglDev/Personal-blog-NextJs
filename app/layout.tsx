"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode, useState } from "react";
import { Header } from "@/components/Header";
import { NavSidebar } from "@/components/NavSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`} // TODO manipulate this for dark vs light mode toggle
      >
        <Header setIsOpen={setIsOpen} />
        <SidebarProvider open={isOpen} onOpenChange={setIsOpen}>
          <NavSidebar />
          <main>{children}</main>
        </SidebarProvider>
        <footer>TODO: Insert footer here</footer>
      </body>
    </html>
  );
}
