import React from 'react'
import HeroSection from './_components/herosection'
import BlogList from './_components/blogList'
import { generateMetadata } from '../utils/genaratemetadata';

export const metadata = generateMetadata({ title: "Blogs | Universal Inspections" });
const Blogs = () => {
    return (
        <>
            <HeroSection />
            <BlogList/>
        </>
    )
}

export default Blogs