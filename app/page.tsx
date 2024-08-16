import Hero from "@/components/homepage/hero";
import Navbar from "@/components/homepage/navbar";
import Pricing from "@/components/homepage/pricing";
import Services from "@/components/homepage/services";
import About from "@/components/homepage/about";
import ContactUs from "@/components/homepage/contact-us";
import Video from "@/components/homepage/videro";
import CarouselGallery from "@/components/homepage/carousel-gallery";

export default function Home() {
  return (
    <div className="font-inter bg-dark-foreground max-w-screen-2xl mx-auto">
      <section className="relative bg-[url('/hero-img.jpeg')] text-white bg-cover z-10 bg-center bg-no-repeat min-h-[600px] !lg:h-[600px]">
        <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>
        <Navbar />
        <Hero />
      </section>
      <Services />
      <CarouselGallery />
      <About />
      <Pricing />
      <Video />
      <ContactUs />
    </div>
  );
}
