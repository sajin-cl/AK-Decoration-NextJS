import React from 'react'
import Button from '../ui/Button'
import { ADMIN_INFO } from '@/data/customData'
import Link from 'next/link'

const Journey = () => {

    return (
        <section className='w-full flex flex-col  justify-center items-center overflow-x-hidden bg-[#F4F4F2] px-10 md:px-20 py-30 gap-8'>

            <h1 className='font-bodoni text-[32px] md:text-[64px]'>Begin Your Journey</h1>
            <p className='text-[16px] md:text-[18px] text-center max-w-2xl leading-snug tracking-wide'>
                Whether it's an intimate celebration or a grand gala, let's discuss how we can
                bring your vision to life through intentional event decoration and luxury
                craftsmanship.
            </p>
            <div className='btn-section flex gap-5 items-center'>
                <Link href={'/contact'}>
                    <Button
                        className='bg-primary text-white font-sans font-bold md:font-normal tracking-wide text-[10px] md:text-[16px]'>
                        BOOK A CONSULTATION
                    </Button>
                </Link>

                <Link
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${ADMIN_INFO.email}&su=Request%20Decoration%20Brochure`}
                    target="_blank"
                >
                    <Button className='outline outline-primary font-sans font-bold md:font-normal tracking-wide text-[10px] md:text-[16px]'>
                        REQUEST BROCHURE
                    </Button>
                </Link>
            </div>

        </section>
    )
}

export default Journey