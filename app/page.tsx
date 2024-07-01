import Carousel from "@/app/components/opinions/Caruseal";
import Hero from "@/app/views/Hero";
import Navbar from "@/app/components/navbar/Navbar";
import Pricing from "@/app/views/Pricing";
import Essentials from "@/app/views/Essentials";
import Questions from "@/app/views/Questions";
import Footer from "@/app/views/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Essentials />
      <Carousel />
      <Pricing />
      <Questions />
      <Footer />
    </div>
  );
}
