"use client";

import AppNavbar from "@/components/app-navbar";
import Providers from "@/components/providers";

import "./globals.css";

// const metadata: Metadata = {
//   title: "Blog Leurjim",
//   description: "Blog creado en Nextjs, Tailwind",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <title>Blog Leao Urbina</title>
        <meta name="description" content="Blog creado en Nextjs, Tailwind" />
      </head>
      <body className="h-screen w-screen">
        <Providers>
          <AppNavbar />
          <main className="flex-grow overflow-auto bg-[url(/light-bg.svg)] bg-cover bg-repeat dark:bg-[url(/dark-bg.svg)]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
