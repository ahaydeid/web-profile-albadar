import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SMKS Al-Badar Tangerang",
  description: "Website official SMKS Al Badar Tangerang - Banten",
  icons: {
    icon: "/assets/icons/albadar-logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <main className="flex-grow">
          <div className="main-container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
