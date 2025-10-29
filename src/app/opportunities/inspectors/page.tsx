import React from 'react'
import HeroSection from './_components/heroSection'
import { generateMetadata } from '@/app/utils/genaratemetadata';
import InspectorsOpportunities from './_components/inspectorsOpportunities';
import ApplyInspectors from './_components/applyInspectors';
import { ClientFetch } from "@/actions/client-fetch";

interface inspectorsData  {
    id: number;
    banner_image: string;
    file_type: 'image' | 'video' | string;
    banner_heading: string;
    heading1: string;
    content1: string; // HTML
    heading2: string;
    content2: string; // HTML
    image: string;
    heading3: string;
    content3: string; // HTML
    form_banner_heading: string;
    form_heading: string;
    thankyou_content: string; // HTML
    type: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
};

interface ApiResponse  {
    status: boolean;
    message: string;
    data: inspectorsData;
};

export const metadata = generateMetadata({ title: "Opportunities | Universal Inspections" });
const page = async() => {

    const res = await ClientFetch(`${process.env.API_URL}/opportunity-details/inspector`, { cache: "no-store" });
        const inspectorResponse: ApiResponse = await res.json();
    
        const heroData = {
            heading: inspectorResponse?.data?.banner_heading ?? inspectorResponse?.data?.banner_heading ?? "Opportunities",
            image: inspectorResponse?.data?.banner_image ?? inspectorResponse?.data?.banner_image ?? "",
        };

    return (
        <>
            <HeroSection data={heroData}/>
            <InspectorsOpportunities data={inspectorResponse} />
            <ApplyInspectors data={inspectorResponse} />
        </>
    )
}

export default page
