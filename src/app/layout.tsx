import type { Metadata } from "next";
import { Merriweather, Lato } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Bright Torch Consulting - Illuminate What's Possible",
  description: "Helping organizations turn strategy into results through people, process, and purpose. Making change clear, intentional, and sustainable.",
  keywords: "organizational transformation, strategy execution, change management, consulting, leadership",
  authors: [{ name: "Nicholas Hymer" }],
  openGraph: {
    title: "Bright Torch Consulting",
    description: "Illuminate what's possible. Helping organizations turn strategy into results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
