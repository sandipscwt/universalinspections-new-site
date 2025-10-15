import React from 'react'
import HeroSection from './_components/heroSection'
import DispatcherOpportunities from './_components/dispatcherOpportunities'
import ApplyDispatcher from './_components/applyDispatcher'
import { generateMetadata } from '@/app/utils/genaratemetadata';

export const metadata = generateMetadata({ title: "Opportunities | Universal Inspections" });
const page = () => {
    return (
        <>
            <HeroSection />
            <DispatcherOpportunities/>
            <ApplyDispatcher/>
        </>
    )
}

export default page
