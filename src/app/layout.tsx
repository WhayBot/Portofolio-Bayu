import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Bangkit Bayu Alfaris | Portfolio",
  description: "Ad Nova Per Aspera - Personal Portfolio of Bangkit Bayu Alfaris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col relative overflow-x-hidden pt-20">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
