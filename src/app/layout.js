import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Affan Qureshi",
  description: "Portfolio",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="48x48" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
