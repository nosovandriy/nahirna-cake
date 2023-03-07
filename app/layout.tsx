import Header from "@header/header";
import "@style/globals.scss";

import { Sofia_Sans, Raleway } from "next/font/google";

const sofia = Sofia_Sans({
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--font-sofia",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-raleway",
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
      <body>
        <div className={`${raleway.variable} ${sofia.variable}`}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
