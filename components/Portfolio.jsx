import Image from "next/image";
import brandingItem from "../constants/Images/branding.png";
import Redgeinternational from "../constants/Images/redgeinternational.png";
import React from "react";

const Portfolio = () => {
  return (
    <div className="px-6 bg-gray-700 text-white mt-28 rounded-2xl lg:px-10 py-16 mx-auto">
    <section className="container">
      <h1 className="text-4xl font-bold text-center mx-auto my-10">
        <span>-</span> Recent Work <span>-</span>{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 my-10  md:grid-rows-2 gap-4">
        <div className="md:row-span-2 md:col-span-2 overflow-hidden">
          <Image
            src={Redgeinternational}
            className="rounded-lg transition duration-300 ease-in-out hover:scale-105 "
          />
          <h2 className="text-2xl font-bold mt-5">Web Design & Development</h2>
        </div>
        <div>
          <Image
            src={brandingItem}
            className="rounded-lg transition duration-300 ease-in-out hover:scale-105 "
          />
          <h2 className="text-2xl font-bold mt-5">Digital Marketing</h2>
        </div>
        <div>
          <Image
            src={brandingItem}
            className="rounded-lg transition duration-300 ease-in-out hover:scale-105 "
          />
          <h2 className="text-2xl font-bold mt-5">Social Media</h2>
        </div>
        <div>
          <Image
            src={brandingItem}
            className="rounded-lg transition duration-300 ease-in-out hover:scale-105 "
          />
          <h2 className="text-2xl font-bold mt-5">Graphic Design</h2>
        </div>
        <div>
          <Image
            src={brandingItem}
            className="rounded-lg transition duration-300 ease-in-out hover:scale-105 "
          />
          <h2 className="text-2xl font-bold mt-5">Branding</h2>
        </div>
      </div>
      </section>
      </div>
  );
};

export default Portfolio;
