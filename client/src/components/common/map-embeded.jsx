'use client'

import React, { useState } from 'react';

const MapEmbeded = () => {
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    return (
        <div className="relative w-full h-112.5 md:h-137.5 bg-[#0a0a0a] overflow-hidden rounded-xl border border-zinc-900 shadow-xl">

            <iframe
                title='AK Decoration - Kanyakuamri district, Tamilnadu'
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d866.2109679928149!2d77.26528692841889!3d8.295697999481561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTcnNDQuNSJOIDc3wrAxNSc1Ny40IkU!5e1!3m2!1sen!2sin!4v1781690897761!5m2!1sen!2sin"
                width="100%"
                height="100%"
                aria-hidden={!isMapLoaded ? "true" : "false"}
                className={`w-full h-full border-0 transition-opacity duration-700
                    ${isMapLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'}
                `}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsMapLoaded(true)}
            ></iframe>


            {!isMapLoaded && (
                <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center pointer-events-none z-10">
                    <div className="w-9 h-9 border-4 border-amber-400/20 border-t-amber-400 rounded-full animate-spin" />
                </div>
            )}

        </div>
    );
};

export default MapEmbeded;
