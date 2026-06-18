import OurProcess from '@/components/common/OurProcess';
import Banner from '@/components/servie-details/banner';
import Content from '@/components/servie-details/content';
import Highlights from '@/components/servie-details/highlights';
import SERVICES_DATA from '@/data/serviceData';
import { notFound } from 'next/navigation';
import React from 'react'

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