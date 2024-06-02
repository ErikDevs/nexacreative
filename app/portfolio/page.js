"use client";
import Image from "next/image";
import React, { useState } from "react";
import PortfolioImage from "@/public/portfolio.jpg";
import { useTheme } from "next-themes";
import { categories } from "@/constants";
import Brand from "@/constants/Images/branding.png";

function page() {
  const [selected, setSelected] = useState(0);
  return (
    <main className="w-full mx-auto">
      <div className="container flex relative justify-center md:h-[60vh] overflow-hidden flex-col">
        <h1
          className={`absolute top-[40%] z-30 text-4xl md:text-6xl text-slate-100 font-bold text-center w-full`}
        >
          Our Portfolio
        </h1>
        <Image className="md:-mt-60 w-full object-cover" src={PortfolioImage} />
        <div
          className={`bg-darkBlue/50 overlay2`}
        ></div>
      </div>
      <div className="flex gap-3 justify-center flex-wrap items-center w-full mt-20 ">
        {categories.map((category, i) => (
          <div
            onClick={() => setSelected(i)}
            className={`${
              selected === i
                ? "bg-brightRed text-white"
                : "ring-2 ring-brightRed"
            } px-4 rounded-full py-2 cursor-pointer`}
            key={category.name}
          >
            {category.name}
          </div>
        ))}
      </div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mt-10 px-6 lg:px-20 lg:grid-cols-3">
        <div className="flex flex-col">
          <Image src={Brand} className="rounded-2xl" />
          <h2>Branding Project</h2>
        </div>
        <div className="flex flex-col">
          <Image src={Brand} className="rounded-2xl" />
          <h2>Branding Project</h2>
        </div>
        <div className="flex flex-col">
          <Image src={Brand} className="rounded-2xl" />
          <h2>Branding Project</h2>
        </div>
        <div className="flex flex-col">
          <Image src={Brand} className="rounded-2xl" />
          <h2>Branding Project</h2>
        </div>
        <div className="flex flex-col">
          <Image src={Brand} className="rounded-2xl" />
          <h2>Branding Project</h2>
        </div>
        <div className="flex flex-col">
          <Image src={Brand} className="rounded-2xl" />
          <h2>Branding Project</h2>
        </div>
      </div>
    </main>
  );
}

export default page;
