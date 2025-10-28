"use client";

import Container from '@/components/container';
import React from 'react';
import style from "./style.module.css";
import CustomButton from '@/components/layout/customButton';

interface Step {
  id: number;
  title: string;
  description?: string;
}

interface ScheduleInspectionData {
  heading: string;
  content: string;
  image: string;
  steps: Step[];
  button_text: string;
}

interface Props {
  data: ScheduleInspectionData;
}

const ScheduleInspectionSection: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  const getFullImageUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  if (path.startsWith("/")) return path;
  return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
};

const steps = [
    { id: 1, title: "Schedule Your Inspection", description: "" },
    { id: 2, title: "Get A Professional Evaluation", description: "" },
    { id: 3, title: "Receive a Comprehensive Report", description: "" },
    { id: 4, title: "Make Informed Decision About Your Purchase", description: "" },
];


  return (
    <section className='bg-[#FFFFFF] py-[clamp(30px,4vw,100px)]'>
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text and Cards */}
          <div>
            <h2 className={`${style.title} w-[100%] lg:w-[90%]`}>{data.heading}</h2>

            <p className={`${style.subTitle}`} dangerouslySetInnerHTML={{ __html: data.content }} />

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {data.steps.length
                ? data.steps.map((step, index) => (
                    <div key={index} className={`${style.scheduleBox} hover:shadow-sm transition-shadow overflow-hidden`}>
                      <div className={`${style.scheduleId} pointer-events-none select-none z-0 leading-[80%] transform`}>
                        {(index + 1).toString().padStart(2, '0')}
                      </div>

                      <div className="flex items-start space-x-4 relative z-10">
                        <div className="w-max">
                          <div className="!w-[15px] !h-[15px] bg-[#BD632F] rounded-[3px] mt-1"></div>
                        </div>

                        <div>
                          <p className="text-[clamp(12px,4vw,16px)] w-[100%] sm:w-[90%] lg:w-[95%] text-[#203740] font-glacial-bold">
                            {step.title}
                          </p>
                          {step.description && (
                            <p className="text-[clamp(10px,3vw,14px)] text-[#4A4A4A] mt-1">
                              {step.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div> */}

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {steps.map((step) => (

                                <div key={step.id} className={`${style.scheduleBox} hover:shadow-sm transition-shadow overflow-hidden  `}>

                                    <div className={`${style.scheduleId} pointer-events-none select-none z-0 leading-[80%] transform`}>
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
              <CustomButton title={data.button_text || "Book an Inspection Today!"} href="/bookInspection" />
            </div>
          </div>

          <div>
            {data.image && (
              <div className="w-full h-auto relative">
                <img
                  src={getFullImageUrl(data.image)}
                  alt="Schedule Inspection"
                  width={556}
                  height={641}
                  className="object-cover relative"
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ScheduleInspectionSection;
