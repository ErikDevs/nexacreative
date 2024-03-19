"use client";
import Image from "next/image";
import logoDark from "../../public/DarkLogo.png";
import logoWhite from "../../public/logo-white.png";
import { TiAdjustBrightness } from "react-icons/ti";
import { TiAdjustContrast } from "react-icons/ti";
import { useTheme } from "next-themes";
import { sora } from "../fonts/fonts";
import NavLink from "./navLink";


const Header = () => {
  const { theme, setTheme } = useTheme();
 

  return (
    <nav
      className={`${sora.className}  flex items-center justify-between z-50  h-20 container px-6 lg:px-24 mx-auto`}
    >
      {/* logo */}
      <div className="w-32">
        <Image
          className="transition duration-150"
          src={theme == "dark" ? logoWhite : logoDark}
          alt="logo"
        />
      </div>
      {/* Menu items */}
      <ul className="hidden lg:flex space-x-6">
        <NavLink />
      </ul>
      <div className="flex flex-row gap-8">
        <button className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline">
          Get a quote
        </button>
        {theme == "dark" ? (
          <button onClick={() => setTheme("light")}>
            <TiAdjustContrast
              className="scale transition duration-300 hover:scale-110"
              style={{ fontSize: "1.5em" }}
            />
          </button>
        ) : (
          <button
            className="hover:shadow-lg rounded-full px-2.5 py-2  transition duration-300"
            onClick={() => setTheme("dark")}
          >
            <TiAdjustBrightness
              className="scale transition duration-300 hover:scale-110"
              style={{ fontSize: "1.5em" }}
            />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
