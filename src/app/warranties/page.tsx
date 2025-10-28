import React from 'react'
import HeroSection from './_components/herosection'
import WarrantySection from './_components/warrantySection'
import { generateMetadata } from '../utils/genaratemetadata';
import ApplyWarranty from './_components/applyWarranty';
import { ClientFetch } from '@/actions/client-fetch';

export const metadata = generateMetadata({ title: "Extended Warranties | Universal Inspections" });

export interface WarrantyContentItem {
    image: string;
    heading: string;
    content: string;
}

export interface WarrantyData {
    id: number;
    file_type: string;
    banner_image: string;
    banner_heading: string;
    sec1_heading: string;
    sec1_content: WarrantyContentItem[];
    sec2_heading: string;
    sec2_content: string;
    created_at: string;
    updated_at: string;
}

export interface WarrantyApiResponse {
    status: boolean;
    message: string;
    data: WarrantyData;
}

const Warranties = async () => {

    try {
        const res = await ClientFetch(`${process.env.API_URL}/extended-warrenties-page-data`, { cache: "no-store" });
        const warrantyData: WarrantyApiResponse = await res.json();
        // console.log('warrantyData----------------', JSON.stringify(warrantyData), null, 2);
        const pageContent = warrantyData?.data;
        return (
            <>
                {pageContent&&(<HeroSection data={pageContent}/>)}
                {pageContent&&(<WarrantySection data={pageContent}/>)}
                {pageContent&&(<ApplyWarranty data={pageContent}/>)}

            </>
        );
    } catch (error) {
        console.log("Error fetching Warranty page data:", error);
        return (
            <div className="p-10 text-center text-red-400">
                Failed to load Warranty page data. Please try again later.
            </div>
        );
    }

}

export default Warranties