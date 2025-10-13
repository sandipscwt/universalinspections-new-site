import Container from '@/components/container';
import type { NextPage } from 'next';
import Image from 'next/image';
import CustomButton from '@/components/layout/customButton';

const steps = [
    { id: 1, title: "Schedule Your Inspection", description: "" },
    { id: 2, title: "Get A Professional Evaluation", description: "" },
    { id: 3, title: "Receive a Comprehensive Report", description: "" },
    { id: 4, title: "Make Informed Decision About Your Purchase", description: "" },
];

const ScheduleInspectionSection: NextPage = () => {
    return (
        <section className='bg-white  py-[clamp(30px,4vw,100px)]'>
            <Container>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Side - Text and Cards */}
                    <div>
                        <h2 className="font-glacial-bold
                           text-[clamp(28px,4vw,38px)]  text-[#2A2D34] w-[100%] lg:w-[90%] leading-[clamp(30px,4vw,48px)]">Schedule Your Inspection with Ease</h2>

                        <p className="text-[#2A2D34] text-[clamp(12px,4vw,16)] mt-[clamp(10px,4vw,20px)] font-light mb-8 font-glacial-regular">
                            Universal Inspections offers a comprehensive range of services to ensure your vehicle is safe, reliable, and ready for any adventure. From cars and RVs to boats and motorcycles, our expert team provides detailed inspections and expert advice. We prioritize speed and efficiency, delivering 48-hour turnaround times and peace of mind. Our services also extend to extended warranty evaluations and insurance claim assistance, making us your one-stop shop for all your vehicle inspection needs.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {steps.map((step) => (

                                <div key={step.id} className="relative border border-[#DAA6284D] rounded-[8px]  p-4 hover:shadow-md transition-shadow overflow-hidden">

                                    <div className="absolute bottom-[0px] transform right-0 text-[clamp(35px,4vw,68px)] prompt-bold text-[#DAA6281A] pointer-events-none select-none z-0 leading-[80%]">
                                        {step.id.toString().padStart(2, '0')}
                                    </div>


                                    <div className="flex items-start space-x-4 relative z-10">
                                        <div className="w-max">
                                            <div className="!w-[15px] !h-[15px] bg-[#BD632F] rounded-[3px] mt-1"></div>
                                        </div>

                                        <div>
                                            <p className="text-[clamp(12px,4vw,16px)] w-[100%] sm:w-[90%] lg:w-[95%]  text-[#203740] font-glacial-bold">
                                                {step.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>

                        <div className="mt-[30px]">
                            <CustomButton title="Book an Inspection Today!" href="/bookInspection" />
                        </div>
                    </div>

                    {/* Right Side - Images */}
                    <div>
                        <div className="w-full h-auto ">
                            <div className="relative w-full  h-auto">
                                <Image
                                    src="/images/services/schudle_img.png"
                                    alt="schudle inspection"
                                    layout="responsive"
                                    width={556}
                                    height={641}
                                    className="object-cover relative"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ScheduleInspectionSection;
