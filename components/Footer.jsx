"use client";
import React, { useState } from "react";
import Image from "next/image";
import logoDark from "../public/DarkLogo.png";
import logoWhite from "../public/logo-white.png";
import { useTheme } from "next-themes";
import Facebook from "../public/facebook.svg";
import Instargram from "../public/instagram.svg";
import LinkedIn from "../public/linkedIn.svg";
import Pinterest from "../public/pinterest.svg";
import Bihanace from "../public/behance.svg";
import Link from "next/link";
import { BiMailSend, BiSend } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiLocationPlus } from "react-icons/bi";
import { navLinks } from "@/constants";

const Footer = () => {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);

  return (
    <footer
      className={`${
        theme === "dark" ? "bg-gray-900" : "bg-slate-100"
      } mt-10 px-6 py-16 lg:px-24 mx-auto text-base`}
    >
      <div className="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between w-full">
        <div className="flex flex-col">
          {/* logo */}
          <div className="w-28 mb-10">
            <Image
              className="transition duration-150"
              src={theme == "dark" ? logoWhite : logoDark}
              alt="logo"
            />
          </div>
          <div className="max-w-xs">
            <p className="font-light text-md">
              Nexa Creative Solutions offers outstanding Web Design in Kenya –
              We are the best Web Design company in Kenya and East Africa
            </p>
          </div>
          <div
            className={`${
              theme === "dark"
                ? "bg-slate-200 py-1 items-center justify-start px-2 md:w-3/4 max-w-xs transition duration-150 rounded-l-2xl"
                : ""
            } flex gap-2 mt-8 items-center justify-start`}
          >
            <Image
              className={`hover:scale-110 rounded-full transition duration-150 ease-in-out`}
              src={Facebook}
              width={28}
            />
            <Image
              className="hover:scale-110 transition duration-150 ease-in-out"
              src={Instargram}
              width={28}
            />
            <Image
              className="hover:scale-110 transition duration-150 ease-in-out"
              src={Pinterest}
              width={28}
            />
            <Image
              className="hover:scale-110 transition duration-150 ease-in-out"
              src={Bihanace}
              width={32}
            />
            <Image
              className="hover:scale-110 transition duration-150 ease-in-out"
              src={LinkedIn}
              width={28}
            />
          </div>
        </div>
        <div className="flex mt-10 md:mt-16 flex-col font-medium">
          <h2 className="font-bold mb-2">Quick links</h2>
          {navLinks.map((link, i) => (
            <Link
              onClick={() => setIndex(i)}
              key={i}
              className={`${index === i ? "text-brightRed" : ""} font-light`}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex mt-10 md:mt-16 flex-col font-light">
          <h2 className="font-bold mb-2">Our Services</h2>
          <Link href="#">Web Design</Link>
          <Link href="#">Web Redesign</Link>
          <Link href="#">Web maintenance</Link>
          <Link href="#">SEO</Link>
          <Link href="#">Web Hosting</Link>
        </div>
        <div className="flex mt-10 md:mt-16 flex-col">
          <h2 className="font-semibold">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p className="max-w-sm mt-4">
            Sign up for our monthly newsletter to get latest updates. Do not
            worry, we will never spam you.
          </p>
          <div className="flex justify-between mt-4 max-w-xs items-center">
            <input
              type="text"
              className="flex-1 p-2 rounded-l-xl focus:outline-none"
              placeholder="Enter your email address"
            />
            <i className="bg-brightRed text-white hover:text-brightRed rounded-r-xl hover:bg-white px-2 py-1">
              <BiSend style={{ fontSize: "2em" }} />
            </i>
          </div>
          <div className="flex flex-col  mt-8">
            <h2 className="font-semibold">Contact Info</h2>
            <div className="flex mt-2 gap-4 max-w-xs">
              <i>
                <BiPhone style={{ fontSize: "1.5em" }} />
              </i>
              <p className="font-medium">(254) 797 710 074</p>
            </div>
            <div className="flex mt-2 gap-4 max-w-xs">
              <i>
                <BiMailSend style={{ fontSize: "1.5em" }} />
              </i>
              <p className="font-medium ">info@nexacreatives.com</p>
            </div>
            <div className="flex mt-2 gap-4 max-w-xs">
              <i>
                <BiLocationPlus style={{ fontSize: "1.5em" }} />
              </i>
              <p className="font-medium">Thika, Makongeni</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
