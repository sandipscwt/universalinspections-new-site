"use client";

import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css";

interface HowItWorksStep {
  image: string;
  text: string;
}

interface HowItWorksData {
  how_it_works_heading: string;
  how_it_works_content: string;
  how_it_works_image: string;
  how_it_works_steps: HowItWorksStep[];
}

interface Props {
  data: HowItWorksData;
}

const HowItWorksSection: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  const getFullImageUrl = (path: string) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    if (path.startsWith("/")) return path;
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
  };

  return (
    <section className="bg-[#F8F8F8] pt-[clamp(30px,4vw,80px)]">
      <Container>
        {/* Header */}
        <div className="mx-auto text-center">
          <h2 className={style.title}>{data.how_it_works_heading}</h2>
          <p
            className={`lg:w-[95%] ${style.stbTitle}`}
            dangerouslySetInnerHTML={{ __html: data.how_it_works_content }}
          />
        </div>

        {/* Image and Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Image Section */}
          <div
            className={`relative left-0 lg:top-[-10px] h-[480px] w-full lg:left-[-95px] lg:w-[600px] lg:h-[480px] flex justify-center ${style.section_img}`}
          >
            <Image
              src={getFullImageUrl(data.how_it_works_image)}
              alt="How It Works"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Right Steps Section */}
          <div
            className={`lg:space-y-6 md:space-y-4 space-y-2 items-start ${style.customWrapper}`}
          >
            {data.how_it_works_steps?.map((step, index) => (
              <div
                key={index}
                className="flex bg-white items-center space-x-4 border border-[#DAA6284D] rounded-[8px] px-5 py-[22px] hover:shadow-md transition-shadow cursor-pointer"
              >
                <Link href="/bookInspection" className="flex gap-4">
                  <div className="relative h-[28px] w-[28px]">
                    <Image
                      src={getFullImageUrl(step.image)}
                      alt={step.text}
                      fill
                      className="object-contain absolute"
                      unoptimized
                    />
                  </div>
                  <p className={style.stepTitle}>{step.text}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
