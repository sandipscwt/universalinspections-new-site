import React from 'react'
import style from './style.module.css'
import Container from '@/components/container'
import Image from 'next/image'
import CustomButton from '@/components/layout/customButton'

const ApplyAdministrators = () => {

    const PrePurchase = [
        "Minimum of 2 years of experience in an administrative role",
        "Proficiency in standard office software (e.g., Google Workspace, Excel)",
        "Excellent written and verbal communication skills",
        "Strong organizational and time-management abilities",
        "Ability to work independently and as part of a team",
    ];

    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>
                <div className={`${style.dispatcher_wrapper}`}>
                    <div className="absolute right-[20px] top-1/2 -translate-y-1/2 w-[40%] md:w-[35%] opacity-15 md:opacity-25 pointer-events-none select-none">
                        <Image
                            src="/images/opportunitie/dispatcher-illustration.png"
                            alt="Dispatcher illustration"
                            layout="responsive"
                            width={350}
                            height={360}
                            className="object-contain"
                        />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-[#DAA628] text-2xl font-semibold mb-5">
                        Opportunities for Administrators
                        </h2>

                        <ul className="space-y-3 mt-[clamp(10px,4vw,17px)]">
                            {PrePurchase.map((item, index) => (
                                <li key={index} className="flex items-start space-x-4">
                                    <div className="w-max">
                                        <div className="!w-[15px] !h-[15px] bg-[#BD632F] rounded-[3px] mt-1"></div>
                                    </div>
                                    <div>
                                        <p className="text-[clamp(12px,4vw,16px)] text-[#203740] font-glacial-regular leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-[clamp(20px,4vw,40px)]">
                            <CustomButton title="Apply As Administrators" href="/opportunities/administrators/form" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ApplyAdministrators
