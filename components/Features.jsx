"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { MdDoubleArrow } from "react-icons/md";

const Features = () => {
  const ref = useRef(null);
  return (
    <div id="features" className="bg-gray-700 mx-auto md:mt-32 mt-10 rounded-2xl text-white p-12">
      <div className="flex flex-col justify-evenly w-full mx-auto gap-x-6 md:flex-row">
        {/* What is diffrenece */}
        <div className="flex flex-col justify-center space-y-12">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Nexa Creatives
          </h2>
          <p className="max-w-md text-left md:text-left">
            Over the years, our services have grown from web design to include
            Search engine optimization (SEO), ecommerce web design, website
            hosting, Domain registration, Social Media Managements, Bulky SMS
            and Branding. Our clients appreciate that they can get all of their
            website development services under one roof.
          </p>
          <div>
            <button className="flex items-center transition duration-300 hover:mr-6">
              <Link href="/about">
                <span className="transition duration-300 hover:mr-2">
                  Learn more
                </span>
              </Link>
              <MdDoubleArrow />
            </button>
          </div>
        </div>
        {/* numbered list */}

        <div className="flex flex-col space-y-8 max-sm:mt-10">
          {/* list item 1 */}
          <div className={`rounded-l-full md:bg-transparent`}>
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 bg-brightRed rounded-full md:py-1 text-white">
                01
              </div>
              <h3 className="text-base  font-bold">Competitive Pricing</h3>
            </div>
          </div>
          <div className="max-w-md">
            <h3 className="hidden mb-2 text-lg font-bold md:block"></h3>
            <p className="text-gray-400 text-left">
              Our commitment to affordability doesn't mean we compromise on
              quality. Instead, it reflects our dedication to providing you with
              the best possible service without breaking the bank.
            </p>
          </div>
          {/* item 2 */}
          <div className={`rounded-l-full md:bg-transparent`}>
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 bg-brightRed rounded-full md:py-1 text-white">
                02
              </div>
              <h3 className="text-base  font-bold">Tailor-made Strategies</h3>
            </div>
          </div>
          <div className="max-w-md">
            <h3 className="hidden mb-2 text-lg font-bold md:block"></h3>
            <p className="text-gray-400 text-left">
              In our approach to serving clients, we firmly reject the notion of
              a one-size-fits-all solution. We understand that each business is
              unique, facing its own set of challenges, goals, and intricacies.
            </p>
          </div>
          {/* item 3 */}
          <div className={`rounded-l-full md:bg-transparent`}>
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 bg-brightRed rounded-full md:py-1 text-white">
                03
              </div>
              <h3 className="text-base  font-bold">Customer-centric Focus</h3>
            </div>
          </div>
          <div className="max-w-md">
            <h3 className="hidden mb-2 text-lg font-bold md:block"></h3>
            <p className="text-gray-400 text-left">
              Our unwavering commitment revolves around placing your needs at
              the forefront of our endeavors. We recognize that your success is
              intricately linked to the satisfaction of your audience, and,
              therefore, we dedicate ourselves to crafting concepts that not
              only meet but exceed your expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
