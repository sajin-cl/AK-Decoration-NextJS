import React from 'react'
import Card from '@/components/ui/Card'


const WHY_WE_CHOOSE_CARD_DETAILS = [
    {
        icon:  `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/paint-Icon_lxndxg.png`, title: 'Creative & Stylish Designs',
        desc: `Bespoke concepts that blend contemporary trends with timeless traditional elegance.`
    },
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/celebrate-Icon_uifjr4.png`, title: `Complete Decoration Solutions`,
        desc: `From grand entrances to minute table details, we handle the entire visual journey.`
    },
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/clock-Icon_jfoc6x.png`, title: 'On-Time Setup',
        desc: `Punctuality is our hallmark. We ensure your venue is ready well before the first guest arrives.`
    },
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/diamond-Icon_u4u0cl.png`, title: `Premium Quality Materials`,
        desc: `We use only the freshest flora and high-grade fabrics for a truly luxurious feel.`
    },
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/tick-Icon_cqgb2v.png`, title: `Experience in Event Decoration`,
        desc: `Over a decade of expertise in transforming Kanyakumari's most prestigious venues.`
    },
    {
        icon: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/wallet-Icon_nwotqk.png`, title: `Budget-Friendly Packages`,
        desc: `Premium aesthetics tailored to your investment, ensuring maximum visual impact.`
    },
];

const WhyWeChoose = () => {
    return (
        <section id='why-we-choose' className='relative w-full min-h-screen py-30 px-10 md:px-20 overflow-x-hidden bg-[#FBF9F8]'>
            {/* Top heading */}
            <div className='flex flex-col justify-center items-center w-full mb-10'>
                <p
                    className='font-mono font-bold text-xs text-primary text-center tracking-wide'
                >
                    WHY WE CHOOSE
                </p>
                <h1
                    className='font-bodoni text-[32px] text-center font-bold text-[#1B1C1C]'
                >
                    The Standard of Excellece
                </h1>
            </div>

            {/* Card Sections */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                {WHY_WE_CHOOSE_CARD_DETAILS.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        desc={card.desc}
                    />
                ))}
            </div>

        </section>
    )
}

export default WhyWeChoose;