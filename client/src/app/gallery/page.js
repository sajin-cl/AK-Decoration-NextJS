import dynamic from 'next/dynamic';

import Banner from '@/components/common/banner';
const GallerySection = dynamic(() => import('@/components/gallery/GallerySection'));


const content = {
    title: "Our Achievements",
    description: `Explore our curated collection of monumental events, from sacred floral artistry
to grand architectural stages. Every detail is a testament to timeless elegance.`,
    image: "/gallery-banner.webp"
}


const GalleryPage = () => {
    return (
        <>
            <Banner data={content} />
            <GallerySection />
        </>
    )
}

export default GalleryPage