import type { Metadata } from "next";
import { Geist, Geist_Mono , Noto_Sans_Coptic } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";


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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${AveFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
