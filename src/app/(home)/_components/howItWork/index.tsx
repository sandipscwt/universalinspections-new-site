import Container from '@/components/container';
import type { NextPage } from 'next';
import Image from 'next/image';
import style from "./style.module.css";

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
        <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-[clamp(28px,4vw,38px)] font-bold text-[#2A2D34]">
                How It Works
            </h2>
            <p className="text-[#2C3037] text-[clamp(12px,4vw,16px)] mt-[clamp(10px,4vw,16px)]">
                Contact us to book a convenient time for your automotive or RV inspection. Our certified inspectors will conduct a thorough evaluation, covering all major components. You will receive a detailed report highlighting any issues or potential concerns. We’ll provide the documentation needed to ensure you know everything about your vehicle, giving you peace of mind on your investment.
            </p>
        </div>

        {/* Image and Steps */}
        <div className="max-w-6xl mx-auto pt-[30px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">

            {/* Left Image Section */}
            <div className="w-full flex justify-center">
                <Image
                    src="/images/work_bg.png"
                    alt="Mechanic with car lift"
                    width={705}
                    height={537}
                    className="object-contain w-full max-w-md md:max-w-full"
                />
            </div>

            {/* Right Steps Section */}
            <div className={`space-y-4 ${style.customWrapper}`}>
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={`flex items-center space-x-4 border rounded px-4 py-5 hover:shadow-md transition-shadow cursor-pointer w-full sm:max-w-sm md:max-w-md lg:max-w-lg`}
                    >
                        <div>
                            <Image
                                src={step.icon}
                                alt={step.title}
                                width={step.id === 1 ? 24 : 40}
                                height={step.id === 1 ? 24 : 40}
                                className="object-cover"
                            />
                        </div>
                        <p className="text-[clamp(16px,4vw,22px)] font-glacial-bold text-[#2A2D34]">{step.title}</p>
                    </div>
                ))}
            </div>

        </div>

    </Container>
</section>

    );
};

export default HowItWorks;
