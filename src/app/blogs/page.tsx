import React from "react";
import HeroSection from "./_components/herosection";
import BlogList from "./_components/blogList";
import { generateMetadata } from "../utils/genaratemetadata";

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
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/blog-page-data`;

    // Debug log for SSR
    console.log("Fetching blogs from:", apiUrl);

    const res = await fetch(apiUrl, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.status}`);
    }

    const blogData: BlogApiResponse = await res.json();
    const pageContent = blogData?.data?.page_content;
    const blogs = blogData?.data?.blogs || [];

    if (!pageContent) {
      return (
        <div className="p-10 text-center text-red-400">
          No page content found. Please try again later.
        </div>
      );
    }

    return (
      <>
        <HeroSection data={pageContent} />
        {blogs.length > 0 ? (
          <BlogList blogs={blogs} data={pageContent} />
        ) : (
          <div className="p-10 text-center text-gray-500">No blogs available.</div>
        )}
      </>
    );
  } catch (error) {
    console.error("Error fetching Blogs page data:", error);
    return (
      <div className="p-10 text-center text-red-400">
        Failed to load Blogs page data. Please try again later.
      </div>
    );
  }
};

export default Blogs;
