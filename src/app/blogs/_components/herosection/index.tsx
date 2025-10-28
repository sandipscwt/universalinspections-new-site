import React from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import Breadcrumbs from "@/components/layout/breadcrumbs";

interface HeroSectionProps {
  data: {
    banner_image: string;
    file_type: string | null;
    banner_heading: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  if (!data) {
    return (
      <section className="w-full py-20 text-center text-gray-500">
        Loading hero section...
      </section>
    );
  }

  // ✅ Helper to get full image URL
  const getFullImageUrl = (path: string) => {
    if (!path) return "/images/blog/blog_bg.png"; // fallback local image
    if (path.startsWith("http")) return path;
    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
  };

  return (
    <section className={`relative w-full bg-contain bg-center ${style.heroSection}`}>
      {/* ✅ Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={getFullImageUrl(data.banner_image)}
          alt={data.banner_heading || "Blog"}
          className="object-cover w-full h-full"
        />
      </div>

      <Container>
        {/* ✅ Foreground content */}
        <div
          className={`relative ${style.heroContent} z-10 flex flex-col items-start justify-center text-white`}
        >
          <h1 className="text-[clamp(32px,4vw,58px)] prompt-bold !leading-[clamp(30px,5vw,68px)] sm:leading-snug md:leading-normal">
            {data.banner_heading || "Blog"}
          </h1>

          {/* ✅ Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: data.banner_heading || "Blog" },
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
