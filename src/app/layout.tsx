import type { Metadata } from "next";
import "./globals.css";
import Header from "@/pages/Header/page";


export const metadata: Metadata = {
  title: "SnippetHub",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="root" className="dark bg-background text-text">
        <Header/>
        {children}</body>
    </html>
  );
}
