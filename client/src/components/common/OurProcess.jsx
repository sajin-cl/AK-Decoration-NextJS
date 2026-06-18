import React from 'react'

const STEPS = [
    { no: '01.', title: 'Initial Concept', desc: `A discovery session to understand the theme, venue, and the specific atmosphere you wish to evoke.` },
    { no: '02.', title: 'Design Blueprint', desc: `Developing detailed mood boards, 3D renders, and floral palettes that define the event's visual soul.` },
    { no: '03.', title: 'Atelier Build', desc: `Meticulous off-site fabrication of custom scenic elements and pre-curation of botanical assets.` },
    { no: '04.', title: 'The Reveal', desc: `Precision on-site installation and final styling, culminating in a seamless, breathtaking transformation.` },
]

const OurProcess = () => {
    return (
        <section id='our-process-section' className='w-full overflow-x-hidden bg-[#051A0F] px-10 md:px-20 py-10'>

            {/* Top heading */}
            <div className='flex flex-col items-center '>
                <p
                    className='font-mono font-bold text-xs text-primary  tracking-wide'
                >
                    THE METHOD
                </p>
                <h1
                    className='font-bodoni text-[32px] font-bold text-white'
                >
                    Our Process
                </h1>
            </div>

            {/*  Card sections */}
            <div className="card-section flex flex-wrap overflow-x-hidden w-full gap-5">
                {STEPS.map((item, index) => (
                    <div key={index} className='card space-y-4 w-full max-w-[280px] flex-1 min-w-[240px] pt-20'>
                        <span className='block text-[40px] font-bodoni font-light text-primary'>
                            {item?.no}
                        </span>
                        <h2 className="text-sm font-bold text-white font-bodoni">{item?.title}</h2>
                        <p className='text-wrap text-gray-400 font-sans text-sm tracking-wide leading-relaxed'>{item?.desc}</p>
                    </div>
                ))}
            </div>



        </section>
    )
}

export default OurProcess;
