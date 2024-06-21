import FeedChart1 from "@/components/FeedCharts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeedChart1 />
      <Pricing />
      <Footer />
    </div>
  );
}
