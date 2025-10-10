import Container from '@/components/container'
import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import InputfileComponent from '@/components/formFields/InputfileComponent'

const InspectedForm = () => {
    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>

                <div className="flex flex-col lg:flex-row lg:items-start gap-[30px]">
                    {/* Left Section */}
                    <div className="w-full lg:w-[70%] bg-white border border-[#f1e4b3] rounded-lg p-6 shadow-sm">
                            <h3
                                className={`text-[clamp(18px,4vw,24px)] w-[100%] lg:w-[80%]  leading-1.2 text-[#DAA628] prompt-bold   group-hover:text-white`}
                            >
                                Vahical Form
                            </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <InputfileComponent
                                placeholder="First Name"
                                required
                            />

                            <InputfileComponent
                                placeholder="Last Name"
                                required
                            />
                            <InputfileComponent
                                placeholder="Last Name"
                                required
                            />
                        </div>



                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-[30%] bg-white border border-[#f1e4b3] rounded-lg p-6 shadow-sm self-start">
                        <div className="">
                            {/* Quote Card Header */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="">
                                    <div className="w-full h-auto ">
                                        <div className="relative w-full  h-auto">
                                            <Image
                                                src="/images/bookInspection/vehical.png"
                                                alt="Driven Section"
                                                layout="responsive"
                                                width={316}
                                                height={210}
                                                className="object-cover relative"
                                            />
                                        </div>
                                    </div>



                                </div>

                            </div>

                            {/* Quote Card Content */}
                            <div className="space-y-4">
                                <p className={`${style.comTitle}`}>Complete the form to get your quote!</p>
                                <div className="flex  mb-3">
                                    <span className="text-gray-600">Standard / Exotic / Classic</span>
                                </div>
                                <div className="flex  mb-3">
                                    <span className="text-gray-600">Quickest turn around times in the industry.</span>
                                </div>
                                <div className="flex  mb-6">
                                    <span className="text-gray-600">Standard / Exotic / Classic:</span>
                                    <span className="font-semibold  text-black"> $149.95</span>
                                </div>


                                {/* Pricing Section */}
                                <div className="border-t border-[#DAA62894] pt-4">
                                    <div className="flex  text-black font-bold text-[17px] pt-3  ">
                                        <span>Total: $149.95 + Mileage adjustment</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default InspectedForm
