import type { Metadata } from "next"; 
import Header from './components/common/header/Header'; // Ensure this path is correct
import Footer from './components/common/footer/Footer';
import "./globals.css"; 

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
      <body  >
      <Header />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
