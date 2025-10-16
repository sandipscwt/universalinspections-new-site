
import Container from '@/components/container';
import type { NextPage } from 'next';
import Image from 'next/image';
import style from './style.module.css';
import Button from '@/components/layout/button';

const WarrantyInspection: NextPage = () => {
    return (
        <section className="pt-[clamp(15px,4vw,0px)] bg-[linear-gradient(to_bottom,#F8F8F8_50%,#FFFFFF_50%)]">
            <Container>
                <div className={`relative py-[clamp(40px,4vw,82px)] px-[clamp(8px,4vw,86px)]  rounded-lg overflow-hidden ${style.bgGradient}`}>

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
                    <div className={`${style.ContentCard} mx-auto space-y-4`}>
                        <h2 className={`${style.contenttitle}`}>
                            Warranty Inspections
                        </h2>
                        <p className={`${style.contentSubtitle} lg:w-[96%]`}>
                            Ensure your client’s assets are safeguarded with comprehensive extended warranty inspections from Universal Inspections. Our team provides meticulous assessments for a range of vehicles—including automotive, RV, marine, and motorcycles—ensuring they meet the standards required by extended warranty plans. Our expert inspections identify potential issues early, minimizing costly repairs and maximizing asset value and reliability for your clients.
                        </p>
                        <div className="p-0 pt-[20px]">
                            <Button title="Get Started" href="/bookInspection" />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default WarrantyInspection;
