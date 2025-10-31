import React from "react";
import HeroSection from "./_components/herosection";
import BlogList from "./_components/blogList";
import { generateMetadata } from "../utils/genaratemetadata";
import { ClientFetch } from "@/actions/client-fetch";

export const metadata = generateMetadata({ title: "Blogs | Universal Inspections" });

export interface PageContentData {
    id: number;
    banner_image: string;
    file_type: string;
    banner_heading: string;
    heading: string;
    content: string;
    button_text: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface BlogItem {
    id: number;
    title: string;
    banner_image: string;
    featured_image: string;
    short_content: string;
    content: string;
    status: number;
    slug: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface BlogApiResponse {
    status: boolean;
    message: string;
    data: {
        page_content: PageContentData;
        blogs: BlogItem[];
    };
}

const Blogs = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    // ✅ Validate environment variable
    if (!apiUrl) {
        console.error("❌ Missing NEXT_PUBLIC_API_URL environment variable");
        return (
            <div className="p-10 text-center text-red-500">
                <h2 className="text-xl font-semibold mb-2">Configuration Error</h2>
                <p>Missing <strong>NEXT_PUBLIC_API_URL</strong> environment variable. Please check your deployment settings.</p>
            </div>
        );
    }

    try {
        const res = await ClientFetch(`${apiUrl}/blog-page-data`, { cache: "no-store" });

        // ✅ Handle non-OK responses safely
        if (!res.ok) {
            console.error(`❌ API responded with ${res.status}: ${res.statusText}`);
            return (
                <div className="p-10 text-center text-red-500">
                    <h2 className="text-xl font-semibold mb-2">Failed to Load Blogs</h2>
                    <p>Server returned an error ({res.status}). Please try again later.</p>
                </div>
            );
        }

        const blogData: BlogApiResponse = await res.json();

        // ✅ Validate response structure
        if (!blogData?.status || !blogData?.data) {
            console.error("❌ Invalid API response:", blogData);
            return (
                <div className="p-10 text-center text-red-500">
                    <h2 className="text-xl font-semibold mb-2">Invalid API Response</h2>
                    <p>Unable to parse blog data. Please contact support.</p>
                </div>
            );
        }

        const pageContent = blogData.data.page_content;
        const blogs = blogData.data.blogs || [];

        return (
            <>
                {pageContent && <HeroSection data={pageContent} />}
                {blogs.length > 0 ? (
                    <BlogList blogs={blogs} data={pageContent} />
                ) : (
                    <div className="p-10 text-center text-gray-500">
                        No blogs available at the moment.
                    </div>
                )}
            </>
        );
    } catch (error) {
        console.error("❌ Error fetching Blogs page data:", error);
        return (
            <div className="p-10 text-center text-red-500">
                <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
                <p>Failed to load Blogs page data. Please try again later.</p>
            </div>
        );
    }
};

export default Blogs;
