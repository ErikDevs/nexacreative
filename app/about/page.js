"use client";
import Image from "next/image";
import Designer from "@/public/designer.png";
import Designers from "@/public/designers.jpg";
import { rowdies, syne } from "@/fonts/fonts";
import { work, work_process } from "@/constants";
import Clients from "@/components/Clients";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Page() {
  const [showWhy, setWhy] = useState(true);
  const [showWork, setWork] = useState(false);
  const { theme } = useTheme();
  return (
    <main className="flex flex-col">
      <div className="relative">
        <div className="w-full md:h-[60vh] relative overflow-y-hidden">
          <Image
            className="object-contain md:-mt-20"
            src={Designer}
            alt="designer"
          />
          <h1
            className={`${syne.className} absolute top-[40%] z-10 text-4xl md:text-6xl font-bold text-center w-full`}
          >
            About Us
          </h1>
          <div
            className={`${
              theme === "dark" ? "bg-black/50" : "bg-white/75"
            } overlay2`}
          ></div>
        </div>
      </div>
      <section className="container px-6 lg:px-32 w-full flex mt-20 justify-between flex-col-reverse gap-4 lg:gap-32 lg:flex-row -z-50">
        <div className="flex w-full lg:max-w-lg flex-col">
          <h1 className="text-4xl font-bold text-brightRed">
            Nexa Creative Solutions
          </h1>
          <p className="mt-6 md:mt-10">
            Nexa Creative was established in 2020. Since that time, we have
            worked with our clients to offer creative ideas and online marketing
            support to ensure you receive the best possible return on your
            investment. Over the years, we have served many clients, from
            individuals, corporate to nonprofit organizations, with industries
            spanning retail, manufacturing, entertainment, sports, education,
            real estate, banking, energy, healthcare, aerospace and many more.
            Our clients appreciate that they can get all of their web
            development services under one roof. They don't have to interact
            with a separate website designer, seo copywriter, online marketing
            agency, and website hosting company. The result is a unified
            strategy that is both efficient and cost-effective.
          </p>
        </div>
        <div className="lg:w-[50%] relative mb-16">
          <Image
            src={Designers}
            className="object-cover rounded-sm"
            alt="image"
          />
          <div className="ml-4 md:ml-0 w-[150px] h-[80px] bg-brightRed absolute -z-10 -top-4 md:-top-6 -left-8 md:-left-6 right-0"></div>
          <div className="ml-4 md:ml-0 w-[150px] h-[80px] bg-gray-500 absolute text-white rounded-md flex justify-center items-center text-2xl z-10 -bottom-6 -right-6 md-right-6 ">
            2020
          </div>
        </div>
      </section>
      <section className="container px-6 lg:px-10 w-full mt-36">
        <div className="flex justify-center  rounded-full">
          <div
            onClick={() => {
              setWhy(true);
              setWork(false);
            }}
            className={`${
              showWhy ? "bg-brightRed text-white" : ""
            }   max-w-md rounded-l-full px-4 py-2 shadow cursor-pointer`}
          >
            <h2 className="font-medium">Why Choose Us</h2>
          </div>
          <div
            onClick={() => {
              setWhy(false);
              setWork(true);
            }}
            className={`${
              showWork ? "bg-brightRed text-white" : ""
            } max-w-md rounded-r-full px-4 py-2 shadow cursor-pointer`}
          >
            <h2 className="font-medium">Our Work Process</h2>
          </div>
        </div>
        <div className="flex justify-center">
          <span>
            <h2 className="text-5xl">
              <span className={`${showWhy ? "text-brightRed" : ""} `}>..</span>
              <span className={`${showWork ? "text-brightRed" : ""}`}>..</span>
            </h2>
          </span>
        </div>
        <div
          className={`${
            showWhy ? "block" : "hidden"
          } container transition duration-150 ease-in-out grid grid-cols-1 gap-1 mt-20 md:grid-cols-2 lg:grid-cols-3`}
        >
          {work.map((work) => (
            <div
              key={work.name}
              className={`flex justify-center max-w-md ${
                theme === "dark" ? "bg-blue-950" : "bg-slate-100"
              } p-6 rounded-md flex-col`}
            >
              <i className="flex justify-center">{work.icon}</i>
              <h2 className="text-center text-xl font-semibold mb-6 mt-10">
                {work.name}
              </h2>
              <p className="text-center">{work.desc}</p>
            </div>
          ))}
        </div>
        <div
          className={`${
            showWork ? "grid" : "hidden"
          } container w-full mx-auto grid-cols-1 gap-2 mt-20 md:grid-cols-3 lg:grid-cols-4`}
        >
          {work_process.map((work) => (
            <div
              key={work.name}
              className={`flex hover:scale-105 p-8 w-full rounded-md flex-col`}
            >
              <i className="flex justify-center">{work.icon}</i>
              <h2 className="text-center text-xl  font-semibold mb-6 mt-10">
                {work.name}
              </h2>
              <p className="text-center max-w-sm">{work.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="">
        <Clients />
      </section>
    </main>
  );
}
