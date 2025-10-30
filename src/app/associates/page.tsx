import React from 'react'
import HeroSection from './_components/heroSection'
import AssociateSection from './_components/associateSection'
import DealersSection from './_components/dealersSection'
import RepairShops from './_components/repairShops/insex'
import { generateMetadata } from '../utils/genaratemetadata'
import { ClientFetch } from '@/actions/client-fetch'

export const metadata = generateMetadata({ title: "Our Associates | Universal Inspections" });



export interface AssociatesData {
    banner_section: BannerSection;
    banner_bottom_section: BannerBottomSection;
    search_bottom_section: SearchBottomSection;
}

export interface BannerSection {
    banner_image: string;
    file_type: string;
    banner_heading: string;
}

export interface BannerBottomSection {
    form_heading: string;
    form_small_text: string;
}

export interface SearchBottomSection {
    div1_heading: string;
    div1_content: string;
    div1_image: string;
    div2_heading: string;
    div2_content: string;
    div2_image: string;
}

export interface AssociatesResponse {
    status: boolean;
    message: string;
    data: AssociatesData;
}

const Associates = async () => {

    try {
        const res = await ClientFetch(`${process.env.API_URL}/associate-page-data`, { cache: "no-store" });
        const associateData: AssociatesResponse = await res.json();
        // console.log('associateData----------------', JSON.stringify(associateData), null, 2);

        const pageContent = associateData?.data;
        const bannerData = pageContent?.banner_section
        const searchSection = pageContent?.banner_bottom_section
        const automotiveList = pageContent?.search_bottom_section


        return (
            <>
                {bannerData && (<HeroSection data={bannerData} />)}
                {searchSection && (<AssociateSection data={searchSection} />)}
                {automotiveList&&(<DealersSection data={automotiveList}/>)}
                {automotiveList&&(<RepairShops data={automotiveList}/>)}
            </>
        );
    } catch (error) {
        console.log("Error fetching Associate  page data:", error);
        return (
            <div className="p-10 text-center text-red-400">
                Failed to load Associate page data. Please try again later.
            </div>
        );
    }
}

export default Associates