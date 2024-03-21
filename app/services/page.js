"use client";
import Image from "next/image";
import Agency from "@/public/agency.jpg";
import { syne } from "@/fonts/fonts";
import { BiCrown } from "react-icons/bi";
import { BiPieChart } from "react-icons/bi";
import { BiDiamond } from "react-icons/bi";
import Webdesign from "@/public/webdesign.jpg";
import DigitalMarketing from "@/public/digitalMarketing.jpg";
import MediaDigital from "@/public/socialMedia.jpg";
import GraphicDesign from "@/public/graphicDesign.jpg";
import {
  designDetails,
  graphicDesignDetails,
  marketingDetails,
  socialMediaDetails,
} from "@/constants";
import { useTheme } from "next-themes";
import { IoChevronForward } from "react-icons/io5";

export default function App() {
  const { theme } = useTheme();
  return (
    <main className="">
      <section className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:h-[60vh] overflow-hidden relative">
          <Image src={Agency} className="object-contain md:-mt-56" />
          <h1
            className={`${syne.className} absolute top-32 bottom-0 right-0 left-0 z-10 text-white text-6xl md:text-7xl font-bold text-center w-full`}
          >
            Our Services
          </h1>
          <div className="overlay2 h-full"></div>
        </div>
      </section>
      <section className="container px-6 lg:px-10 flex mt-10 gap-x-20 flex-col md:flex-row">
        <div className="flex flex-col">
          <h2 className="font-bold md:max-w-md text-3xl">
            Empower your business with innovative digital solutions.
          </h2>
          <p className="text-base md:max-w-lg mt-10">
            Our commitment to quality and excellence is unparalleled. We have a
            team of seasoned professionals who are passionate about what they do
            and always go the extra mile to exceed customer expectations. From
            the first brainstorming session to the final product delivery, we
            ensure that every step of the process is executed to perfection.
          </p>
        </div>
        <div className="border-2 border-slate-600 flex flex-col p-12 gap-8 md:w-1/2">
          <div className="flex gap-x-4 items-center divide-dotted divide-y-reverse divide-y-2">
            <BiCrown style={{ fontSize: "3em", color: "#FC6736" }} />
            <p>
              Our solutions are designed to streamline your operations, leading
              to higher productivity and lower costs.
            </p>
          </div>
          <div className="flex gap-x-4 items-center divide-dotted divide-y-reverse divide-y-2">
            <BiPieChart style={{ fontSize: "3em", color: "#FC6736" }} />
            <p>
              By delivering a sleek and modern digital presence, we help elevate
              your brand's image and reputation.
            </p>
          </div>
          <div className="flex gap-x-4 items-center divide-dotted divide-y-reverse divide-y-2">
            <BiDiamond style={{ fontSize: "3em", color: "#FC6736" }} />
            <p>
              Our services are tailored to your unique needs, ensuring you get
              the perfect fit for your business.
            </p>
          </div>
        </div>
      </section>
      <section className="container px-6 lg:px-10 grid grid-cols-1 mt-20 gap-20 md:grid-cols-2">
        <div
          className={`${
            theme === "dark" ? "bg-gray-900" : "bg-slate-200"
          } relative grid grid-cols-1 gap-8 py-16 px-10 rounded-sm largeDiv lg:grid-cols-2 `}
        >
          <div className="overflow-hidden">
            <Image
              src={Webdesign}
              className="hover:scale-125  h-[100%] transform transition duration-500 ease-linear"
            />
          </div>
          <ul className="flex flex-col gap-2">
            {designDetails.map((details, i) => (
              <div key={i} className="flex gap-2 items-center">
                <i>{details.icon}</i>
                <p>{details.text}</p>
              </div>
            ))}
          </ul>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-xl">Website Design</h2>
            <p className="max-w-md">
              We specialize in building attractive, highly functional websites
              that draw visitors and turn them into devoted customers.
            </p>
          </div>
          <div className="flex flex-col justify-end hover:-translate-y-2 hover:opacity-70 opacity transform transition duration-200 ease-in-out ">
            <button className="flex">
              <span className="flex items-center gap-4">
                Service details <IoChevronForward />
              </span>
            </button>
            <hr className="h-0.5 border-none bg-brightRed w-[45%] mt-2" />
          </div>
          <div className="bgHover w-full  h-full"></div>
        </div>
        {/* end web design */}
        <div
          className={`${
            theme === "dark" ? "bg-gray-900" : "bg-slate-200"
          } relative grid grid-cols-1 gap-8 py-16 px-10 rounded-sm largeDiv lg:grid-cols-2 `}
        >
          <div className="overflow-hidden">
            <Image
              src={DigitalMarketing}
              className="hover:scale-125  h-[100%] transform transition duration-500 ease-linear"
            />
          </div>
          <ul className="flex flex-col gap-2">
            {marketingDetails.map((details, i) => (
              <div key={i} className="flex gap-2 items-center">
                <i>{details.icon}</i>
                <p>{details.text}</p>
              </div>
            ))}
          </ul>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-xl">Digital Marketing</h2>
            <p className="max-w-md">
              Our expert team uses a data-driven approach, leveraging the latest
              techniques to boost your online presence.
            </p>
          </div>
          <div className="flex flex-col justify-end hover:-translate-y-2 hover:opacity-70 opacity transform transition duration-200 ease-in-out ">
            <button className="flex">
              <span className="flex items-center gap-4">
                Service details <IoChevronForward />
              </span>
            </button>
            <hr className="h-0.5 border-none bg-brightRed w-[45%] mt-2" />
          </div>
          <div className="bgHover2 w-full  h-full"></div>
        </div>
        {/* end digital marketing  */}
        <div
          className={`${
            theme === "dark" ? "bg-gray-900" : "bg-slate-200"
          } relative grid grid-cols-1 gap-8 py-16 px-10 rounded-sm largeDiv lg:grid-cols-2 `}
        >
          <div className="overflow-hidden">
            <Image
              src={MediaDigital}
              className="hover:scale-125  h-[100%] transform transition duration-500 ease-linear"
            />
          </div>
          <ul className="flex flex-col gap-2">
            {socialMediaDetails.map((details, i) => (
              <div key={i} className="flex gap-2 items-center">
                <i>{details.icon}</i>
                <p>{details.text}</p>
              </div>
            ))}
          </ul>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-xl">Social Media</h2>
            <p className="max-w-md">
              Our social media experts craft compelling content, engage with
              your audience, and manage your social presence.
            </p>
          </div>
          <div className="flex flex-col justify-end hover:-translate-y-2 hover:opacity-70 opacity transform transition duration-200 ease-in-out ">
            <button className="flex">
              <span className="flex items-center gap-4">
                Service details <IoChevronForward />
              </span>
            </button>
            <hr className="h-0.5 border-none bg-brightRed w-[45%] mt-2" />
          </div>
          <div className="bgHover2 w-full  h-full"></div>
        </div>
        {/* end of social media */}
        <div
          className={`${
            theme === "dark" ? "bg-gray-900" : "bg-slate-200"
          } relative grid grid-cols-1 gap-8 py-16 px-10 rounded-sm largeDiv lg:grid-cols-2 `}
        >
          <div className="overflow-hidden">
            <Image
              src={GraphicDesign}
              className="hover:scale-125  h-[100%] transform transition duration-500 ease-linear"
            />
          </div>
          <ul className="flex flex-col gap-2">
            {graphicDesignDetails.map((details, i) => (
              <div key={i} className="flex gap-2 items-center">
                <i>{details.icon}</i>
                <p>{details.text}</p>
              </div>
            ))}
          </ul>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-xl">Graphic Design</h2>
            <p className="max-w-md">
              Our imaginative graphic designers produce designs that capture the
              essence of your brand and are both engaging and effective.
            </p>
          </div>
          <div className="flex flex-col justify-end hover:-translate-y-2 hover:opacity-70 opacity transform transition duration-200 ease-in-out ">
            <button className="flex">
              <span className="flex items-center gap-4">
                Service details <IoChevronForward />
              </span>
            </button>
            <hr className="h-0.5 border-none bg-brightRed w-[45%] mt-2" />
          </div>
          <div className="bgHover3 w-full  h-full"></div>
        </div>
        {/* end Graphic design */}
      </section>
    </main>
  );
}
