// src/app/(about)/page.tsx
import React from "react";
import HeroSection from "./_components/heroSection";
import DrivenSection from "./_components/drivenSection";
import PurchasesRepairs from "./_components/purchasesRepairs";
import { generateMetadata } from "../utils/genaratemetadata";
import { ClientFetch } from "@/actions/client-fetch";

// ✅ Metadata
export const metadata = generateMetadata({ title: "About Us | Universal Inspections" });

/* ----------------------------------------------
   ✅ Define Interfaces for Type Safety
---------------------------------------------- */

export interface BannerSection {
    banner_image: string;
    file_type: string | null;
    banner_heading: string;
}

export interface BannerBottomSection {
    banner_bottom_section_heading: string;
    banner_bottom_section_image: string;
    banner_bottom_section_content: string;
}

export interface ValueSectionItem {
    heading: string;
    content: string;
    icon: string;
}

export interface ValueSection {
    value_section_heading: string;
    value_section_images: string[];
    items: ValueSectionItem[];
}

export interface AboutPageData {
    banner_section: BannerSection;
    banner_bottom_section: BannerBottomSection;
    value_section: ValueSection;
}

export interface AboutApiResponse {
    status: boolean;
    message: string;
    data: AboutPageData;
}


const About = async () => {
    try {
        const res = await ClientFetch(`${process.env.NEXT_PUBLIC_API_URL}/about-page-data`, { cache: "no-store" });
        const aboutData: AboutApiResponse = await res.json();
        const bannerData = aboutData?.data?.banner_section;
        const drivenData = aboutData?.data?.banner_bottom_section;
        const purchasesRepairsData = aboutData?.data?.value_section;

        return (
            <>
                {bannerData && <HeroSection data={bannerData} />}
                {drivenData && <DrivenSection data={drivenData} />}
                {purchasesRepairsData && <PurchasesRepairs data={purchasesRepairsData} />}

            </>
        );
    } catch (error) {
        console.log("Error fetching About page data:", error);
        return (
            <div className="p-10 text-center text-red-600">
                Failed to load About page data. Please try again later.
            </div>
        );
    }
};

export default About;
