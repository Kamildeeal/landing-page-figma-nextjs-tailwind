import React from "react";

const Free = () => {
  return (
    <div className="bg-gray-200 rounded-2xl pl-6 pr-6 pt-6 pb-8 mt-8 mb-4 min-w-[343px] max-w-[400px] w-full">
      <div>
        <h2 className="text-left text-3xl mb-2 font-semibold sm:text-4xl">
          Simple
        </h2>
        <p className="text-left text-xl font-normal text-customGray">
          Keep track of your contacts, gain valuable insights, analyse live data
          and performance metrics.
        </p>
      </div>
      <h2 className="text-left text-3xl mb-2 mt-10 font-semibold">
        Free{" "}
        <span className="text-base font-normal ml-4">
          {" "}
          * No credit card required
        </span>
      </h2>
      <div className="bg-gray-500 h-0.5 mt-8"></div>
      <ol className="text-left mt-6 text-lg">
        <li className="flex items-start">
          <span className="mr-2 font-bold">✓</span> Real-time monitoring
        </li>
        <li className="flex items-start">
          <span className="mr-2 font-bold">✓</span> Track key performance
          indicators
        </li>
        <li className="flex items-start">
          <span className="mr-2 font-bold">✓</span> Schedule appointments
        </li>
        <li className="ml-0 flex items-start">
          <span className="mr-2 font-bold">✓</span>
          <span>Organize, delegate and keep track of tasks</span>
        </li>
      </ol>
      <button className="w-full bg-blue-500 text-white h-16 rounded-3xl font-semibold text-lg mb-4 mt-8 hover:bg-blue-400">
        Get started
      </button>
    </div>
  );
};

export default Free;
