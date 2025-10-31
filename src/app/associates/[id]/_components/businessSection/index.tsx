"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { MapPin, X } from "lucide-react";
import style from './style.module.css'
import Container from "@/components/container";
import HtmlRender from "@/components/HtmlRender";

export interface UserData {
    data: {
        id: number;
        first_name: string | null;
        last_name: string | null;
        email: string | null;
        country_code_id: number | null;
        phone: string | null;
        contact_name: string | null;
        dob: string | null;
        country_id: number | null;
        state_id: number | null;
        city: string | null;
        street_address: string | null;
        zip: string | null;
        latitude: string | null;
        longitude: string | null;
        profile_photo: string | null;
        website: string | null;
        status: number | null;
        priority: number | null;
        slug: string | null;
        email_verified_at: string | null;
        created_at: string | null;
        updated_at: string | null;
        deleted_at: string | null;
        meta_data: {
            meta_title: string | null;
            meta_description: string | null;
            meta_keywords: string | null;
        };
        detail: Detail | null;
        country: Country | null;
        state: State | null;
        country_code: string | null;
        roles: Role[];
    }
}

export interface Country {
    id: number;
    name: string;
}

export interface State {
    id: number;
    name: string;
}

export interface Role {
    id: number;
    name: string;
    guard_name: string;
    created_at: string | null;
    updated_at: string | null;
    pivot: RolePivot;
}

export interface RolePivot {
    model_type: string;
    model_id: number;
    role_id: number;
}

export interface Detail {
    id: number;
    user_id: number;
    main_logo: string;
    header_logo: string;
    banner_image: string;
    gallery_photos: string[];
    additional_information: string | null;
    created_at: string | null;
    updated_at: string | null;
}

const BusinessSection: React.FC<UserData> = ({ data }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const getFullImageUrl = (path: string) => {
        if (!path) return "";
        if (path.startsWith("http")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };

    return (
        <section className={`${style.sectionContainer} bg-white`}>
            <Container>
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left Side - Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {data?.detail?.gallery_photos?.map((imgSrc, index) => (
                            <div
                                key={index}
                                className="cursor-pointer"
                                onClick={() => setSelectedImage(imgSrc)}
                            >
                                <Image
                                    src={imgSrc ? getFullImageUrl(imgSrc) : ""}
                                    alt={'gallery Image'}
                                    width={600}
                                    height={400}
                                    className="rounded-xl object-cover w-full h-[180px] transition-transform duration-300 hover:scale-[1.03]"
                                />

                            </div>
                        ))}
                    </div>

                    {/* Right Side - Info */}
                    <div>
                        <div className={`${style.titlecontainer}`}>
                            <h2 className={`${style.title}`}>
                                {data?.first_name || 'Business Name'}
                            </h2>
                            {data?.detail?.main_logo && (
                                <div>
                                    <Image
                                        src={data?.detail?.main_logo ? getFullImageUrl(data?.detail?.main_logo) : ""}
                                        alt={'Logo'}
                                        height={23}
                                        width={80}
                                        className="object-contain"
                                        unoptimized
                                    />
                                </div>

                            )}


                        </div>

                        {/* Contact Info */}
                        <div className="pb-[30px]">
                            <h3 className={`${style.contacttitle}`}>
                                Contact Information
                            </h3>

                            <div className="mt-[20px]">
                                {/* Address */}
                                {(data?.street_address || data?.city || data?.state?.name) && (
                                    <div className="flex items-start space-x-2">
                                        <div className="px-1 py-1 rounded bg-[#DAA628]">
                                            <MapPin className="w-4 h-4 text-[#2A2D34]" />
                                        </div>
                                        <p className={`${style.address}`}>
                                            <strong>Address:</strong> {[
                                                data.street_address,
                                                data.city,
                                                data.state?.name,
                                                data.zip
                                            ].filter(Boolean).join(', ')}
                                        </p>
                                    </div>
                                )}

                                {/* Phone */}
                                {data?.phone && (
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
                                            <strong>Phone:</strong> {data.phone}
                                        </p>
                                    </div>
                                )}

                                {/* Email */}
                                {data?.email && (
                                    <div className="flex items-start space-x-2 mt-[18px]">
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
                                            <strong>Email:</strong> {data.email}
                                        </p>
                                    </div>
                                )}

                                {/* Website */}
                                {data?.website && (
                                    <div className="flex items-start space-x-2 mt-[18px]">
                                        <div className="px-1 py-1 rounded bg-[#DAA628]">
                                            <Image
                                                src="/images/web-site.png"
                                                alt="website"
                                                width={14}
                                                height={14}
                                                className="object-contain"
                                            />
                                        </div>
                                        <p className={`${style.address}`}>
                                            <strong>Website:</strong> {data.website}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Additional Information */}
                        {data?.detail?.additional_information && (
                            // <div
                            //     className={`${style.summary}`}
                            //     dangerouslySetInnerHTML={{ __html: data.detail.additional_information }}
                            // />
                            <div className={`sectionContentli ${style.sectionlist}`}>
                                <HtmlRender htmlString={data?.detail?.additional_information ?? ""} />
                            </div>
                        )}

                        {/* <div className={`sectionContentli ${style.sectionlist}`}>
                            <HtmlRender htmlString={data?.detail?.additional_information ?? ""} />
                        </div> */}
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
                        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white/30 hover:bg-white/60 text-white p-2 rounded-full transition z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="relative w-full h-full">
                            <Image
                                src={selectedImage ? getFullImageUrl(selectedImage) : ""}
                                alt="Full Image"
                                fill
                                className="object-contain rounded-xl shadow-2xl"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default BusinessSection;