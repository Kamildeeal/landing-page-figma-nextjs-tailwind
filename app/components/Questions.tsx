"use client";
import { useState } from "react";
import Appear from "@/app/animations/AppearHeader";
import FromUpAnimate from "@/app/animations/FromUpAnimate";

interface OpenSections {
  [key: string]: boolean;
}

export default function Questions() {
  const [openSections, setOpenSections] = useState<OpenSections>({
    section1: true,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
    <FromUpAnimate>
      <div className="flex justify-center items-center m-8 flex-col">
        <h2 className="hidden sm:block text-4xl mb-12">
          Frequently asked questions
        </h2>
        <article className="max-w-[836px] w-full">
          <div>
            <div>
              <div className="flex flex-row gap-10 justify-between">
                <h4 className="text-almostBlack font-semibold text-lg mb-4 sm:text-xl">
                  How does the contact management feature help me keep track of
                  clients and partners?
                </h4>
                <span
                  className="text-2xl font-semibold text-black cursor-pointer"
                  onClick={() => toggleSection("section1")}
                >
                  {openSections.section1 ? "✕" : "+"}
                </span>
              </div>
              {openSections.section1 && (
                <p className="text-base text-customGray sm:text-lg">
                  Keep track of your contacts, gain valuable insights, analyse
                  live data and performance metrics.
                </p>
              )}
              <div
                className={`h-0.5 w-full mt-4 mb-4 ${
                  openSections.section1 ? "bg-almostBlack" : "bg-gray-300"
                }`}
              ></div>
            </div>

            <div className="flex flex-row gap-10 justify-between">
              <h4 className="text-almostBlack font-semibold text-lg mb-4 sm:text-xl">
                Can I customize the dashboards and reporting feature to display
                the metrics that are most important to my business?
              </h4>
              <span
                className="text-2xl font-semibold text-black cursor-pointer"
                onClick={() => toggleSection("section2")}
              >
                {openSections.section2 ? "✕" : "+"}
              </span>
            </div>
            {openSections.section2 && (
              <p className="text-base text-customGray sm:text-lg">
                Of course you can! This is special feature in our offer.
              </p>
            )}
            <div
              className={`h-0.5 w-full mt-4 mb-4 ${
                openSections.section2 ? "bg-almostBlack" : "bg-gray-300"
              }`}
            ></div>
          </div>

          <div>
            <div className="flex flex-row gap-10 justify-between">
              <h4 className="text-almostBlack font-semibold text-lg mb-4 sm:text-xl">
                How does the task management feature help me delegate tasks to
                my team and track progress?
              </h4>
              <span
                className="text-2xl font-semibold text-black cursor-pointer"
                onClick={() => toggleSection("section3")}
              >
                {openSections.section3 ? "✕" : "+"}
              </span>
            </div>
            {openSections.section3 && (
              <p className="text-base text-customGray sm:text-lg">
                Time is money, you will be able to to it quicker!
              </p>
            )}
            <div
              className={`h-0.5 w-full mt-4 mb-4 ${
                openSections.section3 ? "bg-almostBlack" : "bg-gray-300"
              }`}
            ></div>
          </div>
          <div>
            <div className="flex flex-row gap-10 justify-between">
              <h4 className="text-almostBlack font-semibold text-lg mb-4 sm:text-xl">
                Can I collaborate with my team in real-time using all tools?
              </h4>
              <span
                className="text-2xl font-semibold text-black cursor-pointer"
                onClick={() => toggleSection("section4")}
              >
                {openSections.section4 ? "✕" : "+"}
              </span>
            </div>
            {openSections.section4 && (
              <p className="text-base text-customGray sm:text-lg">
                Yes, limitless!
              </p>
            )}
            <div
              className={`h-0.5 w-full mt-4 mb-4 ${
                openSections.section4 ? "bg-almostBlack" : "bg-gray-300"
              }`}
            ></div>
          </div>

          <div>
            <div className="flex flex-row gap-10 justify-between">
              <h4 className="text-almostBlack font-semibold text-lg mb-4 sm:text-xl">
                Is this app available on all devices?
              </h4>
              <span
                className="text-2xl font-semibold text-black cursor-pointer"
                onClick={() => toggleSection("section5")}
              >
                {openSections.section5 ? "✕" : "+"}
              </span>
            </div>
            {openSections.section5 && (
              <p className="text-base text-customGray sm:text-lg">
                We are working on it.
              </p>
            )}
            <div
              className={`h-0.5 w-full mt-4 mb-4 ${
                openSections.section5 ? "bg-almostBlack" : "bg-gray-300"
              }`}
            ></div>
          </div>

          <div>
            <div className="flex flex-row gap-10 justify-between">
              <h4 className="text-almostBlack font-semibold text-lg mb-4 sm:text-xl">
                How does the app help me stay compliant when working with
                freelancers and contractors?
              </h4>
              <span
                className="text-2xl font-semibold text-black cursor-pointer"
                onClick={() => toggleSection("section6")}
              >
                {openSections.section6 ? "✕" : "+"}
              </span>
            </div>
            {openSections.section6 && (
              <p className="text-base text-customGray sm:text-lg">
                In process..
              </p>
            )}
            <div
              className={`h-0.5 w-full mt-4 mb-4 ${
                openSections.section6 ? "bg-almostBlack" : "bg-gray-300"
              }`}
            ></div>
          </div>
        </article>
      </div>
    </FromUpAnimate>
  );
}
