import { jost } from "@/fonts/fonts";
import Smile from "@/public/Man.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="justify-between w-full px-6 lg:px-10 items-center mx-auto flex flex-col-reverse md:flex-row">
      <div className="flex flex-col">
        <h1
          className={`${jost.className} text-4xl text-center mt-3 md:mt-0 md:text-5xl lg:text-6xl md:max-w-2xl font-bold md:text-left`}
        >
          Transforming ideas into visual Masterpiece
        </h1>
        <p className="md:max-w-lg text-center text-xl my-10 md:text-left">
          Our mission is to transform your business into a digital legend,
          crafting compelling narratives and leveraging cutting-edge strategies.
        </p>
        <div className="hidden md:block">
          <button className="py-3 px-5 mt-10 text-white hover:bg-orange-600 color transition duration-300 ease-in-out bg-brightRed rounded-2xl font-medium">
            Make your online presence felt - it's Free!
          </button>
        </div>
        <div className="flex justify-center">
          <button className="md:hidden px-5 py-4 text-white bg-brightRed rounded-3xl baseline">
            Make your online presence felt - it's Free!
          </button>
        </div>
      </div>
      <div className="">
        <Image width={400} src={Smile} />
      </div>
      <div className="w-96 h-96 bg-darkBlue hidden md:block md:absolute lg:right-72 rounded-full -z-50"></div>
    </div>
  );
};

export default HeroSection;
