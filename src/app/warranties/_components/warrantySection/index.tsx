import React from 'react'
import style from "./style.module.css";
import Image from 'next/image';
import DOMPurify from "dompurify";

export interface WarrantyContentItem {
    image: string;
    heading: string;
    content: string;
}
export interface WarrantySectionProps {
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
    };
}

const WarrantySection: React.FC<WarrantySectionProps> = ({ data }) => {
    if (!data) {
        return (
            <section className="w-full py-20 text-center text-gray-500">
                Loading Warranty section...
            </section>
        );
    }



    const getFullImageUrl = (path: string) => {
        if (!path) return "";
        if (path.startsWith("http")) return path;
        if (path.startsWith("/")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };

    const sanitizeHTML = (html: string) => {
        if (typeof DOMPurify?.sanitize === 'function') {
            return DOMPurify.sanitize(html);
        }
        return html;
    };
    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>

            <div className={`${style.containerlg}`}>
                <div className={`${style.titleContainer}`}>
                    <h2>{data.sec1_heading || "Extended warranty"}</h2>
                </div>

                <div className={`bg-[#fbfbfb] relative overflow-hidden ${style.bgCard}`}>
                    <div className={`${style.triangleTopLeft}`}></div>

                    <div className="relative z-10">
                        <ul className={`grid grid-cols-1 md:grid-cols-2 gap-x-10 ${style.contentul}`}>
                            {data?.sec1_content?.map((item, index) => (
                                <li key={index} className="flex gap-4 items-center   mb-[clamp(16px,2vw,30px)]">
                                    <div className="min-w-[40px] h-[60px] sm:min-w-[63px] sm:h-[85px] bg-[#BD632F] flex rounded-[8px] items-center justify-center">
                                        <Image
                                            src={item.image ? getFullImageUrl(item.image) : ""}
                                            alt={item.heading}
                                            height={30}
                                            width={30}
                                            className="object-contain sm:w-[48px] sm:h-[48px]"
                                            unoptimized
                                        />
                                    </div>

                                    <div>
                                        <h3 className={`${style.warranty_title}`}>
                                            {item.heading}
                                        </h3>
                                        <p
                                            className={`${style.description}`}
                                            dangerouslySetInnerHTML={{
                                                __html: sanitizeHTML(item.content),
                                            }}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>



                    {/* Bottom Right Gray Triangle */}
                    <div className={`${style.triangleBottomRight}`}></div>

                </div>
            </div>

            {/* </Container> */}
        </section>
    )
}

export default WarrantySection