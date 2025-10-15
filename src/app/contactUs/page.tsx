import React from 'react'
import HeroSection from './_components/heroSection'
import ContactSection from './_components/contactSection'
import { generateMetadata } from '../utils/genaratemetadata';

export const metadata = generateMetadata({ title: "Contact Us | Universal Inspections" });
const ContactUs = () => {
    return (
        <>
            <HeroSection />
            <ContactSection/>
        </>
    )
}

export default ContactUs