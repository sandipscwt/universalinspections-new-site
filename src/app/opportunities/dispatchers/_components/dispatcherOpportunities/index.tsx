import React from 'react'
import style from './style.module.css'
import Container from '@/components/container'
import Image from 'next/image'
import Link from 'next/link'

const DispatcherOpportunities = () => {
    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>
                <div className={`${style.titleContainer}`}>
                    <h2>Dispatcher Opportunities</h2>
                    <p>{`Join the Universal Inspections family as a dedicated dispatcher and be part of a team where your contributions truly matter! We&quot;re more than just colleagues; we&quot;re a supportive and goal-oriented group that celebrates each other's success.`}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center mt-[clamp(20px,4vw,30px)]">
                    <div>
                        <div className="w-full h-auto ">
                            <div className="relative w-full  h-auto">
                                <Image
                                    src="/images/opportunitie/od_bg.png"
                                    alt="Driven Section"
                                    layout="responsive"
                                    width={555}
                                    height={434}
                                    className="object-cover relative"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className={`${style.title} w-[100%] lg:w-[90%]`}>Opportunities for Dispatchers</h2>

                        <p className={`${style.sobTitle}`}>
                            {`At Universal Inspections, our success is also driven by our dedicated and efficient dispatch team. We are committed to providing the highest level of support to our operations and our clients by ensuring seamless coordination of our field operations. Both full-time and part-time positions are available to accommodate different work preferences and lifestyles. If you have a strong administrative background, excellent organizational and communication skills, and a passion for contributing to a dynamic team, we encourage you to get in touch with us by email at`}
                        </p>

                        <div className="flex items-center mt-[22px]">
                            <div className={`${style.callBox}`}>
                                <Image
                                    src="/images/mail-inbox-app.png"
                                    alt="mail"
                                    width={10}
                                    height={10}
                                    className="object-contain invert"
                                />
                            </div>
                            <div className="ml-[10px]">
                                <p className={`${style.callText}`}>
                                    <span className="text-[#DAA628]">Mail Address: </span> <Link href="mailto:info@universalinspections.com" className="text-[#2A2D34] cursor-pointer">
                                        info@universalinspections.com
                                    </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default DispatcherOpportunities