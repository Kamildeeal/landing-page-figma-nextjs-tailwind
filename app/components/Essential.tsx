"use client";
import Image from "next/image";
import React, { useState } from "react";

import Charts2 from "@/public/mobile/Charts2.svg";

const FeedChart1 = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <section className="mr-8 ml-8  flex justify-center items-center flex-col ">
      <article className="mt-8">
        <h1 className="text-4xl text-center mb-8 font-medium sm:text-5xl sm:w-max-[836px]">
          Essential tools for propelling your buisness forward
        </h1>
        <p className="text-center text-base font-normal text-customGray">
          Streamline your operations, boost productivity and drive growth with
          our own essential tools
        </p>
      </article>
      <article className="max-w-[1440px] mt-8 flex flex-col lg:flex-row lg:mx-16 lg:justify-between lg:gap-5">
        <div className="min-w-[343px] max-w-[513.5px] lg:flex-1">
          <h3 className="text-2xl font-semibold mb-4 text-left sm:text-4xl">
            Dashboard and reporting
          </h3>
          <p className="text-left text-base font-normal text-customGray mb-4">
            Gain valuable insights with real-time monitoring. Track key
            performance indicators and make data-driven decisions.
          </p>

          <div>
            <div
              className="flex justify-between mb-3 text-left items-center"
              onClick={() => setIsOpen1((prev) => !prev)}
            >
              <h4 className="text-xl cursor-pointer hover:underline sm:text-2xl">
                Real-time monitoring
              </h4>
              {isOpen1 && (
                <button className="text-3xl font-bolder hover:bg-gray-300 hover:underline">
                  →
                </button>
              )}
            </div>
            {isOpen1 && (
              <p className="text-left text-base font-normal text-customGray mb-4">
                View live data and performance metrics.
              </p>
            )}
          </div>

          <div>
            <div
              className="flex justify-between mb-3 text-center items-center"
              onClick={() => setIsOpen2((prev) => !prev)}
            >
              <h4 className="text-xl cursor-pointer hover:underline sm:text-2xl">
                Data visualization
              </h4>
              {isOpen2 && (
                <button className="text-3xl font-bolder hover:bg-gray-300 hover:underline">
                  →
                </button>
              )}
            </div>
            {isOpen2 && (
              <p className="text-left text-base font-normal text-customGray mb-4">
                Live data charts visualization.
              </p>
            )}
          </div>

          <div>
            <div
              className="flex justify-between mb-3 text-center items-center"
              onClick={() => setIsOpen3((prev) => !prev)}
            >
              <h4 className="text-xl cursor-pointer hover:underline">
                Alerts and notifications
              </h4>
              {isOpen3 && (
                <button className="text-3xl font-bolder hover:bg-gray-300 hover:underline sm:text-2xl">
                  →
                </button>
              )}
            </div>
            {isOpen3 && (
              <p className="text-left text-base font-normal text-customGray mb-4">
                Use alerts to always know if something is going wrong.
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-8 relative h-52 w-full lg:h-72 lg:w-[514px] lg:flex-1">
          <div className="relative w-full h-full">
            <Image
              src={Charts2}
              alt="chart2"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default FeedChart1;
