import dynamic from "next/dynamic";

import Banner from "@/components/common/banner";
const Aboutme = dynamic(() => import("@/components/about/Aboutme"));
const Pillors = dynamic(() => import("@/components/about/Pillors"));
const ShowcaseSection = dynamic(() => import("@/components/about/ShowcaseSection"));

const content = {
    subtitle: "LEGACY OF CRAFTSMANSHIP",
    title: "Our Heritage of Elegance",
    description: "AK Decoration is the premier architect of luxury events in Kanyakumari. We transform spaces into breathtaking narratives, where heritage meets contemporary finesse to create memories that endure beyond time.",
    image: "/about-banner-v1.webp"
}

export const metadata = {
    title: "About Us | AK Decoration Service",
    description: "AK Decoration provides professional wedding, birthday, and event decoration services in Kanyakumari district and marthandam surrounding areas. Affordable, creative, and customized designs.",
    alternates: {
        canonical: "/about",
    }
};

export default function AboutPage() {
    return (
        <>
            <Banner data={content} />
            <Aboutme />
            <Pillors />
            <ShowcaseSection />
        </>
    )
};