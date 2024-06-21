import React from "react";
import Demo from "@/public/mobile/Demo.svg";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex flex-col ml-8 mr-8 mt-16">
      <h1 className="text-4xl font-bold text-center mb-5">
        A powefull soultion to grow your startup. Fast!
      </h1>
      <p className="text-2xl text-center mb-4">
        Organise, collaborate, and track progress seamlessly with our
        one-stop-shop startup growth tool.
      </p>
      <button className="w-full bg-blue-400 text-white h-16 rounded-3xl font-semibold text-lg mb-4 hover:bg-blue-500">
        Get Started
      </button>
      <button className="flex items-center justify-center align-middle w-full bg-gray-100 text-black font-semibold  h-16 rounded-3xl font-lg text-lg mb-4 hover:bg-gray-300">
        <Image src={Demo} alt="demo" className="mr-3" />
        Book a demo
      </button>
    </section>
  );
}

export default Hero;
