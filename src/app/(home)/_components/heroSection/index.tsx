"use client";
import React from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import Image from "next/image";
import Button from "@/components/layout/button";


const HeroSection: React.FC = () => {
    return (
        <section
            className={`${style.heroSection}`}
        >
            <div className="absolute inset-0 z-0">
                {/* <Image
                    src="/images/hero_img.png"
                    alt="Background"
                    fill
                    className="object-cover"
                /> */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-center object-fill"
                >
                    <source src="https://universalinspections-static-assets.s3.amazonaws.com/banner_video/67beb46f8de3f1740551279983375.mp4" type="video/mp4" />
                </video>
            </div>

            <Container>
                {/* Content container */}
                <div className={` ${style.heroContent}`}>

                    <h1 className={`${style.heroheading} leading[clamp(50px,4vw,68px)]`}>
                        We take the worries out of your purchases and repairs
                    </h1>
                    <p className={`${style.herosubtext}`}>
                        Pre-Existing Mechanical Breakdowns Can Cost Thousands Of Dollars!
                    </p>

                    <div className="p-0">
                        <Button title="Get Started" href="/book" />
                    </div>

                </div>
            </Container>

            {/* Features Bar */}
            <div className="relative lg:absolute w-full z-10 lg:bottom-0 lg:translate-y-1/2">
                <Container>
                    <div className="bg-[#2D2F33]  py-[40px] px-[70px] sm:px-10 rounded-lg text-white shadow-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <Feature
                                imgSrc="/images/business_icon.png"
                                title="24+"
                                width={51}
                                height={51}
                                subtitle="Years in Business"
                            />
                            <Feature
                                imgSrc="/images/veteran_icon.png"
                                title="Veteran"
                                width={34}
                                height={52}
                                subtitle="Owned"
                            />
                            <Feature
                                imgSrc="/images/expert_icon.png"
                                title="Expert"
                                width={50}
                                height={51}
                                subtitle="Certified Inspectors"
                            />
                            <Feature
                                imgSrc="/images/vehical_number.png"
                                title="25,000+"
                                width={52}
                                height={52}
                                subtitle="Vehicles Inspected"
                            />
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

const Feature: React.FC<FeatureProps> = ({ imgSrc, title, subtitle, width, height }) => (
    <div className="flex items-start space-x-4">
        <div className={`${style.logoStyle}`}>
            <Image
                src={imgSrc}
                alt={title}
                width={width}
                height={height}
                className="object-contain object-center"
            />
        </div>

        <div className="text-left">
            <p className={`${style.fearureTitle}`}>{title}</p>
            <p className={`${style.featureSubtitle}`}>{subtitle}</p>
        </div>
    </div>
);

export default HeroSection;
