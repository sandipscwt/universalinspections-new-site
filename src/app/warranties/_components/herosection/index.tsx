import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import Breadcrumbs from "@/components/layout/breadcrumbs";

export interface WarrantyContentItem {
    image: string;
    heading: string;
    content: string;
}

export interface HeroSectionProps {
    data: {
        id: number;
        file_type: string;
        banner_image: string;
        banner_heading: string;
        sec1_heading: string;
        sec1_content: WarrantyContentItem[];
        sec2_heading: string;
        sec2_content: string;
        created_at: string;
        updated_at: string;
    };
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
    if (!data) {
        return (
            <section className="w-full py-20 text-center text-gray-500">
                Loading hero section...
            </section>
        );
    }

    const getFullImageUrl = (path: string) => {
        if (!path) return "/images/warranty/warranty_bg.png";
        if (path.startsWith("http")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };
    return (
        <section
            className={`relative w-full bg-contain bg-center ${style.heroSection}`}
        >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={data?.banner_image ? getFullImageUrl(data?.banner_image) : "/images/warranty/warranty_bg.png"}
                    alt="Background"
                    fill
                    className="object-cover object-top"
                    priority
                    unoptimized
                />
            </div>

            <Container>
                {/* Content container */}
                <div
                    className={`relative ${style.heroContent} z-10 flex flex-col items-start justify-center text-white`}
                >
                    <h1 className="text-[clamp(32px,4vw,58px)] prompt-bold !leading-[clamp(30px,5vw,68px)] sm:leading-snug md:leading-normal">
                        {data.banner_heading || "Extended warranty"}
                    </h1>

                    {/* Breadcrumbs */}
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Extended warranty" },
                        ]}
                        separator=">"
                        className="mt-2 text-[clamp(14px,2vw,18px)] font-glacial-regular"
                    />
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
