"use client";
import { services } from "@/constants";
import Image from "next/image";
import React from "react";

import { MdDoubleArrow } from "react-icons/md";

const Services = () => {
  return (
    <div className="w-full px-10 py-2 lg:px-10 mx-auto  rounded-2xl  mt-16">
      <h1 className="text-4xl font-bold text-center mx-auto  my-12">
        What We Do
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 lg:grid-cols-3">
        {/* service */}
        {services.map((service) => (
          <div key={service.title} className="flex flex-col overflow-hidden rounded-lg">
            <Image
              src={service.image}
              className="mb-6 transition duration-300 ease-out hover:scale-105"
              alt="image"
            />
            <h2 className="text-lg mb-4 font-bold">{service.title}</h2>
            <p className="text-gray-400 max-w-sm text-base tracking-wider">
              {service.desc}
            </p>
            <button className="flex items-center mt-8 transition duration-300 hover:mr-6">
              <span className="transition duration-300 hover:mr-2">
                Read more
              </span>{" "}
              <MdDoubleArrow />
            </button>
          </div>
        ))}
        {/* end service */}
      </div>
    </div>
  );
};

export default Services;
