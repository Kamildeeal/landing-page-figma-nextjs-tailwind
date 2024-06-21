"use client";
import React, { useState } from "react";
import Info from "./abonaments/Info";
import Free from "./abonaments/Free";
import Premium from "./abonaments/Premium";

const Pricing = () => {
  const [activeButton, setActiveButton] = useState("All");
  const [allOpen, setAllOpen] = useState(false);
  const [freeOpen, setFreeOpen] = useState(false);
  const [setPricing, setPricingOpen] = useState(true);

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName);
  };

  return (
    <section className="m-8 text-center justify-center">
      <h3 className="mb-6 text-4xl font-semibold ">Pricing</h3>
      <div className="bg-gray-200 rounded-xl p-2">
        <button
          className={`rounded-md p-2 pr-3 pl-4 text-xl font-semibold transition ${
            activeButton === "All" ? "bg-blue-500 text-white" : "text-black"
          }`}
          onClick={() => {
            handleButtonClick("All");
            setAllOpen((prev) => !prev);
            setFreeOpen(false);
            setPricingOpen(false);
          }}
        >
          All
        </button>
        <button
          className={`rounded-md ml-6 p-2 pr-3 pl-4 text-xl font-semibold transition ${
            activeButton === "Getting started"
              ? "bg-blue-500 text-white"
              : "text-black"
          }`}
          onClick={() => {
            handleButtonClick("Getting started");
            setFreeOpen((prev) => !prev);
            setAllOpen(false);
            setPricingOpen(false);
          }}
        >
          Getting started
        </button>
        <button
          className={`rounded-md p-2 pr-3 pl-4 text-xl font-semibold transition ${
            activeButton === "Pricing" ? "bg-blue-500 text-white" : "text-black"
          }`}
          onClick={() => {
            handleButtonClick("Pricing");
            setPricingOpen((prev) => !prev);
            setAllOpen(false);
            setFreeOpen(false);
          }}
        >
          Pricing
        </button>
      </div>
      {setPricing && <Info />}
      {allOpen && <Premium />}
      {freeOpen && <Free />}
    </section>
  );
};

export default Pricing;
