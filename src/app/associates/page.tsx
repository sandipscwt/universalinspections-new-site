import React from 'react'
import HeroSection from './_components/heroSection'
import AssociateSection from './_components/associateSection'
import DealersSection from './_components/dealersSection'
import RepairShops from './_components/repairShops/insex'
import { generateMetadata } from '../utils/genaratemetadata'

export const metadata = generateMetadata({ title: "Our Associates | Universal Inspections" });

const Associates = () => {
    return (
        <>
            <HeroSection />
            <AssociateSection />
            <DealersSection />
            <RepairShops/>
        </>
    )
}

export default Associates