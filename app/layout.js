import { roboto } from "@/fonts/fonts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Nexacreatives digital solutions",
  description: "Website to showcase our services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} overflow-x-hidden scroll-smooth`}>
        <Header />
        {children}
        <Footer className="px-6 lg:px-24 mx-auto" />
      </body>
    </html>
  );
}
