import {  DM_Sans } from "next/font/google";
import "./globals.css";

const specialelite = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});



export const metadata = {
  title: "Next-ECommerce",
  description: "Created by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${specialelite.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
