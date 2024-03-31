import Image from "next/image";
import brandingItem from "../constants/Images/branding.png";
import Redgeinternational from "../constants/Images/redgeinternational.png";
import React from "react";

const Portfolio = () => {
  return (
    <div className="px-6 lg:px-24 py-16 mx-auto">
    <section className="container">
      <h1 className="text-4xl font-bold text-center mx-auto my-10">
        <span>-</span> Portfolio <span>-</span>{" "}
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-2xl md:text-4xl max-w-md mb-2 font-bold">
          Creating impact with every project, experience the innovation.
        </h1>
        <p className="text-gray-400 text-left text-base max-w-md">
          A showcase of our commitment to delivering top-tier, innovative
          digital solutions. We believe in the power of technology and design to
          transform businesses, catapulting them into the future. Our commitment
          to quality and excellence is unparalleled.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 my-10  md:grid-rows-2 gap-4">
        <div className="md:row-span-2 md:col-span-2 overflow-hidden">
          <Image
            src={Redgeinternational}
            className="rounded-sm transition duration-300 ease-in-out hover:scale-105 "
          />
          <h2 className="text-2xl font-bold mt-5">Web Design & Development</h2>
        </div>
        <div>
          <Image
            src={brandingItem}
            className="rounded-sm transition duration-300 ease-in-out hover:scale-105 "
          />
          <h2 className="text-2xl font-bold mt-5">Digital Marketing</h2>
        </div>
        <div>
          <Image
            src={brandingItem}
            className="rounded-sm transition duration-300 ease-in-out hover:scale-105 "
          />
          <h2 className="text-2xl font-bold mt-5">Social Media</h2>
        </div>
        <div>
          <Image
            src={brandingItem}
            className="rounded-sm transition duration-300 ease-in-out hover:scale-105 "
          />
          <h2 className="text-2xl font-bold mt-5">Graphic Design</h2>
        </div>
        <div>
          <Image
            src={brandingItem}
            className="rounded-sm transition duration-300 ease-in-out hover:scale-105 "
          />
          <h2 className="text-2xl font-bold mt-5">Branding</h2>
        </div>
      </div>
      </section>
      </div>
  );
};

export default Portfolio;
