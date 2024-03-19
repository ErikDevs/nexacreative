"use client";
import Image from "next/image";
import React from "react";
import rafikiConcept from "../constants/Images/rafiki-concepts-logo.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Clients = () => {
  return (
    <div className="mt-16">
      <h1 className="text-lg text-center">
        We are trusted by thousands of Brands
      </h1>
      <Carousel
        autoPlay={true}
        infiniteLoop
        interval={3000}
        centerMode
        ariaLabel="none"
        showThumbs={false}
        className="carousel"
      >
        <div className="flex my-16 gap-8 overflow-hidden mx-auto"></div>
      </Carousel>
    </div>
  );
};

export default Clients;
