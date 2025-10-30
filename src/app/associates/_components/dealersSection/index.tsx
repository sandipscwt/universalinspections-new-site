import React from 'react'
import style from './style.module.css'
import Container from '@/components/container'
import Image from 'next/image'
import HtmlRender from '@/components/HtmlRender'

export interface SearchBottomSection {
    data: {
        div1_heading: string;
        div1_content: string;
        div1_image: string;
        div2_heading: string;
        div2_content: string;
        div2_image: string;
    }
}
const DealersSection: React.FC<SearchBottomSection> = ({ data }) => {

    const getFullImageUrl = (path: string) => {
        if (!path) return "/images/associates/dealers_img.png";
        if (path.startsWith("http")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };

    // const PrePurchase = [
    //     "Full disclosure of available vehicle history",
    //     "No hidden fees",
    //     "Clear 'as-is' disclosures",
    //     "Thorough inspection and reconditioning",
    //     "Meaningful test drive",
    //     "Clear Warranty Options",
    //     "Option for Independent pre-purchase inspection",
    //     "Clean and presentable vehicles",
    //     "Fair and competitive pricing",
    //     "Transparent trade-in values",
    //     "Clear, understandable paperwork",
    //     "Knowledgeable, respectful, no-pressure staff",
    //     "Adequate decision time",
    //     "Honored advertisements",
    //     "Post-sale support",
    //     "Respect for privacy",
    //     "Confortable environment"
    // ];

    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
                    <div className="w-full h-auto  ">
                        <div className="relative w-full  h-auto">
                            <Image
                                src={data?.div1_image ? getFullImageUrl(data?.div1_image) : ""}
                                alt="Automotive Dealers"
                                layout="responsive"
                                width={555}
                                height={434}
                                className="object-cover relative"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>


                    <div className="space-y-2 mt-[clamp(20px,4vw,35px)]">
                        <h2 className={`${style.sectionTitle}`}>{data?.div1_heading}</h2>

                        <div className={`sectionContentli ${style.sectionlist}`}>
                            <HtmlRender htmlString={`${data?.div1_content}`} />
                        </div>
                    </div>

                </div>

            </Container>

        </section>
    )
}

export default DealersSection