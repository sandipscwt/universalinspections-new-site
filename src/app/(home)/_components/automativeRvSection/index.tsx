"use client";

import Container from '@/components/container';
import Button from '@/components/layout/button';
import Image from 'next/image';
import React from 'react';
import style from "./style.module.css";
import MotionComponent from '@/components/layout/motionComponent/motionComponent';

interface PurchaseInspectionFeature {
    icon: string;
    title: string;
    description: string;
}

interface PurchaseInspectionData {
    purchase_inspection_heading: string;
    purchase_inspection_images: string[];
    purchase_inspection_content: string;
    purchase_inspection_features: PurchaseInspectionFeature[];
    purchase_inspection_button_text: string;
}

interface Props {
    data: PurchaseInspectionData;
}

const AutomativeRvSection: React.FC<Props> = ({ data }) => {
    if (!data) return null;

    const inspectionImages = [
        {
            img1: data.purchase_inspection_images[0],
            img2: data.purchase_inspection_images[1],
            img3: data.purchase_inspection_images[2],
            title: "Pre-Purchase Inspections"
        }
    ];

    const getFullImageUrl = (path: string) => {
        if (!path) return "";
        if (path.startsWith("http")) return path;
        if (path.startsWith("/")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };

    return (
        <section className="bg-white section-spacing-y-top">
            <Container>
                {/* Header Section */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-2`}>
                    {/* Left Side - Heading */}
                    <div className={`lg:pr-6 border-b lg:border-b-0 lg:border-r border-black line-borderPadding`}>
                        <h2 className={`${style.responsivetext}`}>
                            {data.purchase_inspection_heading}
                        </h2>
                    </div>

                    {/* Right Side - Paragraph */}
                    <div className="lg:pl-2 pt-[clamp(7px,4vw,4px)] lg:pt-0">
                        <p
                            className={`${style.responsivebodytext}`}
                            dangerouslySetInnerHTML={{ __html: data.purchase_inspection_content }}
                        />
                    </div>
                </div>
            </Container>

            {/* Services Section */}
            <div className={`${style.serviceSection}`}>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Left Column - Inspection Images */}
                        <div>
                            <MotionComponent images={inspectionImages} />
                        </div>

                        {/* Right Column - Service Items */}
                        <div className="flex flex-col gap-9 sm:px-6 lg:px-0">
                            {data.purchase_inspection_features?.map((service, index) => (
                                <div key={index} className="flex items-start gap-5">
                                    {/* Icon */}
                                    <div className={`${style.iconflexbox}`}>
                                        <Image
                                            src={getFullImageUrl(service.icon)}
                                            alt={service.title}
                                            height={40}
                                            width={40}
                                            className="object-contain relative transform translate-x-2"
                                            unoptimized
                                        />
                                    </div>

                                    {/* Text */}
                                    <div className='ml-2'>
                                        <h3 className={`${style.serviceTitle} w-full lg:w-[70%]`}>
                                            {service.title}
                                        </h3>
                                        <p className={`${style.description}`}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {/* Button */}
                            <div className="p-0">
                                <Button title={'Get Started'} href="/bookInspection" />
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </section>
    );
};

export default AutomativeRvSection;
