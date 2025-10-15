"use client";
import Container from '@/components/container'
import React, { useState } from 'react'
import style from './style.module.css'
import Image from 'next/image'
import InputfileComponent from '@/components/formFields/InputfileComponent'
import TextArea from '@/components/formFields/TextArea'
import { HiOutlineCalendar } from "react-icons/hi2";
import CheckBox from '@/components/formFields/CheckBox';
import Button from '@/components/layout/button';
import HtmlRender from '@/components/HtmlRender';
import CustomSelect from '@/components/formFields/CustomSelect';
import { vahicalservices } from './data';
import Link from 'next/link';

interface InspectedFormProps {
    vehicalType: string;
}

const InspectedForm: React.FC<InspectedFormProps> = ({ vehicalType }) => {
    const [message, setMessage] = useState('');
    const [error] = useState(false);

    const getdata = vahicalservices.find((it) => it.title.toLowerCase() == vehicalType.toLowerCase())

    const [selectAddOn, setSelectAddOn] = useState<{ [key: string]: boolean }>({
        carfax1: false,
        carfax2: false,
    });

    const addonList = [
        { id: "carfax1", label: "$59.95 - CARFAX Vehicle History Report" },
        { id: "carfax2", label: "$49.99 - Verbal Vehicle Assessment Report" },
    ];

    const handleToggle = (key: string) => {
        setSelectAddOn((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const shareOptions = [
        { value: 'Class A Motorhome', label: 'Class A Motorhome' },
        { value: 'Class B Motorhome', label: 'Class B Motorhome' },
        { value: 'Class C Motorhome', label: 'Class C Motorhome' },
        { value: 'Class D Motorhome', label: 'Class D Motorhome' },
        { value: 'Class E Motorhome', label: 'Class E Motorhome' },
        { value: 'Class F Motorhome', label: 'Class F Motorhome' },
    ];

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



    const [selected, setSelected] = useState<{ [key: string]: boolean }>({
        carfax1: false,
        carfax2: false,
    });

    const handleChange = (key: string) => {
        setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>

                <div className="flex flex-col lg:flex-row lg:items-start gap-[30px]">
                    {/* Left Section */}
                    <form className="w-full lg:w-[70%] bg-white border border-[#f1e4b3] rounded-lg pb-[50px] p-6 shadow-sm">
                        <h3
                            className={`text-[clamp(18px,4vw,24px)] w-[100%] lg:w-[80%]  leading-1.2 text-[#DAA628] prompt-bold mb-[clamp(20px,4vw,30px)]`}
                        >
                            Vahical Form
                        </h3>
                        {vehicalType === "RV / Motorhome" && (
                            <div className=" mb-[20PX]">
                                <CustomSelect
                                    options={shareOptions}
                                    // value={formData.shareOption}
                                    // onChange={handleSelectChange('shareOption')}
                                    placeholder="Select RV Type *"
                                />
                            </div>
                        )}

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
                                placeholder="Dealership Name (if applicable)"
                                required
                            />

                            <InputfileComponent
                                placeholder="Dealer Contact Name (if applicable)"
                                required
                            />

                        </div>

                        <div className="grid grid-cols-1 mt-[20px] md:grid-cols-2 gap-4">
                            <InputfileComponent
                                placeholder="Inidividual Seller's Name (if applicable)"
                                required
                            />

                            <InputfileComponent
                                placeholder="individual Seller’s Phone (if any)"
                                required
                            />
                        </div>

                        <div className=" mt-[20px]">
                            <InputfileComponent
                                placeholder="Vehicle Address *"
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
                                placeholder="ZIP Code *"
                                required
                            />
                            <CustomSelect
                                options={stateOptions}
                                // value={formData.shareOption}
                                // onChange={handleSelectChange('shareOption')}
                                placeholder="Select State *"
                            />
                        </div>

                        {/* VIN---- */}

                        <div className=" mt-[20px]">
                            <InputfileComponent
                                placeholder="VIN"
                                required
                            />
                        </div>

                        <h3
                            className={`text-[clamp(18px,4vw,24px)] mt-[clamp(20px,4vw,30px)] w-[100%] lg:w-[80%]  leading-1.2 text-[#DAA628] prompt-bold `}
                        >
                            Inspection Information
                        </h3>
                        <div className=" mt-[clamp(20px,4vw,30px)] ">
                            <TextArea
                                placeholder="Reason for Inspection"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                error={error}
                            />
                        </div>
                        <div className=" mt-[20px] ">
                            <TextArea
                                placeholder="Additional Information"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                error={error}
                            />
                        </div>

                        <div className="grid grid-cols-1 mt-[20px] md:grid-cols-2 gap-4">
                            <InputfileComponent
                                placeholder="Preferred Inspection Date *"
                                required
                                icon={<HiOutlineCalendar className="text-[#273E47]" />}
                            />
                        </div>


                        <div className="relative flex flex-col sm:flex-row items-center bg-white border border-[#2A2D3461] rounded-md shadow-sm h-auto sm:h-[45px] mt-[20px] p-3 sm:p-0">
                            {addonList.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center w-full sm:w-1/2 justify-start sm:justify-start sm:items-start lg:pl-3"
                                >
                                    <CheckBox
                                        label={item.label}
                                        checked={selectAddOn[item.id]}
                                        onChange={() => handleToggle(item.id)}
                                    />
                                </div>
                            ))}
                        </div>

                        <h3
                            className={`text-[clamp(18px,4vw,24px)] w-[100%] lg:w-[80%]  leading-1.2 text-[#DAA628] prompt-bold mt-[clamp(20px,4vw,30px)] `}
                        >
                            Buyer Information
                        </h3>
                        <div className="grid grid-cols-1 mt-[clamp(20px,4vw,30px)] md:grid-cols-3 gap-4">
                            <InputfileComponent
                                placeholder="First Name *"
                                required
                            />

                            <InputfileComponent
                                placeholder="Last Name *"
                                required
                            />
                            <InputfileComponent
                                placeholder="Email Address *"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1  mt-[20px] md:grid-cols-2 gap-4">
                            <InputfileComponent
                                placeholder="Contact Number *"
                                required
                            />

                            <InputfileComponent
                                placeholder="Credit Card Number *"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 mt-[20px] md:grid-cols-3 gap-4">
                            <InputfileComponent
                                placeholder="Month Year *"
                                required
                            />

                            <InputfileComponent
                                placeholder="CVV *"
                                required
                            />
                            <InputfileComponent
                                placeholder="Your Zip Code"
                                required
                            />
                        </div>

                        <div className='mt-[20px] w-full sm:w-[48%] bg-[#FFF2D34D] px-[8px] py-[13px] rounded-lg'>
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                                <div className="w-12 h-8 sm:w-16 sm:h-10">
                                    <Image
                                        src="/images/bookInspection/visa.png"
                                        alt="Visa"
                                        width={64}
                                        height={40}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div className="w-12 h-8 sm:w-16 sm:h-10">
                                    <Image
                                        src="/images/bookInspection/mastercard.png"
                                        alt="MasterCard"
                                        width={64}
                                        height={40}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div className="w-12 h-8 sm:w-16 sm:h-10">
                                    <Image
                                        src="/images/bookInspection/discover.png"
                                        alt="Discover"
                                        width={64}
                                        height={40}
                                        className="object-contain w-full h-full"
                                    />
                                </div>

                                <div className="w-12 h-8 sm:w-16 sm:h-10">
                                    <Image
                                        src="/images/bookInspection/aexpress.png"
                                        alt="American Express"
                                        width={64}
                                        height={40}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>


                        {/* Tearm & condition  Section */}
                        <h3
                            className={`text-[clamp(18px,4vw,24px)] w-[100%] lg:w-[80%]  leading-1.2 text-[#DAA628] prompt-bold mt-[clamp(20px,4vw,30px)] `}
                        >
                            Terms of Service
                        </h3>

                        <div className={`${style.terms_section}`}>
                            <div className={`${style.terms_container}`} >
                                <h3>Terms and Conditions for Universal Inspections</h3>
                                <p className={`${style.updated_date}`} >
                                    Last Updated: <strong>May 10, 2025</strong>
                                </p>

                                <div className={`${style.terms_content}`} >

                                    <p>
                                        Welcome to the website of Universal Inspections, located at
                                        <a href="https://www.universalinspections.com" target="_blank">
                                            www.universalinspections.com
                                        </a>
                                        (&quot;Website&quot;). These Terms and Conditions (the &quot;Terms&quot;) govern your
                                        use of our Website and our pre-purchase inspection services (the
                                        &quot;Services&quot;) in Alabama, Mississippi, and Tennessee.
                                    </p>

                                    <p>
                                        By accessing or using our Website or engaging our Services in these
                                        states, you agree to be bound by these Terms. If you do not agree to
                                        these Terms, please do not use our Website or our Services.
                                    </p>

                                    <h4>1. General Terms</h4>
                                    <ul>
                                        <li>Use the Website only for lawful purposes.</li>
                                        <li>Do not engage in any fraudulent or harmful activity.</li>
                                        <li>Respect all applicable laws and regulations.</li>
                                    </ul>

                                    <h4>2. Services</h4>
                                    <ol>
                                        <li>Service availability may vary by location.</li>
                                        <li>All inspection results are for informational purposes only.</li>
                                        <li>Universal Inspections reserves the right to modify Services.</li>
                                    </ol>

                                    <p>
                                        Please scroll to the bottom to accept the terms and conditions.
                                    </p>
                                </div>


                            </div>
                            <p className={`${style.scroll_note}`} >
                                Please scroll to the bottom to accept the terms and conditions
                            </p>
                        </div>

                        <div className="flex mt-[20px] items-center w-full  justify-center sm:justify-start px-2">
                            <CheckBox
                                label="I have READ and AGREE to the Terms and Conditions *"
                                checked={selected.carfax1}
                                onChange={() => handleChange('carfax1')}
                            />
                        </div>

                        <div className="flex mt-[20px] items-center w-full  justify-center sm:justify-start px-2">
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <div className='w-5 h-5'>
                                    <Image
                                        src="/images/bookInspection/secured.png"
                                        alt="Visa"
                                        width={24}
                                        height={28}
                                        className="object-contain w-full h-full"
                                    />
                                </div>

                            </div>
                            <p className={`${style.security}`}>Secured with industry-standard TLS encryption</p>
                        </div>
                        
                        <div className="p-0 mt-[clamp(20px,4vw,30px)] flex items-start">
                            <Button title="Submit" href="/book" />
                        </div>

                    </form>

                    {/* Right Section */}
                    <div className="w-full lg:w-[30%] bg-white border border-[#f1e4b3] rounded-lg p-6 shadow-sm self-start">
                        <div className="">
                            {/* Quote Card Header */}
                            <div className="flex justify-between items-start w-full h-auto mb-4">
                                <div className={`${style.rightSideimg} relative w-full  h-[210px]`}>
                                    <Image
                                        src={getdata?.icon ?? ""}
                                        alt="Driven Section"
                                        fill
                                        className="absolute object-cover w-full h-full object-center"
                                    />
                                </div>
                            </div>
                            {/* Quote Card Content */}
                            <div className="space-y-4">
                                <p className={`${style.comTitle}`}>Complete the form to get your quote!</p>
                                <div className="flex  mb-3">
                                    <span className={`${style.vahical_name}`}>{getdata?.title}</span>
                                </div>
                                <div className={`${style.vehicalcard_html}`}>
                                    <HtmlRender htmlString={`${getdata?.details}`} />
                                </div>

                                <div className=" gap-2 mb-3">
                                    <p className='relative'>
                                        <span className={`${style.vahical_name} ${style.vahicalinfo_name}`}>
                                            Quickest turn around times in the industry.
                                        </span>

                                        <Link href='/' className={`${style.infoimg}`}>
                                            <Image
                                                src="/images/bookInspection/info.png"
                                                alt="info"
                                                width={13}
                                                height={13}
                                                className="object-contain"
                                            />
                                        </Link>

                                    </p>
                                    
                                </div>

                                {Object.values(selectAddOn).some((val) => val) && (
                                    <div className={`${style.add_on} mb-3`}>
                                        <p className={`${style.vahical_name}`}>Add on :</p>

                                        {Object.entries(selectAddOn)
                                            .filter(([_, isSelected]) => isSelected)
                                            .map(([key]) => {
                                                const selectedItem = addonList.find((item) => item.id === key);
                                                return (
                                                    <span key={key} className={`${style.vahical_name} block`}>
                                                        {selectedItem?.label}
                                                    </span>
                                                );
                                            })}
                                    </div>
                                )}


                                <div className="flex  mb-6">
                                    <span className={`${style.vahical_name}`}>{getdata?.title}</span>
                                    <span className={`${style.vahical_price}`}> {getdata?.price}</span>
                                </div>


                                {/* Pricing Section */}
                                <div className="border-t border-[#DAA62894] pt-4">
                                    <div
                                        className={`${style.total}`}>
                                        {/* className="flex  text-black font-bold text-[17px] pt-3  "> */}
                                        <span>Total: {getdata?.price} + Mileage adjustment</span>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section >
    )
}

export default InspectedForm
