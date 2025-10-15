import React from 'react'
import HeroSection from './_components/heroSection'
import MainSection from './_components/mainSection'
import { generateMetadata } from '../utils/genaratemetadata';

export const metadata = generateMetadata({ title: "BookInspection | Universal Inspections" });
const BookInspection = () => {
    return (
        <>
        <HeroSection/>
        <MainSection/>
        </>
    )
}

export default BookInspection