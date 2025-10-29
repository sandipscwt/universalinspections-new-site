import Container from '@/components/container';
import React from 'react';
import style from './style.module.css';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import HtmlRender from '@/components/HtmlRender';
import PvrButton from '@/components/layout/prvButton';
import NextButton from '@/components/layout/nextButton';

interface BlogDetailsProps {
    data: {
        title: string;
        featured_image: string;
        banner_image: string;
        content: string;
        short_content: string;
        created_at: string;
    };
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ data }) => {

    const getFullImageUrl = (path: string) => {
        if (!path) return "/images/blog/blog_bg.png";
        if (path.startsWith("http")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };
    return (
        <section className="bg-white py-[clamp(30px,4vw,100px)]">
            <Container>
                {/* Title */}
                <h2 className={`${style.btitle}`}>
                    {data.title}
                </h2>

                <div className={`${style.time}`}>
                    <div className={`${style.time_box}`}>
                        <Clock className=" text-[#203740] h-[22px] w-[22px]" />
                    </div>

                    <span className={style.datetime}>
                        {new Date(data?.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                        })}
                    </span>
                </div>
                <div className="relative w-full h-[400px] rounded-md overflow-hidden mb-[23px]">
                    <Image
                        src={
                            data?.featured_image
                                ? getFullImageUrl(data.featured_image)
                                : data?.banner_image
                                    ? getFullImageUrl(data.banner_image)
                                    : ""
                        }
                        alt={data?.title || "Blog Image"}
                        layout="fill"
                        objectFit="cover"
                        unoptimized
                    />
                </div>

                {/* <p className={`${style.blogtitle}`}>
                    {data.short_content}
                </p> */}

                <div className={`sectionContentli ${style.sectionlist}`}>
                    <HtmlRender htmlString={data?.content} />
                </div>

                <div className={`${style.bottom}`}>
                    <PvrButton title="previous Post" href="/blogs" />
                    <NextButton title="Next Post" href="/" />
                </div>
            </Container>
        </section>
    );
}

export default BlogDetails;
