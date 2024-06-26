import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { App } from "./app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UFU - Attendance",
  description: "Website created to help with attendance control.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <App>
          {children}
        </App>
      </body>
    </html>
  );
}