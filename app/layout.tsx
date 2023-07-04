import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vessel",
  description: "Our First Clothing brand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col")}>{children}</body>
    </html>
  );
}
