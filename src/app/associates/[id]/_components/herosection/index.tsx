import Image from "next/image";
import React from "react";
import style from "./style.module.css"

interface HeroSectionProps {
    banner_image?: string | null;
}

const Herosection: React.FC<HeroSectionProps> = ({ banner_image }) => {

    const getFullImageUrl = (path: string) => {
        if (!path) return "";
        if (path.startsWith("http")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };

    return (
        <section
            className={`relative w-full bg-contain bg-center`}
        >

            <div className={`${style.heroSection}`}>
                <div >
                    <Image
                        src={banner_image ? getFullImageUrl(banner_image) : ""}
                        alt="Background"
                        fill
                        className="object-fit absolute w-[100%] h-[100%]"
                        priority
                        unoptimized
                    />
                </div>
                
            </div>


        </section>
    );
};

export default Herosection;
