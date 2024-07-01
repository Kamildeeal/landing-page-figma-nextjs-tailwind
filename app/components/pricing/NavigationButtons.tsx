import React from "react";

type NavigationButtonsProps = {
  activeButton: string;
  handleButtonClick: (buttonName: string) => void;
};

const NavigationButtons = ({
  activeButton,
  handleButtonClick,
}: NavigationButtonsProps) => (
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
        activeButton === "Pricing" ? "bg-blue-500 text-white" : "text-black"
      }`}
      onClick={() => handleButtonClick("Pricing")}
    >
      Pricing
    </button>
  </div>
);

export default NavigationButtons;
