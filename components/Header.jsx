"use client";
import Image from "next/image";
import logoDark from "../public/DarkLogo.png";
import logoWhite from "../public/logo-white.png";
import { FiAlignLeft } from "react-icons/fi";
import { MdOutlineExpandMore } from "react-icons/md";
import { useTheme } from "next-themes";
import Link from "next/link";
import { navLinks, subServices } from "@/constants";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import Button from "./Button";

const Header = () => {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(null);
  const [menu, setMenu] = useState();
  const [subMenu, setSubMenu] = useState(false);

  return (
    <nav
      className={` ${
        theme === "dark" ? "text-slate-100" : "text-blue-950"
      } flex items-center justify-between z-50 container px-6 absolute top-4 lg:px-36 mx-auto bg-transparent`}
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
              index === i && index != 2 ? "font-bold" : ""
            } transition-all`}
          >
            {i === 2 ? (
              <span className="flex menu items-center gap-2">
                {link.name} <MdOutlineExpandMore />
                <ul
                  className={`${
                    theme === "dark" ? "bg-blue-950" : "bg-white shadow-md"
                  } hidden showMenu p-6 rounded-md flex-col absolute gap-4 z-50 top-8`}
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
          menu ? "move-in " : "move-out"
        } lg:hidden flex flex-col justify-normal p-6 left-0 w-6/12 absolute   h-[1000px] scroll-smooth -top-4  z-50 gap-y-8`}
      >
        {navLinks.map((link, i) => (
          <Link key={link.name} href={link.href}>
            {i === 2 ? (
              <div className="flex flex-col">
                <span className="flex justify-between items-center">
                  {link.name}{" "}
                  {!subMenu ? (
                    <BiPlus
                      className="bg-blue-700 transition duration-300 ease-in-out"
                      style={{ fontSize: "1.5em" }}
                      onClick={() => setSubMenu(true)}
                    />
                  ) : (
                    <BiMinus
                      className="bg-blue-700 transition duration-300 ease-in-out"
                      style={{ fontSize: "1.5em" }}
                      onClick={() => setSubMenu(false)}
                    />
                  )}
                </span>
                <hr className="h-1 w-full mt-2" />
                <ul
                  className={`${
                    subMenu ? "show" : "hide"
                  } flex flex-col ml-4 gap-2 text`}
                >
                  {subServices.map((sublink) => (
                    <Link
                      key={sublink.name}
                      href={sublink.href}
                      onClick={() => setMenu(false)}
                    >
                      <span className="flex flex-col justify-center gap-2">
                        <span className="hover:text-brightRed transition-colors duration-300 ease-linear">
                          {sublink.name}
                        </span>
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
        <Button className="block md:hidden" name="Get a quote" />
      </ul>

      <div
        onClick={() => setMenu(false)}
        className={`${menu ? "overlay z-30" : ""} `}
      ></div>

      {/* end of mobile menu */}
      <Button name="Get a quote" className="hidden md:block" />
    </nav>
  );
};

export default Header;
