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
      <body id="root" className="dark bg-background-50 text-text-950">
        <Header/>
        <div className="w-full h-full relative">
          <div className="w-full md:w-3/12 min-w-80 fixed top-10 h-full"><SideMenuBar/> </div>
          <div className="md:w-9/12 w-11/12">{children}</div>
        </div>
        </body>
    </html>
  );
}
