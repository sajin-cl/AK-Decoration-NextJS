import Image from 'next/image'
import React from 'react'

const Card = ({ icon, title, desc }) => {
    return (
        <div className='group relative  p-6 border-2 border-[#1A1C1B1A] rounded-md overflow-hidden flex flex-col justify-between max-w-[352px] '>
            <div>
                <div className='relative w-10 h-10 flex items-center justify-start mb-4 p-2'>
                    <Image
                        src={icon}
                        alt={title}
                        height={25}
                        width={25} 
                        priority
                        className='object-contain '
                    />
                </div>

                <h2 className='text-primary font-bold text-[24px] font-bodoni'>
                    {title}
                </h2>
            </div>
            <p className='text-gray-400 font-popins text-[16px] leading-relaxed max-w-[280px]'>
                {desc}
            </p>
        </div>
    )
}

export default Card
