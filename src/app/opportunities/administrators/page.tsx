import React from 'react'
import HeroSection from './_components/heroSection'
import { generateMetadata } from '@/app/utils/genaratemetadata';
import AdministratorsOpportunities from './_components/administratorsOpportunities';
import ApplyAdministrators from './_components/applyAdministrators';

export const metadata = generateMetadata({ title: "Opportunities | Universal Inspections" });
const page = () => {
    return (
        <>
            <HeroSection />
            <AdministratorsOpportunities/>
            <ApplyAdministrators/>
        </>
    )
}

export default page
