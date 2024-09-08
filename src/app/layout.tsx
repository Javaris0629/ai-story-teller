import type { Metadata } from "next";
import { Itim } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";

const itim = Itim({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dream Tales AI"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={itim.className}>
        <div className="h-screen">
          <Header />

          <main className="bg-gray-100">{children}</main>
        </div>
      </body>
    </html>
  );
}