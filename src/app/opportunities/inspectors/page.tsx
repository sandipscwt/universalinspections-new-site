import React from 'react'
import HeroSection from './_components/heroSection'
import { generateMetadata } from '@/app/utils/genaratemetadata';
import InspectorsOpportunities from './_components/inspectorsOpportunities';
import ApplyInspectors from './_components/applyInspectors';

export const metadata = generateMetadata({ title: "Opportunities | Universal Inspections" });
const page = () => {
    return (
        <>
            <HeroSection />
            <InspectorsOpportunities/>
            <ApplyInspectors/>
        </>
    )
}

export default page
