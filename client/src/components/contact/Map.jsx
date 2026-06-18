import React from 'react'
import MapEmbeded from '../common/map-embeded'

const Map = () => {
    return (
        <section className='w-full relative overflow-x-hidden pt-20'>
            {/* Top heading */}
            <div className='flex flex-col items-center w-full mb-5'>
                <p
                    className='font-mono font-bold text-xs text-primary  tracking-wide'
                >
                    Find Us on the Map
                </p>
                <h1
                    className='font-bodoni text-[27px] md:text-[32px] text-center font-bold text-[#1B1C1C]'
                >
                    Visit our studio and explore exceptional event designs
                </h1>
            </div>
            <MapEmbeded />
        </section>
    )
}

export default Map
