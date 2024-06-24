import React from "react";
import Demo from "@/public/mobile/Demo.svg";
import Image from "next/image";
import chartMobile from "@/public/mobile/chart-main-mobile.png";
import chartDekstop from "@/public/desktop/chart-main-dekstop.png";

function Hero() {
  return (
    <div className="max-w-[1249px] mx-auto">
      <section className="flex flex-col mx-8 mt-16">
        <h1 className="text-4xl font-bold text-center mb-5 lg:text-left lg:text-[3.8rem] lg:leading-normal lg:max-w-[824px]">
          A powefull soultion to grow your startup. Fast!
        </h1>
        <p className="text-2xl text-center mb-4 lg:text-left lg:max-w-[610px]">
          Organise, collaborate, and track progress seamlessly with our
          one-stop-shop startup growth tool.
        </p>
        <div className="mx-auto w-full flex flex-col justify-center items-center lg:flex-row lg:justify-start lg:gap-4">
          <button className="w-full max-w-[343px] bg-blue-400 text-white h-16 rounded-3xl font-semibold text-lg mb-4 hover:bg-blue-500 lg:w-auto lg:px-8 lg:py-4">
            Get Started
          </button>
          <button className="flex items-center justify-center align-middle w-full max-w-[343px] bg-gray-100 text-black font-semibold  h-16 rounded-3xl font-lg text-lg mb-4 hover:bg-gray-300  lg:w-auto lg:px-8 lg:py-4">
            <Image src={Demo} alt="demo" className="mr-3" />
            Book a demo
          </button>
        </div>
        {/* <div className="relative"> */}
        <div className="justify-center flex lg:hidden">
          <div className=" relative h-max w-max mx-auto">
            <Image src={chartMobile} alt="charts1" layout="responsive" />
          </div>
        </div>
        <div className="justify-center hidden lg:flex lg:relative lg:top-[-8rem] lg:max-w-[1249px]">
          <div className=" relative h-max w-max mx-auto">
            <Image src={chartDekstop} alt="charts1" layout="responsive" />
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
}

export default Hero;
