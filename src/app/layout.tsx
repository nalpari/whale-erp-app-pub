import type { Metadata } from "next";
import "@/styles/style.scss";

export const metadata: Metadata = {
  title: "Whale ERP",
  description: "Whale ERP Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
