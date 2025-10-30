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
const RepairShops: React.FC<SearchBottomSection> = ({ data }) => {

    const getFullImageUrl = (path: string) => {
        if (!path) return "/images/associates/shop_img.png";
        if (path.startsWith("http")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };
    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
                    <div className="space-y-2 mt-[clamp(20px,4vw,30px)]">
                        <h2 className={`${style.sectionTitle}`}>{data?.div2_heading}</h2>

                        <div className={`sectionContentli ${style.sectionlist}`}>
                            <HtmlRender htmlString={`${data?.div2_content}`} />
                        </div>
                    </div>

                    <div className="w-full h-auto">
                        <div className="relative w-fullh-auto">
                            <Image
                                src={data?.div2_image ? getFullImageUrl(data?.div2_image) : ""}
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

                </div>

            </Container>

        </section>
    )
}

export default RepairShops