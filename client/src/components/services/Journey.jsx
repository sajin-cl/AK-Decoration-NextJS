import React from 'react'
import Button from '../ui/Button'

const Journey = () => {
    return (
        <section className='w-full flex flex-col  justify-center items-center overflow-x-hidden bg-[#F4F4F2] px-20 py-30 gap-8'>

            <h1 className='font-bodoni text-[64px]'>Begin Your Journey</h1>
            <p className='text-[18px] text-center max-w-2xl leading-snug tracking-wide'>
                Whether it's an intimate celebration or a grand gala, let's discuss how we can
                bring your vision to life through intentional event decoration and luxury
                craftsmanship.
            </p>
            <div className='btn-section flex gap-5 items-center'>
                <Button className='bg-primary text-white'>
                    BOOK A CONSULTATION
                </Button>
                <Button className='outline outline-primary'>
                    REQUEST BROCHURE
                </Button>
            </div>

        </section>
    )
}

export default Journey