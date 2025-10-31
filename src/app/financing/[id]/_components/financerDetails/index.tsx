import React from 'react'
import style from './style.module.css'
import Container from '@/components/container'
import Image from 'next/image'
import { MapPin } from "lucide-react";
import ApplicationButton from '@/components/layout/applicationButton';
import HtmlRender from '@/components/HtmlRender';


export interface Country {
    id: number;
    name: string;
}

export interface State {
    id: number;
    name: string;
}

export interface CityDetails {
    id?: number;
    name?: string;
    latitude?: string;
    longitude?: string;
}

export interface CountryCode {
    id?: number;
    code?: string;
    dial_code?: string;
    name?: string;
}

export interface FinancerDetail {
    id: number;
    user_id: number;
    main_logo: string | null;
    header_logo: string | null;
    banner_image: string;
    gallery_photos: string[];
    additional_information: string | null;
    created_at: string;
    updated_at: string;
}
export interface FinancerData {
    data: {
        id: number;
        first_name: string;
        last_name: string | null;
        email: string;
        country_code_id: number | null;
        phone: string;
        contact_name: string;
        dob: string | null;
        country_id: number;
        state_id: number;
        city: string | null;
        street_address: string | null;
        zip: string | null;
        latitude: string | null;
        longitude: string | null;
        profile_photo: string | null;
        website: string | null;
        status: number;
        priority: number;
        slug: string;
        meta_title: string | null;
        meta_description: string | null;
        canonical_url: string | null;
        og_title: string | null;
        og_description: string | null;
        og_image: string | null;
        twitter_title: string | null;
        twitter_description: string | null;
        twitter_image: string | null;
        robots: string | null;
        email_verified_at: string | null;
        created_at: string;
        updated_at: string;
        deleted_at: string | null;
        country: Country;
        state: State;
        city_dtls: CityDetails | null;
        country_code: CountryCode | null;
        financer_detail: FinancerDetail;
    }
}

const FinancerDetails: React.FC<FinancerData> = ({ data }) => {

    const getFullImageUrl = (path: string) => {
        if (!path) return "";
        if (path.startsWith("http")) return path;
        if (path.startsWith("/")) return path;
        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${path}`;
    };

    return (
        <section className={`${style.sectionContainer} bg-white`}>
            <Container>
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    <div className="relative">
                        <Image
                            // src="/images/finance/financerD_bg.png"
                            src={data?.financer_detail?.header_logo ? getFullImageUrl(data?.financer_detail?.header_logo) : ""}
                            alt="Driven Section"
                            layout="responsive"
                            width={555}
                            height={400}
                            unoptimized
                            className="object-cover relative"
                        />
                    </div>

                    <div>
                        <h2 className={`${style.title}`}>
                            {data?.contact_name}
                        </h2>

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
                                        <strong>Address:</strong>    {`${data?.city}, ${data?.street_address},${data?.zip}`}

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
                                        <strong>Phone:</strong>{' '}
                                        <a href={`tel:${data?.phone}`} >
                                            {data?.phone}
                                        </a>
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
                                        <strong>Email:</strong>{' '}
                                        <a href={`mailto:${data?.email}`}>
                                            {data?.email}
                                        </a>
                                    </p>

                                </div>

                                {/* website */}
                                {data?.website && (
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
                                            <strong>Website:</strong> {data?.website}
                                        </p>
                                    </div>
                                )}


                            </div>
                        </div>

                        {/* <p className={`${style.summary}`}>
                            Summary of financer goes here.
                        </p> */}

                        <div className={`sectionContentli ${style.sectionlist}`}>
                            <HtmlRender htmlString={data?.financer_detail?.additional_information ?? ""} />
                        </div>

                        {/* Ready to Apply Box */}
                        <div className="bg-white shadow-lg rounded-2xl p-5 border border-gray-100 mt-4">
                            <h3 className={`${style.applyTitle}`}>
                                Ready To Apply?
                            </h3>
                            <p className={`${style.applysubTitle}`}>
                                Apply for financing with Financer Name or proceed to our general application.
                            </p>
                            <div className='mt-[30px]'>
                                <ApplicationButton
                                    title="Apply With Financer Name"
                                    href="/financing/form?form-Id=1"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FinancerDetails
