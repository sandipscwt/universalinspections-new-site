import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import Breadcrumbs from "@/components/layout/breadcrumbs";


const HeroSection: React.FC = () => {
  return (
    <section
      className={`relative w-full bg-contain bg-center ${style.heroSection}`}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/about_herosection.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <Container>
        {/* Content container */}
        <div
          className={`relative ${style.heroContent} z-10 flex flex-col items-start justify-center text-white`}>
          <h1 className={`${style.title} sm:leading-snug md:leading-normal`}>
            About us
          </h1>

          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About Us" },
            ]}
            separator=">"
            className={`${style.subTitle}`}
          />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
