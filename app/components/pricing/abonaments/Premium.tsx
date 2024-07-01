import React from "react";

const Premium = () => {
  return (
    <div className="bg-almostBlack rounded-2xl pl-6 pr-6 pt-6 pb-8 mt-8 mb-4 min-w-[343px] max-w-[400px] w-full">
      <div className="text-white">
        <h2 className="text-left text-3xl mb-2 font-semibold sm:text-4xl">
          Premium
        </h2>
        <p className="text-left text-xl font-normal">
          Keep track of your contacts, gain valuable insights, analyse live data
          and performance metrics.
        </p>
      </div>
      <h2 className="text-left text-3xl mb-2 mt-10 font-semibold text-white">
        $ 49 <span className="text-xl">/month</span>
      </h2>
      <div className="bg-gray-500 h-0.5 mt-8"></div>
      <div className="text-lg text-left text-white mt-4">
        Everything from the free plan plus:
      </div>
      <ol className="text-left mt-6 text-lg text-white">
        <li className="flex items-start">
          <span className="mr-2 font-bold">✓</span> Data-driven decisions
        </li>
        <li className="flex items-start">
          <span className="mr-2 font-bold">✓</span> Data visualisation
          indicators
        </li>
        <li className="flex items-start">
          <span className="mr-2 font-bold">✓</span> Schedule appointments
        </li>
        <li className="ml-0 flex items-start">
          <span className="mr-2 font-bold">✓</span>
          <span>Store and organise contact information</span>
        </li>
        <li className="ml-0 flex items-start">
          <span className="mr-2 font-bold">✓</span>
          <span>
            Teal-time communcation tools for messaging and video conferancing
          </span>
        </li>
      </ol>
      <button className="w-full bg-blue-500 text-white h-16 rounded-3xl font-semibold text-lg mb-4 mt-8 hover:bg-blue-400">
        Get started
      </button>
    </div>
  );
};

export default Premium;
