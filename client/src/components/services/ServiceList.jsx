import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LIST = [
    {
        id: 1, title: 'Floral Decor', subTitle: 'Botanical Artistry', image: '/floral-decor-bg.webp',
        content: `We view flowers as living architecture. Our floral designs range from delicatehtable accents to massive, immersive botanical installations that transform static rooms into breathing landscapes.`,
        points: ["Bespoke floral arrangements & centerpieces", "Bespoke floral arrangements & centerpieces", "Bespoke floral arrangements & centerpieces"],
        explore: 'EXPLORE FLORAL PORTFOLIO',
        goTo: '/service-detail/floral-decoration'
    },
    {
        id: 2, title: 'Stage Design', subTitle: 'Scenic Architecture', image: '/stage-decor-bg.webp',
        content: `The focal point of any great event is its stage. We design and build custom scenic environments that serve as the heartbeat of your celebration, combining structural integrity with thematic beauty.`,
        points: ["Custom stage setups & thematic builds", "Scenic design & backdrop fabrication", "3D spatial planning and visualization"],
        explore: 'EXPLORE STAGE PORTFOLIO',
        goTo: '/service-detail/stage-decoration'
    },
    {
        id: 3, title: 'Wedding Planning', subTitle: 'End-to-End Curation', image: '/wedding-decor-bg.webp',
        content: `Experience the ease of luxury. Our planning division handles every detail of your wedding, from venue selection and logistics to final decor installation, ensuring a cohesive and stress-free journey.`,
        points: ["Comprehensive logistics & timeline management", "Vendor coordination & site supervision", "Full-service aesthetic & conceptual curation"],
        explore: 'EXPLORE WEDDING PORTFOLIO',
        goTo: '/service-detail/wedding-decoration'
    },
    {
        id: 4, title: 'Event Lighting', subTitle: 'Atmospheric Excellence', image: '/lighting-decor-bg.webp',
        content: `Light defines emotion. We use strategic mood lighting and acoustic planning to create multi-sensory experiences that guide your guests through a carefully crafted emotional narrative.`,
        points: ["Strategic mood & architectural lighting", "Acoustic planning & soundscape design", "Intelligent lighting effects & show programming"],
        explore: 'EXPLORE LIGHTING PORTFOLIO',
        goTo: '/service-detail/floral-decoration'
    },
]


const ServiceList = () => {
    return (
        <section id='service-list' className='relative w-full  overflow-x-hidden px-10 md:px-20 pb-30 bg-white space-y-20'>

            {LIST.map((service) => (
                <div key={service?.id} className="service-container grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-center overflow-hidden">
                    {/*  Image Section */}
                    <div className={cn('image-section w-full max-w-[544px] h-[550px] overflow-hidden', service.id % 2 !== 0 ? 'lg:order-1' : 'lg:order-2')}>
                        <Image
                            src={service?.image}
                            className='w-full h-full object-cover rounded-xl'
                            width={544}
                            height={550}
                            alt={service?.title}
                            sizes="(max-width: 1280px) 100vw, 544px"
                        />
                    </div>

                    {/* Image Info Section */}
                    <div className={cn('image-info-section space-y-2 md:space-y-3', service?.id % 2 === 0 ? 'lg:order-1' : 'lg:order-2')}>
                        {/* Top heading */}
                        <div>
                            <p
                                className='font-mono font-bold text-xs text-primary  tracking-wide'
                            >
                                {service?.subTitle}
                            </p>
                            <h1
                                className='font-bodoni text-[32px] font-bold text-[#1B1C1C]'
                            >
                                {service?.title}
                            </h1>
                        </div>
                        {/* Content */}
                        <p>
                            {service?.content}
                        </p>

                        <ul className='list-points space-y-5 pt-5 list-disc pl-5'>
                            {service.points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>

                        <div className='mt-5'>
                            <Link href={service?.goTo} className='text-primary underline underline-offset-2 text-xs font-bold'>
                                {service?.explore}
                            </Link>
                        </div>
                    </div>

                </div>
            ))
            }
        </section >
    )
}

export default ServiceList