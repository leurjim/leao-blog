"use client";

import { Metadata } from "next";

import AppNavbar from "@/components/app-navbar";
import Providers from "@/components/providers";

import "./globals.css";

const metadata: Metadata = {
  title: "Blog Leurjim",
  description: "Blog creado en Nextjs, Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏽‍💻</text></svg>"
        />
      </head>
      <body className="h-screen w-screen">
        <Providers>
          <AppNavbar />
          <main className="flex-grow overflow-auto bg-[url(/light-bg.svg)] bg-cover bg-repeat dark:bg-[url(/dark-bg.svg)]">
            {children}
          </main>
        </Providers>
        ∫
      </body>
    </html>
  );
}
