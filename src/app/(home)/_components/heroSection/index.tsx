"use client";
import React from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


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

                    <h1 className="text-[clamp(32px,4vw,58px)] prompt-bold  max-w-4xl mb-[22px] leading-[clamp(40px,4vw,68px)] sm:leading-snug md:leading-normal">
                        We take the worries out of your purchases and repairs
                    </h1>
                    <p className="text-[clamp(20px,4vw,26px)] font-glacial-regular  max-w-5xl mb-[30px] sm:mb-10 px-2 sm:px-0">
                        Pre-Existing Mechanical Breakdowns Can Cost Thousands Of Dollars!
                    </p>

                    <div className="inline-flex rounded-md overflow-hidden text-[clamp(12px,4vw,14px)] ">
                        <Link
                            href="/book"
                            className="bg-[#DAA628] hover:bg-[#F4A300] px-5 py-3 text-[#2C3037] flex items-center "
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/book"
                            className="bg-[#BD632F] rounded-r-md hover:bg-[#e77026] px-4 py-3 flex items-center justify-center"
                        >
                            <ArrowRight className="w-5 h-5 text-white" />
                        </Link>
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
                                subtitle="Years in Business"
                            />
                            <Feature
                                imgSrc="/images/veteran_icon.png"
                                title="Veteran"
                                subtitle="Owned"
                            />
                            <Feature
                                imgSrc="/images/expert_icon.png"
                                title="Expert"
                                subtitle="Certified Inspectors"
                            />
                            <Feature
                                imgSrc="/images/vehical_number.png"
                                title="25,000+"
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
};

const Feature: React.FC<FeatureProps> = ({ imgSrc, title, subtitle }) => (
    <div className="flex items-start space-x-3">
        <img src={imgSrc} alt={title} className="w-17 h-17 sm:w- 6 sm:h-6 object-contain" />
        <div className="text-left">
            <p className="text-white prompt-bold text-[clamp(24px,4vw,32px)] ">{title}</p>
            <p className="text-[clamp(14px,4vw,18px)] font-glacial-regular text-white">{subtitle}</p>
        </div>
    </div>
);

export default HeroSection;
