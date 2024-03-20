"use client";
import Image from "next/image";
import Designer from "@/public/designer.png";
import Designers from "@/public/designers.jpg";
import { rowdies } from "@/fonts/fonts";
import { work, work_process } from "@/constants";
import Clients from "@/components/Clients";
import { useState } from "react";

export default function Page() {
  const [showWhy, setWhy] = useState(true);
  const [showWork, setWork] = useState(false);
  return (
    <main className="w-full h-full">
      <div className="relative">
        <div className="flex justify-center absolute w-full mt-20  h-[60vh] px-6 md:px-10">
          <h1
            className={`${rowdies.className} max-w-md text-center text-5xl text-white font-bold  w-full lg:text-7xl`}
          >
            About Nexa Creatives
          </h1>
        </div>
        <div className="w-full h-[30vh] md:h-[60vh] -z-10 relative overflow-hidden">
          <Image className="object-cover" src={Designer} alt="designer" />
          <div className="bg-black h-full w-full opacity-60 absolute top-0"></div>
        </div>
      </div>
      <section className="container px-6 lg:px-10 w-full  flex mt-16 justify-between flex-col-reverse gap-y-4 md:flex-row -z-50">
        <div className="flex w-full md:max-w-md flex-col">
          <h1 className="text-5xl font-bold text-brightRed">About Us</h1>
          <p className="text-slate-500 mt-6">
            Nexa Creative was established in 2017. Since that time, we have
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
        <div className="md:w-1/2 w-full relative">
          <Image
            src={Designers}
            className="object-cover rounded-sm"
            alt="image"
          />
          <div className="md:1/2 ml-4 md:ml-0 w-[100px] h-[100px] bg-brightRed absolute -z-10 -top-4 md:-top-6 -left-8 md:-left-6 right-0"></div>
        </div>
      </section>
      <section className="container px-6 lg:px-10 w-full mt-36">
        <div className="flex justify-center rounded-full">
          <div
            onClick={() => {
              setWhy(true);
              setWork(false);
            }}
            className={`${
              showWhy ? "bg-brightRed text-white" : ""
            }   max-w-md rounded-l-full px-4 py-2 cursor-pointer`}
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
        <div
          className={`${
            showWhy ? "block" : "hidden"
          } container transition duration-150 ease-in-out grid grid-cols-1 gap-1 mt-20 md:grid-cols-2 lg:grid-cols-3`}
        >
          {work.map((work) => (
            <div
              key={work.name}
              className={`flex justify-center max-w-md bg-slate-100 p-6 rounded-md flex-col`}
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
            showWork ? "block" : "hidden"
          } container grid grid-cols-1 gap-1 mt-20 md:grid-cols-2 lg:grid-cols-3`}
        >
          {work_process.map((work) => (
            <div
              key={work.name}
              className="flex justify-center max-w-md hover:shadow-md hover:scale-105 p-6 rounded-md flex-col"
            >
              <i className="flex justify-center">{work.icon}</i>
              <h2 className="text-center text-xl font-semibold mb-6 mt-10">
                {work.name}
              </h2>
              <p className="text-center">{work.desc}</p>
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
