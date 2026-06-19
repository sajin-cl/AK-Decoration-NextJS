import dynamic from "next/dynamic";

import Banner from "@/components/home/Banner";

const WhyWeChoose = dynamic(() => import("@/components/home/WhyWeChoose"))
const Portfolio = dynamic(() => import("@/components/home/Portfolio"))
const OurServices = dynamic(() => import("@/components/home/OurServices"))


export default function Home() {
  return (
    <>
      <Banner />
      <WhyWeChoose />
      <OurServices />
      <Portfolio />
    </>
  );
};
