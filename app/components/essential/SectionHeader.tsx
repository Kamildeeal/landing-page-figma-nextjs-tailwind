import BarAnimation from "@/app/animations/BarAnimation";

const SectionHeader = () => (
  <article className="mt-8">
    <BarAnimation>
      <h1 className="text-4xl text-center mb-8 font-medium sm:text-5xl sm:w-max-[836px]">
        Essential tools for propelling your business forward
      </h1>
    </BarAnimation>
    <BarAnimation>
      <p className="text-center text-base font-normal text-customGray">
        Streamline your operations, boost productivity and drive growth with our
        own essential tools
      </p>
    </BarAnimation>
  </article>
);

export default SectionHeader;
