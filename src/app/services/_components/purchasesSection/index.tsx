import Container from '@/components/container'
import Image from 'next/image'
import React from 'react'
import style from "./style.module.css";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PurchasesSection = () => {
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

    return (
        <section className='bg-white py-[clamp(30px,4vw,100px)]'>
            <Container>
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-2">
                    {/* Left Side - Heading */}
                    <div className="lg:pr-6 border-b lg:border-b-0 lg:border-r border-[#2C3037] line-borderPadding">
                        <h2 className="text-[clamp(28px,4vw,38px)]  prompt-bold text-[#2C3037]  leading-[clamp(30px,4vw,48px)]">
                            We take the worry out of your purchases and repairs
                        </h2>
                    </div>

                    {/* Right Side - Paragraph */}
                    <div className="lg:pl-2 pt-[clamp(7px,4vw,4px)] lg:pt-0">
                        <p className="text-[clamp(12px,4vw,16)] font-glacial-regular text-[#2C3037] leading-relaxed">
                            At Universal Inspections, we provide more than just a pre-purchase vehicle inspection. We offer peace of mind, negotiating power and information to enable you to assess your vehicles safety, reliability, and readiness for future adventures! Our expert team delivers detailed, reliable reports, personalized service, and invaluable insights. Trust us to ensure your vehicle is safe, sound, and ready for any adventure.
                        </p>
                    </div>
                </div>

                {/* Cards */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 mt-[clamp(20px,4vw,30px)] lg:grid-cols-3 gap-[clamp(20px,4vw,30px)] ${style.customBoxWrapper}`}>
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group h-[278px] bg-white cursor-pointer rounded-lg shadow-sm border border-[#DAA6284D] transition hover:bg-[#BD632F] hover:shadow-md flex flex-col justify-between py-[40px] px-[20px]"
                        >
                            <Link href={'/services/auto'}>
                            <div>
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={62}
                                    height={62}
                                    className="object-cover group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
                                />
                            </div>
                            <h3
                                className={`text-2xl text-[#DAA628] prompt-bold mt-3 ${service.color} group-hover:text-white`}
                            >
                                {service.title}
                            </h3>
                            <p className="text-base prompt-regular text-[#2C3037] mt-2 group-hover:text-white">
                                {service.description}
                            </p>
                            

                                <div className="flex items-center gap-1 mt-4 text-sm font-medium text-[#2C3037] group-hover:text-white">
                                    <span className="text-[clamp(12px,4vw,16)] font-glacial-regular group-hover:text-white">
                                        View More
                                    </span>
                                    <ArrowRight className="w-5 h-5 text-[#2C3037] group-hover:text-white" />
                                </div>
                            </Link>
                        </div>


                    ))}
                </div>

            </Container>

        </section>
    )
}

export default PurchasesSection
