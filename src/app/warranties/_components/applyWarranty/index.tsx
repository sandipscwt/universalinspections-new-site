import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import Button from "@/components/layout/button";
import DOMPurify from "dompurify";

export interface WarrantyContentItem {
    image: string;
    heading: string;
    content: string;
}

export interface WarrantyData {
    data: {
        id: number;
        file_type: string;
        banner_image: string;
        banner_heading: string;
        sec1_heading: string;
        sec1_content: WarrantyContentItem[];
        sec2_heading: string;
        sec2_content: string;
        created_at: string;
        updated_at: string;
    }
}

const ApplyWarranty: React.FC<WarrantyData> = ({ data }) => {

    if (!data) {
        return (
            <section className="w-full py-20 text-center text-gray-500">
                Loading Apply Warranty section...
            </section>
        );
    }
        const sanitizeHTML = (html: string) => {
        if (typeof DOMPurify?.sanitize === 'function') {
            return DOMPurify.sanitize(html);
        }
        // console.log('DOMPurify not available, returning original HTML');
        return html;
    };
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
                    unoptimized
                />
            </div>
            <Container>
                <div className={`${style.heroContent} relative z-20 container  px-6 h-full flex flex-col md:flex-row items-center justify-between `}>
                    <div >
                        <h2 className={`${style.bottom_title}`}>
                            {data.sec2_heading || "Keep Your Car Covered"}
                        </h2>

                        <p
                            className="text-base prompt-regular text-[#2C3037] mt-2 group-hover:text-white"
                            dangerouslySetInnerHTML={{
                                __html: sanitizeHTML(data.sec2_content),
                            }}
                        />
                    </div>

                    <div className="">
                        <Button title="Apply Now" href="/warranties/form" />
                    </div>
                </div>
            </Container>

        </section>
    );
};

export default ApplyWarranty;
