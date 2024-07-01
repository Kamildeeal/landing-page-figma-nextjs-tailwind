"use client";

import { useState } from "react";
import BarAnimation from "@/app/animations/BarAnimation";

type CollapsibleItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  setIsOpen: () => void;
};

const CollapsibleItem = ({
  title,
  content,
  isOpen,
  setIsOpen,
}: CollapsibleItemProps) => (
  <div>
    <div
      className="flex justify-between mb-3 text-left items-center"
      onClick={setIsOpen}
    >
      <h4 className="text-xl cursor-pointer hover:underline sm:text-2xl">
        {title}
      </h4>
      {isOpen && (
        <button className="text-3xl font-bolder hover:bg-gray-300 hover:underline">
          →
        </button>
      )}
    </div>
    {isOpen && (
      <p className="text-left text-base font-normal text-customGray mb-4">
        {content}
      </p>
    )}
  </div>
);

const CollapsibleSection = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="min-w-[343px] max-w-[513.5px] lg:flex-1">
      <BarAnimation>
        <h3 className="text-2xl font-semibold mb-4 text-left sm:text-4xl">
          Dashboard and reporting
        </h3>
      </BarAnimation>
      <BarAnimation>
        <p className="text-left text-base font-normal text-customGray mb-4">
          Gain valuable insights with real-time monitoring. Track key
          performance indicators and make data-driven decisions.
        </p>
      </BarAnimation>
      <CollapsibleItem
        title="Real-time monitoring"
        content="View live data and performance metrics."
        isOpen={isOpen1}
        setIsOpen={() => setIsOpen1((prev) => !prev)}
      />
      <CollapsibleItem
        title="Data visualization"
        content="Live data charts visualization."
        isOpen={isOpen2}
        setIsOpen={() => setIsOpen2((prev) => !prev)}
      />
      <CollapsibleItem
        title="Alerts and notifications"
        content="Use alerts to always know if something is going wrong."
        isOpen={isOpen3}
        setIsOpen={() => setIsOpen3((prev) => !prev)}
      />
    </div>
  );
};

export default CollapsibleSection;
