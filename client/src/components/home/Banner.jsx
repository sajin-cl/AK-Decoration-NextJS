import React from 'react'
import Image from 'next/image';
import logo from '../../../public/logo.png'
import Button from '../ui/Button';
import Link from 'next/link';


const Banner = () => {


    return (
        <section id='hero-section' className='relative min-h-screen w-full overflow-hidden'>
            {/* Gradient design top layer*/}
            <div className='absolute inset-0 bg-black/60 z-10'></div>

            {/* Background Image */}
            <Image
                src={'/hero-banner-img.avif'}
                fill
                sizes='100vw'
                priority
                quality={60}
                className='object-cover'
                alt='hero-banner'
            />

            {/* Hero section absolute contents */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 space-y-4'>
                <Image
                    src={logo}
                    alt='ak-decoration-logo'
                    height={96}
                    width={96}
                    quality={65}
                    className='mx-auto'
                    priority
                />
                <h1 className='text-4xl text-shadow-lg font-bodoni font-bold text-white text-center leading-14 tracking-wide'>
                    WEDDING & FLORAL
                    DECORATIONS IN
                    KANYAKUMARI
                </h1>
                <p className='text-lg md:text-[18px] font-geist-sans text-center font-popins text-gray-200'>
                    Transforming your special moments into unforgettable experiences
                </p>
                <div className='flex justify-center items-center gap-2 md:gap-4'>
                    <Link href={'/contact'}>
                        <Button
                            className="px-10 md:px-12 py-3 bg-primary text-nowrap text-white border border-primary">
                            BOOK NOW
                        </Button>
                    </Link>

                    <Link href={'/gallery'}>
                        <Button
                            className="px-10 md:px-12 py-3 bg-transparent text-nowrap text-white border">
                            VIEW GALLERY
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Bottom Arrow */}
            <span className='absolute bottom-0 lg:bottom-5 left-1/2 -translate-x-1/2 z-40'>
                <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/down-arrow-Icon_ftkhtu.png`}
                    aria-hidden="true"
                    height={20}
                    width={16}
                    quality={60}
                    loading='lazy'
                    className='text-white animate-bounce'
                    alt=''
                />

            </span>
        </section>
    )
}

export default Banner;