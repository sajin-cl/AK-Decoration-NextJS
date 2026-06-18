import Aboutme from "@/components/about/Aboutme";
import Pillors from "@/components/about/Pillors";
import ShowcaseSection from "@/components/about/ShowcaseSection";
import Banner from "@/components/common/banner";

const content = {
    subtitle: "LEGACY OF CRAFTSMANSHIP",
    title: "Our Heritage of Elegance",
    description: "AK Decoration is the premier architect of luxury events in Kanyakumari. We transform spaces into breathtaking narratives, where heritage meets contemporary finesse to create memories that endure beyond time.",
    image: "/about-banner.webp"
}

export default function AboutPage() {
    return (
        <>
            <Banner {...content} />
            <Aboutme />
            <Pillors />
            <ShowcaseSection />
        </>
    )
};