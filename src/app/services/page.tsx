import React from "react";
import PurchasesSection from "./_components/purchasesSection";
import ScheduleInspectionSection from "./_components/scheduleInspectionSection";
import { generateMetadata } from "../utils/genaratemetadata";
import { ClientFetch } from "@/actions/client-fetch";
import HeroSection from "./_components/herosection";
export const metadata = generateMetadata({
    title: "Services | Universal Inspections",
});


export interface BannerSection {
    banner_image: string | null;
    file_type: "image" | "video";
    banner_heading: string | null;
}

export interface BannerBottomSection {
    heading: string | null;
    content: string;
}

export interface ServiceItem {
    id: number;
    name: string;
    banner_image: string | null;
    file_type: "image" | "video";
    icon: string;
    image: string | null;
    short_content: string;
    content: string;
    status: number;
    slug: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface ScheduleStep {
    id: number;
    content: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface ServicesBottomSection {
    heading: string;
    content: string;
    image: string;
    steps: ScheduleStep[];
    button_text: string;
}

export interface ServicesPageData {
    banner_section: BannerSection;
    banner_bottom_section: BannerBottomSection;
    services: ServiceItem[];
    services_bottom_section: ServicesBottomSection;
}

export interface ServicesApiResponse {
    status: boolean;
    message: string;
    data: ServicesPageData;
}

const Services = async () => {
    try {
        const res = await ClientFetch(`${process.env.API_URL}/service-page-data`, {
            cache: "no-store",
        });
        const servicesData: ServicesApiResponse = await res.json();
        const bannerData = servicesData?.data?.banner_section;
        const bannerBottomData = servicesData?.data?.banner_bottom_section;
        const servicesList = servicesData?.data?.services;
        const scheduleData = servicesData?.data?.services_bottom_section;

        return (
            <>
                {bannerData && (
                    <HeroSection data={bannerData} />
                )}
                {servicesList && bannerBottomData && (
                    <PurchasesSection services={servicesList} bannerBottom={bannerBottomData} />
                )}
                {scheduleData && <ScheduleInspectionSection data={scheduleData} />}
            </>
        );
    } catch (error) {
        console.error("Error fetching Services page data:", error);
        return (
            <div className="p-10 text-center text-red-400">
                Failed to load Services page data. Please try again later.
            </div>
        );
    }
};

export default Services;
