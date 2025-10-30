"use client";
import Container from '@/components/container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from "./style.module.css";
import { motion } from "framer-motion";
import DOMPurify from "dompurify";

interface Service {
    id: number;
    name: string;
    banner_image: string;
    icon: string;
    image: string | null;
    short_content: string;
    content: string;
    status: number;
    slug: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

interface ServicesSectionData {
    service_heading: string;
    service_content: string;
    service_background_image: string;
    service_bottom_heading: string;
    service_bottom_contact_text1: string;
    service_bottom_contact_text2: string;
    service_bottom_icon1: string;
    service_bottom_icon2: string;
    services: Service[];
}

interface Props {
    data: ServicesSectionData;
}

const WhatWeDoSection: React.FC<Props> = ({ data }) => {
    if (!data) return null;

    const getFullImageUrl = (path: string) => {
        if (!path) return "";
        if (path.startsWith("http")) return path;
        if (path.startsWith("/")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };

    const sanitizeHTML = (html: string) => {
        if (typeof DOMPurify?.sanitize === 'function') {
            return DOMPurify.sanitize(html);
        }
        // console.log('DOMPurify not available, returning original HTML');
        return html;
    };

    return (
        <section className={`${style.container} overflow-hidden relative`}>
            <Container>
                {/* Background Image */}
                {data.service_background_image && (
                    <div className="absolute inset-0 z-0 opacity-20">
                        <Image
                            src={data.service_background_image ? getFullImageUrl(data.service_background_image) : ""}
                            alt="Background"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                )}

                <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-[clamp(20px,4vw,48px)]">
                        <h2 className={`${style.title}`}>{data.service_heading}</h2>
                        <p className={`${style.subTitle}`} dangerouslySetInnerHTML={{ __html: data.service_content }} />
                    </div>

                    {/* Cards */}
                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(20px,4vw,30px)] ${style.customBoxWrapper}`}>
                        {data.services.map((service, idx) => (
                            <div
                                key={idx}
                                className="group h-[278px] bg-white cursor-pointer rounded-lg shadow-sm border border-[#DAA6284D] transition hover:bg-[#BD632F] hover:shadow-md flex flex-col justify-between py-[40px] px-[20px]"
                            >
                                <Link href={`/services/${service.slug}`}>
                                    <div>
                                        <Image
                                            src={
                                                service?.icon
                                                    ? getFullImageUrl(service.icon)
                                                    : ""
                                            }
                                            alt={service?.name || "Service Icon"}
                                            width={62}
                                            height={62}
                                            unoptimized
                                            className="object-cover group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
                                        />

                                    </div>
    
                                    <h3
                                        className={`flex items-center justify-start text-[24px] text-[#DAA628] prompt-bold mt-4 group-hover:text-white h-[70px]`}
                                    >
                                        {service.name}
                                    </h3>

                                    <p
                                        className="text-[16px] line-clamp-2 prompt-regular text-[#2C3037] mt-2 group-hover:text-white"
                                        dangerouslySetInnerHTML={{
                                            __html: sanitizeHTML(service.short_content),
                                        }}

                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* CTA Banner */}
            <div className={`absolute bottom-0 right-0 gap-5 bg-[#BD632F] rounded-tl-lg flex flex-col sm:flex-row justify-between p-6 text-white ${style.ctaBanner}`}>
                <div className="flex items-center gap-4">
                    <motion.div
                        animate={{
                            rotate: [0, 360, 0, -360, 0],
                            scale: [1, 1.05, 1, 1.05, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "linear",
                        }}
                        style={{ display: "inline-block" }}
                    >
                        {/* <Image
              src={data.service_bottom_icon1.startsWith('http') ? data.service_bottom_icon1 : `/${data.service_bottom_icon1}`}
              alt="Need Service"
              width={70}
              height={70}
            /> */}
                        <Image
                            src="/images/Inspections_logo.png"
                            alt="Need Service"
                            width={70}
                            height={70}
                        />
                    </motion.div>

                    <div>
                        <h4 className="prompt-bold text-[clamp(16px,4vw,24px)] w-full lg:w-[70%]">{data.service_bottom_heading}</h4>
                    </div>
                </div>

                <div className="flex items-center space-x-1">
                    <div className="p-3 rounded bg-[#DAA628]">
                        <Image
                            src="/images/phone-call.png"
                            alt="call"
                            width={0}
                            height={0}
                            style={{
                                width: 'clamp(20px, 4vw, 25px)',
                                height: 'clamp(20px, 4vw, 25px)',
                            }}
                            className="object-contain invert"
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-[#2A2D34] font-glacial-bold text-[clamp(14px,4vw,18px)]">
                            Call Now <Link href={`tel:${data.service_bottom_contact_text1}`} className="text-white">{data.service_bottom_contact_text1}</Link>
                        </p>
                        <p className="text-[#2A2D34] font-glacial-bold text-[clamp(14px,4vw,18px)]">
                            Toll-Free <Link href={`tel:${data.service_bottom_contact_text2}`} className="text-white">{data.service_bottom_contact_text2}</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
