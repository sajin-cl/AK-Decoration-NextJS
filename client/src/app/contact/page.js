
import React from 'react'
import dynamic from 'next/dynamic';


import ContactHero from '@/components/contact/ContactHero';
const CTA = dynamic(() => import('@/components/contact/CTA'));
const Map = dynamic(() => import('@/components/contact/Map'));

const ContactPage = () => {
    return (
        <>
            <ContactHero />
            <CTA />
            <Map />
        </>
    )
}

export default ContactPage;