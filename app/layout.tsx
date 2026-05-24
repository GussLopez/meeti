import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { GeneratePageTitle } from "@/src/shared/utils/metadata";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: GeneratePageTitle('Next'),
  description: "Proyecto Meeti Next.js on DrizzleORM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} h-full antialiased bg-white`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Toaster
        position="top-right"
      />
    </html>
  );
}
