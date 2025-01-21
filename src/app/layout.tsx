// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import QueryProvider from "../components/QueryProvider"; // Import QueryProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo List App",
  description: "A Next.js 14 Todo List app with React Query, MUI, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning={true}>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
