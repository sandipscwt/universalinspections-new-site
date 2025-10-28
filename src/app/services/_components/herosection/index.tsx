
import React from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import Breadcrumbs from "@/components/layout/breadcrumbs";
import Image from "next/image";

interface HeroSectionProps {
  data: {
    banner_image: string | null;
    file_type: "image" | "video";
    banner_heading: string | null;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {

  const getFullMediaUrl = (path: string | null) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    if (path.startsWith("/")) return path; 
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
  };

  const backgroundUrl = getFullMediaUrl(data.banner_image);

  return (
    <section
      className={`relative w-full bg-contain bg-center ${style.heroSection}`}
    >
      <div className="absolute inset-0 z-0">

          <Image
            src={backgroundUrl ?  backgroundUrl :"/images/services/services_bg.png"}
            alt="Banner background"
            fill
            className="object-cover"
            priority
            unoptimized
          />

      </div>

      <Container>
        {/* Content */}
        <div
          className={`relative ${style.heroContent} z-10 flex flex-col items-start justify-center text-white`}
        >
          <h1 className="text-[clamp(32px,4vw,58px)] prompt-bold !leading-[clamp(30px,5vw,68px)] sm:leading-snug md:leading-normal">
            {data.banner_heading || "Services"}
          </h1>

          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: data.banner_heading || "Services" },
            ]}
            separator=">"
            className="mt-2 text-[clamp(14px,2vw,18px)] font-glacial-regular"
          />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
