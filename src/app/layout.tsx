import type { Metadata } from "next";
import "@/styles/main.sass"
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "Landrup Dans",
  description: "Landrup Dans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
