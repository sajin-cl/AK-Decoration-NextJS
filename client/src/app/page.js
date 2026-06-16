import HeroSection from "@/components/home/HeroSection";
import OurServices from "@/components/home/OurServices";
import Portfolio from "@/components/home/Portfolio";
import WhyWeChoose from "@/components/home/WhyWeChoose";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyWeChoose />
      <OurServices />
      <Portfolio/>
    </>
  );
};
