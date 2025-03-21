import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Music App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="relative w-full flex justify-center items-center">

        <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
