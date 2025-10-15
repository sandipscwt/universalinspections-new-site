import React from 'react'
import HeroSection from './_components/heroSection'
import DrivenSection from './_components/drivenSection'
import PurchasesRepairs from './_components/purchasesRepairs'
import { generateMetadata } from '../utils/genaratemetadata';

export const metadata = generateMetadata({ title: "About Us | Universal Inspections" });
const About = () => {
    return (
        <>
            <HeroSection />
            <DrivenSection/>
            <PurchasesRepairs/>
        </>
    )
}

export default About