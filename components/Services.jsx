"use client";
import Image from "next/image";
import React from "react";
import webDesign from "../constants/Images/webdesign.png";
import digitalMarketing from "../constants/Images/digital marketing.png";
import graphicDesign from "../constants/Images/graphic design.png";
import webApp from "../constants/Images/appdev.png";
import socialMedia from "../constants/Images/socialmedia.png";
import websiteMaintenance from "../constants/Images/webmaitenance.png";
import { MdDoubleArrow } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";

const Services = () => {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-center mx-auto  my-12">
        - Our Services -
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 lg:grid-cols-3">
        {/* service */}
        <div className="flex flex-col  overflow-hidden">
          <div>
            <Image
              src={webDesign}
              className="rounded-md object-cover mb-6 transition duration-300 ease-out hover:scale-110"
              alt="image"
            />
          </div>

          <h2 className="text-lg mb-4 font-bold">Web Design</h2>
          <p className="text-gray-400 max-w-sm text-base tracking-wider">
            We create visually stunning and functional websites that not only
            attract visitors but also turn them into customers.
          </p>
          <button className="flex items-center mt-8 transition duration-300 hover:mr-6">
            <span className="transition duration-300 hover:mr-2">
              Read more
            </span>{" "}
            <MdDoubleArrow />
          </button>
        </div>
        {/* end service */}
        {/* service */}
        <div className="flex flex-col overflow-hidden">
          <div>
            <Image
              src={digitalMarketing}
              className="rounded-md object-cover mb-6 transition duration-300 ease-out hover:scale-110"
              alt="image"
            />
          </div>

          <h2 className="text-lg mb-4 font-bold">Digital Marketing</h2>
          <p className="text-gray-400 max-w-sm text-base tracking-wider">
            Our expert team uses a data-driven approach, leveraging the latest
            techniques to boost your online presence.
          </p>
          <button className="flex items-center mt-8 transition duration-300 hover:mr-6">
            <span className="transition duration-300 hover:mr-2">
              Read more
            </span>{" "}
            <MdDoubleArrow />
          </button>
        </div>
        {/* end service */}
        {/* service */}
        <div className="flex flex-col overflow-hidden">
          <div>
            <Image
              src={graphicDesign}
              className="rounded-md object-cover mb-6 transition duration-300 ease-out hover:scale-110"
              alt="image"
            />
          </div>

          <h2 className="text-lg mb-4 font-bold">Graphic Design</h2>
          <p className="text-gray-400 max-w-sm text-base tracking-wider">
            Our creative graphic designers produce engaging and impactful
            designs that capture your brand’s essence.
          </p>
          <button className="flex items-center mt-8 transition duration-300 hover:mr-6">
            <span className="transition duration-300 hover:mr-2">
              Read more
            </span>{" "}
            <MdDoubleArrow />
          </button>
        </div>
        {/* end service */}
        {/* service */}
        <div className="flex flex-col overflow-hidden">
          <div>
            <Image
              src={webApp}
              className="rounded-md object-cover mb-6 transition duration-300 ease-out hover:scale-110"
              alt="image"
            />
          </div>

          <h2 className="text-lg mb-4 font-bold">WebApp Development</h2>
          <p className="text-gray-400 max-w-sm text-base tracking-wider">
            We create scalable, robust mobile apps that perform well and offer a
            consistent user experience across devices.
          </p>
          <button className="flex items-center mt-8 transition duration-300 hover:mr-6">
            <span className="transition duration-300 hover:mr-2">
              Read more
            </span>{" "}
            <MdDoubleArrow />
          </button>
        </div>
        {/* end service */}
        {/* service */}
        <div className="flex flex-col overflow-hidden">
          <div>
            <Image
              src={socialMedia}
              className="rounded-md object-cover mb-6 transition duration-300 ease-out hover:scale-110"
              alt="image"
            />
          </div>

          <h2 className="text-lg mb-4 font-bold">Social Media Management</h2>
          <p className="text-gray-400 max-w-sm text-base tracking-wider">
            Our social media experts craft compelling content, engage with your
            audience, and manage your social presence.
          </p>
          <button className="flex items-center mt-8 transition duration-300 hover:mr-6">
            <span className="transition duration-300 hover:mr-2">
              Read more
            </span>{" "}
            <MdDoubleArrow />
          </button>
        </div>
        {/* end service */}
        {/* service */}
        <div className="flex flex-col overflow-hidden">
          <div>
            <Image
              src={websiteMaintenance}
              className="rounded-md object-cover mb-6 transition duration-300 ease-out hover:scale-110"
              alt="image"
            />
          </div>

          <h2 className="text-lg mb-4 font-bold">Web Maintenance</h2>
          <p className="text-gray-400 max-w-sm text-base tracking-wider">
            Our web maintenance service offers comprehensive support and upkeep
            for your digital solutions.
          </p>
          <button className="flex items-center mt-8 transition duration-300 hover:mr-6">
            <span className="transition duration-300 hover:mr-2">
              Read more
            </span>{" "}
            <MdDoubleArrow />
          </button>
        </div>
        {/* end service */}
      </div>
      <div className="mt-10 mx-auto flex justify-center items-center">
        <button className="p-3 px-6 pt-2 flex items-center text-white bg-brightRed rounded-full baseline">
          <span className="mr-4">Request a quote now</span>{" "}
          <MdOutlineArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Services;
