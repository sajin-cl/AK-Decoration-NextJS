import Image from 'next/image'
import React from 'react'


const Banner = ({ data }) => {

    const { subtitle, title, description, image } = data;

    return (
        <section className='relative min-h-screen w-full overflow-x-hidden'>
            {/* Gradient design top layer*/}
            <div className='absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-white via-white/70 to-transparent z-10'></div>
              
    
            {/* Background Image */}
            <Image
                src={image}
                fill
                sizes='100vw'
                fetchPriority='high'
                priority
                quality={65}
                className='object-cover'
                alt={title}
            />

            {/* Hero section absolute contents */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 space-y-4 w-full max-w-5xl px-5'>
                <p className='text-amber-300 text-shadow-lg text-center font-semibold text-xl tracking-wide'>
                    {subtitle}
                </p>

                <h1 className='text-2xl md:text-4xl text-shadow-lg font-bodoni font-bold text-white text-center leading-7 md:leading-14 tracking-wide'>
                    {title}
                </h1>

                <p className='text-base md:text-[16px] font-semibold text-center text-shadow-sm font-popins text-gray-100 max-w-3xl mx-auto'>
                    {description}
                </p>
            </div>
        </section>
    )
}

export default Banner;