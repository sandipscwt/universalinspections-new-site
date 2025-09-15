
import Container from '@/components/container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from "./style.module.css";

const services = [
    {
        title: 'Automotive',
        description: "Your car's health check, ensuring safety and performance.",
        icon: '/images/automotive.png',
        color: 'text-[#DAA628]',
    },
    {
        title: 'RV',
        description: 'Exploring the open road, worry-free.',
        icon: '/images/rv.png',
        color: 'text-[#DAA628]',
    },
    {
        title: 'Marine',
        description: 'Charting your course with confidence.',
        icon: '/images/marine.png',
        color: 'text-[#DAA628]',
    },
    {
        title: 'Motorcycles',
        description: 'Riding in style, with peace of mind.',
        icon: '/images/motorcycles.png',
        color: 'text-[#DAA628]',
    },
    {
        title: 'Commercial',
        description: 'Farm & Heavy Equipment, Semi-trucks, Corporate Fleets.',
        icon: '/images/commercial.png',
        color: 'text-[#DAA628]',
    },
    {
        title: 'Extended Warranty & Insurance',
        description: "Verify the shop's claims and ensure accuracy.",
        icon: '/images/warranty.png',
        color: 'text-[#DAA628]',
    },
];

const WhatWeDoSection = () => {
    return (
        <section className="relative py-[clamp(30px,4vw,100px)] bg-white overflow-hidden ">
            <Container>
                {/* Background Image */}
                <div className="absolute inset-0 z-0 opacity-20 ">
                    <Image
                        src="/images/wedo_bg.png"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-[clamp(20px,4vw,48px)]">
                        <h2 className="text-[clamp(28px,4vw,38px)]   prompt-bold text-[#2C3037]">What We Do</h2>
                        <p className="text-[clamp(12px,4vw,16px)] font-glacial-regular text-[#2C3037] mt-[clamp(7px,4vw,20px)]">
                            Professional vehicle inspection services you can trust.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(20px,4vw,30px)] ${style.customBoxWrapper}`}>
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="bg-white h-[278px] rounded-lg shadow-sm border border-[#DAA6284D]  transition hover:shadow-md flex flex-col justify-between py-[40px] px-[20px]"
                            >

                                <div>
                                    <Image src={service.icon} alt={service.title} width={62} height={62}     className="object-cover" />
                                </div>
                                <h3 className={`text-2xl prompt-bold mt-3  ${service.color}`}>{service.title}</h3>
                                <p className="text-base prompt-regular  text-[#2C3037] mt-2">{service.description}</p>
                            </div>

                        ))}
                    </div>
                </div>
            </Container>

            {/* CTA Banner */}
            <div className={`absolute bottom-0 right-0 gap-5 bg-[#BD632F] rounded-tl-lg flex flex-col sm:flex-row justify-between p-6 text-white ${style.ctaBanner}`}>
                <div className="flex items-center gap-4">
                    <Image src="/images/Inspections_logo.png" alt="Need Service" width={50} height={50} />
                    <div>
                        <h4 className="prompt-bold text-[clamp(16px,4vw,24px)] w-full lg:w-[70%]">Need Any Service</h4>
                    </div>
                </div>
                <div className="flex items-center  space-x-1">
                    <div className="p-3 rounded bg-[#DAA628]">
                        <Image
                            src="/images/phone-call.png"
                            alt="call"
                            width={0}
                            height={0}
                            style={{
                                width: 'clamp(20px, 4vw, 22px)',
                                height: 'clamp(20px, 4vw, 22px)',
                            }}
                            className="object-contain invert"
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-[#2A2D34] prompt-bold text-[clamp(14px,4vw,18px)]">Call Now <Link href={"tel:(205) 558-8284"} className="text-white">(205) 558-8284</Link></p>
                        <p className="text-[#2A2D34] prompt-bold text-[clamp(14px,4vw,18px)]">Toll-Free <Link href={"tel:1-833-935-1888"} className="text-white">1-833-935-1888</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
