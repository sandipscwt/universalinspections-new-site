import React from 'react'
import HeroSection from './_components/herosection'
import WarrantySection from './_components/warrantySection'
import { generateMetadata } from '../utils/genaratemetadata';

export const metadata = generateMetadata({ title: "Extended Warranties | Universal Inspections" });
const Warranties = () => {
    return (
        <>
            <HeroSection />
            <WarrantySection/>
        </>
    )
}

export default Warranties