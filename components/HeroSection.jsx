"use client";
import { useTheme } from "next-themes";
import { rowdies, syne } from "@/fonts/fonts";
import Smile from "@/public/smile.png";
import Image from "next/image";

const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <div
      id="hero"
      className="container overflow-hidden mx-auto flex md:mt-10 space-y-12 md:space-y-0 md:space-x-8 flex-col-reverse md:flex-row"
    >
      <div className="flex flex-col justify-center space-y-10 md:w-1/2">
        <h1
          className={`${syne.className} text-4xl z-10 text-center md:text-6xl md:max-w-md font-bold md:text-left`}
        >
          Transforming Ideas Into Visual Masterpieces
        </h1>
        <p className="max-w-sm text-center md:text-left">
          Our mission is to transform your business into a digital legend,
          crafting compelling narratives and leveraging cutting-edge strategies.
        </p>
        <div className="hidden md:block">
          <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline">
            Get in touch
          </button>
        </div>
        <button className="p-3 md:hidden px-6 pt-2 text-white bg-brightRed rounded-full baseline">
          Get in touch
        </button>
      </div>
      <div className="flex -mt-20 md:w-1/2">
        <Image src={Smile} width={400} height={200} />
      </div>
      <div
        className={`md:block rounded-full ${
          theme === "dark" ? "bg-gray-900" : "bg-brightRed opacity-10"
        }  absolute w-72  h-96 md:w-96 lg:h-full md:h-1/2  rotate-45 right-0 -top-28 md:-top-56 lg:right-24 -z-10`}
      ></div>
    </div>
  );
};

export default HeroSection;
