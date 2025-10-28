import Container from "@/components/container";
import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/layout/button";
import Image from "next/image";

interface BlogListProps {
    blogs: {
        id: number;
        title: string;
        banner_image: string;
        content: string;
        slug: string;
        created_at: string;
    }[];
    data: {
        heading: string;
        content: string;
        button_text: string;
    };
}

const BlogList: React.FC<BlogListProps> = ({ blogs, data }) => {
    const getFullImageUrl = (path: string) => {
        if (!path) return "/images/blog/singel_blog.png";
        if (path.startsWith("http")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        return { day, month };
    };

    return (
        <section className="bg-[#F8F8F8] py-[clamp(30px,4vw,100px)]">
            <Container>
                {/* ✅ Section Heading */}
                <div className={`${style.titleContainer}`}>
                    <h2>{data?.heading || "Explore Our Blogs"}</h2>
                    <div
                        className="text-[#2C3037] font-glacial-regular mt-3"
                        dangerouslySetInnerHTML={{ __html: data?.content || "" }}
                    />
                </div>

                {/* ✅ Blog Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[30px]">
                    {blogs.map((post) => {
                        const { day, month } = formatDate(post.created_at);
                        return (
                            <div
                                key={post.id}
                                className="group rounded-lg overflow-hidden bg-white shadow-sm transition hover:shadow-md cursor-pointer"
                            >
                                <Link href={`/blogs/${post.slug}`}>
                                    <div className="relative h-[200px] w-full">
                                        <Image
                                            src={post.banner_image ? getFullImageUrl(post.banner_image) : ""}
                                            alt={post.title}
                                            fill
                                            unoptimized
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        {/* ✅ Date badge */}
                                        <div className={`${style.datebadge}`}>
                                            <p className={`${style.date}`}>{day}</p>
                                            <p className={`${style.month}`}>{month}</p>
                                        </div>
                                    </div>

                                    {/* ✅ Card Body */}
                                    <div className="p-4 flex flex-col justify-between h-[160px]">
                                        <h3 className="prompt-bold text-[#DAA628] group-hover:text-[#BD632F] text-[clamp(16px,4vw,24px)] leading-[clamp(24px,4vw,29px)]">
                                            {post.title}
                                        </h3>
                                        <p className="font-glacial-regular text-[#2C3037] mt-2 group-hover:text-gray-700 text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,25px)] line-clamp-2">
                                            {post.content}
                                        </p>

                                        <div className="flex items-center gap-1 mt-4 text-sm font-medium text-[#2C3037] font-glacial-regular group-hover:text-[#BD632F]">
                                            <span>View More</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* ✅ Load More Button */}
                <div className="p-0 mt-[39px] flex items-center justify-center">
                    <Button title={data?.button_text || "Load More"} href="/" />
                </div>
            </Container>
        </section>
    );
};

export default BlogList;
