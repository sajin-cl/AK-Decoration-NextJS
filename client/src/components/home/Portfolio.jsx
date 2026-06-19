"use client"

import { useRouter } from 'next/navigation';
import Image from 'next/image'
import React from 'react'
import Button from '../ui/Button';



const PORTFOLIO_IMAGES = [
    `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/4_lwch6p.webp`,
    `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/5_mmggm6.webp`,
    `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/3_kewmnw.webp`,
    `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/1_rywqnx.webp`,
]

const Portfolio = () => {
   
    const router = useRouter()

    return (
        <section id='portfolio' className='w-full min-h-screen relative bg-[#FBF9F8] overflow-x-hidden px-6 md:px-20 py-20'>
            {/* Top heading */}
            <div className='flex flex-col justify-center items-center w-full mb-10'>
                <p className='font-mono font-bold text-xs text-primary text-center tracking-wide'>
                    PORTFOLIO
                </p>
                <h1 className='font-bodoni text-[32px] text-center font-bold text-[#1B1C1C]'>
                    Our Recent Masterpieces
                </h1>
            </div>

            {/* Image SEction */}
            <div className="max-w-5xl mx-auto flex flex-col gap-3">

                {/* Row 1: Image  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="md:col-span-2">
                        <Image
                            src={PORTFOLIO_IMAGES[0]}
                            alt="Portfolio 1"
                            width={800}
                            height={400}
                            loading='lazy'
                            quality={65}
                            className="w-full h-[250px] md:h-[340px] object-cover"
                        />
                    </div>
                    <div className="md:col-span-1">
                        <Image
                            src={PORTFOLIO_IMAGES[1]}
                            alt="Portfolio 2"
                            width={400}
                            height={400}
                            quality={65}
                            loading='lazy'
                            className="w-full h-[250px] md:h-[340px] object-cover"
                        />
                    </div>
                </div>

                {/* Row 2: Image  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="md:col-span-1">
                        <Image
                            src={PORTFOLIO_IMAGES[2]}
                            alt="Portfolio 3"
                            width={400}
                            height={400}
                            quality={65}
                            loading='lazy'
                            className="w-full h-[250px] md:h-[320px] object-cover"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <Image
                            src={PORTFOLIO_IMAGES[3]}
                            alt="Portfolio 4"
                            width={800}
                            height={400}
                            quality={65}
                            loading='lazy'
                            className="w-full h-[250px] md:h-[320px] object-cover"
                        />
                    </div>
                </div>

            </div>
            <div className='btn-section flex justify-center mt-6'>
                <Button
                    onClick={() => router.push('/gallery')}
                    className="px-12 py-3 bg-transparent text-nowrap text-primary border border-primary">
                    EXPLORE FULL GALERY
                </Button>
            </div>
        </section>
    )
};

export default Portfolio;