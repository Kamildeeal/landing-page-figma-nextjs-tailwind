import React from "react";
import Info from "./abonaments/Info";
import Free from "./abonaments/Free";
import Premium from "./abonaments/Premium";

const DesktopContent = () => (
  <div className="hidden lg:flex lg:flex-col items-center">
    <Info />
    <div className="flex flex-row gap-5">
      <div>
        <Free />
      </div>
      <Premium />
    </div>
  </div>
);

export default DesktopContent;
