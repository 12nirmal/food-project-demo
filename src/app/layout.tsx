import MianHader from "@/components/main-hader/main-header";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MianHader />
        {children}
      </body>
    </html>
  );
}
