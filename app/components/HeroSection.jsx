"use client";
import { rowdies } from "../fonts/fonts";
import BackgroundAnimation from "./backgroundAnimation";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="container  relative flex items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 flex-col-reverse md:flex-row"
    >
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1
          className={` ${rowdies.className} max-w-md text-4xl text-center md:text-5xl md:text-left`}
        >
          Transforming ideas into visual masterpieces
        </h1>
        <p className="max-w-sm text-center md:text-left">
          Our mission is to transform your business into a digital legend,
          crafting compelling narratives and leveraging cutting-edge strategies.
        </p>
        <div>
          <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <BackgroundAnimation />
      </div>
    </div>
  );
};

export default HeroSection;
