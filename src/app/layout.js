import "./globals.css";
import { Inter } from "next/font/google";
import Script from 'next/script';
import * as gtag from './gtag';
import { GoogleAnalytics } from '@next/third-parties/google'



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saurabh Khanal",
  description: "Saurabh Khanal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <GoogleAnalytics gaId="G-J29553VS7F" />

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
