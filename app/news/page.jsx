import React from "react";
import AI from "@/public/AI.jpg";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="flex flex-col w-screen px-6 lg:px-10">
      <div className="container flex flex-col w-full">
        <div className="relative flex justify-center h-[60vh] overflow-hidden">
          <Image src={AI} className="object-cover" />
          <h1 className="absolute text-white text-4xl lg:text-7xl top-[40%] shadow z-30 right-20 font-bold">
            Explore Latest News
          </h1>
          <div className=""></div>
        </div>
        <section className="flex mt-10 w-screen">
          <div className="flex flex-col">
            <h1>What is the impact of AI on businesses</h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
