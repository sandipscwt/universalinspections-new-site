import React from 'react'
import style from './style.module.css'
import Container from '@/components/container'
import Image from 'next/image'
import CustomButton from '@/components/layout/customButton'
import HtmlRender from '@/components/HtmlRender';


interface ApplyDispatcherProps {
    data: {
        heading3?: string;
        content3?: string;
        image?: string;
    };
}


const ApplyDispatcher: React.FC<{ data: ApplyDispatcherProps }> = ({ data }) => {

    return (
        <section className={`${style.sectionContainer} bg-[#ffffff]`}>
            <Container>
                <div className={`${style.dispatcher_wrapper}`}>
                    <div className="absolute right-[20px] top-1/2 -translate-y-1/2 w-[40%] md:w-[35%] opacity-15 md:opacity-25 pointer-events-none select-none">
                        <Image
                            src="/images/opportunitie/dispatcher-illustration.png"
                            alt="Dispatcher illustration"
                            layout="responsive"
                            width={350}
                            height={360}
                            className="object-contain"
                        />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-[#DAA628] text-2xl font-semibold mb-5">
                            {data?.data?.heading3}
                        </h2>

                        <div className={`sectionContentli ${style.sectionlist}`}>
                            <HtmlRender htmlString={`${data?.data?.content3}`} />
                        </div>
                        
                        <div className="mt-[clamp(20px,4vw,40px)]">
                            <CustomButton title="Apply As Dispatcher" href="/opportunities/dispatchers/form" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ApplyDispatcher
