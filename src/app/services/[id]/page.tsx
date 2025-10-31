import React from 'react'
import Herosection from './_components'
import EmpoweringSection from './_components/empoweringSection'
import { generateMetadata as createMetadata } from "../../utils/genaratemetadata";
import { ClientFetch } from '@/actions/client-fetch';

export interface ServiceItem {
    id: number;
    name: string;
    banner_image: string;
    file_type: string;
    icon: string;
    image: string;
    short_content: string ;
    content: string ;
    status: number;
    slug: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface ServiceApiResponse {
    status: boolean;
    message: string;
    data: ServiceItem[];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    try {
        const resolvedParams = await params;
        const slug = resolvedParams.id;

        const res = await ClientFetch(`${process.env.NEXT_PUBLIC_API_URL}/service-details/${slug}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return createMetadata({ title: "Service Not Found | Universal Inspections" });
        }

        const serviceData: ServiceApiResponse = await res.json();
        const service = serviceData?.data?.[0];

        if (!service) {
            return createMetadata({ title: "Service Not Found | Universal Inspections" });
        }

        const baseUrl =
            process.env.NEXT_PUBLIC_API_BASE_URL ||
            "https://simpreative.in/universal-inspection-api";
        const fullImageUrl = `${baseUrl}/${service.banner_image}`;

        return createMetadata({
            title: `${service.name} | Universal Inspections`,
            description:
                service.short_content?.replace(/<[^>]+>/g, '') ||
                "Explore our range of professional inspection services.",
            url: `https://www.universalinspections.com/services/${service.slug}`,
            image: fullImageUrl,
        });
    } catch (error) {
        console.error("Metadata generation failed:", error);
        return createMetadata({ title: "Service Details | Universal Inspections" });
    }
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    try {
        const resolvedParams = await params;
        const slug = resolvedParams.id;

        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/service-details/${slug}`;
        const res = await ClientFetch(apiUrl, { cache: "no-store" });
        const serviceData: ServiceApiResponse = await res.json();

        console.log("serviceData full data -------", JSON.stringify(serviceData), 2, null);

        const service = serviceData?.data?.[0];
        if (!service) {
            return (
                <div className="p-10 text-center text-gray-500">
                    Service not found.
                </div>
            );
        }

        return (
            <>
                <Herosection title={service.name} banner={service.banner_image} />
                <EmpoweringSection data={service} />
            </>
        );
    } catch (error) {
        console.error("Error fetching Service details:", error);
        return (
            <div className="p-10 text-center text-red-400">
                Failed to load Service details. Please try again later.
            </div>
        );
    }
};

export default Page;
