import React from "react";
import HeroSection from "./_components/herosection";
// import BlogList from "./_components/blogList";
import { generateMetadata } from "../utils/genaratemetadata";
import { ClientFetch } from "@/actions/client-fetch";

// ✅ Metadata
export const metadata = generateMetadata({ title: "Blogs | Universal Inspections" });

export interface PageContent {
    id: number;
    banner_image: string;
    file_type: string;
    banner_heading: string;
    heading: string;
    content: string;
    button_text: string;
}

export interface BlogItem {
    id: number;
    title: string;
    banner_image: string;
    featured_image?: string | null;
    short_content?: string | null;
    content: string;
    status: number;
    slug: string;
}

export interface BlogPageData {
    page_content: PageContent;
    blogs: BlogItem[];
}

export interface BlogApiResponse {
    status: boolean;
    message: string;
    data: BlogPageData;
}


const Blogs = async () => {
    try {
        const res = await ClientFetch(`${process.env.API_URL}/blog-page-data`, { cache: "no-store" });
        const blogData: BlogApiResponse = await res.json();

        // console.log('blogData---------------', blogData, null, 2);
        const pageContent = blogData?.data?.page_content;
        // const blogs = blogData?.data?.blogs || [];

        return (
            <>
                {pageContent && <HeroSection data={pageContent} />}
                {/* {blogs.length > 0 && pageContent && <BlogList blogs={blogs} data={pageContent} />} */}
            </>
        );
    } catch (error) {
        console.error("Error fetching Blogs page data:", error);
        return (
            <div className="p-10 text-center text-red-600">
                Failed to load Blogs page data. Please try again later.
            </div>
        );
    }
};

export default Blogs;
