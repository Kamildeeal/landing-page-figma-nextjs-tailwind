import React from "react";
import SectionHeader from "../components/essential/SectionHeader";
import CollapsibleSection from "../components/essential/CollapsibleItem";
import ChartImage from "../components/essential/EssentialChart";

const FeedChart1 = () => (
  <section className="mr-8 ml-8 flex justify-center items-center flex-col">
    <SectionHeader />
    <article className="max-w-[1440px] mt-8 flex flex-col lg:flex-row lg:mx-16 lg:justify-between lg:gap-5">
      <CollapsibleSection />
      <ChartImage />
    </article>
  </section>
);

export default FeedChart1;
