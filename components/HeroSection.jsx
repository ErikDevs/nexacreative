"use client";
import { useTheme } from "next-themes";
import { syne } from "@/fonts/fonts";
import Smile from "@/public/smile.png";
import Image from "next/image";

const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <div
      id="hero"
      className="container bg-transparent overflow-hidden mx-auto flex md:mt-10 space-y-12 md:space-y-0 md:space-x-8 flex-col-reverse md:flex-row"
    >
      <div className="flex flex-col justify-center space-y-10 md:w-1/2">
        <h1
          className={`${syne.className} text-4xl z-10 text-center mt-8 md:text-5xl lg:text-6xl md:max-w-md tracking-tight font-bold md:text-left`}
        >
          Transforming ideas into visual masterpieces
        </h1>
        <p className="max-w-sm text-center md:text-left">
          Our mission is to transform your business into a digital legend,
          crafting compelling narratives and leveraging cutting-edge strategies.
        </p>
        <div className="hidden md:block">
          <button className="py-3 px-5 text-white hover:bg-orange-600 color transition duration-300 ease-in-out bg-brightRed rounded-full baseline font-medium">
            Bring your business online - it's Free!
          </button>
        </div>
        <button className="p-3 md:hidden px-6 pt-2 text-white bg-brightRed rounded-full baseline">
          Get in touch
        </button>
      </div>
      <div className="flex justify-end md:w-1/2">
        <Image src={Smile} width={400} height={200} />
      </div>
      <div
        className={`md:block rounded-full ${
          theme === "dark"
            ? "bg-blue-900 opacity-45"
            : "bg-brightRed opacity-30"
        }  absolute h-[600px] w-[600px] rotate-45 right-0 -top-48 md:-right-20 -z-10`}
      ></div>
    </div>
  );
};

export default HeroSection;
