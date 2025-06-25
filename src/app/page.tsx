import WhatWeOffer from "@/components/share/what-we-offer";
import HeroSection from "@/components/share/hero-section";
import OurToolkit from "@/components/share/our-toolkit";
import WhyChooseUs from "@/components/share/why-choose-us";
import OurBlogs from "@/components/share/our-blogs";
import HowWeWork from "@/components/share/how-we-work";
import FAQ from "@/components/share/faq";
import Testimonials from "@/components/share/testimonials";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeOffer />
      <WhyChooseUs />
      {/* <OurToolkit /> */}
      <HowWeWork />
      <FAQ />
      <Testimonials />
      <OurBlogs />
      {/* <p className="animate-gradient bg-[linear-gradient(83deg,_#6748CD,_#972BC7,_#B33691,_#8A30AC,_#B33691,_#972BC7,_#6748CD)] bg-[length:200%_auto] bg-clip-text text-6xl font-extrabold text-transparent md:text-9xl">
        Gradient Effect
      </p> */}
    </>
  );
}
