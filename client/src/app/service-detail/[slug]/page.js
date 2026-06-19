import React from 'react'
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import SERVICES_DATA from '@/data/serviceData';
import Banner from '@/components/common/banner';


const OurProcess = dynamic(() => import('@/components/common/OurProcess'));
const Content = dynamic(() => import('@/components/servie-details/content'));
const Highlights = dynamic(() => import('@/components/servie-details/highlights'));

const ServiceDetailPage = async ({ params }) => {

    const { slug } = await params;

    const service = SERVICES_DATA[slug];

    if (!service) {
        notFound();
    }

    return (
        <>
            <Banner data={service?.banner} />
            <Content data={service?.content} />
            <OurProcess />
            <Highlights data={service?.highlights} />
        </>
    )
}

export default ServiceDetailPage;