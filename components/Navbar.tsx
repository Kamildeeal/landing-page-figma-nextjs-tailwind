import Image from "next/image";
import React from "react";
import Logo from "@/public/mobile/Logo.svg";
import Hamburger from "@/public/mobile/Hamburger.svg";

function Navbar() {
  return (
    <nav className="flex text-center justify-between ml-8 mr-8">
      {/* 2 items */}
      <Image src={Logo} className="mt-8" alt="logo" />
      <Image src={Hamburger} className="mt-6" alt="logo" />
    </nav>
  );
}

export default Navbar;
