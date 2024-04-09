import { jost } from "@/fonts/fonts";
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
      <body
        className={`${jost.className} w-screen overflow-x-hidden mx-auto`}
      >
        <div className="">
          <Header />
        </div>
        {children}
        <Footer className="px-6 lg:px-24 mx-auto" />
      </body>
    </html>
  );
}
