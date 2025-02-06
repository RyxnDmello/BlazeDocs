import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Roboto, Roboto_Flex } from "next/font/google";

import "./globals.css";

const robotoSans = Roboto({
  variable: "--roboto",
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin", "greek"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoFlex = Roboto_Flex({
  variable: "--roboto-flex",
  display: "swap",
  style: ["normal"],
  subsets: ["latin", "greek"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
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
      <body
        className={`${robotoSans.variable} ${robotoFlex.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
