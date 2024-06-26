import { jost } from "@/fonts/fonts";
import Smile from "@/public/Man.png";
import Image from "next/image";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="justify-between w-full px-6 lg:px-10 items-center mx-auto flex flex-col-reverse md:flex-row">
      <div className="flex flex-col">
        <h1
          className={`${jost.className} text-4xl text-center mt-3 md:mt-0 md:text-5xl lg:text-6xl md:max-w-md font-bold md:text-left`}
        >
          Transforming ideas into visual Masterpiece
        </h1>
        <p className="md:max-w-lg text-center text-xl my-10 md:text-left">
          Our mission is to transform your business into a digital legend,
          crafting compelling narratives and leveraging cutting-edge strategies.
        </p>
        <div className="flex justify-center md:justify-start">
         <Button name=" Make your online presence felt - it's Free!" />
        </div>
      </div>
      <div className="">
        <Image width={400} src={Smile} />
      </div>
      <div className="w-72 h-72 bg-gray-700 absolute right-0 top-36 lg:right-56 rounded-full -z-50"></div>
    </div>
  );
};

export default HeroSection;
