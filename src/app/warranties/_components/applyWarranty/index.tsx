import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import Button from "@/components/layout/button";

const ApplyWarranty: React.FC = () => {
    return (
        <section
            className={`relative w-full bg-center ${style.heroSection}`}
        >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/warranty/apply_warranty_bg.png"
                    alt="Background"
                    fill
                    className="object-cover object-top brightness-75"
                    priority
                />
            </div>
            <Container>
                <div className={`${style.heroContent} relative z-20 container  px-6 h-full flex flex-col md:flex-row items-center justify-between `}>
                    <div >
                        <h2 className={`${style.bottom_title}`}>
                            Keep Your Car Covered
                        </h2>
                        <p className={`${style.bottom_subtitle}`}>
                            Affordable Extended Warranty for Peace of Mind
                        </p>
                    </div>

                    <div className="">
                        <Button title="Apply Now" href="/warranties/form"/>
                    </div>
                </div>
            </Container>

        </section>
    );
};

export default ApplyWarranty;
