import React from 'react';
import style from './style.module.css';
import Container from '@/components/container';
import Image from 'next/image';
import ApplicationButton from '@/components/layout/applicationButton';

function FinancingSection() {
    const financingPartners = [
        { id: 1, name: "Burvejohn, M.", rating: "5.6 mba" },
        { id: 2, name: "Burvejohn, M.", rating: "5.6 mba" },
        { id: 3, name: "Burvejohn, M.", rating: "5.6 mba" },
        { id: 4, name: "Burvejohn, M.", rating: "5.6 mba" }
    ];

    return (
        <section className="bg-white">

            <div className="flex flex-col lg:flex-row w-full">
                {/* LEFT SECTION */}
                <div className={`${style.leftSection} lg:w-[65%] lg:pt-[108px] lg:pb-[76px] text-center lg:text-left`}>
                    <div className={`${style.yellowContainer} px-6 sm:px-10 md:px-14`}>
                        <h2>
                            Find Financing Partners Near You
                        </h2>
                        <p>
                            Enter at least 4 digits of your zip code, then click on a city from the suggestions
                        </p>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className={`${style.rightSection} w-full lg:w-[35%] pt-[60px] lg:pt-[108px] lg:pb-[76px] flex-col items-center`}>
                    {/* ZIP CODE INPUT */}
                    <input
                        type="text"
                        placeholder="Enter Zip Code (4+ digits)"
                        className={`${style.zipInput}`}
                    />

                    {/* CHECKBOXES */}
                    <div className={`${style.checkboxContainer} sm:flex-row gap-4 sm:gap-[20px]`}>
                        <label className="flex items-center space-x-2 text-white cursor-pointer">
                            <input
                                type="checkbox"
                                defaultChecked
                                className="w-[19px] h-[19px] accent-[#ffffff] rounded-[5px] border border-[#4E7766] cursor-pointer"
                            />
                            <span className="text-[clamp(14px,3vw,16px)]">Repairs</span>
                        </label>

                        <label className="flex items-center space-x-2 text-white cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-[19px] h-[19px] accent-[#ffffff] rounded-[5px] border border-[#4E7766] cursor-pointer"
                            />
                            <span className="text-[clamp(14px,3vw,16px)]">Dealers</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* FINANCING PARTNERS GRID SECTION */}
            <div className={`bg-[#ffffff] pb-[30px] md:pb-[4vw] lg:pb-[100px]`}>
                <Container className={`${style.financeCard}`}>
                    {/* Section Header */}
                    <div className="items-center flex justify-center">
                        <h3 className={`${style.financeTitle}`}>
                            Found {financingPartners.length} Financing Partners near 9000
                        </h3>

                    </div>

                    {/* Partners Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-6 sm:px-8 lg:px-0">
                        {financingPartners.map((partner) => (
                            <div
                                key={partner.id}
                                className="bg-white border border-gray-200 rounded-lg px-[20px] py-[clamp(20px,4vw,40px)]  hover:shadow-md transition-all duration-300"
                            >
                                <div>
                                    <div className={'flex flex-row'}>
                                        <div>
                                            <Image
                                                src="/images/finance/financeName.png"
                                                alt="Finance Company"
                                                height={18}
                                                width={19}
                                                className="object-cover"
                                            />
                                        </div>
                                        <h4 className={`${style.Financercom}`}>Financer Name</h4>
                                    </div>

                                    <div className={'flex flex-row mt-[18px]'}>
                                        <div>
                                            <Image
                                                src="/images/finance/location.png"
                                                alt="Finance Company"
                                                height={18}
                                                width={13}
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className={`${style.location}`}>Birmingham, AL • 5.6 miles</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </Container>
                <div className={`${style.bottom}`}>
                    <p>Select a financing partner above to view their details, or</p>
                    <div className="p-0 mt-[30px] flex items-center justify-center">
                        <ApplicationButton title="Proceed to General Application" 
                        href="/financing/form"
                         />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FinancingSection;