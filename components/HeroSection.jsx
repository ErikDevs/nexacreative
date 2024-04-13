import { jost } from "@/fonts/fonts";
import Smile from "@/public/Man.png";
import HeroBg from "@/public/heroBg.jpg";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div id="hero" className="relative">
      <div className="container px-6 md:py-10 lg:px-10 justify-between mx-auto flex flex-col-reverse md:flex-row">
        <div className="flex flex-col justify-center md:mt-12 w-full md:w-1/2">
          <h1
            className={`${jost.className} text-4xl z-10 text-center mt-3 md:mt-0 md:text-5xl lg:text-6xl md:max-w-md font-bold md:text-left`}
          >
            Transforming ideas into visual Masterpiece
          </h1>
          <p className="md:max-w-sm text-center my-10 md:text-left">
            Our mission is to transform your business into a digital legend,
            crafting compelling narratives and leveraging cutting-edge
            strategies.
          </p>
          <div className="hidden md:block">
            <button className="py-3 px-5 mt-10 text-white hover:bg-orange-600 color transition duration-300 ease-in-out bg-brightRed rounded-full baseline font-medium">
              Make your online presence felt - it's Free!
            </button>
          </div>
          <div className="flex justify-center w-full">
            <button className="md:hidden px-5 py-4 text-white bg-brightRed  baseline">
              Make your online presence felt - it's Free!
            </button>
          </div>
        </div>
        <Image width={400} src={Smile} />
      </div>
      <div className="w-screen absolute md:overflow-hidden top-0 bottom-0 left-0 right-0 -z-50">
        <Image src={HeroBg} className="h-[90vh] md:h-auto" />
      </div>
    </div>
  );
};

export default HeroSection;
