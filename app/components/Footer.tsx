import Image from "next/image";
import React from "react";
import logo from "@/public/mobile/Logo_white.svg";

const Footer = () => {
  return (
    <div className="bg-black flex justify-center">
      <div className=" max-w-[1440px] p-8 sm:px-20 ">
        <Image src={logo} alt="logo" className="mt-6 mb-12 text-left" />
        <div className=" grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-base mb-10">
          <div className="bg-white mb-20  p-6 rounded-lg max-w-[405px] min-w-[313px] w-full col-span-2 md:col-span-1">
            <h4 className="text-xl mb-1">Subscribe to newsletter</h4>
            <p className="text-left text-base font-normal">
              Subscribe now to receive tips on how to take your buisness to the
              next level.
            </p>
            <div className="mt-4 flex justify-between text-center tems-center">
              <button className="border border-gray-400 rounded-xl pl-3 pr-3 pt-3 pb-3 transition hover:bg-slate-300">
                Enter your email
              </button>
              <button className="pl-3 pr-3 pt-3 pb-3 bg-blue-400 text-white rounded-xl font-semibold text-base hover:bg-blue-500">
                Subscribe
              </button>
            </div>
          </div>
          <div className="md:flex md:justify-center">
            <ul className="text-white md:flex md:flex-col md:items-start">
              <li className="mb-4 text-xl font-semibold hover:underline cursor-pointer">
                Company
              </li>
              <li className="mb-4 hover:underline cursor-pointer">About</li>
              <li className="mb-4 hover:underline cursor-pointer">
                Our Process
              </li>
              <li className="mb-4 hover:underline cursor-pointer">
                Join our team
              </li>
            </ul>
          </div>
          <div className="md:flex md:justify-center">
            <ul className="text-white md:flex md:flex-col md:items-start">
              <li className="mb-4 text-xl font-semibold hover:underline cursor-pointer">
                Resources
              </li>
              <li className="mb-4 hover:underline cursor-pointer">News</li>
              <li className="mb-4 hover:underline cursor-pointer">Research</li>
              <li className="mb-4 hover:underline cursor-pointer">
                Recent Projects
              </li>
            </ul>
          </div>

          <div className="text-gray-300 font-semibold flex flex-col items-start sm:items-center lg:items-start">
            <h4 className="text-xl mb-5">Contact</h4>
            <address className="text-base mb-10">
              kamil.wojciak.1995@gmail.com
            </address>
          </div>
        </div>
        <div className="text-gray-300 font-semibold flex flex-col text-start items-start">
          <h4 className="text-xl mb-5">LinkedIn & X</h4>
          <p className="text-sm">&copy; 2024 Growth. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
