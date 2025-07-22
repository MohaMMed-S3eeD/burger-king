import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";


const flameBold = localFont({
  src: "../fonts/FlameBold.otf",
  variable: "--font-flame-bold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Burger King - Home of the Whopper",
  description: "Discover flame-grilled burgers, crispy fries, and refreshing drinks at Burger King. Order online for pickup or delivery.",
  keywords: "burger, fast food, Whopper, flame-grilled, delivery, pickup, Burger King",
  openGraph: {
    title: "Burger King - Home of the Whopper",
    description: "Discover flame-grilled burgers, crispy fries, and refreshing drinks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burger King - Home of the Whopper",
    description: "Discover flame-grilled burgers, crispy fries, and refreshing drinks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${flameBold.variable} antialiased`}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
