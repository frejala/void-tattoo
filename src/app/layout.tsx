import type { Metadata } from "next";
import { Oswald, Raleway, Rozha_One } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  display: "swap",
});

const rozhaOne = Rozha_One({
  variable: "--font-rozha-one",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${raleway.variable} ${rozhaOne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
