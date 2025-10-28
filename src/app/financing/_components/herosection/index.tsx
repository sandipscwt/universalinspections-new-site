import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import Breadcrumbs from "@/components/layout/breadcrumbs";

export interface FinancingResponse {
    status: boolean;
    message: string;
    data: FinancingData;
}

export interface FinancingData {
    data: {
        id: number;
        banner_heading: string;
        banner_image: string;
        file_type: string;
        search_heading: string;
        search_text: string;
        button_above_text: string;
        button_text: string;
        created_at: string;
        updated_at: string;
        deleted_at: string | null;
    }
}

const HeroSection: React.FC<FinancingData> = ({ data }) => {

    if (!data) {
        return (
            <section className="w-full py-20 text-center text-gray-500">
                Loading hero section...
            </section>
        );
    }

    const getFullImageUrl = (path: string) => {
        if (!path) return "/images/finance/finance_bg.png";
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
                    src={data?.banner_image ? getFullImageUrl(data?.banner_image) : ""}
                    alt="Background"
                    fill
                    className="object-cover"
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

                        {data.banner_heading || "Financing"}
                    </h1>

                    {/* Breadcrumbs */}
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Financing" },
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
