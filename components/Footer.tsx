import Image from "next/image";
import React from "react";
import logo from "@/public/mobile/Logo_white.svg"

const Footer = () => {
  return <div className="bg-black p-8">
    <Image
    src={logo}
    alt="logo"
    className="mt-6 mb-12 text-left"/>
    <div className="bg-white mb-20  p-6 rounded-lg">
      <h4 className="text-xl mb-1" >Subscribe to newsletter</h4>
      <p className="text-left text-base font-normal">
        Subscribe now to receive tips on how to take your buisness to the next level
      </p>
      <div className="mt-4 flex justify-between text-center tems-center">
        <button className="border border-gray-400 rounded-xl pl-3 pr-3 pt-3 pb-3">Enter your email</button>
        <button className="pl-3 pr-3 pt-3 pb-3 bg-blue-400 text-white rounded-xl font-semibold text-base hover:bg-blue-500">Subscribe</button>
      </div>
    </div>
    <div className="text-white flex justify-between text-base mb-10">
        <ul>
          <li className="mb-4 text-xl font-semibold hover:underline cursor-pointer">Company</li>
          <li className="mb-4 hover:underline cursor-pointer">About</li>
          <li className="mb-4 hover:underline cursor-pointer">Our Process</li>
          <li className="mb-4 hover:underline cursor-pointer">Join our team</li>
        </ul>
      
        <ul>
          <li className="mb-4 text-xl font-semibold hover:underline cursor-pointer">Resources</li>
          <li className="mb-4 hover:underline cursor-pointer">News</li>
          <li className="mb-4 hover:underline cursor-pointer">Resaerch</li>
          <li className="mb-4 hover:underline cursor-pointer">Recent Projects</li>
        </ul>
    </div>
    <div className="text-gray-300 font-semibold">
      <h4 className="text-xl mb-5">Contact</h4>
      <address className="text-base mb-10">kamil.wojciak.1995@gmail.com</address>
    </div>
    <div className="text-gray-300 font-semibold">
      <h4 className="text-xl mb-5">LinkedIn & X</h4>
      <p className="text-sm">&copy; 2023 Growth. All rights reserved</p>
    </div>
  </div>;
};

export default Footer;
