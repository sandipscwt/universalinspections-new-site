import Container from "@/components/container"
import Image from "next/image"
import style from "./style.module.css";


const DrivenSection = () => {
    return (
        <section className='bg-white py-[clamp(30px,4vw,100px)]'>
            <Container>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="w-full h-auto ">
                            <div className="relative w-full  h-auto">
                                <Image
                                    src="/images/about/driven.png"
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
                        <h2 className={`${style.title} w-[100%] lg:w-[90%]`}>Driven by Trust, Powered by Precision.</h2>

                        <p className={`${style.sobTitle}`}>
                            Our mission is simple: to provide honest, thorough, unbiased inspections that give you confidence in your vehicle condition and or required repairs to ensure your vehicles are ready for the road without the worries of unknown repairs.
                        </p>
                    </div>
                </div>

            </Container>

        </section>
    )
}

export default DrivenSection
