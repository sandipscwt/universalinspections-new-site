import React from 'react'
import HeroSection from './_components/heroSection'
import { generateMetadata } from '@/app/utils/genaratemetadata';
import AdministratorsOpportunities from './_components/administratorsOpportunities';
import ApplyAdministrators from './_components/applyAdministrators';
import { ClientFetch } from "@/actions/client-fetch";

interface AdministratorData  {
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
    data: AdministratorData;
};

export const metadata = generateMetadata({ title: "Opportunities | Universal Inspections" });
const page = async() => {

    const res = await ClientFetch(`${process.env.API_URL}/opportunity-details/admin`, { cache: "no-store" });
        const administratorResponse: ApiResponse = await res.json();
    
        const heroData = {
            heading: administratorResponse?.data?.banner_heading ?? administratorResponse?.data?.banner_heading ?? "Opportunities",
            image: administratorResponse?.data?.banner_image ?? administratorResponse?.data?.banner_image ?? "",
        };

    return (
        <>
            <HeroSection data={heroData} />
            <AdministratorsOpportunities data={administratorResponse} />
            <ApplyAdministrators data={administratorResponse} />
        </>
    )
}

export default page
