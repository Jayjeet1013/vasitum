import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "Vasitum  ",
  description: "All-in-one recruitment automation platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      > 
        <Nav />
        <Menu />
        {children}
      </body>
    </html>
  );
}
