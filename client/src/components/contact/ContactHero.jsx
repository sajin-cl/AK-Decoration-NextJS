import React from 'react'

const ContactHero = () => {
    return (
        <section id='contact-hero-section' className='relative min-h-screen w-full overflow-x-hidden px-20 py-30 flex justify-center items-center'>
            {/* Heading */}
            <div className="flex flex-col items-center w-full mb-5 space-y-4">
                <p className="font-mono font-bold text-xs text-primary tracking-wide">
                    YOUR DREAM OUR CRAFT
                </p>

                <h1 className="font-bodoni text-2xl lg:text-[32px] font-bold text-[#1B1C1C]">
                    Connect with Grandeur
                </h1>
                <p className='font-bodoni text-sm text-wrap max-w-3xl text-gray-600 text-center'>
                    Every grand celebration begins with a single conversation. Let us weave your
                    vision into an unforgettable tapestry of elegance and heritage.
                </p>
            </div>
        </section>
    )
}

export default ContactHero