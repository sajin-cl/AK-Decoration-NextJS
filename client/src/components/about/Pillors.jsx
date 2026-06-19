import React from 'react'
import Card from '@/components/ui/Card';

const PILLORS = [
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/paint-Icon_lxndxg.png`, title: `Artistry`,
        desc: `We approach every stage as a blank canvas, utilizing rare blooms andbespoke architectural elements to create immersive visual experiences.`
    },
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/tower-Icon_m1cqrn.png`, title: `Precision`,
        desc: `Every petal placement and lighting angle is calculated with surgical accuracy. We believe that true luxury resides in the smallest details.`
    },
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/stars-Icon_p3jznf.png`, title: `Client Vision`,
        desc: `Your story is our blueprint. we translate intangible dreams into tangible reality, ensuring your personality shines through every floral arch.`
    },

];

const Pillors = () => {
    return (
        <section id='about-pillors' className='w-full relative overflow-x-hidden px-10 md:px-20 py-30 bg-white'>
            <div className='flex items-center justify-center '>
                <h1 className='font-bodoni text-[32px] font-bold  text-[#1B1C1C]'>The Pillars of Our Craft</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16'>
                {PILLORS.map((pillors, index) => (
                    <Card
                        key={index}
                        icon={pillors?.icon}
                        title={pillors?.title}
                        desc={pillors?.desc}
                    />
                ))}
            </div>
        </section>
    )
}

export default Pillors