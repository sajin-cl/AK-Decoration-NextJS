import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const content = [
    `Founded on the principles of precision and theatrical beauty, AK Decoration has evolved from a local floral studio into Kanyakumari's most sought-after event curation house.`,
    `Our journey is defined by a relentless pursuit of perfection in stage curation, floral architecture, and atmospheric lighting. We don't just decorate; we compose visual symphonies tailored to the unique essence of each couple.`,
    `From grand heritage venues to intimate seaside ceremonies, our expertise lies in honoring the cultural gravity of Kanyakumari while infusing a modern, editorial aesthetic that sets a new gold standard in luxury events.`
];

const Aboutme = () => {
    return (
        <section id='about-me' className='relative w-full min-h-screen overflow-x-hidden bg-[#FBF9F8] px-10 md:px-20 py-30 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
             {/* Gradient design top layer*/}
            <div className='absolute top-0 left-0 w-full h-48 bg-linear-to-b from-white via-white/70 to-transparent z-40'></div>

            {/*  Left Para Section */}
            <div className='left-side-section  order-2 lg:order-1 justify-self-center'>
                {/* Top heading */}
                <div className='flex flex-col items-start w-full mb-5'>
                    <p
                        className='font-mono font-bold text-xs text-primary  tracking-wide'
                    >
                        I SINCE INCEPTION
                    </p>
                    <h1
                        className='font-bodoni text-[32px]  font-bold text-[#1B1C1C]'
                    >
                        Curating the Extraordinary
                    </h1>
                </div>

                {/*  Para  */}
                <div className='space-y-5 text-left max-w-xl'>
                    {content.map((para, index) => (<p
                        key={index}
                        className='font-sans text-base text-[#535656] leading-loose tracking-tight'
                    >
                        {para}
                    </p>))}
                </div>

                <Link href={'/service'} className='inline-block mt-5 text-sm text-primary underline underline-offset-2 cursor-pointer'>EXPLORE OUR PROCESS</Link>

            </div>

            {/* Right Image and Logo */}
            <div className='right-side-section order-1 lg:order-2 w-full flex items-center justify-center'>
                <div className="about-image-container relative w-[460px] h-[550px] shadow-xl ">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/floral-decoration_vinmlx.webp`}
                        fill
                        quality={65}
                        sizes='240'
                        loading='lazy'
                        unoptimized
                        alt='About image'
                        className='object-cover rounded-t-xl md:rounded-none'
                    />
                    <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-gray-400">
                        <Image
                            src={'/logo.png'}
                            quality={65}
                            width={200}
                            height={200}
                            alt='logo'
                            className=' object-cover'
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme