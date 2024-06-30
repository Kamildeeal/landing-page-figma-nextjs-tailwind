"use client";
import React, { useState } from "react";
import Info from "./abonaments/Info";
import Free from "./abonaments/Free";
import Premium from "./abonaments/Premium";
import FromUpAnimate from "@/app/animations/FromUpAnimate";

const Pricing = () => {
  const [activeButton, setActiveButton] = useState("Pricing");

  const handleButtonClick = (buttonName: string) => {
    if (activeButton === buttonName) {
      return;
    }
    setActiveButton(buttonName);
  };

  return (
    <FromUpAnimate>
      <section className="m-8 flex flex-col text-center items-center justify-center xl:mx-72">
        <h3 className="mb-6 text-4xl font-semibold sm:text-5xl">Pricing</h3>
        <div className="mx-8 bg-gray-200 rounded-xl p-2 w-full max-w-[470px] lg:hidden">
          <button
            className={`rounded-md p-2 pr-3 pl-4 text-base font-semibold transition ${
              activeButton === "All" ? "bg-blue-500 text-white" : "text-black"
            }`}
            onClick={() => handleButtonClick("All")}
          >
            All
          </button>
          <button
            className={`rounded-md p-2 pr-3 pl-4 text-base font-semibold transition ${
              activeButton === "Getting started"
                ? "bg-blue-500 text-white"
                : "text-black"
            }`}
            onClick={() => handleButtonClick("Getting started")}
          >
            Getting started
          </button>
          <button
            className={`rounded-md p-2 pr-3 pl-4 text-base font-semibold transition ${
              activeButton === "Pricing"
                ? "bg-blue-500 text-white"
                : "text-black"
            }`}
            onClick={() => handleButtonClick("Pricing")}
          >
            Pricing
          </button>
        </div>
        <div className="lg:hidden flex flex-col items-center justify-center">
          {activeButton === "Info" && <Info />}
          {activeButton === "All" && <Premium />}
          {activeButton === "Getting started" && <Free />}
          {activeButton === "Pricing" && <Info />}
        </div>
        <div className="hidden lg:flex lg:flex-col items-center">
          <Info />
          <div className="flex flex-row gap-5">
            <div>
              <Free />
            </div>
            <Premium />
          </div>
        </div>
      </section>
    </FromUpAnimate>
  );
};

export default Pricing;
