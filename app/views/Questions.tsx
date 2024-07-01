"use client";

import { useState } from "react";
import FromUpAnimate from "@/app/animations/FromUpAnimate";
import SectionHeader from "@/app/components/questions/SectionHeader";
import FAQList from "@/app/components/questions/FAQList";

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
        <SectionHeader />
        <FAQList openSections={openSections} toggleSection={toggleSection} />
      </div>
    </FromUpAnimate>
  );
}
