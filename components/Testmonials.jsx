"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
const Testmonials = () => {
  const { theme } = useTheme();
  return (
    <div className="px-6 lg:px-24 mx-auto bg-slate-50 py-16 rounded-2xl">
      <div className="container">
        <h1 className="text-lg">Testmonials</h1>
        <div className="flex flex-col md:flex-row  justify-between">
          <h1 className="text-2xl md:text-4xl md:max-w-md font-bold text-left">
            Our success, as echoed by our esteemed clients
          </h1>
          <h2 className="text-lg font-semi-bold max-w-md text-gray-400">
            Our clients share their experiences of transformation and growth.
            Unfiltered feedback and the true testament to our service quality.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-2 md:gap-8 lg:grid-cols-3 mt-10">
          {/* container */}
          <div
            className={`${
              theme != "dark" ? "bg-slate-200" : "bg-gray-800"
            } "bg-slate-300 container rounded-md relative p-6 shadow-2xl"`}
          >
            <i className="absolute -top-8">
              <BiSolidQuoteLeft style={{ fontSize: "4em" }} />
            </i>
            <p className="mt-10">
              We now have a fantastic website that perfectly encapsulates the
              essence of our company thanks to them. Their service has exceeded
              all of our expectations, making us extremely happy.
            </p>
            <h3 className="mt-4 font-bold">Marion Huini</h3>
            <small>CEO Hopevine Realtors</small>
          </div>
          {/* container end */}
          {/* container */}
          <div
            className={`${
              theme != "dark" ? "bg-slate-100" : "bg-gray-800"
            } "bg-slate-300 container rounded-md relative p-6 shadow-2xl"`}
          >
            <i className="absolute -top-8">
              <BiSolidQuoteLeft style={{ fontSize: "4em" }} />
            </i>
            <p className="mt-10">
              Thanks to the hard work of the team, our company now has a
              state-of-the-art website that is also incredibly easy to navigate.
              Their digital marketing prowess is undeniable, and they should be
              commended for it.
            </p>
            <h3 className="mt-4 font-bold">Anthony Muya</h3>
            <small>Novaprime Investment</small>
          </div>
          {/* container end */}
          {/* container */}
          <div
            className={`${
              theme != "dark" ? "bg-slate-100" : "bg-gray-800"
            } "bg-slate-300 container rounded-md relative p-6 shadow-2xl"`}
          >
            <i className="absolute -top-8">
              <BiSolidQuoteLeft style={{ fontSize: "4em" }} />
            </i>
            <p className="mt-10">
              They have a team that is not only extremely knowledgeable but also
              very professional and quick to respond to any inquiries. They have
              proven to be an outstanding digital partner for us to collaborate
              with.
            </p>
            <h3 className="mt-4 font-bold">Benson Munana</h3>
            <small>Fahari Homes</small>
          </div>
          {/* container end */}
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
