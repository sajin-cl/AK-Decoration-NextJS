import React from 'react'

const Map = () => {
    return (
        <section className='w-full relative overflow-x-hidden pt-30'>
            {/* Top heading */}
            <div className='flex flex-col items-center w-full mb-5'>
                <p
                    className='font-mono font-bold text-xs text-primary  tracking-wide'
                >
                    Find Us on the Map
                </p>
                <h1
                    className='font-bodoni text-[32px] text-center font-bold text-[#1B1C1C]'
                >
                   Visit our studio and explore exceptional event designs
                </h1>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d866.2109679928149!2d77.26528692841889!3d8.295697999481561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTcnNDQuNSJOIDc3wrAxNSc1Ny40IkU!5e1!3m2!1sen!2sin!4v1781690897761!5m2!1sen!2sin"
                className="w-full h-112.5 md:h-137.5"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    )
}

export default Map
