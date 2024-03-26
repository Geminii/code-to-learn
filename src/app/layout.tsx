import { Header } from "@/components/Header";
import { TITLE_BLOG } from "@/constants";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: TITLE_BLOG,
  description: "A blog about learning to code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("dark font-sans antialiased", fontSans.variable)}>
        <Header />
        <div className="container mx-auto max-w-5xl my-16 pt-12 px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
