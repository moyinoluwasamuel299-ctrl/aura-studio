import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

export const metadata = {
  title: "AURA® — Creative Studio",
  description:
    "An independent London creative studio shaping distinctive brands, digital experiences, and thoughtful design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
