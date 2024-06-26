import Carousel from "@/components/Caruseal";
import Essential from "@/components/Essential";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Questions from "@/components/Questions";
import { Helmet } from "react-helmet";

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
