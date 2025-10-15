import HeroSection from './_components/heroSection'
import AutomativeRvSection from './_components/automativeRvSection'
import WhatWeDoSection from './_components/whatWeDoSection'
import ScheduleInspectionSection from './_components/scheduleInspectionSection'
import TestimonialsSection from './_components/testimonialSection'
import HowItWorks from './_components/howItWork'
import WarrantyInspection from './_components/warrantyInspection'
import { generateMetadata } from '../utils/genaratemetadata'


export const metadata = generateMetadata({ title: "Home | Universal Inspections" });

const Home = () => {
    return (
        <>
            <HeroSection />
            <AutomativeRvSection />
            <WhatWeDoSection />
            <ScheduleInspectionSection />
            <HowItWorks />
            <WarrantyInspection />
            <TestimonialsSection />
        </>
    )
}

export default Home