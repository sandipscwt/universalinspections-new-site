import React from 'react'
import style from './style.module.css'
import Container from '@/components/container'
import Image from 'next/image'
import { MapPin } from "lucide-react";
import ApplicationButton from '@/components/layout/applicationButton';

const FinancerDetails = () => {
    return (
        <section className={`${style.sectionContainer} bg-white`}>
            <Container>
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    <div className="relative">
                        <Image
                            src="/images/finance/financerD_bg.png"
                            alt="Driven Section"
                            layout="responsive"
                            width={555}
                            height={400}
                            className="object-cover relative"
                        />
                    </div>

                    <div>
                        <h2 className={`${style.title}`}>
                            Financer Name
                        </h2>

                        {/* Contact Info */}
                        <div className="pb-[30px]">
                            <h3 className={`${style.contacttitle}`}>
                                Contact Information
                            </h3>

                            <div className="mt-[20px]">
                                <div className="flex items-start space-x-2">
                                    <div className="px-1 py-1 rounded bg-[#DAA628]">
                                        <MapPin className="w-4 h-4  text-[#2A2D34]" />
                                    </div>
                                    <p className={`${style.address}`}>
                                        <strong>Address:</strong> 123 Main St, Birmingham, Alabama 35242
                                    </p>
                                </div>

                                <div className="flex items-start space-x-2 mt-[18px]">
                                    <div className="px-1 py-1 rounded bg-[#DAA628]">
                                        <Image
                                            src="/images/phone-call.png"
                                            alt="call"
                                            width={14}
                                            height={14}
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className={`${style.address}`}>
                                        <strong>Phone:</strong> 2055555555
                                    </p>

                                </div>

                                <div className="flex items-start space-x-2  mt-[18px]">
                                    <div className="px-1 py-1 rounded bg-[#DAA628]">
                                        <Image
                                            src="/images/mail-inbox-app.png"
                                            alt="mail"
                                            width={14}
                                            height={14}
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className={`${style.address}`}>
                                        <strong>Email:</strong> contact@financer.com
                                    </p>

                                </div>

                                <div className="flex items-start space-x-2  mt-[18px]">
                                    <div className="px-1 py-1 rounded bg-[#DAA628]">
                                        <Image
                                            src="/images/web-site.png"
                                            alt="mail"
                                            width={14}
                                            height={14}
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className={`${style.address}`}>
                                        <strong>Website:</strong> examplefinancer.com
                                    </p>
                                </div>

                            </div>
                        </div>

                        <p className={`${style.summary}`}>
                            Summary of financer goes here.
                        </p>

                        {/* Ready to Apply Box */}
                        <div className="bg-white shadow-lg rounded-2xl p-5 border border-gray-100 mt-4">
                            <h3 className={`${style.applyTitle}`}>
                                Ready To Apply?
                            </h3>
                            <p className={`${style.applysubTitle}`}>
                                Apply for financing with Financer Name or proceed to our general application.
                            </p>
                            <div className='mt-[30px]'>
                                <ApplicationButton
                                    title="Apply With Financer Name"
                                    href="/financing/form?form-Id=1"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FinancerDetails
