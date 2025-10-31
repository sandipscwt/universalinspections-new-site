import React from 'react'
import style from './style.module.css'
import Container from '@/components/container'
import Image from 'next/image'
import Link from 'next/link'
import HtmlRender from '@/components/HtmlRender';

interface InspectorsOpportunitiesProps {
  data: {
    heading1?: string;
    content1?: string;
    heading2?: string;
    content2?: string;
    image?: string;
  };
}


const InspectorsOpportunities: React.FC<{ data: InspectorsOpportunitiesProps }> = ({ data }) => {

    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>
                <div className={`${style.titleContainer}`}>
                    <h2> {data?.data?.heading1} </h2>
                    <HtmlRender htmlString={`${data?.data?.content1}`} />
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center mt-[clamp(20px,4vw,30px)]">
                    <div>
                        <div className="w-full h-auto ">
                            <div className="relative w-full  h-auto">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.data?.image}`}
                                    alt="Driven Section"
                                    layout="responsive"
                                    width={555}
                                    height={434}
                                    className="object-cover relative"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className={`${style.title} w-[100%] lg:w-[90%]`}> {data?.data?.heading2} </h2>

                        <span className={`${style.sobTitle}`}>
                            <HtmlRender htmlString={`${data?.data?.content2}`} />
                        </span>

                        <div className="flex items-center mt-[22px]">
                            <div className={`${style.callBox}`}>
                                <Image
                                    src="/images/mail-inbox-app.png"
                                    alt="mail"
                                    width={10}
                                    height={10}
                                    className="object-contain invert"
                                />
                            </div>
                            <div className="ml-[10px]">
                                <p className={`${style.callText}`}>
                                    <span className="text-[#DAA628]">Mail Address: </span> <Link href="mailto:info@universalinspections.com" className="text-[#2A2D34] cursor-pointer">
                                        info@universalinspections.com
                                    </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default InspectorsOpportunities