import React from 'react'
import HeroSection from './_components/herosection'
import FinancingSection from './_components/financingSection'
import { generateMetadata } from '../utils/genaratemetadata';

export const metadata = generateMetadata({ title: "Financing | Universal Inspections" });
const Financing = () => {
    return (
        <>
            <HeroSection />
            <FinancingSection/>
        </>
    )
}

export default Financing