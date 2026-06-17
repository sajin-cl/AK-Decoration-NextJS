import React from 'react'

const Intro = () => {
    return (
        <section id='service-intro' className='relative w-full overflow-x-hidden px-20 py-30'>
            {/* Heading */}
            <div className="flex flex-col  w-full mb-5 space-y-4">

                <h1 className="font-bodoni text-2xl lg:text-[32px] font-bold text-[#1B1C1C]">
                    Event Services
                </h1>
                <p className='font-bodoni text-sm  max-w-3xl text-gray-600 text-center md:text-start'>
                    At AK Decoration, we specialize in the art of the ephemeral. Our event decoration services focus on creating immersive environments where bespoke floral artistry, structural design, and atmospheric lighting converge to host your most significant milestones.
                </p>
            </div>
        </section>
    )
}

export default Intro;