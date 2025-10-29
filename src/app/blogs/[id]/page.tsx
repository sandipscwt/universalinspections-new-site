import React from "react";
import Herosection from "./_components/herosection";
import BlogDetails from "./_components/blogDetails";
import { ClientFetch } from "@/actions/client-fetch";
import { generateMetadata as createMetadata } from "../../utils/genaratemetadata";

interface BlogDetailItem {
  id: number;
  title: string;
  banner_image: string;
  featured_image: string;
  short_content: string ;
  content: string;
  status: number;
  slug: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface BlogDetailsApiResponse {
  status: boolean;
  message: string;
  data: BlogDetailItem[]; // ✅ FIXED
}

// ✅ Keep params as Promise (Next.js 15+)
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const slug = resolvedParams.id;

    const res = await ClientFetch(`${process.env.API_URL}/blog-details/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return createMetadata({ title: "Blog Not Found | Universal Inspections" });
    }

    const blogData: BlogDetailsApiResponse = await res.json();
    const blog = blogData?.data?.[0]; // ✅ FIXED

    if (!blog) {
      return createMetadata({ title: "Blog Not Found | Universal Inspections" });
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://simpreative.in/universal-inspection-api";
    const fullImageUrl = `${baseUrl}/${blog.featured_image}`;

    return createMetadata({
      title: `${blog.title} | Universal Inspections`,
      description:
        blog.short_content ||
        "Read more insights and tips from Universal Inspections.",
      url: `https://www.universalinspections.com/blogs/${blog.slug}`,
      image: fullImageUrl,
    });
  } catch (error) {
    console.error("Metadata generation failed:", error);
    return createMetadata({ title: "Blog Details | Universal Inspections" });
  }
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  try {
    const resolvedParams = await params;
    const slug = resolvedParams.id;

    const apiUrl = `${process.env.API_URL}/blog-details/${slug}`;
    const res = await ClientFetch(apiUrl, { cache: "no-store" });
    const blogData: BlogDetailsApiResponse = await res.json();

    // console.log("blogData full data -------", JSON.stringify(blogData),2,null);

    const blog = blogData?.data?.[0]; 
    if (!blog) {
      return (
        <div className="p-10 text-center text-gray-500">
          Blog not found.
        </div>
      );
    }

    return (
      <>
        <Herosection title={blog.title} banner={blog.banner_image} />
        <BlogDetails data={blog} />
      </>
    );
  } catch (error) {
    console.error("Error fetching Blog details:", error);
    return (
      <div className="p-10 text-center text-red-600">
        Failed to load Blog details. Please try again later.
      </div>
    );
  }
};

export default Page;
