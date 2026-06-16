"use client"

import React, { useState } from 'react'
import { HEADER_DATA } from '@/data/layoutData'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { RiMenu3Fill } from "react-icons/ri";
import { GiCrossedSwords } from "react-icons/gi";
import MobileSlideBar from './SlideBar'
import { AnimatePresence } from 'framer-motion'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-lg">
            <div className="flex items-center justify-between px-4 md:px-10 h-[70px]">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        width={48}
                        height={48}
                        fetchPriority='high'
                        className="object-contain"
                        alt="AK Decoration"
                    />
                    <span className="text-primary text-lg md:text-2xl font-bodoni font-bold">
                        AK Decoration
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-8 xl:gap-12">

                    {HEADER_DATA.map((link, index) => (
                        <Link
                            key={index}
                            href={link.link}
                            aria-label={link.ariaLabel}
                            className="relative group text-sm xl:text-[12px] font-bold text-gray-500 hover:text-primary tracking-[1.8px] uppercase"
                        >
                            {link.title}
                            <span className='absolute -bottom-1 left-0 h-px  w-0 group-hover:w-full bg-primary transition-all duration-300'></span>
                        </Link>
                    ))}
                </div>

                {/* Desktop Button */}
                <div className="hidden lg:block">
                    <Button className="px-6 py-3 bg-primary text-white">
                        BOOK NOW
                    </Button>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className=" text-2xl cursor-pointer text-primary transition-all duration-300 block lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <GiCrossedSwords /> : <RiMenu3Fill />}
                </button>

                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            <MobileSlideBar
                                onClose={() => setIsMenuOpen(false)}
                            />
                            
                        </>

                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Header