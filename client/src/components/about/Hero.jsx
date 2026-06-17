import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='relative min-h-screen w-full overflow-x-hidden'>
            {/* Gradient design top layer*/}
            <div className='absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-white via-white/70 to-transparent z-10'></div>

            {/* Background Image */}
            <Image
                src={'/about-banner.webp'}
                fill
                sizes='100vw'
                priority
                className='object-cover'
                alt='about-banner'
            />

            {/* Hero section absolute contents */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 space-y-4'>
                <p className='text-amber-200 text-center font-medium text-xl tracking-wide'>LEGACY OF CRAFTSMANSHIP</p>
                <h1 className='text-4xl text-shadow-lg font-bodoni font-bold text-white text-center leading-14 tracking-wide'>
                    Our Heritage of Elegance
                </h1>
                <p className='text-lg md:text-[16px] font-sans font-light text-center font-popins text-gray-200'>
                    AK Decoration is the premier architect of luxury events in Kanyakumari. We
                    transform spaces into breathtaking narratives, where heritage meets
                    contemporary finesse to create memories that endure beyond time.
                </p>
            </div>
        </section>
    )
}

export default Hero;