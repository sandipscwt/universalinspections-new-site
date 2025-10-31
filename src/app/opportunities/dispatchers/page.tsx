import React from 'react'
import HeroSection from './_components/heroSection'
import DispatcherOpportunities from './_components/dispatcherOpportunities'
import ApplyDispatcher from './_components/applyDispatcher'
import { generateMetadata } from '@/app/utils/genaratemetadata';
import { ClientFetch } from "@/actions/client-fetch";

export const metadata = generateMetadata({ title: "Opportunities | Universal Inspections" });

interface DispatcherData  {
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
    data: DispatcherData;
};

const page = async () => {

    const res = await ClientFetch(`${process.env.NEXT_PUBLIC_API_URL}/opportunity-details/dispatcher`, { cache: "no-store" });
    const dispatcherResponse: ApiResponse = await res.json();

    const heroData = {
        heading: dispatcherResponse?.data?.banner_heading ?? dispatcherResponse?.data?.banner_heading ?? "Opportunities",
        image: dispatcherResponse?.data?.banner_image ?? dispatcherResponse?.data?.banner_image ?? "",
    };

    return (
        <>
            <HeroSection data={heroData} />
            <DispatcherOpportunities data={dispatcherResponse}/>
            <ApplyDispatcher data={dispatcherResponse}/>
        </>
    )
}

export default page
