import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



const SERVICE_DETAILS = [
    {
        icon: '/floral-decoration.webp', title: 'Floral Decoration', link:'/service-detail/floral-decoration',
        desc: `Artisanal flower arrangements using premium seasonal blooms to create a fragrant, living atmosphere.`
    },
    {
        icon: '/wedding-decoration.webp', title: `Wedding Decoration`,link:'/service-detail/wedding-decoration',
        desc: `Comprehensive event styling from entrance to exit, ensuring a cohesive and regal visual narrative.`
    },
    {
        icon: '/stage-decoration.webp', title: 'Stage Decoration',link:'/service-detail/stage-decoration',
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
                        className={cn(`flex flex-col max-w-[352px] bg-white shadow-sm overflow-hidden`,
                            index === 0 ? 'md:mt-0 ' : index === 1 ? 'md:mt-10' : index === 2 ? 'md:mt-20' : ''
                        )}
                    >
                        <Image
                            src={service?.icon}
                            alt={service?.title}
                            width={352}
                            height={528}
                            className="w-full h-[450px] object-cover"
                        />

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