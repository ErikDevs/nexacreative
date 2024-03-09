import React from "react";

const Features = () => {
  return (
    <div
      id="features"
      className="container flex flex-col mx-auto mt-10 space-y-12 px-6 md:spcae-y-0 md:flex-row"
    >
      {/* What is diffrenece */}
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
          What's different about Nexa Creatives
        </h2>
        <p className="max-w-md text-center text-gray-400 md:text-left">
          We understand that in the fast-paced world of digital, staying ahead
          of the curve is critical. That is why we are constantly researching
          new technologies, techniques, and strategies in order to provide our
          clients with innovative solutions that give them a competitive
          advantage.
        </p>
      </div>
      {/* numbered list */}
      <div className="flex flex-col space-y-8 md:w-1/2">
        {/* list item 1 */}
        <div className="rounded-l-full bg-light md:bg-transparent">
          <div className="flex items-center space-x-2">
            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
              01
            </div>
            <h3 className="text-base  font-bold">Competitive Pricing</h3>
          </div>
        </div>
        <div className="max-w-md">
          <h3 className="hidden mb-4 text-lg font-bold md:block"></h3>
          <p className="text-gray-400">
            Our high-quality services are affordable, giving you great value for
            your money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
