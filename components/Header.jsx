"use client";
import Image from "next/image";
import logoDark from "../public/DarkLogo.png";
import { FiAlignLeft } from "react-icons/fi";
import { MdOutlineExpandMore } from "react-icons/md";
import Link from "next/link";
import { navLinks, subServices } from "@/constants";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Header = () => {
  const [index1, setIndex1] = useState(null);
  const [index, setIndex] = useState(null);
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const pathName = usePathname();

  return (
    <nav className="text-darkBlue px-6 lg:px-28 bg-slate-100">
      <div className="container px-6 lg:px-10 py-4 justify-between items-center mx-auto flex">
        {/* logo */}
          <FiAlignLeft
            className="lg:hidden mr-60 md:mr-0"
            onClick={() => setMenu(true)}
            style={{ fontSize: "2em" }}
          />
          <Link href="/">
            <Image
              className="transition w-32 duration-150"
              src={logoDark}
              alt="logo"
            />
          </Link>

        {/* Desktop Menu items */}
        <ul className="hidden lg:flex relative gap-6">
          {navLinks.map((link, i) => {
            const isActive =
              pathName === link.href || pathName.startsWith(link.name);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${isActive ? "font-bold" : ""} transition-colors`}
              >
                {i === 2 ? (
                  <span className="flex menu items-center gap-2">
                    <span
                      onClick={() => setIndex(i)}
                      className={`${i === 2 ? "hover:font-bold" : ""}`}
                    >
                      {link.name}{" "}
                    </span>{" "}
                    <MdOutlineExpandMore />
                    <ul
                      className={`shadow-lg showMenu border-t-4 bg-white w-[300px] p-2 flex rounded-md flex-col absolute  z-50 top-14`}
                    >
                      {subServices.map((subLink, i) => (
                        <Link
                          onClick={() => setIndex1(i)}
                          className={`${
                            index1 === i ? "font-bold" : ""
                          } hover:bg-slate-100 p-4 rounded-md`}
                          key={subLink.name}
                          href={subLink.href}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </ul>
                  </span>
                ) : (
                  <span className="hover:font-bold relative transition color duration-150 ease-in-out">
                    {link.name}
                    <span
                      className={`${
                        isActive
                          ? "bg-darkBlue h-[4px] absolute w-full z-50 left-0 right-0 bottom-0 top-12"
                          : ""
                      }`}
                    ></span>
                  </span>
                )}
              </Link>
            );
          })}
        </ul>

        {/* sub menu */}

        {/* mobile menu Menu items */}

        <ul
          className={` ${
            menu ? "move-in  " : "move-out"
          } lg:hidden bg-darkBlue text-white flex flex-col justify-normal p-6 left-0 w-3/4 absolute h-screen scroll-smooth top-0  z-50 gap-y-8`}
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
      </div>
    </nav>
  );
};

export default Header;
