import Carousel from "@/app/components/Caruseal";
import Essential from "@/app/components/Essential";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/navbar/Navbar";
import Pricing from "@/app/components/Pricing";
import Questions from "@/app/components/Questions";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Essential />
      <Carousel />
      <Pricing />
      <Questions />
      <Footer />
    </div>
  );
}
