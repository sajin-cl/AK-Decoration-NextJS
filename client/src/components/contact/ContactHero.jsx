import React from 'react'

const ContactHero = () => {
    return (
        <section id='contact-hero-section' className='relative  w-full overflow-x-hidden px-10 md:px-20 py-20 flex justify-center items-center'>
            {/* Heading */}
            <div className="flex flex-col items-center w-full space-y-4">
                <p className="font-mono font-bold text-xs text-primary tracking-wide">
                    YOUR DREAM OUR CRAFT  
                </p>

                <h1 className="font-bodoni text-2xl lg:text-[32px] font-bold text-[#1B1C1C] text-center">
                    Connect with AK Decoration
                </h1>
                <p className='font-bodoni text-sm text-wrap max-w-3xl text-gray-600 text-center'>
                    Let's talk about your event and create something truly memorable together
                </p>
            </div>
        </section>
    )
}

export default ContactHero