"use client";
import Image from "next/image";
import logoDark from "../../public/DarkLogo.png";
import logoWhite from "../../public/logo-white.png";
import { TiAdjustBrightness } from "react-icons/ti";
import { TiAdjustContrast } from "react-icons/ti";

import { useTheme } from "next-themes";
import Link from "next/link";
import { sora } from "../fonts/fonts";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className={`${sora.className} container relative mx-auto px-6 z-20`}>
      <div className="flex items-center mt-10 justify-between">
        {/* logo */}
        <div className="w-36">
          <Image src={theme == "dark" ? logoWhite : logoDark} alt="logo" />
        </div>
        {/* Menu items */}
        <ul className="hidden md:flex space-x-6">
          <Link className="hover:text-brightRed" href="#">
            Home
          </Link>
          <Link className="hover:text-brightRed" href="#">
            Services
          </Link>
          <Link className="hover:text-brightRed" href="#">
            About Us
          </Link>
          <Link className="hover:text-brightRed" href="#">
            Portfolio
          </Link>
          <Link className="hover:text-brightRed" href="#">
            Contact
          </Link>
        </ul>
        <button className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline">
          Get Started
        </button>
        <div>
          {theme == "dark" ? (
            <button onClick={() => setTheme("light")}>
              <TiAdjustBrightness style={{ fontSize: "1.5em" }} />
            </button>
          ) : (
            <button onClick={() => setTheme("dark")}>
              <TiAdjustContrast style={{ fontSize: "1.5em" }} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
