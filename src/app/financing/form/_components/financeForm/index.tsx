"use client";
import React, { useState } from 'react'
import style from './style.module.css'
import Container from '@/components/container';
import InputfileComponent from '@/components/formFields/InputfileComponent';
import CustomSelect from '@/components/formFields/CustomSelect';
import TextArea from '@/components/formFields/TextArea';
import { FormButton } from '@/components/layout/button';
import { MdCheck } from 'react-icons/md';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { MapPin, RefreshCcw } from "lucide-react";
import Link from 'next/link';

const FinanceForm = () => {
    const [message, setMessage] = useState('');
    const [error] = useState(false);
    const searchParams = useSearchParams();
    const financerId = searchParams.get('form-Id');

    const stateOptions = [
        { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
        { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
        { value: 'Assam', label: 'Assam' },
        { value: 'Bihar', label: 'Bihar' },
        { value: 'Chhattisgarh', label: 'Chhattisgarh' },
        { value: 'Goa', label: 'Goa' },
        { value: 'Gujarat', label: 'Gujarat' },
        { value: 'Haryana', label: 'Haryana' },
        { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
        { value: 'Jharkhand', label: 'Jharkhand' },
        { value: 'Karnataka', label: 'Karnataka' },
        { value: 'Kerala', label: 'Kerala' },
        { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
        { value: 'Maharashtra', label: 'Maharashtra' },
        { value: 'Manipur', label: 'Manipur' },
        { value: 'Meghalaya', label: 'Meghalaya' },
        { value: 'Mizoram', label: 'Mizoram' },
        { value: 'Nagaland', label: 'Nagaland' },
        { value: 'Odisha', label: 'Odisha' },
        { value: 'Punjab', label: 'Punjab' },
        { value: 'Rajasthan', label: 'Rajasthan' },
        { value: 'Sikkim', label: 'Sikkim' },
        { value: 'Tamil Nadu', label: 'Tamil Nadu' },
        { value: 'Telangana', label: 'Telangana' },
        { value: 'Tripura', label: 'Tripura' },
        { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
        { value: 'Uttarakhand', label: 'Uttarakhand' },
        { value: 'West Bengal', label: 'West Bengal' },
        { value: 'Andaman and Nicobar Islands', label: 'Andaman and Nicobar Islands' },
        { value: 'Chandigarh', label: 'Chandigarh' },
        { value: 'Dadra and Nagar Haveli and Daman and Diu', label: 'Dadra and Nagar Haveli and Daman and Diu' },
        { value: 'Delhi', label: 'Delhi' },
        { value: 'Jammu and Kashmir', label: 'Jammu and Kashmir' },
        { value: 'Ladakh', label: 'Ladakh' },
        { value: 'Lakshadweep', label: 'Lakshadweep' },
        { value: 'Puducherry', label: 'Puducherry' }
    ];

    const benefits = [
        "Competitive interest rates",
        "Flexible loan terms",
        "Quick approval process",
        "Expert financial guidance",
        "Multiple lender options",
    ];


    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>

            <h2 className={`${style.contenttitle}`}>
                Finaacing Application
            </h2>
            <Container>
                <div className="flex  flex-col lg:flex-row lg:items-start gap-[30px]">
                    {/* Left Section */}
                    <form className="w-full lg:w-[70%] bg-white border border-[#f1e4b3] rounded-lg pb-[50px] p-6 shadow-sm">
                        {financerId && (
                            <div className="bg-white shadow-lg mb-5 rounded-2xl p-5 border border-gray-100 ">
                                <div className="relative flex flex-col p-4 md:p-6 rounded-lg">
                                    {/* Financer Info */}
                                    <div>
                                        <h3 className={`${style.applyTitle}`}>Financer Name</h3>

                                        <div className="mt-[10px] space-y-[18px]">
                                            <div className="flex items-start space-x-2">
                                                <div className="px-1 py-1 rounded bg-[#DAA628]">
                                                    <MapPin className="w-4 h-4 text-[#2A2D34]" />
                                                </div>
                                                <p className={`${style.address}`}>
                                                    <strong>Address:</strong> 123 Main St, Birmingham, Alabama 35242
                                                </p>
                                            </div>

                                            <div className="flex items-start space-x-2">
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

                                            <div className="flex items-start space-x-2">
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

                                            <div className="flex items-start space-x-2">
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

                                    {/* Change Partner Button */}
                                    <Link
                                        href="/financing"
                                        className="absolute top-5 sm:top-3 lg:top-4 right-0 sm:right-2 lg:right-4 
             flex items-center justify-center gap-[2px] sm:gap-1 md:gap-2 
             border border-[#DAA628] bg-[#DAA628] text-black rounded-md 
             transition-all duration-300 hover:bg-[#BD632F] hover:text-white 
             px-1.5 sm:px-3 md:px-4 
             py-[2px] sm:py-[4px] md:py-[6px] 
             h-[22px] sm:h-[34px] md:h-[40px] lg:h-[40px]
             text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]
             font-glacial-regular shadow-md"
                                    >
                                        <RefreshCcw className="w-[10px] h-[10px] sm:w-[14px] sm:h-[14px] md:w-[18px] md:h-[18px]" />
                                        <span className="whitespace-nowrap">Change Partner</span>
                                    </Link>
                                </div>



                            </div>
                        )}


                        <h3
                            className={`text-[clamp(18px,4vw,24px)] w-[100%] lg:w-[80%]  leading-1.2 text-[#DAA628] prompt-bold mb-[clamp(20px,4vw,30px)]`}
                        >
                            Vehicle Information
                        </h3>


                        <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
                            <InputfileComponent
                                placeholder="Vehicle Year"
                                required
                            />

                            <InputfileComponent
                                placeholder="Vehicle Make *"
                                required
                            />
                            <InputfileComponent
                                placeholder="Vehicle Model *"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 mt-[20px] md:grid-cols-2 gap-4">
                            <InputfileComponent
                                placeholder="Mileage *"
                                required
                            />

                            <InputfileComponent
                                placeholder="Vehicle Price *"
                                required
                            />

                        </div>


                        <div className=" mt-[20px]">
                            <InputfileComponent
                                placeholder="VIN"
                                required
                            />
                        </div>

                        <div className=" mt-[20px]">
                            <CustomSelect
                                options={stateOptions}
                                // value={formData.shareOption}
                                // onChange={handleSelectChange('shareOption')}
                                placeholder="Vehicle Condition"
                            />
                        </div>


                        <h3
                            className={`text-[clamp(18px,4vw,24px)] w-[100%] lg:w-[80%]  leading-1.2 text-[#DAA628] prompt-bold mt-[clamp(20px,4vw,30px)] `}
                        >
                            Personal Information
                        </h3>
                        <div className="grid grid-cols-1 mt-[clamp(20px,4vw,30px)] md:grid-cols-2 gap-4">
                            <InputfileComponent
                                placeholder="First Name *"
                                required
                            />

                            <InputfileComponent
                                placeholder="Last Name *"
                                required
                            />

                        </div>

                        <div className="grid grid-cols-1  mt-[20px] md:grid-cols-2 gap-4">
                            <InputfileComponent
                                placeholder="Email Address *"
                                required
                            />

                            <InputfileComponent
                                placeholder="Contact Number *"
                                required
                            />

                        </div>

                        <h3
                            className={`text-[clamp(18px,4vw,24px)] mt-[clamp(20px,4vw,30px)] w-[100%] lg:w-[80%]  leading-1.2 text-[#DAA628] prompt-bold `}
                        >
                            Address Information
                        </h3>
                        <div className=" mt-[20px]">
                            <InputfileComponent
                                placeholder="Street Address *"
                                required
                            />
                        </div>
                        {/* city state pin---- */}
                        <div className="grid grid-cols-1 mt-[20px]  md:grid-cols-3 gap-4">
                            <InputfileComponent
                                placeholder="City *"
                                required
                            />

                            <InputfileComponent
                                placeholder="State*"
                                required
                            />

                            <InputfileComponent
                                placeholder="ZIP Code *"
                                required
                            />
                        </div>

                        <h3
                            className={`text-[clamp(18px,4vw,24px)] mt-[clamp(20px,4vw,30px)] w-[100%] lg:w-[80%]  leading-1.2 text-[#DAA628] prompt-bold `}
                        >
                            Employment Information
                        </h3>

                        <div className="grid grid-cols-1 mt-[20px]  md:grid-cols-2 gap-4">
                            <InputfileComponent
                                placeholder="Employment Status *"
                                required
                            />

                            <InputfileComponent
                                placeholder="Annual Income *"
                                required
                            />

                        </div>

                        <h3
                            className={`text-[clamp(18px,4vw,24px)] mt-[clamp(20px,4vw,30px)] w-[100%] lg:w-[80%]  leading-1.2 text-[#DAA628] prompt-bold `}
                        >
                            Financing Information
                        </h3>

                        <div className="grid grid-cols-1 mt-[20px]  md:grid-cols-2 gap-4">
                            <InputfileComponent
                                placeholder="Down Payment Amount"
                                required
                            />

                            <InputfileComponent
                                placeholder="Preferred Loan Term"
                                required
                            />

                        </div>

                        <div className=" mt-[clamp(20px,4vw,30px)] ">
                            <TextArea
                                placeholder="Additional Comments"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                error={error}
                            />
                        </div>

                        <div className="p-0 mt-[clamp(20px,4vw,30px)] flex items-start">
                            <FormButton title="Submit" />
                        </div>

                    </form>

                    {/* Right Section */}
                    <div className="w-full lg:w-[30%] bg-white border border-[#f1e4b3] rounded-lg p-6 shadow-sm self-start">
                        <div className="">

                            <div className="space-y-4">
                                <p className={`${style.comTitle} mb-[20px]`}>Quick & Easy Financing</p>

                                <ul className="space-y-2">
                                    {benefits.map((item, index) => (
                                        <li key={index}
                                            className={`${style.vahical_name} ] flex items-start space-x-2`}>
                                            <MdCheck className="text-[#BD632F] mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className=" gap-2 mt-[00px] mb-3">
                                    <p className='relative'>
                                        <span className={`${style.vahical_name}`}>
                                            {`Our financial experts will review your application and connect you with the best financing options available. You&apos;ll hear back from us within 24 hours.`}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section >
    )
}

export default FinanceForm