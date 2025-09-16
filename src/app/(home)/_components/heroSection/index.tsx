"use client";
import React from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "@/components/layout/button";


const HeroSection: React.FC = () => {
    return (
        <section
            className={`relative w-full  bg-contain  bg-center ${style.heroSection}`}
        >
            <div className="absolute inset-0 z-0  ">
                <Image
                    src="/images/hero_img.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <Container>
                {/* Content container */}
                <div className={`relative ${style.heroContent} z-10 flex flex-col items-start justify-center  text-white`}>

                    <h1 className="text-[clamp(32px,4vw,58px)] prompt-bold  max-w-3xl mb-[22px] !leading-[clamp(30px,5vw,68px)] sm:leading-snug md:leading-normal">
                        We take the worries out of your purchases and repairs
                    </h1>
                    <p className="text-[clamp(20px,4vw,26px)] font-glacial-regular  max-w-5xl mb-[30px] sm:mb-10  sm:px-0">
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
        <div className=" w-[52px]">
            <Image
                src={imgSrc}
                alt={title}
                width={width}
                height={height}
                className=" object-contain"
            />
        </div>

        <div className="text-left">
            <p className="text-white prompt-bold text-[clamp(24px,4vw,32px)] ">{title}</p>
            <p className="text-[clamp(14px,4vw,18px)] font-glacial-regular text-white">{subtitle}</p>
        </div>
    </div>
);

export default HeroSection;
