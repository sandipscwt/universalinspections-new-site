import React from 'react'
import style from './style.module.css'
import Container from '@/components/container'
import Image from 'next/image'

const RepairShops = () => {
    const PrePurchase = [
        "Accurate Diagnosis",
        "Clear Explanations (no jargon)",
        "Ongoing Progress Updates",
        "Detailed, itemized invoices",
        "Upfront, honest estimates",
        "High-standard workmanship",
        "Quality Parts (options explained)",
        "Adherence to estimates",
        "Thorough post-repair testing",
        "Warranty on parts and labor",
        "Timely service",
        "Courteous, respectful staff",
        "Proper vehicle care",
        "Decisions respected (even if declining repairs)",
        "Convenient options (scheduling, loaners)",
        "Easy payment options",
        "Clean, organized shop",
        "Preventative maintenance advice (no pressure)",
        "Post-service follow-up."
    ];
    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
                        <div className="space-y-2 mt-[clamp(20px,4vw,30px)]">
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

                    <div className="w-full h-auto">
                        <div className="relative w-fullh-auto">
                            <Image
                                src="/images/associates/shop_img.png"
                                alt="Automotive Dealers"
                                layout="responsive"
                                width={555}
                                height={434}
                                className="object-cover relative"
                            />
                        </div>
                    </div>

                </div>

            </Container>

        </section>
    )
}

export default RepairShops