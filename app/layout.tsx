import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Demi Taylor Nimmo - Full-Stack Developer | Software Engineer | Innovator",
  description:
    "Welcome to the portfolio of Demi Taylor Nimmo, a driven full-stack software developer and computer scientist with a passion for creating innovative digital solutions. Specializing in modern web technologies like TypeScript, React, and Tailwind CSS, Demi thrives on building intuitive, user-centric applications. Explore the projects, skills, and journey of a developer dedicated to pushing the boundaries of technology and making a lasting impact.",
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
