import type { Metadata } from "next";
import "@/styles/style.scss";
import PopupControler from "@/components/ui/PopupControler";
import BottomSheetControler from "@/components/ui/BottomSheetControler";

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
    <html lang="en">
      <body>
        {children}
        <PopupControler />
        <BottomSheetControler />
      </body>
    </html>
  );
}
