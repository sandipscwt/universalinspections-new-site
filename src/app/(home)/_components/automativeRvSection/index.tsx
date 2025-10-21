"use client";
import Container from '@/components/container';
import Button from '@/components/layout/button';;
import Image from 'next/image';
import React from 'react';
import style from "./style.module.css";
import MotionComponent from '@/components/layout/motionComponent/motionComponent';

const services = [
    {
        icon: '/images/vehicle_condition.png',
        title: 'Vehicle Condition And Asset Assessment',
        description:
            'Assessment and confirmation of vehicle quality and condition for lenders, as well as car buyers and sellers involved in a vehicle transaction.',
    },
    {
        icon: '/images/vehicle_service.png',
        title: 'Vehicle Service Contract and Warranty Claims',
        description:
            'Confirmation of mechanical and engine component failures for vehicle service contract and warranty claims.',
    },
    {
        icon: '/images/vehical_insurance.png',
        title: 'Automotive Insurance Claims',
        description:
            'Analysis of causality and the connection between a failed engine component and an accident or collision claim for automotive insurers.',
    },
    {
        icon: '/images/vehical_liability.png',
        title: 'Commercial Liability Claims',
        description:
            'Analysis of whether a repair or maintenance service led to an engine component or mechanical failure for repair shops and commercial liability insurance providers.',
    },
];

const AutomativeRvSection: React.FC = () => {

    const inspectionImages = [
        {
            img1: '/images/1.png',
            img2: '/images/2.png',
            img3: '/images/3.png',
            title: "Need Any Service"
        }
    ];

    return (
        <section className="bg-white section-spacing-y-top">
            <Container className=''>
                {/* Header Section */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-2 `}>
                    {/* Left Side - Heading */}
                    <div className={`lg:pr-6 border-b lg:border-b-0 lg:border-r border-black line-borderPadding`}>
                        <h2 className={`${style.responsivetext}`}>
                            Automotive, RV, Marine,<br /> Motorcycles and Commercial
                        </h2>
                    </div>

                    {/* Right Side - Paragraph */}
                    <div className="lg:pl-2 pt-[clamp(7px,4vw,4px)] lg:pt-0">
                        <p className={`${style.responsivebodytext}`}>
                            Universal Inspections proudly maintains a network of highly skilled
                            mechanical and electronics technicians across the nation. We deliver clear,
                            comprehensive reports on mechanical issues and related failures, serving a
                            wide range of customers and industries. Our services encompass:
                        </p>
                    </div>

                </div>
            </Container>

            {/* Services Section */}
            <div className={`${style.serviceSection}`}>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                        <div>
                            <MotionComponent images={inspectionImages} />
                        </div>

                        {/* Right Column - Service Items */}
                        <div className="flex flex-col gap-9  sm:px-6 lg:px-0 ">
                            {services.map((service, index) => (
                                <div key={index} className="flex items-start gap-5 ">
                                    {/* Icon */}
                                    <div className={`${style.iconflexbox}`}>
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            height={40}
                                            width={40}
                                            className="object-contain relative transform translate-x-2"
                                        />
                                    </div>

                                    {/* Text */}
                                    <div className='ml-2'>
                                        <h3 className={`${style.serviceTitle} w-full lg:w-[70%]`}
                                        >
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
                                <Button title="Get Started" href="/bookInspection" />
                            </div>
                        </div>

                    </div>
                </Container>
            </div>

        </section>
    );
};

export default AutomativeRvSection;
