import Hero from "@/components/homepage/hero";
import Navbar from "@/components/homepage/navbar";
import Pricing from "@/components/homepage/pricing";
import Services from "@/components/homepage/services";
import About from "@/components/svgs/about";

export default function Home() {
  return (
    <>
      <div className="relative bg-[url('/hero-img.jpeg')] text-white bg-cover bg-left md:bg-center xl:bg-cover bg-no-repeat min-h-[600px]">
        <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Pricing />
      <About />
    </>
  );
}
