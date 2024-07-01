"use client";

import React, { useState } from "react";
import FromUpAnimate from "@/app/animations/FromUpAnimate";
import SectionHeader from "../components/pricing/SectionHeader";
import NavigationButtons from "../components/pricing/NavigationButtons";
import MobileContent from "../components/pricing/MobileContent";
import DesktopContent from "../components/pricing/DesktopContent";

const Pricing = () => {
  const [activeButton, setActiveButton] = useState("Pricing");

  const handleButtonClick = (buttonName: string) => {
    if (activeButton === buttonName) {
      return;
    }
    setActiveButton(buttonName);
  };

  return (
    <FromUpAnimate>
      <section className="m-8 flex flex-col text-center items-center justify-center xl:mx-72">
        <SectionHeader />
        <NavigationButtons
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        <MobileContent activeButton={activeButton} />
        <DesktopContent />
      </section>
    </FromUpAnimate>
  );
};

export default Pricing;
