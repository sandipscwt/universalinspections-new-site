"use client";
import Container from '@/components/container'
import Image from 'next/image'
import React from 'react'
import style from "./style.module.css";
import MotionComponent from '@/components/layout/motionComponent/motionComponent';

const PurchasesRepairs = () => {

    const services = [
        {
            icon: '/images/about/get.png',
            title: 'What You Get When You Go With Us',
            description:
                'When you choose Universal Inspections, you get detailed, reliable reports, expert insights, and personalized service. We go the extra mile to ensure your vehicle is safe, sound, and road—or water—ready.',
        },
        {
            icon: '/images/about/peace.png',
            title: 'Peace of Mind',
            description:
                "Drive with confidence, knowing your vehicle's true mechanical condition. Our detailed reports provide transparency and reassurance, every time. Relax and enjoy your journey, knowing your vehicle's true mechanical condition.",
        },
        {
            icon: '/images/about/negotiating.png',
            title: 'Negotiating Power',
            description:
                'Armed with our expert insights, you can negotiate with confidence. Our detailed reports give you the upper hand in any vehicle transaction. Make informed decisions and secure the best deals.',
        },
        {
            icon: '/images/about/protected.png',
            title: 'Protected Purchases',
            description:
                'Our rigorous inspections safeguard your purchase. Identify potential issues before they become costly problems. Protect yourself from hidden surprises with a Universal Inspection.',
        },
    ];

    const inspectionImages = [
        {
            img1: '/images/about/1.png',
            img2: '/images/about/2.png',
            img3: '/images/about/3.png',
            title: "Our Value"
        }
    ];

    return (
        <section className='bg-[#F8F8F8] py-[clamp(30px,4vw,80px)]'>
            <Container>
                <div className="flex items-center justify-center">
                    <h2 className={`${style.title} w-[100%] lg:w-[60%]`}>
                        We Take The Worries Out Of Your Purchases and Repairs
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[clamp(25px,4vw,40px)]">
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
                                    <h3 className={`${style.serviceTitle} leading-snug`}>
                                        {service.title}
                                    </h3>
                                    <p className={`${style.serviceSubtitle} leading-relaxed`} >
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}


                    </div>

                    {/* Left Column - Image */}

                    <div className='mt-[40px]'>
                        <MotionComponent images={inspectionImages} />
                    </div>

                </div>
            </Container>



        </section>
    )
}

export default PurchasesRepairs
