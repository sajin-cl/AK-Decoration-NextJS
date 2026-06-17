import React from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ADMIN_INFO } from '@/data/customData';

const CONTACT_INFO = [
    {
        icon: '/location-Icon.png',
        title: 'Our Studio',
        desc: 'AK Decoration Headquarters \n Nagercoil - Kanyakumari Main Rd, \n Kanyakumari District, Tamil Nadu.'
    },
    {
        icon: '/call-Icon.png',
        title: 'Speak with Us',
        desc: `${ADMIN_INFO.phone} \n Available Mon-Sat, 9 AM to 8 PM`
    },
    {
        icon: '/mail-Icon.png',
        title: 'General Inquiries',
        desc: `${ADMIN_INFO.email} \n For collaborations and careers.`
    }
]

const CTA = () => {
    return (
        <section
            id="cta-section"
            className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-10"
        >
            <div className="flex flex-col lg:flex-row gap-20">

                {/* Left Section */}
                <div className="w-full lg:w-1/2">

                    <h2 className="font-bodoni text-[42px] font-bold text-[#1B1C1C]">
                        Begin your Journey
                    </h2>

                    <span className="inline-block w-14 h-[2px] bg-primary mt-2 mb-10"></span>

                    <form>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                            <div>
                                <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full border-b border-gray-300 pb-3 text-sm outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2">
                                    Event Type
                                </label>

                                <select name="" id="category" className="border-b-1 w-full border-gray-400 border-0 focus:outline-none pb-3">
                                    <option value="">Select</option>
                                    <option value="">Wedding</option>
                                    <option value="">Reception</option>
                                    <option value="">Birthday</option>
                                    <option value="">Corporate Event</option>
                                    <option value="">Other</option>
                                </select>
                            </div>

                        </div>

                        <div className="mb-8">
                            <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2">
                                Date of Event
                            </label>

                            <input
                                type="date"
                                className="w-full border-b border-gray-300 pb-3 text-sm outline-none"
                            />
                        </div>

                        <div className="mb-10">
                            <label className="block text-[11px] uppercase tracking-wider text-gray-500 mb-2">
                                Your Message
                            </label>

                            <textarea
                                rows={1}
                                placeholder="Describe your idea for the event..."
                                className="w-full border-b border-gray-300 pb-3 text-sm outline-none resize-none"
                            />
                        </div>

                        <Button className="px-10 py-3 bg-black text-white">
                            SEND INQUIRY
                        </Button>

                    </form>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2">

                    <div className="grid grid-cols-2 gap-x-12 gap-y-14">

                        {CONTACT_INFO.map((item, index) => (
                            <div key={index}>
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={20}
                                    height={20}
                                    className="mb-4"
                                />

                                <h3 className="font-bodoni text-[28px] font-bold text-primary mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-[14px] leading-7 text-gray-500 whitespace-pre-line">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                        <div>
                            <Image
                                src="/share-Icon.png"
                                alt="Social"
                                width={18}
                                height={18}
                                className="mb-4"
                            />

                            <h3 className="font-bodoni text-[28px] font-bold text-primary mb-4">
                                Social Connection
                            </h3>

                            <div className="flex gap-3">
                                <div className="w-8 h-8 border border-gray-300 flex items-center justify-center">
                                    <FaFacebookF size={12} />
                                </div>

                                <div className="w-8 h-8 border border-gray-300 flex items-center justify-center">
                                    <FaInstagram size={12} />
                                </div>

                                <div className="w-8 h-8 border border-gray-300 flex items-center justify-center">
                                    <FaWhatsapp size={12} />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Special Features Box */}
                    <div className="mt-16 border border-gray-200 p-8 relative">

                        <h3 className="font-bodoni text-[28px] font-bold text-primary mb-6">
                            Special Features
                        </h3>

                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>› Destination Wedding Decor</li>
                            <li>› Custom stage design process</li>
                            <li>› Custom Lighting & SFX</li>
                        </ul>

                        <div className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-300 text-2xl">
                            ?
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default CTA