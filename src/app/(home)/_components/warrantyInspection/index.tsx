
import Container from '@/components/container';
import type { NextPage } from 'next';
import Image from 'next/image';
import style from './style.module.css';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const WarrantyInspection: NextPage = () => {
    return (
        <section className="bg-[#FFFFFF] pt-[clamp(3px,4vw,10px)]">
            <Container>
                <div className={`relative py-16 px-4 rounded-lg overflow-hidden ${style.bgGradient}`}>

                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/warrenty_bg.png"
                            alt="Warranty background"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-30"
                            priority
                        />
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="text-[clamp(28px,4vw,38px)] prompt-bold text-white leading-[48px]">
                            Warranty Inspections
                        </h2>
                        <p className="text-[clamp(12px,4vw,16px)] font-glacial-regular leading-[26px] text-white mt-[clamp(10px, 4vw,16px)]">
                            Ensure your client’s assets are safeguarded with comprehensive extended warranty inspections from Universal Inspections. Our team provides meticulous assessments for a range of vehicles—including automotive, RV, marine, and motorcycles—ensuring they meet the standards required by extended warranty plans. Our expert inspections identify potential issues early, minimizing costly repairs and maximizing asset value and reliability for your clients.
                        </p>
                        <div className="inline-flex rounded-md overflow-hidden text-sm sm:text-sm ">
                            <Link
                                href="/book"
                                className="bg-[#DAA628] hover:bg-[#F4A300] px-5 py-3 text-[#2C3037] flex items-center "
                            >
                                know More
                            </Link>
                            <Link
                                href="/book"
                                className="bg-[#BD632F] rounded-r-md hover:bg-[#e77026] px-4 py-3 flex items-center justify-center"
                            >
                                <ArrowRight className="w-5 h-5 text-white" />
                            </Link>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default WarrantyInspection;
