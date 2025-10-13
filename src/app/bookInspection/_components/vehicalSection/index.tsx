import Container from '@/components/container'
import React from 'react'
import style from './style.module.css'
import Image from 'next/image'

const VehicalSection = () => {

    const services = [
        {
            title: 'Standard / Exotic / Classic',
            icon: '/images/bookInspection/Classic.png',
            color: 'text-[#DAA628]',
        },
        {
            title: 'Commercial / Farm / Semi-truck',
            icon: '/images/bookInspection/commercial.png',
            color: 'text-[#DAA628]',
        },
        {
            title: 'Motorcycles',
            icon: '/images/bookInspection/motorcycles.png',
            color: 'text-[#DAA628]',
        },
        {
            title: 'Recreational Vehicle',
            icon: '/images/bookInspection/recreational.png',
            color: 'text-[#DAA628]',
        },
        {
            title: 'Marine',
            icon: '/images/bookInspection/marine.png',
            color: 'text-[#DAA628]',
        },
        {
            title: 'RV / Motorhome',
            icon: '/images/bookInspection/rv.png',
            color: 'text-[#DAA628]',
        },
    ];

    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>
                <div className={`${style.titleContainer}`}>
                    <h2>Vehicle to be inspected</h2>
                    <p>Vehicle Type</p>
                </div>

                <div className={`grid grid-cols-1  sm:grid-cols-2 mt-[clamp(20px,4vw,30px)] lg:grid-cols-3 gap-[clamp(20px,4vw,30px)] ${style.customBoxWrapper}`}>
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group  bg-white justify-stretch cursor-pointer rounded-lg shadow-sm border border-[#DAA6284D] transition hover:bg-[#BD632F] hover:shadow-md flex flex-col gap-[20px] py-[20px] px-[20px] min-h-[166px] items-stretch h-[100%]"
                        >
                            <div className={`${style.boxicon}`}>
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    fill
                                    // width={62}
                                    // height={62}
                                    className=" w-[100%] h-[100%] absolute
                                    object-contain object-left  group-hover:invert brightness-0 group-hover:brightness-0 group-hover:contrast-200"
                                />
                            </div>
                            <h3
                                className={`text-[clamp(18px,4vw,24px)] w-[100%] lg:w-[80%]  leading-1.2 text-[#DAA628] prompt-bold  ${service.color} group-hover:text-white`}
                            >
                                {service.title}
                            </h3>


                        </div>


                    ))}
                </div>

            </Container>
        </section>
    )
}

export default VehicalSection