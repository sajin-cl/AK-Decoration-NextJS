import Intro from '@/components/services/Intro';
import Journey from '@/components/services/Journey';
import OurProcess from '@/components/common/OurProcess';
import ServiceList from '@/components/services/ServiceList';
import React from 'react'

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