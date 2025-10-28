"use client";

import React from "react";
import Container from "@/components/container";
import style from "./style.module.css";
import MotionComponent from "@/components/layout/motionComponent/motionComponent";
import Image from "next/image";

interface ValueSectionItem {
    heading: string;
    content: string;
    icon: string;
}

interface ValueSectionData {
    value_section_heading: string;
    value_section_images: string[];
    items: ValueSectionItem[];
}

interface PurchasesRepairsProps {
    data: ValueSectionData;
}

const PurchasesRepairs: React.FC<PurchasesRepairsProps> = ({ data }) => {
    if (!data) {
        return (
            <section className="w-full py-20 text-center text-gray-500">
                Loading section...
            </section>
        );
    }
    const getFullImageUrl = (path: string) => {
        if (!path) return "/images/about/1.png";
        if (path.startsWith("http")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };

    return (
        <section className="bg-[#F8F8F8] py-[clamp(30px,4vw,80px)]">
            <Container>
                {/* ✅ Heading */}
                <div className="flex items-center justify-center">
                    <h2 className={`${style.title} w-full lg:w-[60%] text-center`}>
                        {data.value_section_heading ||
                            "We Take The Worries Out Of Your Purchases and Repairs"}
                    </h2>
                </div>

                {/* ✅ Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[clamp(25px,4vw,40px)]">
                    {/* Left Column — Animated Images */}
                    <div className="order-2 lg:order-1 mt-[40px]">
                        <MotionComponent
                            images={[
                                {
                                    img1: getFullImageUrl(data.value_section_images?.[0]),
                                    img2: getFullImageUrl(data.value_section_images?.[1]),
                                    img3: getFullImageUrl(data.value_section_images?.[2]),
                                    title: "Our Value",
                                },
                            ]}
                        />
                    </div>

                    {/* Right Column — Dynamic Items */}
                    <div className="order-1 lg:order-2 flex flex-col gap-9 sm:px-6 lg:px-0">
                        {data.items?.map((item, index) => (
                            <div key={index} className="flex items-start gap-5">
                                {/* Icon */}
                                <div className="min-w-[58px] h-[58px] sm:min-w-[58px] sm:h-[58px] bg-[#EDEDED] rounded-md flex items-end justify-end">
                                    <Image
                                        src={item?.icon ? getFullImageUrl(item?.icon) : ""}
                                        alt={item.heading}
                                        height={40}
                                        width={40}
                                        unoptimized
                                        className="object-contain relative transform translate-x-2"
                                    />
                                </div>

                                {/* Text */}
                                <div className="ml-2">
                                    <h3 className={`${style.serviceTitle} leading-snug`}>
                                        {item.heading}
                                    </h3>
                                    <p
                                        className={`${style.serviceSubtitle} leading-relaxed`}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                item.content ||
                                                "We go the extra mile to ensure your vehicle is safe, sound, and ready for the road.",
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PurchasesRepairs;
