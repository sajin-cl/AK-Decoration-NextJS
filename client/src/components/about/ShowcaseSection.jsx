import { ADMIN_INFO } from '@/data/customData';
import Image from 'next/image'
import React from 'react'


const SHOWCASE_CARD_CONTENT = [
    `Our team comprises seasoned artisans, floral
architects, and logistical masterminds dedicated to
the pursuit of event perfection.`,
    `In Kanyakumari, where tradition runs deep, we honor our
roots by sourcing the finest local flora while integrating
global design trends. The result is a seamless fusion of
heritage and high-fashion.`
];


const ShowcaseSection = () => {
    return (
        <section
            id="show-case-section"
            className="w-full relative overflow-x-hidden py-16 lg:py-30 px-5 md:px-10 lg:px-20 bg-[#FBF9F8]"
        >
            <div className="relative w-full lg:w-1/2 lg:h-[600px] flex justify-center lg:block">

                {/* Image - Only lg and above */}
                <div className="hidden lg:block w-full h-full relative">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/wedding-decoration_yxczle.webp`}
                        fill
                        quality={65}
                        unoptimized
                        alt="Wedding Decoration"
                        sizes="(min-width:1024px) 50vw"
                        className="object-cover"
                    />
                </div>

                {/* Card */}
                <div
                    className=" w-full max-w-xl bg-white border border-primary py-8 px-6 lg:py-[49px] lg:px-[31px] lg:absolute lg:top-10 lg:-right-[410px] space-y-4"
                >
                    {/* Heading */}
                    <div className="flex flex-col items-start w-full mb-5">
                        <p className="font-mono font-bold text-xs text-primary tracking-wide">
                            BEHIND THE SCENES
                        </p>

                        <h1 className="font-bodoni text-2xl lg:text-[32px] font-bold text-[#1B1C1C]">
                            Mastering the Scale of Perfection
                        </h1>
                    </div>

                    {/* Paragraphs */}
                    <div className="space-y-4">
                        {SHOWCASE_CARD_CONTENT.map((content, index) => (
                            <p key={index} className="text-sm font-popins leading-snug tracking-wide">
                                {content}
                            </p>
                        ))}
                    </div>

                    {/* Counts */}
                    <div className="py-3 flex gap-8">
                        <div>
                            <span className="font-bodoni text-2xl text-primary">{ADMIN_INFO.projectsCount || 100}+</span>
                            <span className="font-bodoni text-xs block">
                                Projects Completed
                            </span>
                        </div>

                        <div>
                            <span className="font-bodoni text-2xl text-primary">{new Date().getFullYear() - 2021}</span>
                            <span className="font-bodoni text-xs block">
                                Years Legacy
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ShowcaseSection;