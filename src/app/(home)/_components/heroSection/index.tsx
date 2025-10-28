"use client";
import React from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import Image from "next/image";
import Button from "@/components/layout/button";

interface BannerBox {
    heading: string;
    text: string;
    icon: string;
}

interface BannerData {
    banner_background: string;
    banner_background_file_type: string;
    banner_button_text: string;
    banner_heading: string;
    banner_subheading: string;
    banner_bottom_boxes: BannerBox[];
}

const HeroSection: React.FC<{ data: BannerData }> = ({ data }) => {
    if (!data) return null;

    const getFullImageUrl = (path: string) => {
        if (!path) return "";
        if (path.startsWith("http")) return path;
        if (path.startsWith("/")) return path; // local
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };



    return (
        <section className={`${style.heroSection} relative`}>
            <div className="absolute inset-0 z-0">
                {data.banner_background_file_type === "video" ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-center object-cover"
                    >
                        <source
                            src={getFullImageUrl(data.banner_background)}
                            type="video/mp4"
                        />
                    </video>
                ) : (
                    <Image
                        src={getFullImageUrl(data.banner_background)}
                        alt="Banner background"
                        fill
                        className="object-cover"
                          unoptimized
                    />
                )}
            </div>

            <Container>
                <div className={`${style.heroContent}`}>
                    <h1 className={`${style.heroheading}`}>{data.banner_heading}</h1>
                    <p className={`${style.herosubtext}`}>{data.banner_subheading}</p>
                    <div className="p-0">
                        <Button title={data.banner_button_text} href="/bookInspection" />
                    </div>
                </div>
            </Container>

            {/* Features Bar */}
            <div className="relative lg:absolute w-full z-10 lg:bottom-0 lg:translate-y-1/2">
                <Container>
                    <div className="bg-[#2D2F33] py-[40px] px-[70px] sm:px-10 rounded-lg text-white shadow-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {data.banner_bottom_boxes?.map((box, index) => (
                                <Feature
                                    key={index}
                                    imgSrc={getFullImageUrl(box.icon)}
                                    title={box.heading}
                                    subtitle={box.text}
                                    width={52}
                                    height={52}
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </div>


        </section>
    );
};

type FeatureProps = {
    imgSrc: string;
    title: string;
    subtitle: string;
    width: number;
    height: number;
};

const Feature: React.FC<FeatureProps> = ({ imgSrc, title, subtitle, width, height }) => {
    // console.log("Feature image source:--------------", imgSrc);
    return (
        <div className="flex items-start space-x-4">
            <div className={`${style.logoStyle}`}>
                <Image
                    src={imgSrc ?? ""}
                    alt={title}
                    width={width}
                    height={height}
                      unoptimized
                    className="object-contain object-center"
                />
            </div>

            <div className="text-left">
                <p className={`${style.fearureTitle}`}>{title}</p>
                <p className={`${style.featureSubtitle}`}>{subtitle}</p>
            </div>
        </div>
    );
};


export default HeroSection;
