import React from 'react'
import HeroSection from './_components/herosection'
import WarrantySection from './_components/warrantySection'
import { generateMetadata } from '../utils/genaratemetadata';
import ApplyWarranty from './_components/applyWarranty';

export const metadata = generateMetadata({ title: "Extended Warranties | Universal Inspections" });
const Warranties = () => {
    return (
        <>
            <HeroSection />
            <WarrantySection/>
            <ApplyWarranty/>
        </>
    )
}

export default Warranties