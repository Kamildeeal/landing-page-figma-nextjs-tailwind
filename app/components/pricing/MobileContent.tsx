import React from "react";
import Info from "./abonaments/Info";
import Free from "./abonaments/Free";
import Premium from "./abonaments/Premium";

type MobileContentProps = {
  activeButton: string;
};

const MobileContent = ({ activeButton }: MobileContentProps) => (
  <div className="lg:hidden flex flex-col items-center justify-center">
    {activeButton === "Info" && <Info />}
    {activeButton === "All" && <Premium />}
    {activeButton === "Getting started" && <Free />}
    {activeButton === "Pricing" && <Info />}
  </div>
);

export default MobileContent;
