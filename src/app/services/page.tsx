import React from 'react'
import HeroSection from './_components/herosection'
import PurchasesSection from './_components/purchasesSection'
import ScheduleInspectionSection from './_components/scheduleInspectionSection'
import { generateMetadata } from '../utils/genaratemetadata';

export const metadata = generateMetadata({ title: "Services | Universal Inspections" });
const Services = () => {
  return (
    <>
      <HeroSection/>
      <PurchasesSection/>
      <ScheduleInspectionSection/>
    </>
  )
}

export default Services
