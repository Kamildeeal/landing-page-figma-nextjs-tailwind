import React from "react";
import faqData from "./FAQData";
import FAQSection from "./FAQSection";

interface OpenSections {
  [key: string]: boolean;
}

type FAQListProps = {
  openSections: OpenSections;
  toggleSection: (section: string) => void;
};

const FAQList = ({ openSections, toggleSection }: FAQListProps) => (
  <article className="max-w-[836px] w-full">
    {faqData.map((faq, index) => (
      <FAQSection
        key={index}
        question={faq.question}
        answer={faq.answer}
        isOpen={openSections[faq.section]}
        toggleSection={() => toggleSection(faq.section)}
      />
    ))}
  </article>
);

export default FAQList;
