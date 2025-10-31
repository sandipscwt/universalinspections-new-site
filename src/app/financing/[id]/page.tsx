import React from "react";
import HeroSection from "../_components/herosection";
import FinancerDetails from "./_components/financerDetails";
import { generateMetadata as createMetadata } from "../../utils/genaratemetadata";
import { ClientFetch } from "@/actions/client-fetch";

export interface ApiResponse {
    status: boolean;
    message: string;
    data: FinancerData;
}

export interface FinancerData {
    id: number;
    first_name: string;
    last_name: string | null;
    email: string;
    country_code_id: number | null;
    phone: string;
    contact_name: string;
    dob: string | null;
    country_id: number;
    state_id: number;
    city: string | null;
    street_address: string | null;
    zip: string | null;
    latitude: string | null;
    longitude: string | null;
    profile_photo: string | null;
    website: string | null;
    status: number;
    priority: number;
    slug: string;
    meta_title: string | null;
    meta_description: string | null;
    canonical_url: string | null;
    og_title: string | null;
    og_description: string | null;
    og_image: string | null;
    twitter_title: string | null;
    twitter_description: string | null;
    twitter_image: string | null;
    robots: string | null;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    country: Country;
    state: State;
    city_dtls: CityDetails | null;
    country_code: CountryCode | null;
    financer_detail: FinancerDetail;
}

export interface Country {
    id: number;
    name: string;
}

export interface State {
    id: number;
    name: string;
}

export interface CityDetails {
    id?: number;
    name?: string;
    latitude?: string;
    longitude?: string;
}

export interface CountryCode {
    id?: number;
    code?: string;
    dial_code?: string;
    name?: string;
}

export interface FinancerDetail {
    id: number;
    user_id: number;
    main_logo: string | null;
    header_logo: string | null;
    banner_image: string;
    gallery_photos: string[];
    additional_information: string | null;
    created_at: string;
    updated_at: string;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    try {
        const resolvedParams = await params;
        const slug = resolvedParams.id;

        const res = await ClientFetch(`${process.env.NEXT_PUBLIC_API_URL}/financer-details/${slug}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return createMetadata({ title: "Financer Not Found | Universal Inspections" });
        }

        const financerResponse: ApiResponse = await res.json();
        const financer = financerResponse?.data;

        if (!financer) {
            return createMetadata({ title: "Financer Not Found | Universal Inspections" });
        }

        const baseUrl =
            process.env.NEXT_PUBLIC_API_URL ||
            "https://simpreative.in/universal-inspection-api";
        const fullImageUrl = financer.financer_detail?.banner_image
            ? `${baseUrl}/${financer.financer_detail.banner_image}`
            : `${baseUrl}/default-banner.jpg`;

        return createMetadata({
            title: `${financer.first_name} | Universal Inspections`,
            description:
                financer.financer_detail?.additional_information
                    ?.replace(/<[^>]+>/g, "")
                    .slice(0, 160) ||
                "Explore our range of professional inspection services.",
            url: `https://www.universalinspections.com/financer/${financer.slug}`,
            image: fullImageUrl,
        });
    } catch (error) {
        console.error("Metadata generation failed:", error);
        return createMetadata({ title: "Financer Details | Universal Inspections" });
    }
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    try {
        const resolvedParams = await params;
        const slug = resolvedParams.id;

        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/financer-details/${slug}`;
        console.log("Financer apiUrl apiUrl -------", apiUrl);
        const res = await ClientFetch(apiUrl, { cache: "no-store" });
        const financerResponse: ApiResponse = await res.json();

        console.log("Financer full data -------", JSON.stringify(financerResponse, null, 2));

        const pageContent = financerResponse?.data;
        const headerContent = pageContent?.financer_detail;

        if (!pageContent) {
            return (
                <div className="p-10 text-center text-gray-500">
                    Financer not found.
                </div>
            );
        }

        return (
            <>

                <HeroSection
                    banner_heading={pageContent.first_name}
                    banner_image={headerContent.banner_image}
                />

                <FinancerDetails data={pageContent} /> 
            </>
        );
    } catch (error) {
        console.error("Error fetching Financer details:", error);
        return (
            <div className="p-10 text-center text-red-400">
                Failed to load Financer details. Please try again later.
            </div>
        );
    }
};

export default Page;
