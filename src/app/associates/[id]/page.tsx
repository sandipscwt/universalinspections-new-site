import React from 'react'
import Herosection from './_components/herosection'
import BusinessSection from './_components/businessSection'
import { ClientFetch } from '@/actions/client-fetch';
import { generateMetadata as createMetadata } from "../../utils/genaratemetadata";

export interface ApiResponse {
    status: boolean;
    message: string;
    data: UserData;
}

export interface UserData {
    id: number;
    first_name: string | null;
    last_name: string | null;
    email: string | null;
    country_code_id: number | null;
    phone: string | null;
    contact_name: string | null;
    dob: string | null;
    country_id: number | null;
    state_id: number | null;
    city: string | null;
    street_address: string | null;
    zip: string | null;
    latitude: string | null;
    longitude: string | null;
    profile_photo: string | null;
    website: string | null;
    status: number | null;
    priority: number | null;
    slug: string | null;
    email_verified_at: string | null;
    created_at: string | null;
    updated_at: string | null;
    deleted_at: string | null;
    meta_data: {
        meta_title: string | null;
        meta_description: string | null;
        meta_keywords: string | null;
    };
    detail: Detail | null;
    country: Country | null;
    state: State | null;
    country_code: string | null;
    roles: Role[];
}

export interface Country {
    id: number;
    name: string;
}

export interface State {
    id: number;
    name: string;
}

export interface Role {
    id: number;
    name: string;
    guard_name: string;
    created_at: string | null;
    updated_at: string | null;
    pivot: RolePivot;
}

export interface RolePivot {
    model_type: string;
    model_id: number;
    role_id: number;
}

export interface Detail {
    id: number;
    user_id: number;
    main_logo: string;
    header_logo: string ;
    banner_image: string ;
    gallery_photos: string[];
    additional_information: string | null;
    created_at: string | null;
    updated_at: string | null;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    try {
        const resolvedParams = await params;
        const slug = resolvedParams.id;

        const res = await ClientFetch(`${process.env.API_URL}/associate-details/${slug}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return createMetadata({ title: "Commercial User Not Found | Universal Inspections" });
        }

        const commercialResponse: ApiResponse = await res.json();
        const commercial = commercialResponse?.data;

        if (!commercial) {
            return createMetadata({ title: "Commercial User Not Found | Universal Inspections" });
        }

        const baseUrl = process.env.API_URL || "https://simpreative.in/universal-inspection-api";
        const fullImageUrl = commercial.detail?.banner_image
            ? `${baseUrl}/${commercial.detail.banner_image}`
            : `${baseUrl}/default-banner.jpg`;

        return createMetadata({
            title: commercial.meta_data?.meta_title || `${commercial.first_name} | Universal Inspections`,
            description: commercial.meta_data?.meta_description || commercial.detail?.additional_information
                ?.replace(/<[^>]+>/g, "")
                .slice(0, 160) || "Explore our range of professional inspection services.",

            url: `https://www.universalinspections.com/commercial/${commercial.slug}`,
            image: fullImageUrl,
        });
    } catch (error) {
        console.error("Metadata generation failed:", error);
        return createMetadata({ title: "Commercial Details | Universal Inspections" });
    }
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    try {
        const resolvedParams = await params;
        const slug = resolvedParams.id;

        const apiUrl = `${process.env.API_URL}/associate-details/${slug}`;
        console.log("Commercial apiUrl -------", apiUrl);
        
        const res = await ClientFetch(apiUrl, { cache: "no-store" });
        
        if (!res.ok) {
            return (
                <div className="p-10 text-center text-gray-500">
                    Commercial user not found.
                </div>
            );
        }

        const commercialResponse: ApiResponse = await res.json();
        console.log("Commercial full data -------", JSON.stringify(commercialResponse, null, 2));

        const pageContent = commercialResponse?.data;
        const detail = commercialResponse?.data?.detail;

        if (!pageContent) {
            return (
                <div className="p-10 text-center text-gray-500">
                    Commercial user not found.
                </div>
            );
        }

        return (
            <>
                <Herosection 
                    banner_image={detail?.banner_image}
                />
                <BusinessSection 
                    data={pageContent}
                />
            </>
        );
    } catch (error) {
        console.error("Error fetching commercial details:", error);
        return (
            <div className="p-10 text-center text-red-400">
                Failed to load commercial details. Please try again later.
            </div>
        );
    }
};

export default Page;