import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { SessionProviders } from "@/common/components/layouts/SessionProvider";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaBlog",
  description: "Blog for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <SessionProviders>{children}</SessionProviders>
      </body>
    </html>
  );
}
