
import Container from '@/components/container';
import type { NextPage } from 'next';
import Image from 'next/image';
import style from './style.module.css';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/layout/button';

const WarrantyInspection: NextPage = () => {
    return (
        <section className="bg-[#FFFFFF] pt-[clamp(3px,4vw,10px)]">
            <Container>
                <div className={`relative py-[clamp(40px,4vw,82px)] px-[clamp(40px,4vw,86px)]  rounded-lg overflow-hidden ${style.bgGradient}`}>

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
                    <div className="relative z-10  mx-auto text-center space-y-6">
                        <h2 className="text-[clamp(28px,4vw,38px)] prompt-bold text-white leading-[clamp(36px,4vw,48px)]">
                            Warranty Inspections
                        </h2>
                        <p className="text-[clamp(12px,4vw,15px)] lg:w-[96%] font-glacial-regular leading-[clamp(20px,4vw,26px)] text-white mt-[clamp(8px, 4vw,16px)]">
                            Ensure your client’s assets are safeguarded with comprehensive extended warranty inspections from Universal Inspections. Our team provides meticulous assessments for a range of vehicles—including automotive, RV, marine, and motorcycles—ensuring they meet the standards required by extended warranty plans. Our expert inspections identify potential issues early, minimizing costly repairs and maximizing asset value and reliability for your clients.
                        </p>
                        <div className="p-0">
                            <Button title="Get Started" href="/book" />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default WarrantyInspection;
