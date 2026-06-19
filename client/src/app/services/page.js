import React from 'react'
import dynamic from 'next/dynamic';
import Intro from '@/components/services/Intro';

const Journey = dynamic(() => import('@/components/services/Journey'));
const OurProcess = dynamic(() => import('@/components/common/OurProcess'));
const ServiceList = dynamic(() => import('@/components/services/ServiceList'));


export const metadata = {
    title: "Services | AK Decoration Service",
    description: "AK Decoration provides professional wedding, birthday, and event decoration services in Kanyakumari district and marthandam surrounding areas. Affordable, creative, and customized designs.",
    alternates: {
        canonical: "/services",
    }
};


const ServicePage = () => {
    return (
        <>
            <Intro />
            <ServiceList />
            <OurProcess />
            <Journey />
        </>
    )
}

export default ServicePage;