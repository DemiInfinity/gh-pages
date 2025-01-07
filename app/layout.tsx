import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demi Taylor Nimmo - Professional Software Developer & Computer Scientist",
  description: "Explore the portfolio of Demi Taylor Nimmo, a highly skilled software developer with a strong background in computer science. Specializing in full-stack development, Tailwind CSS, and TypeScript, Demi creates robust and innovative solutions. Discover projects, skills, and the journey of a passionate developer dedicated to pushing the boundaries of technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
