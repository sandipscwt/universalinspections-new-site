import Container from '@/components/container';
import Button from '@/components/layout/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
    return (
        <section className="bg-white section-spacing-y-top">
            <Container className='section-spacing-y-top'>
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Side - Heading */}
                    <div className="lg:pr-6 border-b lg:border-b-0 lg:border-r border-black">
                        <h2 className="text-[clamp(28px,4vw,38px)]  prompt-bold text-[#2C3037]  leading-[clamp(30px,4vw,48px)]">
                            Automotive, RV, Marine,<br /> Motorcycles and Commercial
                        </h2>
                    </div>

                    {/* Right Side - Paragraph */}
                    <div className="lg:pl-6 pt-[clamp(1px,4vw,4px)] lg:pt-0">
                        <p className="text-[clamp(12px,4vw,16)] font-glacial-regular text-[#2C3037] leading-relaxed">
                            Universal Inspections proudly maintains a network of highly skilled
                            mechanical and electronics technicians across the nation. We deliver clear,
                            comprehensive reports on mechanical issues and related failures, serving a
                            wide range of customers and industries. Our services encompass:
                        </p>
                    </div>
                </div>
            </Container>

            {/* Services Section */}
            <div className="bg-[#F8F8F8] mt-[clamp(30px,4vw,70px)] pt-[clamp(28px,4vw,28px)] pb-[clamp(40px,4vw,80px)]">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left Column - Image */}
                        <div className="w-full h-auto ">
                            <div className="relative w-full  h-auto">
                                <Image
                                    src="/images/autoservice_group.png"
                                    alt="Automotive services"
                                    layout="responsive"
                                    width={556}
                                    height={641}
                                    className="object-cover relative transform translate-y-[-10%]"
                                />
                            </div>
                        </div>

                        {/* Right Column - Service Items */}
                        <div className="flex flex-col gap-9  sm:px-6 lg:px-0 ">
                            {services.map((service, index) => (
                                <div key={index} className="flex items-start gap-5 ">
                                    {/* Icon */}
                                    <div className="min-w-[58px] h-[58px] sm:min-w-[58px] sm:h-[58px] bg-[#EDEDED] rounded-md flex items-end justify-end ">
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
                                        <h3 className="text-[#DAA628] prompt-bold text-[clamp(16px,4vw,20px)] w-full lg:w-[70%]   leading-snug">
                                            {service.title}
                                        </h3>
                                        <p className="text-[clamp(12px,4vw,16px)] font-glacial-regular text-[#2C3037] mt-[12px] leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {/* Button */}
                            <div className="p-0">
                                <Button title="Get Started" href="/book" />
                            </div>
                        </div>

                    </div>
                </Container>
            </div>

        </section>
    );
};

export default AutomativeRvSection;
