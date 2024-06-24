"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/mobile/Logo.svg";
import Hamburger from "@/public/mobile/Hamburger.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {};
  return (
    <nav className="flex text-center justify-between ml-8 mr-8 max-w-[1440px]">
      {/* 2 items */}
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
            className=" overflow-hidden justify-center absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-80"
          >
            <div className="flex mt-[7vh]">
              <div className=" bg-white mx-auto w-[60vw] p-10 z-30 rounded-xl shadow-xl">
                <ul className="flex flex-col gap-10 text-2xl font-medium">
                  <li className="underline hover:scale-110 cursor-pointer hover:font-semibold transition-all">
                    Features
                  </li>
                  <li className="underline hover:scale-110 cursor-pointer hover:font-semibold transition-all">
                    About us
                  </li>
                  <li className="underline hover:scale-110 cursor-pointer hover:font-semibold transition-all">
                    Blog
                  </li>
                  <li className="underline hover:scale-110 cursor-pointer hover:font-semibold transition-all">
                    Log in
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="hidden sm:flex">
          <ul className="flex flex-row mt-8 gap-10 text-base font-medium">
            <li className="hover:underline hover:scale-125 cursor-pointer hover:font-semibold transition-all">
              Features
            </li>
            <li className="hover:underline hover:scale-125 cursor-pointer hover:font-semibold transition-all">
              About us
            </li>
            <li className="hover:underline hover:scale-125 cursor-pointer hover:font-semibold transition-all">
              Blog
            </li>
            <li className="hover:underline hover:scale-125 cursor-pointer hover:font-semibold transition-all">
              Log in
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
