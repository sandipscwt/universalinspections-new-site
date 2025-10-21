"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { MapPin, X } from "lucide-react";
import style from './style.module.css'
import Container from "@/components/container";

const imageData = [
    { src: "/images/associates/a.png", alt: "Mr Transmission", span: 1, height: 180 },
    { src: "/images/associates/b.png", alt: "Garage", span: 1, height: 180 },
    { src: "/images/associates/c.png", alt: "Team", span: 1, height: 180 },
    { src: "/images/associates/d.png", alt: "Exterior", span: 1, height: 180 },
    { src: "/images/associates/e.png", alt: "Front Desk", span: 1, height: 180 },
    { src: "/images/associates/f.png", alt: "Front Desk", span: 1, height: 180 },
];

const BusinessSection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Close modal when pressing Esc key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <section className={`${style.sectionContainer} bg-white`}>
            <Container>

                <div className=" grid md:grid-cols-2 gap-10">
                    {/* Left Side - Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {imageData.map((img, index) => (
                            <div
                                key={index}
                                className={`${img.span === 2 ? "col-span-2" : ""} cursor-pointer`}
                                onClick={() => setSelectedImage(img.src)}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={600}
                                    height={400}
                                    className={`rounded-xl object-cover w-full ${img.height === 250 ? "h-[250px]" : "h-[180px]"
                                        } transition-transform duration-300 hover:scale-[1.03]`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Info */}

                    <div>
                        <div className={`${style.titlecontainer}`}>
                            <h2 className={`${style.title}`}>
                                Mr. Transmission
                            </h2>
                            <Image
                                src={'../images/associates/mr_logo.svg'}
                                alt={'Logo'}
                                height={23}
                                width={165}
                                className="object-contain"
                            />
                        </div>


                        {/* Contact Info */}
                        <div className="pb-[30px]">
                            <h3 className={`${style.contacttitle}`}>
                                Contact Information
                            </h3>

                            <div className="mt-[20px]">
                                <div className="flex items-start space-x-2">
                                    <div className="px-1 py-1 rounded bg-[#DAA628]">
                                        <MapPin className="w-4 h-4  text-[#2A2D34]" />
                                    </div>
                                    <p className={`${style.address}`}>
                                        <strong>Address:</strong> 123 Main St, Birmingham, Alabama 35242
                                    </p>
                                </div>

                                <div className="flex items-start space-x-2 mt-[18px]">
                                    <div className="px-1 py-1 rounded bg-[#DAA628]">
                                        <Image
                                            src="/images/phone-call.png"
                                            alt="call"
                                            width={14}
                                            height={14}
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className={`${style.address}`}>
                                        <strong>Phone:</strong> 2055555555
                                    </p>

                                </div>

                                <div className="flex items-start space-x-2  mt-[18px]">
                                    <div className="px-1 py-1 rounded bg-[#DAA628]">
                                        <Image
                                            src="/images/mail-inbox-app.png"
                                            alt="mail"
                                            width={14}
                                            height={14}
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className={`${style.address}`}>
                                        <strong>Email:</strong> contact@financer.com
                                    </p>

                                </div>

                                <div className="flex items-start space-x-2  mt-[18px]">
                                    <div className="px-1 py-1 rounded bg-[#DAA628]">
                                        <Image
                                            src="/images/web-site.png"
                                            alt="mail"
                                            width={14}
                                            height={14}
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className={`${style.address}`}>
                                        <strong>Website:</strong> examplefinancer.com
                                    </p>
                                </div>

                            </div>
                        </div>

                        <p className={`${style.summary}`}>
                            Mr. Transmission is proud to be your locally-owned Pelham transmission repair shop serving the Alabaster and Calera area for years. While there may be a wide range of Alabama auto repair options around, we pride ourselves on exceptional customer service. That extends from our free performance check to our state-of-the-art diagnostic equipment to our honest assessments – and unlike some competitors, we back all major repairs with a Nationwide Warranty. When you step through our door, we’re committed to building a long-lasting relationship. So from the time you bring your car in for its free check to the time you get your second fluid flush to the time you need a new clutch, we’ll be here every step of the way to make your vehicle repair experience the way you want it.
                        </p>


                    </div>
                </div>

            </Container>
            {/* Fullscreen Modal for Image Preview */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-5xl w-full px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white/30 hover:bg-white/60 text-white p-2 rounded-full transition"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <Image
                            src={selectedImage}
                            alt="Full Image"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-xl object-contain shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default BusinessSection;
