import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "SkillOrbit itc",
  description: "SkillOrbit IT center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className="bg-white container mx-auto bg-gradient-to-b from-[#CECA30] via-[#2554A4] to-[#32A1DA]"> */}
      <body className=" container mx-auto bg-white ">

        <div className=" ">
        <Navbar />
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
