import React from "react";

type FooterLinksSectionProps = {
  title: string;
  links: string[];
};

const FooterLinksSection = ({ title, links }: FooterLinksSectionProps) => (
  <div className="md:flex md:justify-center">
    <ul className="text-white md:flex md:flex-col md:items-start">
      <li className="mb-4 text-xl font-semibold hover:underline cursor-pointer">
        {title}
      </li>
      {links.map((link, index) => (
        <li key={index} className="mb-4 hover:underline cursor-pointer">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinksSection;
