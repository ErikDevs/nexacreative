"use client";
import Image from "next/image";
import logoDark from "../public/DarkLogo.png";
import logoWhite from "../public/logo-white.png";
import { TiAdjustBrightness } from "react-icons/ti";
import { TiAdjustContrast } from "react-icons/ti";
import { FiAlignLeft } from "react-icons/fi";
import { MdOutlineExpandMore } from "react-icons/md";
import { useTheme } from "next-themes";
import Link from "next/link";
import { navLinks, subServices } from "@/constants";
import { useState } from "react";
import { sora } from "@/fonts/fonts";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(null);
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  return (
    <nav
      className={`${sora.className} ${
        theme === "dark" ? "text-slate-100" : "text-blue-950"
      } flex items-center justify-between z-50  h-20 container px-6 lg:px-20 mx-auto`}
    >
      {/* logo */}
      <div className="lg:hidden cursor-pointer z-50 hover:scale-105">
        <FiAlignLeft
          onClick={() => setMenu(true)}
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

      {/* Desktop Menu items */}
      <ul className="hidden lg:flex relative  space-x-6">
        {navLinks.map((link, i) => (
          <Link
            onClick={() => setIndex(i)}
            key={link.name}
            href={link.href}
            className={`${
              index === i && index != 2 ? "text-brightRed" : ""
            } transition-all`}
          >
            {i === 2 ? (
              <span className="flex menu items-center gap-2">
                {link.name} <MdOutlineExpandMore />
                <ul
                  className={`${
                    theme === "dark" ? "bg-black" : "bg-white shadow-md"
                  } hidden showMenu p-4 rounded-md flex-col absolute gap-4 z-50  top-6`}
                >
                  {subServices.map((subLink, i) => (
                    <Link
                      onClick={() => setIndex1(i)}
                      className={`${
                        index1 === i ? "text-brightRed" : ""
                      } hover:scale-105`}
                      key={subLink.name}
                      href={subLink.href}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </ul>
              </span>
            ) : (
              <span className="hover:text-brightRed transition color duration-150 ease-in-out">
                {link.name}
              </span>
            )}
          </Link>
        ))}
      </ul>

      {/* sub menu */}

      {/* mobile menu Menu items */}

      <ul
        className={`${
          theme === "dark" ? "bg-blue-950 text-white" : "bg-black text-white"
        } ${
          menu ? "move-in" : "move-out"
        } transition duration-300 ease-in-out lg:hidden flex flex-col justify-normal w-2/3 right-0  p-6 absolute top-0 h-[800px]  overflow-hidden pt-16 z-50 gap-y-8`}
      >
        {navLinks.map((link, i) => (
          <Link key={link.name} href={link.href}>
            {i === 2 ? (
              <div className="flex flex-col">
                <span className="flex gap-8 items-center">
                  {link.name}{" "}
                  {!subMenu ? (
                    <BiPlus
                      className="bg-blue-700"
                      style={{ fontSize: "1.5em" }}
                      onClick={() => setSubMenu(true)}
                    />
                  ) : (
                    <BiMinus
                      className="bg-blue-700"
                      style={{ fontSize: "1.5em" }}
                      onClick={() => setSubMenu(false)}
                    />
                  )}
                </span>
                <hr className="h-1 w-full mt-2" />
                <ul
                  className={`${
                    subMenu ? "flex opacity-100" : "hidden opacity-0"
                  } flex-col ml-4 gap-12" transition opacity duration-500  ease-in-out`}
                >
                  {subServices.map((sublink) => (
                    <Link key={sublink.name} href={sublink.href}>
                      <span className="flex flex-col justify-center gap-2">
                        {sublink.name}
                        <hr className="h-1 w-full" />
                      </span>
                    </Link>
                  ))}
                </ul>
              </div>
            ) : (
              <span className="flex flex-col justify-center">
                <span onClick={() => setMenu(false)}>{link.name}</span>
                <hr className="h-1 w-full mt-2" />
              </span>
            )}
          </Link>
        ))}
        <MdClose
          style={{ fontSize: "1.5rem" }}
          onClick={() => setMenu(false)}
          className="absolute top-6 hover:bg-red-500 transform transition duration-300"
        />
        <button className="block md:hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline">
          Get a quote
        </button>
      </ul>

      <div
        onClick={() => setMenu(false)}
        className={`${menu ? "overlay z-30" : ""}`}
      ></div>

      {/* end of mobile menu */}
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
