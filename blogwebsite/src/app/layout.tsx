import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";

const inter = Inter({subsets:['cyrillic-ext'],weight:['400','700']})

export const metadata: Metadata = {
  title: "Blog Website",
  description: "A blogging website about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased `}
      >
        <Navbar/>
        <Profile/>
        {children}
      </body>
    </html>
  );
}
