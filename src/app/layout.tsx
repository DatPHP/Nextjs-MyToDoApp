// src/app/layout.tsx
import "./globals.css";
import QueryProvider from "../components/QueryProvider"; // Import QueryProvider
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Optional: Customize weights
});

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
    <html
      lang="en"
      className={roboto.className}
      suppressHydrationWarning={true}
    >
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
