import React from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import Breadcrumbs from "@/components/layout/breadcrumbs";
import Image from "next/image";

interface HeroSectionProps {
    data: {
        banner_image: string;
        file_type: string | null;
        banner_heading: string;
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

    // ✅ Helper to get full image URL
    const getFullImageUrl = (path: string) => {
        if (!path) return "/images/about/about_herosection.png";
        if (path.startsWith("http")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };


    return (
        <section className={`relative w-full bg-contain bg-center ${style.heroSection}`}>
            <div className="absolute inset-0 z-0">
                <Image
                    src={data?.banner_image ? getFullImageUrl(data?.banner_image) : ""}
                    alt={data?.banner_heading || "About Us"}
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                />
            </div>

            <Container>
                <div
                    className={`relative ${style.heroContent} z-10 flex flex-col items-start justify-center text-white`}
                >
                    <h1 className={`${style.title} sm:leading-snug md:leading-normal`}>
                        {data.banner_heading || "About Us"}
                    </h1>

                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: data.banner_heading || "About Us" },
                        ]}
                        separator=">"
                        className={`${style.subTitle}`}
                    />
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
