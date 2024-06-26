import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "rentNDrive",
  description: "Discover the best cars in the city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="relative">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
