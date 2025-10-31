import React from 'react'
import HeroSection from './_components/herosection'
import FinancingSection from './_components/financingSection'
import { generateMetadata } from '../utils/genaratemetadata';
import { ClientFetch } from '@/actions/client-fetch';

export const metadata = generateMetadata({ title: "Financing | Universal Inspections" });



export interface FinancingData {
    id: number;
    banner_heading: string;
    banner_image: string;
    file_type: string;
    search_heading: string;
    search_text: string;
    button_above_text: string;
    button_text: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}
export interface FinancingResponse {
    status: boolean;
    message: string;
    data: FinancingData;
}

const Financing = async () => {

    try {
        const res = await ClientFetch(`${process.env.API_URL}/financing-page-data`, { cache: "no-store" });
        const financeData: FinancingResponse = await res.json();
        const pageContent = financeData?.data;

        return (
            <>
                {pageContent && (
                    <HeroSection
                        banner_heading={pageContent.banner_heading}
                        banner_image={pageContent.banner_image}
                    />
                )}
                {pageContent && (<FinancingSection data={pageContent} />)}
            </>
        );
    } catch (error) {
        console.log("Error fetching Financing  page data:", error);
        return (
            <div className="p-10 text-center text-red-400">
                Failed to load Financing page data. Please try again later.
            </div>
        );
    }
}

export default Financing