import type { Metadata } from "next";
import { Geist, Geist_Mono , Noto_Sans_Coptic } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "./ui/navbar";
import Sidebar from "./ui/sidebar";



const AveFont = localFont({
  src: '../public/fonts/BishoyNormal.ttf',
  variable: '--font-Ave', // Tailor this identifier name to match the font
});


const notoSansCoptic = Noto_Sans_Coptic({
  subsets: ['coptic'],
  weight: '400',
  variable: '--font-coptic', // CSS variable for easy targeting
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coptic",
  description: "Learn to speak Coptic Fast",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${AveFont.variable} ${notoSansCoptic.variable} h-full antialiased`}>
      <body className="min-h-full bg-zinc-50 dark:bg-black text-foreground font-sans flex flex-col">
        
        {/* 🗺️ THE MASTER HEADER: Renders top bar links on desktop AND controls mobile sidebar */}
        <Navbar />

        {/* 🏢 THE DESKTOP MAIN WRAPPER FRAMEWORK */}
        {/* On desktop (md), grid carves 280px out on the left side, sitting right below the navbar */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[280px_1fr] w-full pt-16 md:pt-0">
          {/* Note: pt-[64px] prevents mobile screens from slipping behind the fixed top bar header header */}
          {children}
        </div>

      </body>
    </html>
  );
}