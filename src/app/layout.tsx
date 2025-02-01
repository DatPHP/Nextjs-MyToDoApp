// src/app/layout.tsx
import "./globals.css";
import QueryProvider from "../components/QueryProvider";
import { roboto } from "@fonts/fonts";

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={roboto.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
