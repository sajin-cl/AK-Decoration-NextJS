import Banner from '@/components/common/banner';


const content = {
    title: "Our Achievements",
    description: `Explore our curated collection of monumental events, from sacred floral artistry
to grand architectural stages. Every detail is a testament to timeless elegance.`,
    image: "/gallery-banner.webp"
}


const GalleryPage = () => {
    return (
        <>
            <Banner {...content} />
        </>
    )
}

export default GalleryPage