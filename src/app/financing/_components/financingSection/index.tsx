"use client";
import React, { useEffect, useRef, useState } from 'react';
import style from './style.module.css';
import Container from '@/components/container';
import Image from 'next/image';
import ApplicationButton from '@/components/layout/applicationButton';
import Link from 'next/link';
import { ServerFetch } from '@/actions/server-fetch';
import { useLoadScript, StandaloneSearchBox } from "@react-google-maps/api";

export interface FinancingResponse {
    status: boolean;
    message: string;
    data: FinancingData;
}

export interface FinancingData {
    data: {
        id: number;
        banner_heading: string;
        banner_image: string;
        file_type: string;
        search_heading: string;
        search_text: string;
        button_above_text: string;
        button_text: string;
        created_at: string;
        updated_at: string;
        deleted_at: string | null;
    }
}

export interface FinancingPartner {
    id: number;
    first_name: string;
    last_name: string | null;
    city: string;
    state: string;
    state_code: string;
    distance: number;
    formatted_distance: string;
    slug: string | null;
}
const libraries: ("places")[] = ["places"];

const FinancingSection: React.FC<FinancingData> = ({ data }) => {

    const [zip, setZip] = useState("");
    const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(
        null
    );
    const [results, setResults] = useState<FinancingPartner[]>([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [error, setError] = useState("");

    const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_KEY,
        libraries,
    });

    const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);

    const extractPostalCode = (place: google.maps.places.PlaceResult): string => {
        const postalCode = place.address_components?.find((component) =>
            component.types.includes("postal_code")
        );
        return postalCode ? postalCode.long_name : "";
    };

    const onPlacesChanged = () => {
        const places = searchBoxRef.current?.getPlaces();
        if (places && places.length > 0) {
            const place = places[0];
            const postal = extractPostalCode(place);
            if (postal) setZip(postal);
            if (place.geometry?.location) {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();
                setCoords({ lat, lng });
            }
        }
    };

    const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        if (!/^\d*$/.test(value)) {
            setError("Please enter digits only (no letters allowed)");
            setZip(value);
            setResults([]);
            setCount(0);
            return;
        }
        setError("");
        setZip(value);
    };

    const handleSearch = async (
        zipCode: string,
        latitude?: number,
        longitude?: number
    ) => {
        try {
            setLoading(true);
            const payload = {
                zip_code: zipCode || "",
                latitude_code: latitude?.toString() || "",
                longitude_code: longitude?.toString() || "",
            };
            const query = new URLSearchParams();
            Object.entries(payload).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    query.append(key, value.toString());
                }
            });

            const res = await ServerFetch(
                `/search-financers?${query.toString()}`,
                { method: "POST", cache: "no-store", }
            );
            setResults(res?.financers || []);
            setCount(res?.count || 0);
        } catch (err) {
            console.error("Search error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (!error && zip && zip.length >= 4) {
                handleSearch(zip, coords?.lat, coords?.lng);
            } else {
                setResults([]);
                setCount(0);
            }
        }, 600);
        return () => clearTimeout(delayDebounce);
    }, [zip, coords]);

    if (!data) {
        return (
            <section className="w-full py-20 text-center text-gray-500">
                Loading hero section...
            </section>
        );
    }


    return (
        <section className="bg-white">

            <div className="flex flex-col lg:flex-row w-full">
                {/* LEFT SECTION */}
                <div className={`${style.leftSection} lg:w-[65%] lg:pt-[108px] lg:pb-[76px] text-center lg:text-left`}>
                    <div className={`${style.yellowContainer} px-6 sm:px-10 md:px-14`}>
                        <h2>
                            {data?.search_heading || "Find Financing Partners Near You"}

                        </h2>
                        <p>
                            {data?.search_text || "Enter at least 4 digits of your zip code, then click on a city from the suggestions"}
                        </p>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className={`${style.rightSection} w-full lg:w-[35%] pt-[60px] lg:pt-[108px] lg:pb-[76px] flex-col items-center`}>
                    {isLoaded && !error ? (
                        <StandaloneSearchBox
                            onLoad={(ref) => (searchBoxRef.current = ref)}
                            onPlacesChanged={onPlacesChanged}
                        >
                            <input
                                type="text"
                                placeholder="Enter ZIP code"
                                className={`${style.zipInput}`}
                                value={zip}
                                onChange={handleZipChange}
                            />
                        </StandaloneSearchBox>
                    ) : (
                        <input
                            type="text"
                            placeholder="Enter ZIP code"
                            className={`${style.zipInput}`}
                            value={zip}
                            onChange={handleZipChange}
                        />
                    )}
                    {error && (
                        <p className="text-red-800 text-sm mt-1 font-medium">{error}</p>
                    )}
                </div>

            </div>

            {/* FINANCING PARTNERS GRID SECTION */}
            <div className={`bg-[#ffffff] pb-[30px] md:pb-[4vw] lg:pb-[100px]`}>
                <Container className={`${style.financeCard}`}>
                    {/* Section Header */}

                    <div className="flex justify-center items-center">
                        <h3 className={`${style.financeTitle}`}>
                            {loading
                                ? "Loading Financing Partners..."
                                : count > 0
                                    ? `Found ${count} Financing Partner${count > 1 ? "s" : ""} near ${zip}`
                                    : zip.length >= 4 && !error
                                        ? `No Financing Partners found near ${zip}`
                                        : "Search Financing Partners by ZIP Code"}
                        </h3>
                    </div>

                    {/* Partners Grid */}

                    {!loading && results.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-6 sm:px-8 lg:px-0">
                            {results.map((partner) => (
                                <div
                                    key={partner.id}
                                    className="bg-white border border-gray-200 rounded-lg px-[20px] py-[clamp(20px,4vw,40px)]  hover:shadow-md transition-all duration-300"
                                >
                                    <Link href={"/financing/abid"}>
                                        <div className={'flex flex-row'}>
                                            <div>
                                                <Image
                                                    src="/images/finance/financeName.png"
                                                    alt="Finance Company"
                                                    height={18}
                                                    width={19}
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h4 className={`${style.Financercom}`}>{partner.first_name}</h4>
                                        </div>

                                        <div className={'flex flex-row mt-[18px]'}>
                                            <div>
                                                <Image
                                                    src="/images/finance/location.png"
                                                    alt="Finance Company"
                                                    height={18}
                                                    width={13}
                                                    className="object-cover"
                                                />
                                            </div>
                                            <p className={`${style.location}`}>{partner.city}, {partner.state} ({partner.formatted_distance})</p>
                                        </div>
                                    </Link>

                                </div>
                            ))}
                        </div>
                    )}

                </Container>
                <div className={`${style.bottom}`}>
                    <p>{data?.button_above_text || "Select a financing partner above to view their details, or"}</p>
                    <div className="p-0 mt-[30px] flex items-center justify-center">
                        <ApplicationButton title="Proceed to General Application"
                            href="/financing/form"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FinancingSection;