"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/public/mobile/Logo.svg";
import Hamburger from "@/public/mobile/Hamburger.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleResize() {
    if (window.innerWidth >= 640) {
      setIsOpen(false);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <div className="max-w-[1247px] mx-auto">
      <nav className="flex justify-between ml-8 mr-8 ">
        <Image src={Logo} className="mt-8" alt="logo" />
        <section>
          <div className="w-8 h-8 mt-6 sm:hidden hover:scale-125 cursor-pointer">
            <Image
              src={Hamburger}
              onClick={() => setIsOpen(true)}
              layout="responsive"
              alt="logo"
            />
          </div>

          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="overflow-hidden justify-center absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-80"
            >
              <div className="flex mt-[7vh]">
                <div className="bg-white border-almostBlack border-4 border-solid mx-auto w-[60vw] p-10 z-30 rounded-xl shadow-xl relative">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 p-2 rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-almostBlack"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <ul className="flex flex-col text-center gap-10 text-2xl font-medium">
                    <li className="flex flex-col hover:scale-110 cursor-pointer hover:font-semibold transition-all">
                      Features
                      <div className="w-full mt-3 h-0.5 bg-almostBlack"></div>
                    </li>
                    <li className="flex flex-col hover:scale-110 cursor-pointer hover:font-semibold transition-all">
                      About us
                      <div className="w-full mt-3 h-0.5 bg-almostBlack"></div>
                    </li>
                    <li className="flex flex-col hover:scale-110 cursor-pointer hover:font-semibold transition-all">
                      Blog
                      <div className="w-full mt-3 h-0.5 bg-almostBlack"></div>
                    </li>
                    <li className="flex flex-col hover:scale-110 cursor-pointer hover:font-semibold transition-all">
                      Log in
                      <div className="w-full mt-3 h-0.5 bg-almostBlack"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          <div className="hidden sm:flex">
            <ul className="flex flex-row mt-8 gap-10 text-base font-medium lg:text-xl">
              <div className="relative">
                <li className="absolute right-[10rem] hover:underline hover:scale-110 cursor-pointer hover:font-semibold transition-transform transform origin-center m-1">
                  Features
                </li>
              </div>
              <div className="relative w-[40px]">
                <li className="absolute right-[8rem] whitespace-nowrap hover:underline hover:scale-110 cursor-pointer hover:font-semibold transition-transform transform origin-center m-1">
                  About us
                </li>
              </div>
              <div className="relative">
                <li className="absolute right-[6rem] hover:underline hover:scale-110 cursor-pointer hover:font-semibold transition-transform transform origin-center m-1">
                  Blog
                </li>
              </div>

              <div className="relative">
                <button className="absolute right-[2rem] top-[-2px] whitespace-nowrap px-4 py-2 bg-gray-200 hover:bg-gray-400 transition-all text-almostBlack font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none">
                  Log in
                </button>
              </div>
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
}

export default Navbar;
