import Image from 'next/image';
import React from 'react'


const Content = ({ data }) => {

    const { title, subtitle, image, description } = data

    return (
        <section id='service-detail-content' className='relative w-full min-h-screen overflow-x-hidden bg-[#FBF9F8] px-10 md:px-20 py-30 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>

            {/*  Left Para Section */}
            <div className='left-side-section  order-2 lg:order-1 justify-self-center'>
                {/* Top heading */}
                <div className='flex flex-col items-start w-full mb-5'>
                    <p
                        className='font-mono font-bold text-xs text-primary  tracking-wide'
                    >
                        {subtitle}
                    </p>
                    <h1
                        className='font-bodoni text-[32px]  font-bold text-[#1B1C1C]'
                    >
                        {title}
                    </h1>
                </div>

                {/*  Para  */}
                <div className='space-y-5 text-left max-w-xl'>
                    {description.map((para, index) => (<p
                        key={index}
                        className='font-sans text-base text-[#535656] leading-loose tracking-tight'
                    >
                        {para}
                    </p>))}
                </div>

            </div>

            {/* Right Image and Logo */}
            <div className='right-side-section order-1 lg:order-2 w-full flex items-center justify-center'>
                <div className="about-image-container relative w-[460px] h-[550px] shadow-xl ">
                    <Image
                        src={image}
                        fill
                        sizes='240'
                        quality={65}
                        loading='lazy'
                        unoptimized
                        alt={title}
                        className='object-cover'
                    />
                    <div className="absolute -bottom-8 -left-8 w-[256] h-[345] bg-white border-8 border-white overflow-hidden shadow-lg">
                        <Image
                            src={image}
                            fill
                            sizes='(max-width: 768px) 100vw, 256px'
                            alt='preview-image'
                            className=' object-cover'
                            unoptimized
                            loading='lazy'
                            quality={65}
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content;