import type { Metadata } from "next"; 
import { Inter } from "next/font/google";
import Header from './components/common/header/Header'; // Ensure this path is correct
import Footer from './components/common/footer/Footer';
import "./globals.css"; 
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Vision Groww",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
      <Header />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
