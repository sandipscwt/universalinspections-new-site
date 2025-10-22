// components/motionComponent.tsx
import Image from 'next/image';
import { motion } from "framer-motion";

interface ImageItem {
    img1: string;
    img2: string;
    img3: string;
    title: string;
}

interface MotionComponentProps {
    images: ImageItem[];
}


const MotionComponent = ({ images }: MotionComponentProps) => {
    return (
        <div className=" w-full h-auto bg-[#F8F8F8] flex flex-row justify-between">
            {/* Right side */}
            <div className='w-[49%] sm:mt-[-60px] mt-[-30px] h-auto'>

                <div className=''>
                    <Image
                        src={images[0].img1}
                        alt="Automotive services"
                        layout="responsive"
                        width={263}
                        height={400}
                        className="object-cover "
                    />
                </div>

                <div className='bg-[#BD632F] lg:mt-[20px] mt-[12px]   p-[14px] rounded-lg'>
                    <div className="flex items-center gap-4">
                        <motion.div
                            animate={{
                                rotate: [0, 360, 0, -360, 0],
                                scale: [1, 1.05, 1, 1.05, 1],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 10,
                                ease: "linear",
                            }}
                            style={{ display: "inline-block" }}
                        >
                            <Image
                                src="/images/Inspections_logo.png"
                                alt="Need Service"
                                width={70}
                                height={70}
                            />
                        </motion.div>
                        <div>
                            <h4 className="prompt-bold text-white leading-[30px] text-[clamp(16px,2vw,22px)] w-full ">{images[0].title}</h4>
                        </div>
                    </div>
                </div>

            </div>

            {/* Left side */}
            <div className='w-[48%]  h-auto'>
                <Image
                    src={images[0].img2}
                    alt="Automotive services"
                    layout="responsive"
                    width={263}
                    height={247}
                    className="object-cover"
                />
                <Image
                    src={images[0].img3}
                    alt="Automotive services"
                    layout="responsive"
                    width={263}
                    height={355}
                    className="object-cover lg:mt-[20px] mt-[12px] "
                />
            </div>
        </div>
    );
};

export default MotionComponent;