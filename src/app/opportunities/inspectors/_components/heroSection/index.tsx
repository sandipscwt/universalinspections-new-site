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
                  src="/images/opportunitie/inspectors_bg.jpeg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <Container>
                {/* Content container */}
                <div
                    className={`relative ${style.heroContent} z-10 flex flex-col items-start justify-center text-white`}
                >
                    <h1 className="text-[clamp(32px,4vw,58px)] prompt-bold !leading-[clamp(30px,5vw,68px)] sm:leading-snug md:leading-normal">
                         Opportunities
                    </h1>

                    {/* Breadcrumbs */}
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Opportunities", href: "/" },
                            { label: "Inspectors" },
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
