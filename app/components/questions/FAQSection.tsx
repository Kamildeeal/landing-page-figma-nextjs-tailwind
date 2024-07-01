import React from "react";

type FAQSectionProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleSection: () => void;
};

const FAQSection = ({
  question,
  answer,
  isOpen,
  toggleSection,
}: FAQSectionProps) => (
  <div>
    <div className="flex flex-row gap-10 justify-between">
      <h4 className="text-almostBlack font-semibold text-lg mb-4 sm:text-xl">
        {question}
      </h4>
      <span
        className="text-2xl font-semibold text-black cursor-pointer"
        onClick={toggleSection}
      >
        {isOpen ? "✕" : "+"}
      </span>
    </div>
    {isOpen && <p className="text-base text-customGray sm:text-lg">{answer}</p>}
    <div
      className={`h-0.5 w-full mt-4 mb-4 ${
        isOpen ? "bg-almostBlack" : "bg-gray-300"
      }`}
    ></div>
  </div>
);

export default FAQSection;
