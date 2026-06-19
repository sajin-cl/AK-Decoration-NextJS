
import React from 'react'
import dynamic from 'next/dynamic';


import ContactHero from '@/components/contact/ContactHero';
const CTA = dynamic(() => import('@/components/contact/CTA'));
const Map = dynamic(() => import('@/components/contact/Map'));

export const metadata = {
  title: "Contact Us | AK Decoration Service",
  description: "AK Decoration provides professional wedding, birthday, and event decoration services in Kanyakumari district and marthandam surrounding areas. Affordable, creative, and customized designs.",
  alternates: {
    canonical: "/contact",
  }
};

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