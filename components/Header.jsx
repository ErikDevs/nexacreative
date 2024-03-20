"use client";
import Image from "next/image";
import logoDark from "../public/DarkLogo.png";
import logoWhite from "../public/logo-white.png";
import { TiAdjustBrightness } from "react-icons/ti";
import { TiAdjustContrast } from "react-icons/ti";
import { FiAlignLeft } from "react-icons/fi";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

import { useTheme } from "next-themes";
import Link from "next/link";
import { navLinks, subServices } from "@/constants";
import { useState } from "react";
import { sora } from "@/fonts/fonts";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [index, setIndex] = useState(0);
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  return (
    <nav
      className={`${sora.className}  flex items-center justify-between z-50  h-20 container px-6 lg:px-20 mx-auto`}
    >
      {/* logo */}
      <div className="lg:hidden cursor-pointer z-50 hover:scale-105">
        <FiAlignLeft
          onClick={() => setMenu(!menu)}
          style={{ fontSize: "2em" }}
        />
      </div>
      <div className="w-32">
        <Link href="/">
          <Image
            className="transition duration-150"
            src={theme == "dark" ? logoWhite : logoDark}
            alt="logo"
          />
        </Link>
      </div>
      {/* Menu items */}
      <ul className="hidden lg:flex space-x-6">
        {navLinks.map((link, i) => (
          <Link
            onClick={() => setIndex(i)}
            key={link.name}
            href={link.href}
            className={`${
              index === i ? "text-brightRed" : "hover-underline-animation"
            }  transition-all`}
          >
            <span className="flex justify-end items-center">
              {link.name}
              {!subMenu ? (
                <MdOutlineExpandMore
                  className={`${i === 2 ? "block" : "hidden"} ml-4`}
                  onClick={() => setSubMenu(!subMenu)}
                />
              ) : (
                <MdExpandLess
                  onClick={() => setSubMenu(false)}
                  className={`${i === 2 ? "block" : "hidden"} ml-4`}
                />
              )}
            </span>
            <div
              className={`${
                i === 2
                  ? `flex flex-col absolute top-16 z-50 rounded-md  w-72 p-6 shadow-md gap-y-5`
                  : "hidden"
              } ${
                theme === "dark" ? "text-white bg-black" : "text-black bg-white"
              } ${subMenu ? "opacity-1 visible" : "opacity-0 hidden"}`}
            >
              {subServices.map((subSevice, i) => (
                <Link
                  onClick={() => setSubMenu(!subMenu)}
                  className="hover-underline-animation"
                  key={i}
                  href={subSevice}
                >
                  {subSevice.name}
                </Link>
              ))}
            </div>
          </Link>
        ))}
      </ul>
      {/* mobile menu Menu items */}

      <ul
        className={`${theme === "dark" ? "bg-black" : "bg-white"} ${
          menu ? "move-in" : "move-out"
        } transition duration-300 ease-in-out lg:hidden flex flex-col justify-normal w-2/3 right-0  p-6 absolute top-0 h-[100vh] z-50 gap-y-8`}
      >
        {navLinks.map((link, i) => (
          <Link
            onClick={() => setIndex(i)}
            key={link.name}
            href={link.href}
            className={`${
              index === i ? "text-brightRed" : "hover-underline-animation"
            }  transition-all`}
          >
            <span className="flex items-center justify-between">
              {link.name}
              {!subMenu ? (
                <MdOutlineExpandMore
                  className={`${i === 2 ? "block" : "hidden"} ml-4`}
                  onClick={() => setSubMenu(!subMenu)}
                />
              ) : (
                <MdExpandLess
                  onClick={() => setSubMenu(false)}
                  className={`${i === 2 ? "block" : "hidden"} ml-4`}
                />
              )}
            </span>

            <div
              className={`${i === 2 ? `flex flex-col  gap-y-5` : "hidden"} ${
                theme === "dark" ? "text-white bg-black" : "text-black bg-white"
              } ${
                subMenu
                  ? "block h-[100%] transition duration-1000"
                  : "hidden h-[-100%] transition duration-1000"
              } lg:hidden  ease-in-out mt-2`}
            >
              {subServices.map((subSevice, i) => (
                <Link
                  onClick={() => setSubMenu(!subMenu)}
                  className="hover-underline-animation"
                  key={subSevice.name}
                  href={subSevice.href}
                >
                  {subSevice.name}
                </Link>
              ))}
            </div>
          </Link>
        ))}
        <button className="block md:hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline">
          Get a quote
        </button>
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
