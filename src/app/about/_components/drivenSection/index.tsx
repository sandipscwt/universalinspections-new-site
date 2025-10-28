import React from "react";
import Container from "@/components/container";
import style from "./style.module.css";
import Image from "next/image";

interface DrivenSectionProps {
    data: {
        banner_bottom_section_heading: string;
        banner_bottom_section_image: string;
        banner_bottom_section_content: string;
    };
}

const DrivenSection: React.FC<DrivenSectionProps> = ({ data }) => {
    if (!data) {
        return (
            <section className="w-full py-20 text-center text-gray-500">
                Loading section...
            </section>
        );
    }

    // ✅ Helper to get full image URL
    const getFullImageUrl = (path: string) => {
        if (!path) return "/images/about/driven.png"; // fallback
        if (path.startsWith("http")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };

    const imageUrl = getFullImageUrl(data.banner_bottom_section_image);

    return (
        <section className="bg-white py-[clamp(30px,4vw,100px)]">
            <Container>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* ✅ Left Image */}
                    <div className="w-full h-auto">
                        <div className="relative w-full h-auto">
                            <Image
                                src={data?.banner_bottom_section_image ? getFullImageUrl(data?.banner_bottom_section_image) : ""}
                                alt={data.banner_bottom_section_heading || "Driven Section"}
                                className="object-cover w-full h-auto"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* ✅ Right Content */}
                    <div>
                        <h2 className={`${style.title} w-full lg:w-[90%]`}>
                            {data.banner_bottom_section_heading || "Driven by Trust, Powered by Precision."}
                        </h2>

                        <p
                            className={`${style.sobTitle} mt-4`}
                            dangerouslySetInnerHTML={{
                                __html: data.banner_bottom_section_content ||
                                    "Our mission is simple: to provide honest, thorough, unbiased inspections that give you confidence in your vehicle condition and repairs.",
                            }}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default DrivenSection;
