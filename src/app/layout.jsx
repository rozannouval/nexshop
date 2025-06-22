import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import QueryProvider from "@/providers/QueryProvider";
import Footer from "@/components/Footer";

const getPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "500", "700"],
});

export const metadata = {
  title: "Nexovic SHOP",
  description: "Nexovic by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${getPoppins.variable} antialiased`}>
        <QueryProvider>
          <Navbar />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
