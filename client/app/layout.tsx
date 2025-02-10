import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Poppins, Orbitron } from "next/font/google";

import Navbar from "@components/Common/Navbar";

import "./globals.css";

const poppins = Poppins({
  variable: "--poppins",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const orbitron = Orbitron({
  variable: "--orbitron",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

interface RootLayoutProps {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
  title: "Blaze",
  description: "What is Blaze? The Blazingly Fast CLI",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${orbitron.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
