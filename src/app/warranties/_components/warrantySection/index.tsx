import Container from '@/components/container'
import React from 'react'
import style from "./style.module.css";
import Image from 'next/image';

function WarrantySection() {

    const services = [
        {
            title: "Protection from Unexpected Repairs: ",
            description:
                "Mechanical breakdowns can happen anytime. An extended warranty covers costly repairs that your standard warranty no longer does.",
            icon: "/images/warranty/protection.png",
        },
        {
            title: "Roadside Assistance Perks:",
            description:
                "Many plans include extras like towing, flat tire service, battery jumpstarts, and even rental car reimbursement.",
            icon: "/images/warranty/assistance.png",
        },
        {
            title: "Budget Friendly",
            description: "Avoid large, surprise repair bills. You'll pay a fixed amount (or deductible), making your car expenses more predictable.",
            icon: "/images/warranty/budget_friendly.png",
        },
        {
            title: "Nationwide Coverage:",
            description:
                "Most extended warranties let you get repairs done anywhere in the U.S. at certified repair shops—not just the dealership.",
            icon: "/images/warranty/nationWide.png",
        },
        {
            title: "Covers Major Components:",
            description:
                "Many warranties cover vital and expensive systems—like the engine, transmission, electrical, and air conditioning.",
            icon: "/images/warranty/cover_major.png",
        },
        {
            title: "Customizable Plans:",
            description:
                "Choose coverage that fits your driving habits, car age, and budget. Some plans even offer bumper-to-bumper protection.",
            icon: "/images/warranty/customizable.png",
        },
        {
            title: "Peace of Mind:",
            description:
                "Travel and drive with confidence knowing you're protected, especially if your factory warranty has expired.",
            icon: "/images/warranty/prece_of_mind.png",
        },
        {
            title: "Long-Term Savings:",
            description:
                "A single major repair (like a blown engine or bad transmission) can cost more than the warranty itself.",
            icon: "/images/warranty/long_term_saving.png",
        },
        {
            title: "Increases Resale Value:",
            description:
                "Cars with a transferable extended warranty can be more attractive to buyers, making your car easier to sell.",
            icon: "/images/warranty/increases_resal.png",
        },
        {
            title: "Covers High-Tech Components: ",
            description:
                "Modern vehicles are loaded with expensive electronics—an extended warranty helps protect those high-tech systems too.",
            icon: "/images/warranty/cover_highTech.png",
        },
    ];

    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            {/* <Container> */}
            <div className={`${style.containerlg}`}>
                <div className={`${style.titleContainer}`}>
                    <h2>Extended warranty</h2>
                </div>

                <div className={`bg-[#fbfbfb] relative overflow-hidden ${style.bgCard}`}>
                    {/* Top Left Gray Triangle */}
                    <div className={`${style.triangleTopLeft}`}></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <ul className={`grid grid-cols-1 md:grid-cols-2 gap-x-10 ${style.contentul}`}>
                            {services.map((service, index) => (
                                <li key={index} className="flex gap-4 items-center   mb-[clamp(16px,2vw,30px)]">
                                    <div className="min-w-[40px] h-[60px] sm:min-w-[63px] sm:h-[85px] bg-[#BD632F] flex rounded-[8px] items-center justify-center">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            height={30}
                                            width={30}
                                            className="object-contain sm:w-[48px] sm:h-[48px]"
                                        />
                                    </div>
                                    
                                    <div>
                                        <h3 className={`${style.warranty_title}`}>
                                            {service.title}
                                        </h3>
                                        <p className={`${style.description}`}>{service.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>



                    {/* Bottom Right Gray Triangle */}
                    <div className={`${style.triangleBottomRight}`}></div>

                </div>
            </div>

            {/* </Container> */}
        </section>
    )
}

export default WarrantySection