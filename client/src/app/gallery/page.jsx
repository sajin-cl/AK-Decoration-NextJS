import dynamic from 'next/dynamic';

import Banner from '@/components/common/banner';
const GallerySection = dynamic(() => import('@/components/gallery/GallerySection'));


const content = {
    title: "Our Achievements",
    description: `Explore our curated collection of monumental events, from sacred floral artistry
to grand architectural stages. Every detail is a testament to timeless elegance.`,
    image: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/gallery-banner_er03te.webp` 
};


export const metadata = {
    title: "Gallery | AK Decoration Service",
    description: "AK Decoration provides professional wedding, birthday, and event decoration services in Kanyakumari district and marthandam surrounding areas. Affordable, creative, and customized designs.",
    alternates: {
        canonical: "/gallery",
    }
};


const GalleryPage = () => {
    return (
        <>
            <Banner data={content} />
            <GallerySection />
        </>
    )
}

export default GalleryPage