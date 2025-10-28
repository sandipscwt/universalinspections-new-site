import Container from "@/components/container";
import React from "react";
import style from "./style.module.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface ServiceItem {
    id: number;
    name: string;
    banner_image: string | null;
    file_type: string | null;
    icon: string;
    image: string | null;
    short_content: string;
    content: string;
    status: number;
    slug: string;
}

export interface BannerBottom {
    heading: string | null;
    content: string; // HTML string
}

interface PurchasesSectionProps {
    services: ServiceItem[];
    bannerBottom: BannerBottom;
}


const getFullImageUrl = (path: string) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    if (path.startsWith("/")) return path;
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
};

const PurchasesSection: React.FC<PurchasesSectionProps> = ({ services, bannerBottom }) => {
    return (
        <section className="bg-white py-[clamp(30px,4vw,100px)]">
            <Container>
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {/* Left - Heading */}
                    <div className="lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#2C3037] line-borderPadding">
                        <h2 className="text-[clamp(28px,4vw,38px)] prompt-bold text-[#2C3037] leading-[clamp(30px,4vw,48px)]">
                            {bannerBottom?.heading
                                ? bannerBottom.heading
                                : "We take the worry out of your purchases and repairs"}
                        </h2>
                    </div>

                    {/* Right - Content */}
                    <div className="lg:pl-2 pt-[clamp(7px,4vw,4px)] lg:pt-0">
                        {bannerBottom?.content && (
                            <div
                                className="text-[clamp(12px,4vw,16px)] font-glacial-regular text-[#2C3037] leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: bannerBottom.content }}
                            />
                        )}
                    </div>
                </div>

                {/* Services Grid */}
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 mt-[clamp(20px,4vw,30px)] lg:grid-cols-3 gap-[clamp(20px,4vw,30px)] ${style.customBoxWrapper}`}
                >
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group h-[278px] bg-white cursor-pointer rounded-lg shadow-sm border border-[#DAA6284D] transition hover:bg-[#BD632F] hover:shadow-md flex flex-col justify-between"
                        >
                            <Link href={`/services/${service.slug}`}>
                                <div>
                                    <Image
                                        src={service?.icon?getFullImageUrl(service?.icon):""}
                                        alt={service.name}
                                        width={62}
                                        height={62}
                                        unoptimized
                                        className="object-cover group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
                                    />
                                </div>

                                <h3 className="text-2xl text-[#DAA628] prompt-bold mt-3 group-hover:text-white">
                                    {service.name}
                                </h3>

                                <p
                                    className="text-base prompt-regular text-[#2C3037] mt-2 group-hover:text-white"
                                    dangerouslySetInnerHTML={{ __html: service.short_content }}
                                />

                                <div className="flex items-center gap-1 mt-4 text-sm font-medium text-[#2C3037] group-hover:text-white">
                                    <span className="text-[clamp(12px,4vw,16px)] font-glacial-regular group-hover:text-white">
                                        View More
                                    </span>
                                    <ArrowRight className="w-5 h-5 text-[#2C3037] group-hover:text-white" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default PurchasesSection;
