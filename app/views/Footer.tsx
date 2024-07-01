import Image from "next/image";
import React from "react";
import logo from "@/public/mobile/Logo_white.svg";
import SubscribeSection from "@/app/components/footer/SubscribeSection";
import FooterLinksSection from "@/app/components/footer/FooterLinksSection";
import ContactSection from "@/app/components/footer/ContactSection";
import SocialMediaSection from "@/app/components/footer/SocialMediaSection";

const Footer = () => {
  return (
    <div className="bg-black flex justify-center">
      <div className=" max-w-[1440px] p-8 sm:px-20">
        <Image src={logo} alt="logo" className="mt-6 mb-12 text-left" />
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-base mb-10">
          <SubscribeSection />
          <FooterLinksSection
            title="Company"
            links={["About", "Our Process", "Join our team"]}
          />
          <FooterLinksSection
            title="Resources"
            links={["News", "Research", "Recent Projects"]}
          />
          <ContactSection />
        </div>
        <SocialMediaSection />
      </div>
    </div>
  );
};

export default Footer;
