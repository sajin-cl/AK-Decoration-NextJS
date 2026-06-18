import Image from 'next/image'
import React from 'react'

const Banner = ({ data }) => {

    const { title, subtitle, description, image } = data;

    return (
        <section id='service-detail-banner' className='relative w-full overflow-x-hidden min-h-screen'>
            <div className=' image-banner-container w-full h-auto max-w-[1280px]'>
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes='(max-w-1280px) 100vw, 1280px'
                    priority
                    className='object-cover'
                />
            </div>
            {/*   Gradient black screen */}
            <div className="black-screen absolute inset-0 bg-black/30 z-30"></div>

            {/* Absolute content */}
            <div className="absolute bottom-20 left-10 z-40">
                <p className='sub-title font-semibold text-white text-[12px]'>{subtitle}</p>
                <h1 className='title font-bodoni text-white text-[64px]'>{title}</h1>
                <p className="desc font-bodoni text-white text-sm max-w-4xl">
                    {description}
                </p>
            </div>

        </section>
    )
}

export default Banner