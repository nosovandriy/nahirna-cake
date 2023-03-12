import Footer from "@footer/footer";
import Header from "@header/header";
import "@style/globals.scss";

import { Sofia_Sans, Inter } from "next/font/google";

const sofia = Sofia_Sans({
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--font-sofia",
});

const inter = Inter({
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--font-inter",
});

export const metadata = {
  title: "Nahirna cake",
  description: "Nahirna cake shop with cheesecake",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sofia.variable} flex min-h-screen flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
