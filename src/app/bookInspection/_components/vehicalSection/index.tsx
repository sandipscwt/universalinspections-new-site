import Container from '@/components/container'
import React, { useState } from 'react'
import style from './style.module.css'
import Image from 'next/image'

interface VehicalSectionProps {
    setSelectVehical: (value: string) => void;
}

const VehicalSection: React.FC<VehicalSectionProps> = ({ setSelectVehical }) => {
    const [selecctBox, setSelectBox] = useState(0)

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
                        <button
                            id={`idx${idx}`}
                            key={idx}
                            onClick={() => {
                                setSelectVehical(service?.title)
                                setSelectBox(idx)
                            }}
                            className={`group justify-stretch cursor-pointer rounded-lg shadow-sm border border-[#DAA6284D] transition flex flex-col gap-[20px] py-[20px] px-[20px] min-h-[166px] items-stretch h-[100%] 
      ${selecctBox === idx ? "bg-[#BD632F] text-white shadow-md" : "bg-white hover:bg-[#BD632F] hover:text-white hover:shadow-md"}
    `}
                        >

                            <div className={`${style.boxicon}`}>
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    fill
                                    className=" w-[100%] h-[100%] absolute
                                    object-contain object-left  group-hover:invert brightness-0 group-hover:brightness-0 group-hover:contrast-200"
                                />
                            </div>
                            <h3
                                className={`text-[clamp(18px,4vw,24px)] w-[100%] lg:w-[80%]  leading-1.2 text-[#DAA628] prompt-bold text-start  ${service.color} group-hover:text-white`}
                            >
                                {service.title}
                            </h3>
                        </button>
                    ))}
                </div>

            </Container>
        </section>
    )
}

export default VehicalSection