import React from 'react'
import style from './style.module.css'
import Container from '@/components/container'
import Image from 'next/image'

const DealersSection = () => {
    const PrePurchase = [
        "Full disclosure of available vehicle history",
        "No hidden fees",
        "Clear 'as-is' disclosures",
        "Thorough inspection and reconditioning",
        "Meaningful test drive",
        "Clear Warranty Options",
        "Option for Independent pre-purchase inspection",
        "Clean and presentable vehicles",
        "Fair and competitive pricing",
        "Transparent trade-in values",
        "Clear, understandable paperwork",
        "Knowledgeable, respectful, no-pressure staff",
        "Adequate decision time",
        "Honored advertisements",
        "Post-sale support",
        "Respect for privacy",
        "Confortable environment"
    ];
    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">                    
                        <div className="w-full h-auto  ">
                            <div className="relative w-full  h-auto">
                                <Image
                                    src="/images/associates/dealers_img.png"
                                    alt="Automotive Dealers"
                                    layout="responsive"
                                    width={555}
                                    height={434}
                                    className="object-cover relative"
                                />
                            </div>
                        </div>
                

                    <div className="space-y-2 mt-[clamp(20px,4vw,35px)]">
                        <h2 className={`${style.sectionTitle}`}>Automotive Dealers</h2>
                        {PrePurchase.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="w-max">
                                    <div className="!w-[12px] !h-[12px] bg-[#BD632F] rounded-[3px] mt-1"></div>
                                </div>
                                <div>
                                    <p className={`${style.sectionItem}`}>
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </Container>

        </section>
    )
}

export default DealersSection