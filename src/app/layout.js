import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokédex Next App",
  description: "Pokédex displays 151 first generation pokemon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`p-4 ${inter.className}`}>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
