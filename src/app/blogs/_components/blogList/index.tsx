import Container from '@/components/container'
import React from 'react'
import style from "./style.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/layout/button';

function BlogList() {

    const blogPosts = [
        {
            image: "/images/blog/singel_blog.png",
            date: "20",
            month: "June",
            title: "Blog Topic Here",
            description: "Ensure your car runs safely with our detailed inspection process.",
            link: "/services/auto",
        },
        {
            image: "/images/blog/singel_blog1.png",
            date: "20",
            month: "June",
            title: "Blog Topic Here",
            description: "Ensure your car runs safely with our detailed inspection process.",
            link: "/services/auto",
        },
        {
            image: "/images/blog/singel_blog2.png",
            date: "20",
            month: "June",
            title: "Blog Topic Here",
            description: "Ensure your car runs safely with our detailed inspection process.",
            link: "/services/auto",
        },
        {
            image: "/images/blog/singel_blog3.png",
            date: "20",
            month: "June",
            title: "Blog Topic Here",
            description: "Ensure your car runs safely with our detailed inspection process.",
            link: "/services/auto",
        },
        {
            image: "/images/blog/singel_blog4.png",
            date: "20",
            month: "June",
            title: "Blog Topic Here",
            description: "Ensure your car runs safely with our detailed inspection process.",
            link: "/services/auto",
        },
        {
            image: "/images/blog/singel_blog5.png",
            date: "20",
            month: "June",
            title: "Blog Topic Here",
            description: "Ensure your car runs safely with our detailed inspection process.",
            link: "/services/auto",
        },
        {
            image: "/images/blog/singel_blog6.png",
            date: "20",
            month: "June",
            title: "Blog Topic Here",
            description: "Ensure your car runs safely with our detailed inspection process.",
            link: "/services/auto",
        },
        {
            image: "/images/blog/singel_blog7.png",
            date: "20",
            month: "June",
            title: "Blog Topic Here",
            description: "Ensure your car runs safely with our detailed inspection process.",
            link: "/services/auto",
        },
        {
            image: "/images/blog/singel_blog8.png",
            date: "20",
            month: "June",
            title: "Blog Topic Here",
            description: "Ensure your car runs safely with our detailed inspection process.",
            link: "/services/auto",
        },
    ];

    return (
        <section className='bg-[#F8F8F8] py-[clamp(30px,4vw,100px)]'>
            <Container>
                <div className={`${style.titleContainer}`}>
                    <h2>Explore Our Blogs</h2>
                    <p >Vivamus ullamcorper dictum mauris, quis faucibus lorem semper vel. Nulla metus ante, mattis quis egestas nec, faucibus vitae enim. Maecenas sagittis eros eu pretium porttitor. Etiam pretium purus sed mauris finibus mattis. Duis nec varius sapien,</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[30px]">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="group rounded-lg overflow-hidden bg-white  shadow-sm transition hover:shadow-md cursor-pointer"
                        >
                            <Link  href={'/blogs/blog'}>
                                {/* Top image + date badge */}
                                <div className="relative h-[200px] w-full">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className={`${style.datebadge}`}>
                                        <p className={`${style.date}`}>{post.date}</p>
                                        <p className={`${style.month}`}>{post.month}</p>
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="p-4 flex flex-col justify-between h-[160px]">
                                    <h3 className="prompt-bold text-[#DAA628] group-hover:text-[#BD632F] text-[clamp(16px,4vw,24px)] leading-[clamp(24px,4vw,29px)]">
                                        {post.title}
                                    </h3>
                                    <p className=" font-glacial-regular  text-[#2C3037] mt-2 group-hover:text-gray-700 text-[clamp(14px,4vw,16px)] leading-[clamp(22px,4vw,25px)]">
                                        {post.description}
                                    </p>
                                
                                        <div className="flex items-center gap-1 mt-4 text-sm font-medium text-[#2C3037] font-glacial-regular group-hover:text-[#BD632F]">
                                            <span>View More</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="p-0 mt-[39px] flex items-center justify-center">
                    <Button title="Load More" href="/" />
                </div>
            </Container>
        </section>
    )
}

export default BlogList
