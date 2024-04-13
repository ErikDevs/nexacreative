import Image from "next/image";
import React from "react";
import Team from "@/public/team.jpg";
import { contactInfo } from "@/constants";
import { BiMailSend } from "react-icons/bi";

const page = () => {
  return (
    <main className="px-6 lg:px-10 flex flex-col">
      <div className="container flex flex-col">
        <div className="flex justify-center items-center md:h-screen mb-10 md:mt-0 overflow-hidden rounded-md w-full relative">
          <Image className="rounded-md" src={Team} />
          <h1 className="text-white absolute top-[30%] z-10 max-w-xl font-bold text-4xl lg:text-7xl text-center">
            Get in touch with Nexa Creative Solutions
          </h1>
          <div className="overlay2 bg-darkBlue/50"></div>
        </div>
        <div className="flex gap-2 flex-wrap justify-center md:absolute left-0 right-0 md:-bottom-36">
          {contactInfo.map((contact) => (
            <div
              className="flex justify-center md:w-[300px] w-full items-center px-8 py-6 gap-y-4 
              flex-col text-white bg-darkBlue"
              key={contact.label}
            >
              <span>{contact.icon}</span>
              <h2 className="font-bold">{contact.address}</h2>
              <p>{contact.label}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:mt-48 mt-20 md:flex-row">
          <div className=" flex flex-col md:w-1/2 w-full">
            <h2 className="font-bold lg:text-6xl text-4xl mb-16">
              Shoot Us a Message
            </h2>
            <form className="">
              <div className="flex flex-col md:flex-row  gap-2">
                <div className="flex flex-col w-full">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full py-2 outline outline-2"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label>Second Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full py-2 outline outline-2"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-4 gap-2">
                <div className="flex flex-col w-full">
                  <label>Email</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full outline py-2 outline-2"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full py-2 outline outline-2"
                  />
                </div>
              </div>
              <div className="flex mt-4 flex-col w-full">
                <label>Subject</label>
                <input
                  type="text"
                  name="name"
                  className="w-full py-2 outline outline-2"
                />
              </div>
              <div className="flex mt-4 flex-col w-full">
                <label>Message</label>
                <textarea
                  type="textarea"
                  name="name"
                  className="w-full py-2 h-[50vh] outline outline-2"
                />
              </div>
              <button className="flex w-full bg-brightRed py-2 mt-2 justify-center items-center gap-2 text-white">
                <BiMailSend /> Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
