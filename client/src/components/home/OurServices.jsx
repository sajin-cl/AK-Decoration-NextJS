import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



const SERVICE_DETAILS = [
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/floral-decoration_vinmlx.webp`,
        title: 'Floral Decoration', link: '/service-detail/floral-decoration',
        desc: `Artisanal flower arrangements using premium seasonal blooms to create a fragrant, living atmosphere.`
    },
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/wedding-decoration_yxczle.webp`,
        title: `Wedding Decoration`, link: '/service-detail/wedding-decoration',
        desc: `Comprehensive event styling from entrance to exit, ensuring a cohesive and regal visual narrative.`
    },
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/stage-decoration_bkqdnw.webp`,
        title: 'Stage Decoration', link: '/service-detail/stage-decoration',
        desc: `Statement stages designed as the perfect backdrop for your most cherished photographs and moments.`
    },
];

const OurServices = () => {

    return (
        <section id='our-services' className='relative min-h-screen w-full px-10 md:px-20 py-30 overflow-x-hidden bg-[#F5F3F3]'>
            {/* Top heading */}
            <div className='flex flex-col items-start w-full mb-10'>
                <p
                    className='font-mono font-bold text-xs text-primary  tracking-wide'
                >
                    OUR SERVICES
                </p>
                <h1
                    className='font-bodoni text-[32px]  font-bold text-[#1B1C1C]'
                >
                    Crafting visual Masterpieces
                </h1>
            </div>

            {/*  Image sections */}
            <div className="service-image-sections flex flex-wrap gap-8 justify-center">
                {SERVICE_DETAILS.map((service, index) => (
                    <div
                        key={index}
                        className={cn(`flex flex-col max-w-[352px] bg-white shadow-sm overflow-hidden group cursor-pointer`,
                            index === 0 ? 'md:mt-0 ' : index === 1 ? 'md:mt-10' : index === 2 ? 'md:mt-20' : ''
                        )}
                    >
                        <div className="overflow-hidden transition-transform duration-300 ">
                            <Image
                                src={service?.icon}
                                alt={service?.title}
                                width={352}
                                height={528}
                                quality={65}
                                loading='lazy'
                                unoptimized
                                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500 "
                            />
                        </div>

                        <div className="p-6 border-b border-gray-100">
                            <h2 className="font-bodoni text-2xl font-bold mb-3">
                                {service?.title}
                            </h2>

                            <p className="text-gray-600 mb-4">
                                {service?.desc}
                            </p>

                            <Link href={service?.link}
                                className="text-primary font-semibold cursor-pointer">
                                Learn More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurServices;