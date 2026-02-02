"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode, useState } from "react";
import { Header } from "@/components/Header";
import { NavSidebar } from "@/components/NavSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    // `suppressHydrationWarning` is used to prevent React hydration mismatch warnings
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Header setIsOpen={setIsOpen} />
        <SidebarProvider open={isOpen} onOpenChange={setIsOpen}>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="dark"
            enableSystem={false}
          >
            <NavSidebar />
            <main>{children}</main>
          </ThemeProvider>
        </SidebarProvider>
        <Footer />
      </body>
    </html>
  );
}
