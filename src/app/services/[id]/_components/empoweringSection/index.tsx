import Container from "@/components/container"
import Image from "next/image"
import style from "./style.module.css";


const EmpoweringSection = () => {

    const PrePurchase = [
        "Assess overall vehicle condition",
        "Identify potential safety concerns",
        "Evaluate mechanical and structural integrity",
        "Provide detailed reports with photographic evidence",
    ];

    return (
        <section className='bg-white py-[clamp(30px,4vw,100px)]'>
            <Container>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="w-full h-auto ">
                            <div className="relative w-full  h-auto">
                                <Image
                                    src="/images/services/service_type.png"
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
                        <div>
                            <h2 className={`${style.title} w-[100%] lg:w-[90%]`}>Empowering Informed Vehicle Purchases</h2>

                            <p className={`${style.sobTitle}`}>
                                We recognize the critical role thorough and reliable inspections play in pre-purchase automotive decisions. Our meticulous inspectors conduct comprehensive evaluations, providing you or your clients with a clear understanding of a vehicle's condition before a sale. By employing detailed inspection protocols and cutting-edge diagnostic tools, we deliver the unbiased crucial information needed for confident purchasing decisions.
                            </p>
                        </div>
                        <div>
                            <h2 className={`${style.sectitle}`}>Partnering for Buyer Confidence</h2>

                            <p className={`${style.sobTitle}`}>
                                We offer a range of pre-purchase inspection services designed to meet various needs. We provide the flexibility required for different vehicle types and buyer preferences. Our aim is to be a trusted resource, fostering transparency and building confidence in the pre-owned vehicle market.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className={`${style.sectitle} w-[100%]`}>Your Pre-Purchase Confidence, Our Commitment.</h2>

                    <div className="space-y-3 mt-[clamp(10px,4vw,17px)]">
                        {PrePurchase.map((item, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="w-max">
                                    <div className="!w-[15px] !h-[15px] bg-[#BD632F] rounded-[3px] mt-1"></div>
                                </div>
                                <div>
                                    <p className="text-[clamp(12px,4vw,16px)] text-[#203740] font-glacial-bold">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </Container>

        </section>
    )
}

export default EmpoweringSection
