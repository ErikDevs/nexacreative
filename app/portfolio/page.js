import { syne } from "@/fonts/fonts";
import Image from "next/image";
import React from "react";
import PortfolioImage from "@/public/portfolio.jpg";

function page() {
  return (
    <main className="w-full mx-auto">
      <div className="container flex relative justify-center md:h-[60vh] overflow-hidden flex-col">
        <h1
          className={`${syne.className} absolute text-white top-[40%] z-30 text-4xl md:text-6xl  font-bold text-center w-full`}
        >
          Our Portfolio
        </h1>
        <Image className="md:-mt-60 w-full object-cover" src={PortfolioImage} />
        <div className="overlay2"></div>
      </div>
    </main>
  );
}

export default page;
