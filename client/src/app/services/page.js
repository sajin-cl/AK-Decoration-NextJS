import React from 'react'
import dynamic from 'next/dynamic';
import Intro from '@/components/services/Intro';

const Journey = dynamic(() => import('@/components/services/Journey'));
const OurProcess = dynamic(() => import('@/components/common/OurProcess'));
const ServiceList = dynamic(() => import('@/components/services/ServiceList'));

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