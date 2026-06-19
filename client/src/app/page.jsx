import dynamic from "next/dynamic";

import Banner from "@/components/home/Banner";

const WhyWeChoose = dynamic(() => import("@/components/home/WhyWeChoose"))
const Portfolio = dynamic(() => import("@/components/home/Portfolio"))
const OurServices = dynamic(() => import("@/components/home/OurServices"))


export const metadata = {
  title: "AK Decoration Service | Best Event Decoration in Kanyakumari",
  description: "AK Decoration provides professional wedding, birthday, and event decoration services in Kanyakumari district and marthandam surrounding areas. Affordable, creative, and customized designs.",
  alternates: {
    canonical: "/",
  }
};


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
