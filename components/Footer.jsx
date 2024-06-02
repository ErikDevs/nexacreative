"use client";
import React, { useState } from "react";
import Image from "next/image";
import logoLight from "../public/logo-white.png";
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
  const [index, setIndex] = useState(0);

  return (
    <footer
      className={` mt-10 px-6 py-32 lg:px-10 text-slate-100 bg-gray-700 rounded-[32px] mb-10 mx-auto text-base`}
    >
      <div className="container flex justify-between flex-wrap w-full">
        <div className="flex flex-col">
          {/* logo */}
          <div className=" mb-10">
            <Image
              className="transition duration-150"
              src={logoLight}
              alt="logo"
              width={150}
            />
          </div>
          <div className="max-w-xs">
            <p className="text-md">
              Nexa Creative Solutions offers outstanding Web Design in Kenya –
              We are the best Web Design company in Kenya and East Africa
            </p>
          </div>
          <div
            className= "flex gap-2 w-full mt-16"
          >
            <Facebook className="icon-color w-8 hover:scale-105 hover:fill-brightRed" />
            <Instargram className="icon-color w-8 hover:scale-105 hover:fill-brightRed" />
            <Pinterest className="icon-color w-8 hover:scale-105 hover:fill-brightRed" />
            <LinkedIn className="icon-color w-8 hover:scale-105 hover:fill-brightRed" />
          </div>
        </div>
        <div className="flex mt-10 md:mt-16  flex-col">
          <h2 className="font-bold mb-2">Quick links</h2>
          {navLinks.map((link, i) => (
            <Link
              onClick={() => setIndex(i)}
              key={i}
              className={`${index === i ? "text-brightRed font-bold" : ""} `}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex mt-10 md:mt-16 flex-col">
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
          <div className="flex max-sm:flex-col max-sm:gap-2 justify-between mt-4  items-center">
            <input
              type="text"
              className="md:flex-1 p-2 max-sm:rounded-md rounded-l-md w-full focus:outline-none"
              placeholder="Enter your email address"
            />
            <button
              className="flex items-center justify-center max-sm:justify-between max-sm:rounded-md rounded-r-md gap-2 bg-brightRed hover:bg-brightRed/95 hover:outline outline-brightRed hover:outline-2 
               hover:outline-offset-2 transition-all duration-300 ease-in-out text-white px-4 py-2 max-sm:w-full"
            >
              Send{" "}
              <span>
                <BiSend />
              </span>
            </button>
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
