"use client";
import Image from "next/image";
import React, { useState } from "react";
import Charts1 from "@/public/mobile/Charts1.svg";
import Charts2 from "@/public/mobile/Charts2.svg";

const FeedChart1 = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <section className="mr-8 ml-8 flex justify-center items-center flex-col">
      <Image src={Charts1} alt="charts1" className="flex justify-center items-center" />
      <article className="mt-8">
        <h1 className="text-4xl text-center mb-8 font-medium">
          Essential tools for propelling your buisness forward
        </h1>
        <p className="text-center text-base font-normal text-customGray">
          Streamline your operations, boost productivity and drive growth with
          our own essential tools
        </p>
      </article>
      <article className="mt-8 justify-center flex flex-col">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-left">
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
              <h4 className="text-xl cursor-pointer hover:underline">
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
              <h4 className="text-xl cursor-pointer hover:underline">
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
                <button className="text-3xl font-bolder hover:bg-gray-300 hover:underline">
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

        <div className="flex justify-center mt-8">
          <div className="items-center text-center justify-center">
            <Image src={Charts2} alt="chart2" className="inline-block" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default FeedChart1;
