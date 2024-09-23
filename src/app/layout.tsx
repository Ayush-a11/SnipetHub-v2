"use client"
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/pages/Header/page";
import { HashLoader } from "react-spinners";
import SideMenuBar from "@/pages/SideMenuBar/page"
import { useState } from "react";


// export const metadata: Metadata = {
//   title: "SnippetHub",
//   description: "...",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarWidth,setSidebarWidth] =useState(false);

  return (
    <html lang="en">
      <body id="root" className="dark bg-background-50 text-text-950">
        <Header/>
        <div className="w-full h-full relative flex">
          <div className={` ${sidebarWidth?'md:w-3/12 min-w-80':'w-0'} fixed top-10 h-full z-30`}><SideMenuBar setSidebarWidth={setSidebarWidth}/> </div>
          <div className={` flex justify-center ${sidebarWidth?'md:w-9/12 w-11/12 absolute right-0':'w-full mt-20'}  top-20 `}>
          <div className="max-w-[1200px] w-full">{children}</div>
          
          </div>
        </div>
        </body>
    </html>
  );
}
