import React from 'react'
import Button from '@/components/ui/Button'
import { ADMIN_INFO, FOOTER_DATA } from "@/data/customData"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {


    return (
        <footer className="relative w-full bg-[#303031] pt-20 lg:pt-30 px-5  lg:px-20 overflow-x-hidden">

            {/* Footer Top Section */}
            <div className="flex flex-col items-center gap-4 border-b border-gray-600 pb-10 text-center">
                <h1 className="font-bodoni text-2xl lg:text-5xl text-gray-200">
                    Ready To Design Your Life?
                </h1>

                <p className="text-gray-400 max-w-2xl text-sm lg:text-base lg:text-nowrap">
                    Book a consultation today and let's design an event that tells your unique story with elegance and grandeur.
                </p>

                <Link href={'/contact'}>
                    <Button
                        className="px-8 lg:px-12 py-3 bg-primary text-white border border-primary">
                        BOOK NOW
                    </Button>
                </Link>
            </div>

            {/* Footer Service Section */}
            <div className="border-b border-gray-600 py-10 flex flex-col lg:flex-row gap-10 lg:justify-between">

                {/* Company Address Section */}
                <div className="space-y-4 text-center lg:text-left">

                    <div className="flex items-center justify-center lg:justify-start">
                        <Image
                            src="/logo.png"
                            height={60}
                            width={60}
                            quality={65}
                            loading='lazy'
                            alt="ak-decoration-footer-logo"
                        />

                        <span className="font-bodoni text-white text-xl lg:text-2xl ml-3">
                            AK <span className='text-amber-300'>DECORATION</span>
                        </span>
                    </div>

                    <div className="space-y-2 pl-10">
                        <span className="flex items-center justify-center lg:justify-start gap-2 text-white/80 font-sans text-sm">
                            <FaMapMarkerAlt className="text-gray-400" size={15} />
                            Kanyakumari District, Tamil Nadu, India
                        </span>

                        <span className="flex items-center justify-center lg:justify-start gap-2 text-white/80 font-sans text-sm">
                            <FaPhoneAlt className="text-gray-400" size={15} />
                            {ADMIN_INFO.phone}
                        </span>

                        <span className="flex items-center justify-center lg:justify-start gap-2 text-white/80 font-sans text-sm">
                            <FaEnvelope className="text-gray-400" size={15} />
                            {ADMIN_INFO.email}
                        </span>
                    </div>

                </div>

                {/* Footer Links Section */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full lg:w-auto justify-items-center ">

                    {FOOTER_DATA.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-mono uppercase tracking-wider text-amber-200 text-sm mb-2">
                                {section.title}
                            </h3>

                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            rel='noopener noreferrer'
                                            target='_blank'
                                            href={link.link}
                                            className="text-gray-300 text-xs uppercase hover:text-white transition-colors duration-300"
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* Footer Copyright */}
            <div className="text-center text-gray-400 font-sans text-xs py-4">
                © {new Date().getFullYear()} AK Decoration. Developed by {" "}
                <Link
                    href="https://sajin-cl.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                >
                    sajin-cl
                </Link>
            </div>

        </footer>
    )
}

export default Footer