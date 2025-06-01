import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/helper/scroll-to-top";
import Navbar from "@/components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Objection of the Finance Bill 2025 (National Assembly Bills No. 19 of 2025",
  description:
    "The 2025 Finance Bill proposed the deletion of Section 59A(1B) in the Tax Procedures Act, which prohibits KRA from accessing Mpesa Personal Data. Submit your Memoranda",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
