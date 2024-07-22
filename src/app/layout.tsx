import type { Metadata } from "next";
import "./globals.css";
import Header from "@/pages/Header/page";
import { HashLoader } from "react-spinners";
import SideMenuBar from "@/pages/SideMenuBar/page"


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
        <div className="w-full">
          <div className="w-1/3"><SideMenuBar/> </div>
          <div className="w-2/3">{children}</div>
        </div>
        </body>
    </html>
  );
}
