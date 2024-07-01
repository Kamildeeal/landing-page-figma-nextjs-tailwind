import Image from "next/image";
import Charts2 from "@/public/mobile/Charts2.svg";

const ChartImage = () => (
  <div className="flex justify-center mt-8 relative h-52 w-full lg:h-72 lg:w-[514px] lg:flex-1">
    <div className="relative w-full h-full">
      <Image src={Charts2} alt="chart2" layout="fill" objectFit="contain" />
    </div>
  </div>
);

export default ChartImage;
