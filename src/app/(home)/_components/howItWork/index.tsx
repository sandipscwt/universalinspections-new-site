import Container from '@/components/container';
import type { NextPage } from 'next';
import Image from 'next/image';
import style from "./style.module.css";
import Link from 'next/link';

const steps = [
    {
        id: 1,
        title: "Choose Your Vehicle",
        icon: "/images/choose_vehicle.png",
    },
    {
        id: 2,
        title: "Choose What Service You Want",
        icon: "/images/choose_service.png",
    },
    {
        id: 3,
        title: "Schedule A Day",
        icon: "/images/choose_schedule.png",
    },
    {
        id: 4,
        title: "Submit your information",
        icon: "/images/submit_info.png",
    },
];

const HowItWorks: NextPage = () => {
    return (
        <section className="bg-[#F8F8F8] pt-[clamp(30px,4vw,80px)] ">
            <Container>

                {/* Header */}
                <div className=" mx-auto text-center ">
                    <h2 className={`${style.title}`}>
                        How It Works
                    </h2>
                    <p className={`lg:w-[95%] ${style.stbTitle}`} >
                        Contact us to book a convenient time for your automotive or RV inspection. Our certified inspectors will conduct a thorough evaluation, covering all major components. You will receive a detailed report highlighting any issues or potential concerns. We’ll provide the documentation needed to ensure you know everything about your vehicle, giving you peace of mind on your investment.
                    </p>
                </div>

                {/* Image and Steps */}
                <div className=" grid grid-cols-1 lg:grid-cols-2  ">

                    {/* Left Image Section */}
                    <div className={`relative left-0 lg:top-[-10px]  h-[480px] w-[100%] lg:left-[-95px] lg:w-[600px] lg:h-[480px] flex justify-center ${style.section_img}`}>
                        <Image
                            src="/images/work_bg.png"
                            alt="Mechanic with car lift"
                            fill
                            className="w-[100%] h-[100%] object-contain"
                        />
                    </div>

                    {/* Right Steps Section */}
                    <div className={`lg:space-y-6 md:space-y-4 space-y-2 items-start ${style.customWrapper}`}>
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`flex bg-white  items-center space-x-4 border border-[#DAA6284D] rounded-[8px] px-5 py-[22px] hover:shadow-md transition-shadow cursor-pointer `}
                            >
                                <Link className='flex gap gap-4' href={"/bookInspection"}>
                                    <div className="relative h-[28px] w-[28px]">
                                        <Image
                                            src={step.icon}
                                            alt={step.title}
                                            fill
                                            className="object-contain absolute "
                                        />
                                    </div>
                                    <p className={`${style.stepTitle}`}>{step.title}</p>

                                </Link>
                            </div>


                        ))}
                    </div>

                </div>
            </Container>
        </section>

    );
};

export default HowItWorks;
